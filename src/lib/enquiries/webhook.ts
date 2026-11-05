import type { GetReceivingEmailResponseSuccess, WebhookEventPayload } from "resend";
import { SEQUENCE } from "./automation-definition";
import { getConfig } from "./config";
import { getDb, type Db } from "./db";
import { stepForSubject } from "./email-templates";
import { getResend } from "./resend-client";
import { normalizeEmail, parseAddress, safeErrorMessage, singleLine } from "./sanitize";
import {
  flushStopEvents,
  recordStatusChange,
  stopOpenSequencesForEmail,
  stopSequence,
} from "./sequence";
import type { EmailStep, EnquiryRow } from "./types";

/** Delivery events subscribed to in Resend. See docs/enquiry-automation.md. */
export const SUBSCRIBED_EVENTS = [
  "email.sent",
  "email.delivered",
  "email.delivery_delayed",
  "email.bounced",
  "email.complained",
  "email.opened",
  "email.clicked",
  "email.failed",
  "email.suppressed",
  "email.received",
  "contact.updated",
  "contact.deleted",
  "suppression.added",
  "suppression.removed",
] as const;

const REPLY_LOOKBACK_DAYS = 60;
const LEASE_MINUTES = 2;

export type WebhookOutcome = "processed" | "ignored" | "duplicate" | "in_progress";

type EmailEvent = Extract<
  WebhookEventPayload,
  {
    type:
      | "email.sent"
      | "email.delivered"
      | "email.delivery_delayed"
      | "email.bounced"
      | "email.complained"
      | "email.opened"
      | "email.clicked"
      | "email.failed"
      | "email.suppressed";
  }
>;

interface Handled {
  outcome: "processed" | "ignored";
  stopped: string[];
}

const IGNORED: Handled = { outcome: "ignored", stopped: [] };

function stepForEmail(data: EmailEvent["data"]): EmailStep | null {
  // Same subject as step 1, but sent outside the automation.
  if (data.tags?.kind === "direct_confirmation") return null;

  const { templateIds } = getConfig();
  const match = SEQUENCE.find(({ templateKey }) => {
    const id = templateIds[templateKey];
    return id !== undefined && id === data.template_id;
  });
  return match?.step ?? stepForSubject(data.subject);
}

/**
 * Finds the enquiry an outbound email belongs to, strongest evidence first:
 * our own tag, then an email ID already linked, then the recipient. The
 * recipient is unambiguous during a sequence because only one can be open per
 * address. Automation emails cannot carry tags, so they rely on the last two.
 */
async function findEnquiryForEmail(tx: Db, data: EmailEvent["data"]): Promise<EnquiryRow | null> {
  if (data.tags?.kind === "admin_notification") return null;

  if (data.tags?.enquiry_id) {
    const { rows } = await tx.query<EnquiryRow>(`SELECT * FROM enquiries WHERE id = $1`, [
      data.tags.enquiry_id,
    ]);
    if (rows[0]) return rows[0];
  }

  const linked = await tx.query<EnquiryRow>(
    `SELECT e.* FROM enquiries e
       JOIN enquiry_email_events ev ON ev.enquiry_id = e.id
      WHERE ev.email_id = $1
      LIMIT 1`,
    [data.email_id]
  );
  if (linked.rows[0]) return linked.rows[0];

  const recipient = data.to[0] ? parseAddress(data.to[0]) : undefined;
  if (!recipient) return null;

  const { rows } = await tx.query<EnquiryRow>(
    `SELECT * FROM enquiries
      WHERE email = $1
      ORDER BY (sequence_status IN ('pending', 'active')) DESC, submitted_at DESC
      LIMIT 1`,
    [recipient]
  );
  return rows[0] ?? null;
}

