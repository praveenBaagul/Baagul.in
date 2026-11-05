import { sequenceDurationHours } from "./automation-definition";
import {
  ENQUIRY_STOP_EVENT,
  ENQUIRY_SUBMITTED_EVENT,
  getConfig,
  type EnquiryConfig,
} from "./config";
import { getDb, type Db } from "./db";
import { notifyAdmin, sendDirectConfirmation } from "./notifications";
import { getResend } from "./resend-client";
import { safeErrorMessage, sanitizeDisplayName } from "./sanitize";
import { describeServices } from "./service-info";
import { STOP_FOLLOWUP_STATUSES, type EnquiryRow, type EnquiryStatus } from "./types";

const MAX_TRIGGER_ATTEMPTS = 8;

/**
 * How long a send attempt owns an enquiry. If a process dies mid-send the outcome
 * is unknown, so the lease is long enough for the Day 0 `email.sent` webhook to
 * arrive and settle the enquiry before anyone retries the event.
 */
const TRIGGER_LEASE_MINUTES = 15;

function retryDelayMinutes(attempts: number): number {
  return Math.min(2 ** attempts, 60);
}

function isPermanentError(statusCode: number | null | undefined): boolean {
  return (
    typeof statusCode === "number" &&
    statusCode >= 400 &&
    statusCode < 500 &&
    statusCode !== 408 &&
    statusCode !== 429
  );
}

export function buildTriggerPayload(enquiry: EnquiryRow, config: EnquiryConfig = getConfig()) {
  return {
    enquiryId: enquiry.id,
    customerName: sanitizeDisplayName(enquiry.customer_name),
    ...describeServices(enquiry.services, config.companyWebsiteUrl),
  };
}

/**
 * Sends the `enquiry.submitted` event at most once per enquiry.
 *
 * Resend's events API has no idempotency key and a run cannot be deduplicated
 * after the fact, so the atomic claim below is what stops a double send: a retried
 * request, a concurrent cron pass or a second instance all find nothing to claim.
 */
export async function dispatchTrigger(enquiryId: string, db: Db = getDb()): Promise<void> {
  const leaseUntil = new Date(Date.now() + TRIGGER_LEASE_MINUTES * 60 * 1000);
  const { rows } = await db.query<EnquiryRow>(
    `UPDATE enquiries
        SET trigger_state = 'sending',
            trigger_attempts = trigger_attempts + 1,
            trigger_lease_until = $2
      WHERE id = $1
        AND sequence_status = 'pending'
        AND (trigger_state = 'pending'
             OR (trigger_state = 'sending' AND trigger_lease_until < now()))
      RETURNING *`,
    [enquiryId, leaseUntil]
  );
  const enquiry = rows[0];
  if (!enquiry) return;

  const config = getConfig();
  let failure: { message: string; permanent: boolean } | undefined;

  try {
    const { error } = await getResend().events.send({
      event: ENQUIRY_SUBMITTED_EVENT,
      email: enquiry.email,
      payload: buildTriggerPayload(enquiry, config),
    });
    if (error) {
      failure = { message: error.message, permanent: isPermanentError(error.statusCode) };
    }
  } catch (error) {
    failure = { message: safeErrorMessage(error), permanent: false };
  }

  if (!failure) {
    // A stop can land while the send is in flight. The run then exists, so
    // the sequence stays stopped and a stop event is queued for it.
    await db.query(
      `UPDATE enquiries
          SET trigger_state = 'sent',
              trigger_lease_until = NULL,
              trigger_last_error = NULL,
              automation_id = $2,
              stop_state = CASE WHEN sequence_status = 'stopped' THEN 'pending' ELSE stop_state END,
              sequence_started_at = COALESCE(sequence_started_at, now()),
              sequence_status = CASE WHEN sequence_status = 'pending' THEN 'active' ELSE sequence_status END
        WHERE id = $1`,
      [enquiry.id, config.automationId ?? null]
    );
    return;
  }

  const giveUp = failure.permanent || enquiry.trigger_attempts >= MAX_TRIGGER_ATTEMPTS;
  if (giveUp) {
    await db.query(
      `UPDATE enquiries
          SET trigger_state = 'failed',
              trigger_lease_until = NULL,
              trigger_last_error = $2,
              sequence_status = CASE WHEN sequence_status = 'pending' THEN 'failed' ELSE sequence_status END,
              sequence_reason = COALESCE(sequence_reason, 'trigger_failed'),
              sequence_ended_at = COALESCE(sequence_ended_at, now())
        WHERE id = $1`,
      [enquiry.id, failure.message]
    );
    console.error(`Enquiry ${enquiry.id}: giving up on the trigger event: ${failure.message}`);
    // The customer would otherwise hear nothing at all.
    await sendDirectConfirmation(enquiry);
    return;
  }

  const nextAttemptAt = new Date(
    Date.now() + retryDelayMinutes(enquiry.trigger_attempts) * 60 * 1000
  );
  await db.query(
    `UPDATE enquiries
        SET trigger_state = 'pending',
            trigger_lease_until = NULL,
            trigger_last_error = $2,
            trigger_next_attempt_at = $3
      WHERE id = $1 AND trigger_state = 'sending'`,
    [enquiry.id, failure.message, nextAttemptAt]
  );
  console.warn(`Enquiry ${enquiry.id}: trigger event will be retried: ${failure.message}`);
}

