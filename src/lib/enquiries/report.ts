import { getDb, type Db } from "./db";
import { ENQUIRY_STATUSES, type EnquiryRow, type EnquiryStatus } from "./types";

export async function getEnquiryReport(db: Db = getDb()) {
  const { rows } = await db.query<{
    total: number;
    active_sequences: number;
    completed_sequences: number;
    stopped_sequences: number;
    skipped_sequences: number;
    failed_sequences: number;
    pending_triggers: number;
    replies: number;
    conversions: number;
  }>(
    `SELECT
       COUNT(*) AS total,
       COUNT(CASE WHEN sequence_status IN ('pending', 'active') THEN 1 END) AS active_sequences,
       COUNT(CASE WHEN sequence_status = 'completed' THEN 1 END) AS completed_sequences,
       COUNT(CASE WHEN sequence_status = 'stopped' THEN 1 END) AS stopped_sequences,
       COUNT(CASE WHEN sequence_status = 'skipped' THEN 1 END) AS skipped_sequences,
       COUNT(CASE WHEN sequence_status = 'failed' THEN 1 END) AS failed_sequences,
       COUNT(CASE WHEN trigger_state IN ('pending', 'sending') THEN 1 END) AS pending_triggers,
       COUNT(CASE WHEN id IN (
         SELECT enquiry_id FROM enquiry_status_history WHERE to_status = 'replied'
       ) THEN 1 END) AS replies,
       COUNT(CASE WHEN status = 'converted' THEN 1 END) AS conversions
     FROM enquiries`
  );

  const statuses = await db.query<{ status: EnquiryStatus; count: number }>(
    `SELECT status, count(*) AS count FROM enquiries GROUP BY status`
  );
  const byStatus = Object.fromEntries(ENQUIRY_STATUSES.map((status) => [status, 0])) as Record<
    EnquiryStatus,
    number
  >;
  for (const { status, count } of statuses.rows) byStatus[status] = Number(count);

  const emails = await db.query<{ step: number | null; type: string; count: number }>(
    `SELECT step, type, count(*) AS count
       FROM enquiry_email_events
      GROUP BY step, type
      ORDER BY (step IS NULL), step, type`
  );
  const countOf = (type: string) =>
    emails.rows.filter((row) => row.type === type).reduce((sum, row) => sum + Number(row.count), 0);

  const webhooks = await db.query<{ failed: number }>(
    `SELECT COUNT(*) AS failed FROM resend_webhook_events WHERE status = 'failed'`
  );

  const summary = rows[0];
  const num = (v: unknown) => Number(v ?? 0);
  return {
    totalEnquiries: num(summary.total),
    byStatus,
    sequences: {
      active: num(summary.active_sequences),
      completed: num(summary.completed_sequences),
      stopped: num(summary.stopped_sequences),
      skipped: num(summary.skipped_sequences),
      failed: num(summary.failed_sequences),
      triggersAwaitingRetry: num(summary.pending_triggers),
    },
    replies: num(summary.replies),
    conversions: num(summary.conversions),
    emails: {
      sent: countOf("email.sent"),
      delivered: countOf("email.delivered"),
      delayed: countOf("email.delivery_delayed"),
      opened: countOf("email.opened"),
      clicked: countOf("email.clicked"),
      bounced: countOf("email.bounced"),
      complained: countOf("email.complained"),
      failed: countOf("email.failed"),
      suppressed: countOf("email.suppressed"),
      byStep: emails.rows,
    },
    failedWebhooks: num(webhooks.rows[0]?.failed),
  };
}

const LIST_COLUMNS = `id, customer_name, email, services, status, submitted_at,
  sequence_status, sequence_reason, last_step_sent, trigger_state`;

export async function listEnquiries(
  filter: { status?: EnquiryStatus; limit: number; offset: number },
  db: Db = getDb()
) {
  if (filter.status) {
    const { rows } = await db.query(
      `SELECT ${LIST_COLUMNS} FROM enquiries
        WHERE status = $1
        ORDER BY submitted_at DESC
        LIMIT $2 OFFSET $3`,
      [filter.status, filter.limit, filter.offset]
    );
    return rows;
  }

  const { rows } = await db.query(
    `SELECT ${LIST_COLUMNS} FROM enquiries
      ORDER BY submitted_at DESC
      LIMIT $1 OFFSET $2`,
    [filter.limit, filter.offset]
  );
  return rows;
}

export async function getEnquiryDetail(id: string, db: Db = getDb()) {
  const { rows } = await db.query<EnquiryRow>(`SELECT * FROM enquiries WHERE id = $1`, [id]);
  if (!rows[0]) return null;

  const [history, emails] = await Promise.all([
    db.query(
      `SELECT from_status, to_status, reason, actor, changed_at
         FROM enquiry_status_history WHERE enquiry_id = $1 ORDER BY changed_at`,
      [id]
    ),
    db.query(
      `SELECT step, type, email_id, template_id, detail, occurred_at
         FROM enquiry_email_events WHERE enquiry_id = $1 ORDER BY occurred_at`,
      [id]
    ),
  ]);
  return { enquiry: rows[0], statusHistory: history.rows, emailEvents: emails.rows };
}