async function recordEmailEvent(
  tx: Db,
  webhookId: string,
  enquiry: EnquiryRow,
  event: EmailEvent,
  step: EmailStep | null,
  detail: unknown
) {
  await tx.query(
    `INSERT INTO enquiry_email_events
       (webhook_id, enquiry_id, step, type, email_id, message_id, recipient, template_id, detail, occurred_at)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
     ON CONFLICT (webhook_id) DO NOTHING`,
    [
      webhookId,
      enquiry.id,
      step,
      event.type,
      event.data.email_id,
      event.data.message_id ?? null,
      enquiry.email,
      event.data.template_id ?? null,
      detail === undefined ? null : JSON.stringify(detail),
      new Date(event.created_at),
    ]
  );
}

async function suppress(
  tx: Db,
  email: string,
  reason: "unsubscribed" | "bounced" | "complained",
  source: string
) {
  // A bounce or complaint outranks an opt-out, never the other way around.
  await tx.query(
    `INSERT INTO email_suppressions (email, reason, source) VALUES ($1, $2, $3)
     ON CONFLICT (email) DO UPDATE
       SET reason = EXCLUDED.reason, source = EXCLUDED.source
       WHERE email_suppressions.reason = 'unsubscribed' AND EXCLUDED.reason <> 'unsubscribed'`,
    [email, reason, source]
  );
}

async function handleEmailEvent(tx: Db, webhookId: string, event: EmailEvent): Promise<Handled> {
  const enquiry = await findEnquiryForEmail(tx, event.data);
  if (!enquiry) return IGNORED;

  const step = stepForEmail(event.data);
  const stopped: string[] = [];

  switch (event.type) {
    case "email.sent":
      await recordEmailEvent(tx, webhookId, enquiry, event, step, undefined);
      if (step !== null) {
        await tx.query(
          `UPDATE enquiries
              SET last_step_sent = GREATEST(last_step_sent, $2),
                  sequence_status = CASE
                    WHEN sequence_status = 'pending' THEN 'active'
                    WHEN sequence_status = 'active' AND $2 = 4 THEN 'completed'
                    ELSE sequence_status END,
                  sequence_ended_at = CASE
                    WHEN sequence_status = 'active' AND $2 = 4 THEN now()
                    ELSE sequence_ended_at END,
                  trigger_state = CASE WHEN trigger_state = 'sending' THEN 'sent' ELSE trigger_state END,
                  trigger_lease_until = NULL,
                  sequence_started_at = COALESCE(sequence_started_at, now())
            WHERE id = $1`,
          [enquiry.id, step]
        );
      }
      break;

    case "email.delivered":
    case "email.delivery_delayed":
    case "email.opened":
    case "email.clicked":
    case "email.failed":
      await recordEmailEvent(
        tx,
        webhookId,
        enquiry,
        event,
        step,
        event.type === "email.failed"
          ? event.data.failed
          : event.type === "email.clicked"
            ? (event.data as unknown as { click?: unknown }).click
            : undefined
      );
      break;

    case "email.bounced": {
      await recordEmailEvent(tx, webhookId, enquiry, event, step, event.data.bounce);
      // Transient bounces are recorded only. Resend retries those itself.
      if (event.data.bounce.type.toLowerCase() === "permanent") {
        await suppress(tx, enquiry.email, "bounced", "email.bounced");
        stopped.push(...(await stopOpenSequencesForEmail(tx, enquiry.email, "bounced")));
      }
      break;
    }

    case "email.complained":
      await recordEmailEvent(tx, webhookId, enquiry, event, step, undefined);
      await suppress(tx, enquiry.email, "complained", "email.complained");
      stopped.push(...(await stopOpenSequencesForEmail(tx, enquiry.email, "complained")));
      break;

    case "email.suppressed":
      await recordEmailEvent(tx, webhookId, enquiry, event, step, event.data.suppressed);
      await suppress(tx, enquiry.email, "bounced", "email.suppressed");
      stopped.push(...(await stopOpenSequencesForEmail(tx, enquiry.email, "suppressed")));
      break;
  }

  return { outcome: "processed", stopped };
}

