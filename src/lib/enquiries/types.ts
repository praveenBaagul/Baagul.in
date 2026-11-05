export const ENQUIRY_STATUSES = [
  "new",
  "contacted",
  "replied",
  "qualified",
  "converted",
  "closed",
  "unsubscribed",
] as const;

export type EnquiryStatus = (typeof ENQUIRY_STATUSES)[number];

/** Moving to one of these ends follow-up. `contacted` deliberately does not. */
export const STOP_FOLLOWUP_STATUSES: readonly EnquiryStatus[] = [
  "replied",
  "qualified",
  "converted",
  "closed",
  "unsubscribed",
];

export type SequenceStatus =
  | "pending"
  | "active"
  | "completed"
  | "stopped"
  | "skipped"
  | "failed";

export type TriggerState = "not_required" | "pending" | "sending" | "sent" | "failed";
export type StopState = "none" | "pending" | "sent";
export type EmailStep = 1 | 2 | 3 | 4;

export interface EnquiryRow {
  id: string;
  idempotency_key: string;
  content_hash: string;
  customer_name: string;
  email: string;
  phone: string | null;
  company: string | null;
  budget: string;
  services: string[];
  message: string;
  ip_hash: string | null;
  submitted_at: Date;
  status: EnquiryStatus;
  status_changed_at: Date;
  sequence_status: SequenceStatus;
  sequence_reason: string | null;
  sequence_started_at: Date | null;
  sequence_ended_at: Date | null;
  last_step_sent: number;
  automation_id: string | null;
  trigger_state: TriggerState;
  trigger_attempts: number;
  trigger_next_attempt_at: Date | null;
  trigger_lease_until: Date | null;
  trigger_last_error: string | null;
  stop_state: StopState;
  stop_attempts: number;
  stop_last_sent_at: Date | null;
  stop_last_error: string | null;
  admin_notified_at: Date | null;
}
