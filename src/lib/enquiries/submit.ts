import type { EnquirySubmission } from "../validations/enquiry";
import { canEmailRecipient, getConfig } from "./config";
import { getDb, isUniqueViolation, type Db } from "./db";
import { sendDirectConfirmation } from "./notifications";
import { checkRateLimit, hashIdentifier } from "./rate-limit";
import { isResendConfigured } from "./resend-client";
import {
  generateEnquiryId,
  normalizeEmail,
  normalizePhone,
  sha256,
  singleLine,
  stripControlChars,
} from "./sanitize";
import { dispatchTrigger, notifyAdminForEnquiry } from "./sequence";
import type { EnquiryRow, SequenceStatus, TriggerState } from "./types";

export type SubmitResult =
  | { kind: "created"; enquiryId: string }
  | { kind: "duplicate"; enquiryId: string }
  | { kind: "rate_limited"; retryAfterSeconds: number };

interface SequencePlan {
  sequenceStatus: Extract<SequenceStatus, "pending" | "skipped">;
  triggerState: Extract<TriggerState, "pending" | "not_required">;
  reason: string | null;
  /** Send the transactional confirmation, because no sequence will. */
  confirmDirectly: boolean;
}

const skip = (reason: string, confirmDirectly: boolean): SequencePlan => ({
  sequenceStatus: "skipped",
  triggerState: "not_required",
  reason,
  confirmDirectly,
});

const START_SEQUENCE: SequencePlan = {
  sequenceStatus: "pending",
  triggerState: "pending",
  reason: null,
  confirmDirectly: false,
};

/** Decides whether this enquiry may start the four-email sequence. */
async function planSequence(db: Db, email: string): Promise<SequencePlan> {
  const config = getConfig();

  if (!canEmailRecipient(email, config)) return skip("test_recipient_blocked", false);

  const suppression = await db.query<{ reason: string }>(
    `SELECT reason FROM email_suppressions WHERE email = $1`,
    [email]
  );
  const suppressed = suppression.rows[0]?.reason;
  // A bounced or complaining address must never be emailed again. Someone who only
  // opted out of follow-ups can still be told their new enquiry arrived.
  if (suppressed === "bounced" || suppressed === "complained") {
    return skip(`suppressed_${suppressed}`, false);
  }
  if (suppressed === "unsubscribed") return skip("unsubscribed", true);

  if (!config.automationId) return skip("automation_not_configured", true);

  const open = await db.query(
    `SELECT 1 FROM enquiries WHERE email = $1 AND sequence_status IN ('pending', 'active') LIMIT 1`,
    [email]
  );
  if (open.rows.length > 0) return skip("sequence_already_active", true);

  return START_SEQUENCE;
}

async function insertEnquiry(
  db: Db,
  values: {
    id: string;
    input: EnquirySubmission;
    email: string;
    contentHash: string;
    ipHash: string | null;
  },
  plan: SequencePlan
): Promise<EnquiryRow> {
  const { id, input, email, contentHash, ipHash } = values;

  return db.transaction(async (tx) => {
    const { rows } = await tx.query<EnquiryRow>(
      `INSERT INTO enquiries (
         id, idempotency_key, content_hash, customer_name, email, phone, company, budget,
         services, message, ip_hash, sequence_status, sequence_reason, trigger_state
       ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
       RETURNING *`,
      [
        id,
        input.idempotencyKey,
        contentHash,
        singleLine(input.fullName),
        email,
        normalizePhone(input.phone),
        input.company ? singleLine(input.company) || null : null,
        input.selectedBudget,
        input.selectedServices,
        stripControlChars(input.details),
        ipHash,
        plan.sequenceStatus,
        plan.reason,
        plan.triggerState,
      ]
    );
    await tx.query(
      `INSERT INTO enquiry_status_history (enquiry_id, to_status, reason, actor)
       VALUES ($1, 'new', 'submitted', 'contact_form')`,
      [id]
    );
    return rows[0];
  });
}

async function findDuplicate(db: Db, idempotencyKey: string, contentHash: string) {
  const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const { rows } = await db.query<{ id: string }>(
    `SELECT id FROM enquiries
      WHERE idempotency_key = $1
         OR (content_hash = $2 AND submitted_at > $3)
      ORDER BY submitted_at
      LIMIT 1`,
    [idempotencyKey, contentHash, since]
  );
  return rows[0]?.id;
}

export async function submitEnquiry(
  input: EnquirySubmission,
  context: { ip: string | null },
  db: Db = getDb()
): Promise<SubmitResult> {
  const email = normalizeEmail(input.email);
  const contentHash = sha256(
    [email, [...input.selectedServices].sort().join(","), stripControlChars(input.details)].join("|")
  );

  // Checked before rate limiting, so a retry of an accepted enquiry always succeeds.
  const existing = await findDuplicate(db, input.idempotencyKey, contentHash);
  if (existing) return { kind: "duplicate", enquiryId: existing };

  const ipHash = context.ip ? hashIdentifier(context.ip) : null;
  const retryAfterSeconds = await checkRateLimit(db, { ipHash, email });
  if (retryAfterSeconds !== null) return { kind: "rate_limited", retryAfterSeconds };

  const values = { id: generateEnquiryId(), input, email, contentHash, ipHash };
  let plan = await planSequence(db, email);
  let enquiry: EnquiryRow;

  try {
    enquiry = await insertEnquiry(db, values, plan);
  } catch (error) {
    // Two requests can pass the checks above at the same moment. The database
    // constraints decide which wins.
    if (isUniqueViolation(error, "enquiries_idempotency_key_key")) {
      const winner = await findDuplicate(db, input.idempotencyKey, contentHash);
      if (winner) return { kind: "duplicate", enquiryId: winner };
    }
    if (!isUniqueViolation(error, "enquiries_one_open_sequence_per_email")) throw error;
    plan = skip("sequence_already_active", true);
    enquiry = await insertEnquiry(db, values, plan);
  }

  if (plan.sequenceStatus === "pending") await dispatchTrigger(enquiry.id, db);
  if (plan.confirmDirectly) await sendDirectConfirmation(enquiry);
  if (isResendConfigured()) await notifyAdminForEnquiry(enquiry, db);

  return { kind: "created", enquiryId: enquiry.id };
}