/** Moves open enquiries for this address to `unsubscribed`, keeping won or closed ones. */
async function handleUnsubscribed(tx: Db, email: string, source: string): Promise<Handled> {
  const { rows } = await tx.query<EnquiryRow>(
    `SELECT * FROM enquiries WHERE email = $1 AND status NOT IN ('converted', 'closed', 'unsubscribed')`,
    [email]
  );
  await suppress(tx, email, "unsubscribed", source);
  for (const enquiry of rows) {
    await recordStatusChange(tx, enquiry, "unsubscribed", "resend_webhook", source);
  }
  const stopped = await stopOpenSequencesForEmail(tx, email, "unsubscribed");
  const known = rows.length > 0 || stopped.length > 0;
  return { outcome: known ? "processed" : "ignored", stopped };
}

function headerValue(headers: Record<string, string> | null, name: string): string {
  if (!headers) return "";
  const entry = Object.entries(headers).find(([key]) => key.toLowerCase() === name);
  return entry ? String(entry[1]) : "";
}

/** Out-of-office notices and bounces are not a customer replying. */
function isAutomatedMessage(headers: Record<string, string> | null, subject: string, from: string) {
  const autoSubmitted = headerValue(headers, "auto-submitted").toLowerCase();
  if (autoSubmitted && autoSubmitted !== "no") return true;
  if (headerValue(headers, "x-autoreply") || headerValue(headers, "x-autorespond")) return true;
  if (/^(bulk|junk|list|auto_reply)$/i.test(headerValue(headers, "precedence").trim())) return true;
  if (/^(mailer-daemon|postmaster)@/i.test(from)) return true;
  return /^(out of (the )?office|automatic reply|auto(matic)?[- ]?reply|autoreply|undeliverable)\b/i.test(
    subject.trim()
  );
}

/**
 * Decides whether an inbound message really answers one of our enquiry emails.
 *
 * The sender alone proves nothing, since a customer may write about something else.
 * It must come from an enquiry's address AND reference it: either the
 * In-Reply-To/References headers cite a Message-ID we sent, or the subject or
 * body quotes the enquiry ID.
 */
async function matchReply(
  tx: Db,
  sender: string,
  email: { subject: string; text: string | null; headers: Record<string, string> | null }
): Promise<EnquiryRow | null> {
  const lookback = new Date(Date.now() - REPLY_LOOKBACK_DAYS * 24 * 60 * 60 * 1000);
  const { rows: candidates } = await tx.query<EnquiryRow>(
    `SELECT * FROM enquiries
      WHERE email = $1 AND submitted_at > $2
      ORDER BY submitted_at DESC`,
    [sender, lookback]
  );
  if (candidates.length === 0) return null;

  const threadIds = `${headerValue(email.headers, "in-reply-to")} ${headerValue(email.headers, "references")}`
    .split(/\s+/)
    .filter(Boolean);

  if (threadIds.length > 0) {
    const { rows } = await tx.query<{ enquiry_id: string }>(
      `SELECT enquiry_id FROM enquiry_email_events
        WHERE enquiry_id = ANY($1::text[]) AND message_id = ANY($2::text[])
        LIMIT 1`,
      [candidates.map(({ id }) => id), threadIds]
    );
    const threaded = candidates.find(({ id }) => id === rows[0]?.enquiry_id);
    if (threaded) return threaded;
  }

  const haystack = `${email.subject}\n${email.text ?? ""}`;
  return candidates.find(({ id }) => haystack.includes(id)) ?? null;
}

const MAX_ATTACHED_MESSAGE_BYTES = 25 * 1024 * 1024;

/** The original message as an .eml attachment, so nothing in it is lost. */
async function originalMessageAttachment(downloadUrl: string | undefined) {
  if (!downloadUrl) return [];
  const response = await fetch(downloadUrl);
  if (!response.ok) throw new Error(`Raw email download failed: ${response.status}`);
  const content = Buffer.from(await response.arrayBuffer());
  if (content.byteLength > MAX_ATTACHED_MESSAGE_BYTES) return [];
  return [{ filename: "original-message.eml", content, contentType: "message/rfc822" }];
}

/**
 * Passes an inbound message to the team. This is a normal send rather than
 * `receiving.forward()` because that sets no reply-to, so the team's reply would
 * go to our own sender address instead of the customer.
 */