/**
 * Ends follow-up for one enquiry in the database and queues the stop event. Runs
 * inside the caller's transaction. Nothing happens if follow-up is already over.
 */
export async function stopSequence(tx: Db, enquiryId: string, reason: string): Promise<boolean> {
  const { rows } = await tx.query<{ id: string }>(
    `UPDATE enquiries
        SET stop_state = CASE WHEN trigger_state IN ('sending', 'sent') THEN 'pending' ELSE 'none' END,
            trigger_state = CASE WHEN trigger_state = 'pending' THEN 'not_required' ELSE trigger_state END,
            sequence_status = 'stopped',
            sequence_reason = $2,
            sequence_ended_at = now()
      WHERE id = $1 AND sequence_status IN ('pending', 'active')
      RETURNING id`,
    [enquiryId, reason]
  );
  return rows.length > 0;
}

export async function stopOpenSequencesForEmail(tx: Db, email: string, reason: string) {
  const { rows } = await tx.query<{ id: string }>(
    `SELECT id FROM enquiries WHERE email = $1 AND sequence_status IN ('pending', 'active')`,
    [email]
  );
  for (const { id } of rows) await stopSequence(tx, id, reason);
  return rows.map(({ id }) => id);
}

/** Sends the stop event for one enquiry and records the outcome. Never throws. */
async function sendStopEvent(enquiry: EnquiryRow, db: Db): Promise<boolean> {
  let message: string | undefined;
  try {
    const { error } = await getResend().events.send({
      event: ENQUIRY_STOP_EVENT,
      email: enquiry.email,
      payload: { enquiryId: enquiry.id, reason: enquiry.sequence_reason ?? "stopped" },
    });
    if (error) message = error.message;
  } catch (error) {
    message = safeErrorMessage(error);
  }

  await db.query(
    `UPDATE enquiries
        SET stop_attempts = stop_attempts + 1,
            stop_state = CASE WHEN $2::text IS NULL THEN 'sent' ELSE stop_state END,
            stop_last_sent_at = CASE WHEN $2::text IS NULL THEN now() ELSE stop_last_sent_at END,
            stop_last_error = $2
      WHERE id = $1`,
    [enquiry.id, message ?? null]
  );
  if (message) console.warn(`Enquiry ${enquiry.id}: stop event failed: ${message}`);
  return !message;
}

/** Sends queued stop events now, so follow-up ends without waiting for cron. */
export async function flushStopEvents(enquiryIds: string[], db: Db = getDb()): Promise<void> {
  if (enquiryIds.length === 0) return;
  const placeholders = enquiryIds.map((_, i) => `$${i + 1}`).join(", ");
  const { rows } = await db.query<EnquiryRow>(
    `SELECT * FROM enquiries WHERE id IN (${placeholders}) AND stop_state = 'pending'`,
    enquiryIds
  );
  for (const enquiry of rows) await sendStopEvent(enquiry, db);
}

const STATUS_STOP_REASONS: Partial<Record<EnquiryStatus, string>> = {
  replied: "customer_replied",
  qualified: "qualified",
  converted: "converted",
  closed: "closed",
  unsubscribed: "unsubscribed",
};

export async function recordStatusChange(
  tx: Db,
  enquiry: Pick<EnquiryRow, "id" | "status">,
  to: EnquiryStatus,
  actor: string,
  reason?: string
): Promise<void> {
  await tx.query(
    `UPDATE enquiries SET status = $2, status_changed_at = now() WHERE id = $1`,
    [enquiry.id, to]
  );
  await tx.query(
    `INSERT INTO enquiry_status_history (enquiry_id, from_status, to_status, reason, actor)
     VALUES ($1, $2, $3, $4, $5)`,
    [enquiry.id, enquiry.status, to, reason ?? null, actor]
  );
}

/**
 * Changes an enquiry's status and, for statuses that end follow-up, stops that
 * one customer's sequence. Reasons such as `meeting_booked` or `purchased`
 * are recorded in place of the default.
 */
