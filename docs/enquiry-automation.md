# Production Enquiry Email Automation System (MySQL & Prisma ORM)

Complete operational guide and architecture documentation for the Baagul enquiry follow-up automation system powered by Next.js, MySQL with Prisma ORM, and the official Resend Node.js SDK & Automations API.

---

## 1. Architecture Overview

When a customer submits an enquiry on the website:
1. **Validation & Anti-Spam**:
   - The form submission is strictly validated with Zod (`src/lib/validations/enquiry.ts`).
   - Hidden honeypot traps bots silently without giving them actionable signals.
   - Fixed-window rate limiting prevents abuse by IP and email hash (`rate_limit_counters` table).
   - Client-side idempotency keys (`idempotencyKey`) and content hashing prevent duplicate submissions.
2. **Database Storage & State Tracking (MySQL + Prisma ORM)**:
   - Data models are managed via Prisma schema (`prisma/schema.prisma`) on MySQL.
   - Prisma Client singleton is exported from `src/lib/prisma.ts`.
   - Enquiries are persisted in MySQL (`enquiries` table) with generated unique IDs (`enq_<base32>`).
   - Lifecycle status begins at `new`.
   - Outbox pattern is used for Resend custom event dispatching (`trigger_state` in `enquiries`).
   - Prevents duplicate active sequences per email address.
3. **Resend Automation Workflow**:
   - A single multi-step automation workflow is created in Resend (`Enquiry follow-up`).
   - Triggered by custom event: `enquiry.submitted`.
   - Executes 4 sequential email steps using published Resend template IDs.
   - Delays between emails are configured as `wait_for_event` listening for `enquiry.followup_stopped` with timeouts (Day 0 immediate, Day 3, Day 7, Day 10).
4. **Per-Customer Cancellation & Suppression**:
   - Resend Automations lacks an API to cancel a single in-flight run. Using `resend.automations.stop()` would halt follow-ups for *all* customers worldwide.
   - To achieve reliable per-customer cancellation, our workflow uses `wait_for_event` steps conditioned on matching `event.enquiryId`.
   - When a customer replies, unsubscribes, books a call, is marked converted/closed, or bounces, an `enquiry.followup_stopped` event is emitted with `{ enquiryId }`. The wait step completes via its event branch (which terminates without further connections), canceling that customer's sequence immediately while leaving all other customers running.
5. **Durable Webhooks**:
   - `/api/webhooks/resend` validates standard webhook signatures using `resend.webhooks.verify()`.
   - Deduplicates incoming deliveries by `svix-id` in `resend_webhook_events`.
   - Matches delivery events to specific enquiries via tags, message IDs, or recipient email.
   - Updates `enquiry_email_events`, advances `last_step_sent`, and logs delivery telemetry.
6. **Background Maintenance Cron**:
   - `/api/cron/enquiries` handles outbox retries for pending triggers, flushes pending stop events, and marks expired sequences as completed.
   - Can be triggered every 15 minutes by GitHub Actions (`.github/workflows/enquiry-maintenance.yml`) or a hosted cron service.

---

## 2. Sequence Schedule

| Step | Trigger / Delay | Resend Step Key | Description & Goals |
|------|-----------------|-----------------|---------------------|
| **Email 1** | **Day 0** (Immediate) | `send_confirmation_email` | Enquiry confirmation, Enquiry ID, services requested, clear next steps. |
| **Email 2** | **Day 3** (+3 days / 72h) | `send_information_email` | Service explanation, value proposition, relevant case/service link, CTA. |
| **Email 3** | **Day 7** (+4 days / 96h) | `send_followup_email` | Helpful check-in, offer to answer questions, consultation / quotation offer. |
| **Email 4** | **Day 10** (+3 days / 72h) | `send_final_email` | Courteous closing check-in, direct reply option, leaving door open. |

---

## 3. Environment Variables Reference

Copy `.env.example` to `.env`:

