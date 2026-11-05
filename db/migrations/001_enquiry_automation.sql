-- Enquiry storage and follow-up tracking.
-- Applied by `npm run db:migrate`. Never edit a migration that has been applied;
-- add a new numbered file instead.

CREATE TABLE enquiries (
  id                      text PRIMARY KEY,
  idempotency_key         uuid NOT NULL UNIQUE,
  content_hash            text NOT NULL,

  customer_name           text NOT NULL,
  email                   text NOT NULL CHECK (email = lower(email)),
  phone                   text,
  company                 text,
  budget                  text NOT NULL,
  services                text[] NOT NULL,
  message                 text NOT NULL,
  ip_hash                 text,
  submitted_at            timestamptz NOT NULL DEFAULT now(),

  status                  text NOT NULL DEFAULT 'new' CHECK (status IN
    ('new', 'contacted', 'replied', 'qualified', 'converted', 'closed', 'unsubscribed')),
  status_changed_at       timestamptz NOT NULL DEFAULT now(),

  -- Follow-up sequence. `pending` means the trigger event has not been accepted yet.
  sequence_status         text NOT NULL CHECK (sequence_status IN
    ('pending', 'active', 'completed', 'stopped', 'skipped', 'failed')),
  sequence_reason         text,
  sequence_started_at     timestamptz,
  sequence_ended_at       timestamptz,
  last_step_sent          smallint NOT NULL DEFAULT 0 CHECK (last_step_sent BETWEEN 0 AND 4),
  automation_id           text,

  -- Outbox for the enquiry.submitted event. Resend's events API has no
  -- idempotency key, so duplicate protection lives here.
  trigger_state           text NOT NULL CHECK (trigger_state IN
    ('not_required', 'pending', 'sending', 'sent', 'failed')),
  trigger_attempts        integer NOT NULL DEFAULT 0,
  trigger_next_attempt_at timestamptz,
  trigger_lease_until     timestamptz,
  trigger_last_error      text,

  -- Outbox for the per-enquiry stop event.
  stop_state              text NOT NULL DEFAULT 'none' CHECK (stop_state IN ('none', 'pending', 'sent')),
  stop_attempts           integer NOT NULL DEFAULT 0,
  stop_last_sent_at       timestamptz,
  stop_last_error         text,

  admin_notified_at       timestamptz
);

-- At most one open sequence per address. This caps a customer at four emails
-- however many enquiries they submit, and keeps recipient-based webhook
-- matching unambiguous while a sequence is running.
CREATE UNIQUE INDEX enquiries_one_open_sequence_per_email
  ON enquiries (email) WHERE sequence_status IN ('pending', 'active');

CREATE INDEX enquiries_email_idx ON enquiries (email, submitted_at DESC);
CREATE INDEX enquiries_dedupe_idx ON enquiries (content_hash, submitted_at DESC);
CREATE INDEX enquiries_status_idx ON enquiries (status);
CREATE INDEX enquiries_sequence_idx ON enquiries (sequence_status);
CREATE INDEX enquiries_trigger_outbox_idx ON enquiries (trigger_state, trigger_next_attempt_at)
  WHERE trigger_state IN ('pending', 'sending');
CREATE INDEX enquiries_stop_outbox_idx ON enquiries (stop_state, stop_last_sent_at)
  WHERE stop_state IN ('pending', 'sent');

CREATE TABLE enquiry_status_history (
  id           bigserial PRIMARY KEY,
  enquiry_id   text NOT NULL REFERENCES enquiries (id) ON DELETE CASCADE,
  from_status  text,
  to_status    text NOT NULL,
  reason       text,
  actor        text NOT NULL,
  changed_at   timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX enquiry_status_history_enquiry_idx ON enquiry_status_history (enquiry_id, changed_at);

-- Every webhook delivery, keyed by svix-id. This is both the dedupe record and
-- the store that lets a failed event be retried.
CREATE TABLE resend_webhook_events (
  id            text PRIMARY KEY,
  type          text NOT NULL,
  payload       jsonb NOT NULL,
  status        text NOT NULL CHECK (status IN ('processing', 'processed', 'ignored', 'failed')),
  attempts      integer NOT NULL DEFAULT 1,
  lease_until   timestamptz,
  last_error    text,
  received_at   timestamptz NOT NULL DEFAULT now(),
  processed_at  timestamptz
);
CREATE INDEX resend_webhook_events_status_idx ON resend_webhook_events (status, received_at);

CREATE TABLE enquiry_email_events (
  id           bigserial PRIMARY KEY,
  webhook_id   text NOT NULL UNIQUE REFERENCES resend_webhook_events (id),
  enquiry_id   text NOT NULL REFERENCES enquiries (id) ON DELETE CASCADE,
  step         smallint CHECK (step BETWEEN 1 AND 4),
  type         text NOT NULL,
  email_id     text,
  message_id   text,
  recipient    text,
  template_id  text,
  detail       jsonb,
  occurred_at  timestamptz NOT NULL
);
CREATE INDEX enquiry_email_events_enquiry_idx ON enquiry_email_events (enquiry_id, occurred_at);
CREATE INDEX enquiry_email_events_email_id_idx ON enquiry_email_events (email_id);
CREATE INDEX enquiry_email_events_message_id_idx ON enquiry_email_events (message_id);
CREATE INDEX enquiry_email_events_type_idx ON enquiry_email_events (type);

CREATE TABLE email_suppressions (
  email       text PRIMARY KEY CHECK (email = lower(email)),
  reason      text NOT NULL CHECK (reason IN ('unsubscribed', 'bounced', 'complained')),
  source      text NOT NULL,
  created_at  timestamptz NOT NULL DEFAULT now()
);

-- Fixed-window counters kept in Postgres so limits hold across serverless instances.
CREATE TABLE rate_limit_counters (
  key           text NOT NULL,
  window_start  timestamptz NOT NULL,
  hits          integer NOT NULL DEFAULT 0,
  PRIMARY KEY (key, window_start)
);