async function forwardToTeam(
  emailId: string,
  sender: string,
  email: GetReceivingEmailResponseSuccess
): Promise<void> {
  const config = getConfig();
  const { error } = await getResend().emails.send(
    {
      from: `${config.companyName} Enquiries <${config.senderEmail}>`,
      to: [config.inboundForwardTo],
      replyTo: sender,
      subject: `Customer reply: ${singleLine(email.subject)}`,
      text: `From ${sender}. Replying to this email goes to them.\n\n${email.text ?? ""}`,
      ...(email.html ? { html: email.html } : {}),
      attachments: await originalMessageAttachment(email.raw?.download_url),
      tags: [{ name: "kind", value: "admin_notification" }],
    },
    { idempotencyKey: `enquiry-forward/${emailId}` }
  );
  if (error) throw new Error(`Forward failed: ${error.message}`);
}

async function handleReceived(
  db: Db,
  webhookId: string,
  event: Extract<WebhookEventPayload, { type: "email.received" }>
): Promise<Handled> {
  const config = getConfig();
  const replyAddress = normalizeEmail(config.replyToEmail);
  const recipients = [...event.data.to, ...(event.data.received_for ?? [])].map(parseAddress);
  if (!recipients.includes(replyAddress)) return IGNORED;

  // The webhook carries metadata only. Headers and body need this call.
  const { data: email, error } = await getResend().emails.receiving.get(event.data.email_id);
  if (error || !email) {
    throw new Error(`Could not fetch received email: ${error?.message ?? "no data"}`);
  }

  const sender = parseAddress(email.from);
  let handled = IGNORED;

  if (!isAutomatedMessage(email.headers, email.subject, sender)) {
    handled = await db.transaction(async (tx) => {
      const enquiry = await matchReply(tx, sender, email);
      if (!enquiry) return IGNORED;

      await tx.query(
        `INSERT INTO enquiry_email_events
           (webhook_id, enquiry_id, type, email_id, message_id, recipient, occurred_at)
         VALUES ($1, $2, 'email.received', $3, $4, $5, $6)
         ON CONFLICT (webhook_id) DO NOTHING`,
        [webhookId, enquiry.id, event.data.email_id, email.message_id, sender, new Date(event.created_at)]
      );

      // Later stages of the pipeline are not moved back to `replied`.
      if (enquiry.status === "new" || enquiry.status === "contacted") {
        await recordStatusChange(tx, enquiry, "replied", "resend_webhook", "customer_replied");
      }
      const stopped = (await stopSequence(tx, enquiry.id, "customer_replied")) ? [enquiry.id] : [];
      return { outcome: "processed" as const, stopped };
    });
  }

  // Forwarding comes last on purpose: a customer who replied must stop receiving
  // follow-ups even if this fails. A failure here is redelivered, the steps
  // above then find nothing left to do, and the stable key prevents a double send.
  await flushStopEvents(handled.stopped, db);
  if (normalizeEmail(config.inboundForwardTo) !== replyAddress) {
    await forwardToTeam(event.data.email_id, sender, email);
  }

  return { ...handled, stopped: [] };
}

async function route(db: Db, webhookId: string, event: WebhookEventPayload): Promise<Handled> {
  switch (event.type) {
    case "email.sent":
    case "email.delivered":
    case "email.delivery_delayed":
    case "email.bounced":
    case "email.complained":
    case "email.opened":
    case "email.clicked":
    case "email.failed":
    case "email.suppressed":
      return db.transaction((tx) => handleEmailEvent(tx, webhookId, event));

    case "email.received":
      return handleReceived(db, webhookId, event);

    case "contact.updated": {
      const email = normalizeEmail(event.data.email);
      if (event.data.unsubscribed) {
        return db.transaction((tx) => handleUnsubscribed(tx, email, "contact.updated"));
      }
      await db.query(`DELETE FROM email_suppressions WHERE email = $1 AND reason = 'unsubscribed'`, [email]);
      return IGNORED;
    }

    case "contact.deleted": {
      const email = normalizeEmail(event.data.email);
      return db.transaction((tx) => handleUnsubscribed(tx, email, "contact.deleted"));
    }

    case "suppression.added": {
      const email = normalizeEmail(event.data.email);
      const reason =
        event.data.origin === "bounce"
          ? "bounced"
          : event.data.origin === "complaint"
            ? "complained"
            : "unsubscribed";
      return db.transaction(async (tx) => {
        await suppress(tx, email, reason, "suppression.added");
        const stopped = await stopOpenSequencesForEmail(tx, email, reason);
        return { outcome: "processed" as const, stopped };
      });
    }

    case "suppression.removed":
      await db.query(
        `DELETE FROM email_suppressions WHERE email = $1 AND reason IN ('bounced', 'complained')`,
        [normalizeEmail(event.data.email)]
      );
      return { outcome: "processed", stopped: [] };

    default:
      return IGNORED;
  }
}