```bash
# Safety Switch: 'production' vs 'test'
EMAIL_AUTOMATION_ENV=test
TEST_RECIPIENT_ALLOWLIST=praveen@baagul.com,support@baagul.in
RESEND_TEST_STEP_DELAY=5 minutes

# Resend Credentials
RESEND_API_KEY=re_your_api_key_here
RESEND_WEBHOOK_SECRET=whsec_your_signing_secret_here
RESEND_AUTOMATION_ID=
RESEND_TEMPLATE_CONFIRMATION_ID=
RESEND_TEMPLATE_INFORMATION_ID=
RESEND_TEMPLATE_FOLLOWUP_ID=
RESEND_TEMPLATE_FINAL_ID=

# Senders and Inbound Routing
RESEND_FROM_EMAIL=hello@mail.baagul.in
RESEND_REPLY_TO_EMAIL=replies@reply.baagul.in
RESEND_INBOUND_FORWARD_TO=support@baagul.in

# Company Identity
COMPANY_NAME=Baagul
COMPANY_WEBSITE_URL=https://www.baagul.in
COMPANY_PHONE=+91 7483737014
COMPANY_ADDRESS=Hustlehub Tech Park, HSR Layout, Bengaluru

# Admin Email Alerts
CONTACT_RECEIVER_EMAIL=support@baagul.in
CONTACT_FALLBACK_EMAIL=praveen@baagul.com

# Database (MySQL with Prisma)
# Local MySQL:
DATABASE_URL=mysql://root:password@localhost:3306/baagul
# Cloud MySQL (AWS RDS, PlanetScale, Railway, TiDB):
# DATABASE_URL=mysql://user:password@host:3306/baagul?ssl={"rejectUnauthorized":true}

# Security Tokens
ADMIN_API_TOKEN=generate_random_64_char_hex
CRON_SECRET=generate_random_64_char_hex
RATE_LIMIT_SALT=generate_random_64_char_hex
```

---

## 4. Prisma & MySQL Setup Commands

The database models are defined in `prisma/schema.prisma`.

```bash
# 1. Generate Prisma Client
npm run db:generate

# 2. Push schema directly to your MySQL database (prototyping / dev)
npm run db:push

# 3. Or create and apply versioned SQL migrations (production)
npm run db:migrate
```

---

## 5. Resend Dashboard & Domain Setup Steps