export async function changeEnquiryStatus(
  enquiryId: string,
  to: EnquiryStatus,
  options: { actor: string; reason?: string },
  db: Db = getDb()
): Promise<EnquiryRow | null> {
  const result = await db.transaction(async (tx) => {
    const { rows } = await tx.query<EnquiryRow>(
      `SELECT * FROM enquiries WHERE id = $1 FOR UPDATE`,
      [enquiryId]
    );
    const enquiry = rows[0];
    if (!enquiry) return null;

    if (enquiry.status !== to) {
      await recordStatusChange(tx, enquiry, to, options.actor, options.reason);
    }

    if (STOP_FOLLOWUP_STATUSES.includes(to)) {
      await stopSequence(tx, enquiry.id, options.reason ?? STATUS_STOP_REASONS[to] ?? to);
    }

    if (to === "unsubscribed") {
      await tx.query(
        `INSERT INTO email_suppressions (email, reason, source) VALUES ($1, 'unsubscribed', $2)
         ON CONFLICT (email) DO NOTHING`,
        [enquiry.email, options.actor]
      );
    }

    const updated = await tx.query<EnquiryRow>(`SELECT * FROM enquiries WHERE id = $1`, [enquiryId]);
    return updated.rows[0];
  });

  if (!result) return null;
  await flushStopEvents([result.id], db);

  if (to === "unsubscribed") {
    // Keeps Resend's contact in step, so broadcasts respect the opt-out too.
    try {
      const { error } = await getResend().contacts.update({
        email: result.email,
        unsubscribed: true,
      });
      if (error) console.warn(`Enquiry ${result.id}: contact not updated: ${error.message}`);
    } catch (error) {
      console.warn(`Enquiry ${result.id}: contact not updated: ${safeErrorMessage(error)}`);
    }
  }

  return result;
}

export interface MaintenanceResult {
  triggersAttempted: number;
  stopsSent: number;
  sequencesCompleted: number;
  adminNotificationsRetried: number;
}

/** One pass of the recovery work. Safe to run concurrently and repeatedly. */
export async function runMaintenance(db: Db = getDb()): Promise<MaintenanceResult> {
  const config = getConfig();

  const triggers = await db.query<{ id: string }>(
    `SELECT id FROM enquiries
      WHERE sequence_status = 'pending'
        AND ((trigger_state = 'pending' AND COALESCE(trigger_next_attempt_at, now()) <= now())
             OR (trigger_state = 'sending' AND trigger_lease_until < now()))
      ORDER BY submitted_at
      LIMIT 25`
  );
  for (const { id } of triggers.rows) await dispatchTrigger(id, db);

  // A wait step only listens while the run is parked on it, so a stop sent in the
  // moment a run moves between steps could be missed. The stop is repeated
  // daily until the sequence window has passed. With no run waiting it has no effect.
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const sequenceWindowAgo = new Date(
    Date.now() - sequenceDurationHours(config.profile) * 60 * 60 * 1000
  );

  const stops = await db.query<EnquiryRow>(
    `SELECT * FROM enquiries
      WHERE stop_state = 'pending'
         OR (stop_state = 'sent'
             AND stop_last_sent_at < $1
             AND sequence_started_at > $2)
      ORDER BY stop_last_sent_at NULLS FIRST
      LIMIT 50`,
    [oneDayAgo, sequenceWindowAgo]
  );
  let stopsSent = 0;
  for (const enquiry of stops.rows) {
    if (await sendStopEvent(enquiry, db)) stopsSent += 1;
  }

  // Normally step 4's email.sent closes the sequence. This covers missed webhooks.
  const completed = await db.query(
    `UPDATE enquiries
        SET sequence_status = 'completed',
            sequence_reason = 'window_elapsed',
            sequence_ended_at = now()
      WHERE sequence_status = 'active'
        AND sequence_started_at < $1
      RETURNING id`,
    [sequenceWindowAgo]
  );

  const threeDaysAgo = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);
  const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);

  const unnotified = await db.query<EnquiryRow>(
    `SELECT * FROM enquiries
      WHERE admin_notified_at IS NULL
        AND submitted_at BETWEEN $1 AND $2
      ORDER BY submitted_at
      LIMIT 25`,
    [threeDaysAgo, fiveMinutesAgo]
  );
  let adminNotificationsRetried = 0;
  for (const enquiry of unnotified.rows) {
    if (await notifyAdminForEnquiry(enquiry, db)) adminNotificationsRetried += 1;
  }

  await db.query(`DELETE FROM rate_limit_counters WHERE window_start < $1`, [threeDaysAgo]);

  return {
    triggersAttempted: triggers.rows.length,
    stopsSent,
    sequencesCompleted: completed.rows.length,
    adminNotificationsRetried,
  };
}

/** Notifies the team once. Failure is left for runMaintenance to retry. */
export async function notifyAdminForEnquiry(enquiry: EnquiryRow, db: Db = getDb()): Promise<boolean> {
  try {
    await notifyAdmin({
      enquiryId: enquiry.id,
      fullName: enquiry.customer_name,
      email: enquiry.email,
      phone: enquiry.phone,
      company: enquiry.company,
      budget: enquiry.budget,
      services: enquiry.services,
      message: enquiry.message,
    });
    await db.query(`UPDATE enquiries SET admin_notified_at = now() WHERE id = $1`, [enquiry.id]);
    return true;
  } catch (error) {
    console.error(`Enquiry ${enquiry.id}: ${safeErrorMessage(error)}`);
    return false;
  }
}