/** Takes ownership of a delivery. Returns false when there is nothing to do. */
async function claim(db: Db, webhookId: string, event: WebhookEventPayload) {
  const leaseUntil = new Date(Date.now() + LEASE_MINUTES * 60 * 1000);
  try {
    const { rows } = await db.query<{ id: string }>(
      `INSERT INTO resend_webhook_events (id, type, payload, status, lease_until)
       VALUES ($1, $2, $3, 'processing', $4)
       ON CONFLICT (id) DO UPDATE
         SET status = 'processing',
             attempts = resend_webhook_events.attempts + 1,
             lease_until = EXCLUDED.lease_until
         WHERE resend_webhook_events.status = 'failed'
            OR (resend_webhook_events.status = 'processing'
                AND resend_webhook_events.lease_until < now())
       RETURNING id`,
      [webhookId, event.type, JSON.stringify(event), leaseUntil]
    );
    return rows.length > 0;
  } catch {
    // MySQL syntax
    await db.query(
      `INSERT INTO resend_webhook_events (id, type, payload, status, lease_until)
       VALUES ($1, $2, $3, 'processing', $4)
       ON DUPLICATE KEY UPDATE
         attempts = attempts + 1,
         lease_until = IF(status = 'failed' OR (status = 'processing' AND lease_until < NOW()), VALUES(lease_until), lease_until),
         status = IF(status = 'failed' OR (status = 'processing' AND lease_until < NOW()), 'processing', status)`,
      [webhookId, event.type, JSON.stringify(event), leaseUntil]
    );
    const { rows } = await db.query<{ status: string }>(
      `SELECT status FROM resend_webhook_events WHERE id = $1 LIMIT 1`,
      [webhookId]
    );
    return rows[0]?.status === "processing";
  }
}

/**
 * Processes one verified webhook delivery exactly once.
 *
 * The svix-id is the dedupe key. A failure is recorded and rethrown so the route
 * answers 500 and Resend redelivers on its retry schedule. Handlers are
 * idempotent, so resuming after a partial failure is safe.
 */
export async function processWebhook(
  webhookId: string,
  event: WebhookEventPayload,
  db: Db = getDb()
): Promise<WebhookOutcome> {
  if (!(await claim(db, webhookId, event))) {
    const { rows } = await db.query<{ status: string }>(
      `SELECT status FROM resend_webhook_events WHERE id = $1`,
      [webhookId]
    );
    return rows[0]?.status === "processing" ? "in_progress" : "duplicate";
  }

  let handled: Handled;
  try {
    handled = await route(db, webhookId, event);
  } catch (error) {
    await db.query(
      `UPDATE resend_webhook_events SET status = 'failed', lease_until = NULL, last_error = $2 WHERE id = $1`,
      [webhookId, safeErrorMessage(error)]
    );
    throw error;
  }

  await db.query(
    `UPDATE resend_webhook_events
        SET status = $2, lease_until = NULL, last_error = NULL, processed_at = now()
      WHERE id = $1`,
    [webhookId, handled.outcome]
  );

  // The stops are already committed, and cron retries any that fail here.
  await flushStopEvents(handled.stopped, db);
  return handled.outcome;
}