1. **Create Resend API Key**:
   - Go to [Resend API Keys](https://resend.com/api-keys).
   - Create a key with **Full Access** permissions.
   - Set as `RESEND_API_KEY` in `.env`.

2. **Verify Sending Domain**:
   - Go to [Resend Domains](https://resend.com/domains).
   - Add your sending domain (e.g., `mail.baagul.in` or `baagul.in`).
   - Configure the DNS records (DKIM, SPF, and DMARC) in your DNS provider (Cloudflare, GoDaddy, Route53).
   - Wait for status to show **Verified**.

3. **Configure Inbound Receiving (for Reply Detection)**:
   - In Resend Domains, configure MX records for inbound email (e.g. `reply.baagul.in`).
   - Set `RESEND_REPLY_TO_EMAIL=replies@reply.baagul.in`.
   - When a customer replies, Resend fires `email.received`, automatically stopping subsequent follow-ups.

4. **Sync Email Templates**:
   - Run the template publisher:
     ```bash
     npm run templates -- sync
     ```
   - This creates and publishes all 4 branded HTML/text templates in Resend and outputs their IDs:
     - `RESEND_TEMPLATE_CONFIRMATION_ID`
     - `RESEND_TEMPLATE_INFORMATION_ID`
     - `RESEND_TEMPLATE_FOLLOWUP_ID`
     - `RESEND_TEMPLATE_FINAL_ID`
   - Paste those IDs into `.env`.

5. **Register Webhook Endpoint**:
   - Go to [Resend Webhooks](https://resend.com/webhooks).
   - Click **Add Webhook**.
   - **Endpoint URL**: `https://www.baagul.in/api/webhooks/resend` (or your ngrok tunnel for local testing).
   - **Events**: Select all 14 supported webhook events:
     - `email.sent` (outbound attempt accepted)
     - `email.delivered` (successful inbox delivery)
     - `email.delivery_delayed` (transient delivery delay or retry)
     - `email.opened` (customer opened the email)
     - `email.clicked` (customer clicked a link)
     - `email.bounced` (permanent bounce)
     - `email.complained` (spam complaint)
     - `email.failed` (fatal send failure)
     - `email.suppressed` (address on suppression list)
     - `email.received` (inbound customer reply for auto-stopping follow-up)
     - `contact.updated` (audience unsubscribe detection)
     - `contact.deleted` (contact removed)
     - `suppression.added` (new blocklist entry)
     - `suppression.removed` (blocklist entry removed)
   - Copy the Signing Secret (`whsec_...`) and set it as `RESEND_WEBHOOK_SECRET` in `.env`.

---

## 6. Automation CLI Management

Use the CLI script `scripts/automation.ts` for all workflow operations:

```bash
# 1. Register custom event schemas (enquiry.submitted and enquiry.followup_stopped)
npm run automation -- events

# 2. Create the automation in disabled state
npm run automation -- create
# Copy the printed RESEND_AUTOMATION_ID into your .env

# 3. Verify workflow definition matches codebase
npm run automation -- verify

# 4. Push local workflow definition updates to Resend (workflow must be disabled)
npm run automation -- sync

# 5. Enable the automation for live runs
npm run automation -- enable

# 6. Disable the automation
npm run automation -- disable

# 7. Inspect automation details (steps, connections, status)
npm run automation -- get

# 8. List all automations on the account
npm run automation -- list

# 9. List execution runs
npm run automation -- runs
npm run automation -- runs --status=running

# 10. Inspect an individual run
npm run automation -- run <runId>

# 11. Stop the whole automation workflow (requires typing automation ID to confirm)
npm run automation -- stop

# 12. Permanently delete the automation (requires confirmation)
npm run automation -- delete
```

---

## 7. Customer Status Transitions & Suppression Rules

The system maintains enquiry lifecycle statuses:
- `new`: Initial state upon submission.
- `contacted`: Admin reached out or follow-up is ongoing.
- `replied`: Customer sent a reply (detected via `email.received`). Follow-up stopped.
- `qualified`: Lead is qualified. Follow-up stopped.
- `converted`: Customer purchased or converted. Follow-up stopped.
- `closed`: Enquiry concluded or marked not interested. Follow-up stopped.
- `unsubscribed`: Customer clicked unsubscribe link or suppression event fired. Follow-up stopped.

### How Follow-Up Ends
Whenever an enquiry transitions to `replied`, `qualified`, `converted`, `closed`, or `unsubscribed`:
1. The database sets `sequence_status = 'stopped'`, `sequence_reason = reason`.
2. A per-customer stop event `enquiry.followup_stopped` is emitted with `{ enquiryId }`.
3. The in-flight `wait_for_event` step in Resend for that customer matches the filter rule and terminates that customer's run.
4. Bounces and complaints immediately add the email to `email_suppressions`, preventing any future outbound messages.

---

## 8. Safe Testing in Development / Staging

To test the complete 4-email workflow without waiting 10 days and without emailing real users:

1. In `.env`:
   ```bash
   EMAIL_AUTOMATION_ENV=test
   RESEND_TEST_STEP_DELAY=2 minutes
   TEST_RECIPIENT_ALLOWLIST=your-email@yourdomain.com
   ```
2. In test mode:
   - The workflow is named `Enquiry follow-up [test]`.
   - Wait steps run for **2 minutes** instead of 3 or 4 days.
   - Any email not on the allowlist or `@resend.dev` is skipped automatically (`test_recipient_blocked`).
3. Run the complete automated test suite:
   ```bash
   npm run test
   ```

---

## 9. Admin & Reporting Endpoints

All admin endpoints require `Authorization: Bearer <ADMIN_API_TOKEN>`:

- **List Enquiries**:
  ```http
  GET /api/admin/enquiries?status=new&limit=25&offset=0
  ```
- **Enquiry Detail**:
  ```http
  GET /api/admin/enquiries/enq_abc123
  ```
- **Update Status (cancels sequence if terminal status)**:
  ```http
  PATCH /api/admin/enquiries/enq_abc123
  Content-Type: application/json

  {
    "status": "converted",
    "reason": "contract_signed"
  }
  ```
- **Aggregated Analytics & Sequence Health Report**:
  ```http
  GET /api/admin/enquiries/report
  ```

---

## 10. Deployment & Maintenance

1. **Deploy to Vercel / Cloud Provider**:
   - Set `EMAIL_AUTOMATION_ENV=production`.
   - Ensure `DATABASE_URL` connects to your MySQL instance.
   - Run `npm run db:push` or `npm run db:migrate`.
2. **Setup Background Maintenance Cron**:
   - Option A: GitHub Actions (`.github/workflows/enquiry-maintenance.yml`) triggers every 15 minutes.
     Configure Repository Secret `CRON_SECRET` and Variable `ENQUIRY_CRON_URL=https://www.baagul.in/api/cron/enquiries`.
   - Option B: Vercel Cron or Cloudflare Worker calling `POST /api/cron/enquiries` with `Authorization: Bearer <CRON_SECRET>`.
