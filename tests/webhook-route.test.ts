import { randomUUID } from "node:crypto";
import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { POST as contactPost } from "@/app/api/contact/route";
import { POST } from "@/app/api/webhooks/resend/route";
import { setDbForTests, type Db } from "@/lib/enquiries/db";
import { runMaintenance } from "@/lib/enquiries/sequence";
import {
  TEMPLATE_IDS,
  contactRequest,
  createResendStub,
  createTestDb,
  emailEvent,
  eventNames,
  getEnquiry,
  resetDb,
  setEnv,
  signedWebhook,
  submission,
  type ResendStub,
} from "./helpers/harness";

let db: Db;
let close: () => Promise<void>;
let resend: ResendStub;
let enquiryId: string;

beforeAll(async () => {
  ({ db, close } = await createTestDb());
});
afterAll(() => close());

beforeEach(async () => {
  setEnv();
  setDbForTests(db);
  await resetDb(db);
  resend = createResendStub();
  vi.spyOn(console, "warn").mockImplementation(() => undefined);
  vi.spyOn(console, "error").mockImplementation(() => undefined);

  const response = await contactPost(contactRequest(submission()));
  enquiryId = (await response.json()).enquiryId;
});

const deliver = async (event: unknown, options?: Parameters<typeof signedWebhook>[1]) => {
  const response = await POST(signedWebhook(event, options));
  return { status: response.status, json: await response.json() };
};

const sent = (templateId: string, overrides: Record<string, unknown> = {}) =>
  emailEvent("email.sent", { template_id: templateId, ...overrides });

const inbound = (overrides: Record<string, unknown> = {}) =>
  emailEvent("email.received", {
    from: "asha@example.com",
    to: ["replies@reply.baagul.in"],
    received_for: [],
    subject: "Re: We've received your enquiry",
    ...overrides,
  });

const receivedEmail = (overrides: Record<string, unknown> = {}) => ({
  data: {
    object: "email",
    id: "inbound-1",
    from: "Asha Rao <asha@example.com>",
    to: ["replies@reply.baagul.in"],
    subject: "Re: We've received your enquiry",
    text: "Yes, let's talk.",
    html: null,
    headers: {},
    message_id: "<reply@example.com>",
    ...overrides,
  },
  error: null,
});

const lastEmail = () => resend.emails.send.mock.lastCall as unknown as [Record<string, unknown>, unknown];

describe("signature verification", () => {
  it("accepts a correctly signed request", async () => {
    expect((await deliver(sent(TEMPLATE_IDS.confirmation))).status).toBe(200);
  });

  it("rejects a request signed with the wrong secret", async () => {
    const secret = `whsec_${Buffer.from("a-completely-different-secret").toString("base64")}`;
    expect((await deliver(sent(TEMPLATE_IDS.confirmation), { secret })).status).toBe(400);
  });

  it("rejects a body changed after signing", async () => {
    expect((await deliver(sent(TEMPLATE_IDS.confirmation), { tamper: true })).status).toBe(400);
  });

  it("rejects a stale timestamp", async () => {
    const timestamp = new Date(Date.now() - 60 * 60 * 1000);
    expect((await deliver(sent(TEMPLATE_IDS.confirmation), { timestamp })).status).toBe(400);
  });

  it("rejects a request without signature headers", async () => {
    const { NextRequest } = await import("next/server");
    const response = await POST(
      new NextRequest("http://localhost/api/webhooks/resend", { method: "POST", body: "{}" })
    );
    expect(response.status).toBe(400);
  });

  it("fails closed when no secret is configured", async () => {
    const request = signedWebhook(sent(TEMPLATE_IDS.confirmation));
    setEnv({ RESEND_WEBHOOK_SECRET: undefined });
    expect((await POST(request)).status).toBe(503);
  });

  it("stores nothing from a rejected request", async () => {
    await deliver(sent(TEMPLATE_IDS.confirmation), { tamper: true });
    const { rows } = await db.query(`SELECT 1 FROM resend_webhook_events`);
    expect(rows).toHaveLength(0);
  });
});

describe("idempotent processing", () => {
  it("handles a redelivery of the same webhook once", async () => {
    const event = sent(TEMPLATE_IDS.confirmation);
    const id = "msg_repeat";

    expect((await deliver(event, { id })).json.status).toBe("processed");
    expect((await deliver(event, { id })).json.status).toBe("duplicate");

    const { rows } = await db.query(`SELECT 1 FROM enquiry_email_events`);
    expect(rows).toHaveLength(1);
  });

  it("does not send a second stop event for a repeated bounce", async () => {
    const event = emailEvent("email.bounced", { bounce: { type: "Permanent", subType: "General", message: "x" } });
    await deliver(event, { id: "msg_bounce" });
    await deliver(event, { id: "msg_bounce" });
    expect(eventNames(resend).filter((name) => name === "enquiry.followup_stopped")).toHaveLength(1);
  });

  it("answers 409 while another instance is processing", async () => {
    const event = sent(TEMPLATE_IDS.confirmation);
    await db.query(
      `INSERT INTO resend_webhook_events (id, type, payload, status, lease_until)
       VALUES ('msg_busy', 'email.sent', '{}', 'processing', now() + interval '2 minutes')`
    );
    expect((await deliver(event, { id: "msg_busy" })).status).toBe(409);
  });

  it("takes over a delivery whose lease expired", async () => {
    await db.query(
      `INSERT INTO resend_webhook_events (id, type, payload, status, lease_until)
       VALUES ('msg_stale', 'email.sent', '{}', 'processing', now() - interval '1 minute')`
    );
    expect((await deliver(sent(TEMPLATE_IDS.confirmation), { id: "msg_stale" })).json.status).toBe("processed");
  });

  it("returns 500 on a temporary failure and succeeds on the redelivery", async () => {
    const event = inbound();
    resend.emails.receiving.get.mockResolvedValueOnce({ data: null, error: { message: "boom re_secret123" } });
    expect((await deliver(event, { id: "msg_retry" })).status).toBe(500);

    const { rows } = await db.query<{ status: string; last_error: string }>(
      `SELECT status, last_error FROM resend_webhook_events WHERE id = 'msg_retry'`
    );
    expect(rows[0].status).toBe("failed");
    expect(rows[0].last_error).not.toContain("re_secret123");

    resend.emails.receiving.get.mockResolvedValueOnce(receivedEmail({ text: `Hello ${enquiryId}` }));
    expect((await deliver(event, { id: "msg_retry" })).status).toBe(200);
    expect((await getEnquiry(db, enquiryId)).status).toBe("replied");
  });
});

describe("sequence tracking", () => {
  it("records each step from its template ID and completes after the fourth", async () => {
    const steps = [TEMPLATE_IDS.confirmation, TEMPLATE_IDS.information, TEMPLATE_IDS.followup];
    for (const [index, templateId] of steps.entries()) {
      await deliver(sent(templateId));
      expect(await getEnquiry(db, enquiryId)).toMatchObject({
        last_step_sent: index + 1,
        sequence_status: "active",
      });
    }

    await deliver(sent(TEMPLATE_IDS.final));
    const enquiry = await getEnquiry(db, enquiryId);
    expect(enquiry).toMatchObject({ last_step_sent: 4, sequence_status: "completed" });
    expect(enquiry.sequence_ended_at).not.toBeNull();
  });

  it("falls back to the subject when the template ID does not match", async () => {
    await deliver(sent("unknown-template", { subject: "Any questions about your enquiry?" }));
    expect((await getEnquiry(db, enquiryId)).last_step_sent).toBe(3);
  });

  it("settles a pending enquiry when the Day 0 email is seen", async () => {
    await db.query(
      `UPDATE enquiries SET sequence_status = 'pending', trigger_state = 'sending',
         trigger_lease_until = now() - interval '1 minute'`
    );
    await deliver(sent(TEMPLATE_IDS.confirmation));

    expect(await getEnquiry(db, enquiryId)).toMatchObject({ sequence_status: "active", trigger_state: "sent" });
    await runMaintenance(db);
    expect(eventNames(resend).filter((name) => name === "enquiry.submitted")).toHaveLength(1);
  });

  it("ignores team notifications and unrelated recipients", async () => {
    const tagged = await deliver(
      emailEvent("email.sent", { to: ["asha@example.com"], tags: { kind: "admin_notification" } })
    );
    expect(tagged.json.status).toBe("ignored");
    const stranger = await deliver(emailEvent("email.sent", { to: ["stranger@example.com"] }));
    expect(stranger.json.status).toBe("ignored");
  });

  it("uses the enquiry tag on a direct confirmation and does not count it as a step", async () => {
    await deliver(
      emailEvent("email.sent", {
        subject: "We've received your enquiry",
        tags: { kind: "direct_confirmation", enquiry_id: enquiryId },
      })
    );
    expect((await getEnquiry(db, enquiryId)).last_step_sent).toBe(0);
  });

  it("records email.opened, email.clicked, and email.delivery_delayed engagement events", async () => {
    const openedRes = await deliver(emailEvent("email.opened", { template_id: TEMPLATE_IDS.confirmation }));
    expect(openedRes.status).toBe(200);

    const clickedRes = await deliver(
      emailEvent("email.clicked", {
        template_id: TEMPLATE_IDS.information,
        click: { link: "https://www.baagul.in/services" },
      })
    );
    expect(clickedRes.status).toBe(200);

    const delayedRes = await deliver(emailEvent("email.delivery_delayed", { template_id: TEMPLATE_IDS.followup }));
    expect(delayedRes.status).toBe(200);

    const { rows } = await db.query(
      `SELECT type FROM enquiry_email_events WHERE enquiry_id = $1 ORDER BY id ASC`,
      [enquiryId]
    );
    const types = rows.map((r: any) => r.type);
    expect(types).toContain("email.opened");
    expect(types).toContain("email.clicked");
    expect(types).toContain("email.delivery_delayed");
  });
});

describe("stopping follow-up", () => {
  const expectStopped = async (reason: string) => {
    expect(await getEnquiry(db, enquiryId)).toMatchObject({
      sequence_status: "stopped",
      sequence_reason: reason,
      stop_state: "sent",
    });
    expect(resend.events.send).toHaveBeenLastCalledWith({
      event: "enquiry.followup_stopped",
      email: "asha@example.com",
      payload: { enquiryId, reason },
    });
  };

  it("stops on a permanent bounce and suppresses the address", async () => {
    await deliver(emailEvent("email.bounced", { bounce: { type: "Permanent", subType: "General", message: "x" } }));
    await expectStopped("bounced");
    const { rows } = await db.query(`SELECT reason FROM email_suppressions WHERE email = 'asha@example.com'`);
    expect(rows).toEqual([{ reason: "bounced" }]);
  });

  it("records a transient bounce without stopping", async () => {
    await deliver(emailEvent("email.bounced", { bounce: { type: "Transient", subType: "MailboxFull", message: "x" } }));
    expect((await getEnquiry(db, enquiryId)).sequence_status).toBe("active");
    const { rows } = await db.query(`SELECT 1 FROM email_suppressions`);
    expect(rows).toHaveLength(0);
  });

  it("stops on a spam complaint", async () => {
    await deliver(emailEvent("email.complained"));
    await expectStopped("complained");
  });

  it("stops when Resend suppresses the address", async () => {
    await deliver(emailEvent("email.suppressed", { suppressed: { type: "OnAccountSuppressionList", message: "x" } }));
    await expectStopped("suppressed");
  });

  it("stops on suppression.added", async () => {
    await deliver({
      type: "suppression.added",
      created_at: new Date().toISOString(),
      data: { id: "s1", email: "ASHA@example.com", origin: "complaint", source_id: null, created_at: new Date().toISOString() },
    });
    await expectStopped("complained");
  });

  it("marks the enquiry unsubscribed from contact.updated", async () => {
    await deliver(contactUpdated(true));
    await expectStopped("unsubscribed");
    expect((await getEnquiry(db, enquiryId)).status).toBe("unsubscribed");
  });

  it("ignores contact updates that are not unsubscribes", async () => {
    await deliver(contactUpdated(false));
    expect((await getEnquiry(db, enquiryId)).sequence_status).toBe("active");
  });

  it("does not overwrite a converted customer's status on unsubscribe", async () => {
    await db.query(`UPDATE enquiries SET status = 'converted'`);
    await deliver(contactUpdated(true));
    expect((await getEnquiry(db, enquiryId)).status).toBe("converted");
  });

  it("clears the opt-out when the contact resubscribes", async () => {
    await deliver(contactUpdated(true));
    await deliver(contactUpdated(false));
    const { rows } = await db.query(`SELECT 1 FROM email_suppressions`);
    expect(rows).toHaveLength(0);
  });

  it("keeps a bounce suppression when a contact resubscribes", async () => {
    await deliver(emailEvent("email.bounced", { bounce: { type: "Permanent", subType: "General", message: "x" } }));
    await deliver(contactUpdated(false));
    const { rows } = await db.query(`SELECT reason FROM email_suppressions`);
    expect(rows).toEqual([{ reason: "bounced" }]);
  });

  it("leaves the stop queued for cron when the stop event fails", async () => {
    resend.events.send.mockResolvedValueOnce({ data: null, error: { message: "down", statusCode: 500 } } as never);
    await deliver(emailEvent("email.complained"));
    expect((await getEnquiry(db, enquiryId)).stop_state).toBe("pending");

    expect((await runMaintenance(db)).stopsSent).toBe(1);
    expect((await getEnquiry(db, enquiryId)).stop_state).toBe("sent");
  });

  it("only affects the one customer", async () => {
    const other = await (
      await contactPost(contactRequest(submission({ email: "ravi@example.com" }), "203.0.113.99"))
    ).json();
    await deliver(emailEvent("email.complained"));
    expect((await getEnquiry(db, other.enquiryId)).sequence_status).toBe("active");
  });
});

describe("inbound replies", () => {
  const messageId = "<sent-1@mail.baagul.in>";

  beforeEach(async () => {
    await deliver(sent(TEMPLATE_IDS.confirmation, { message_id: messageId }));
  });

  it("stops follow-up for a threaded reply and forwards it to the team", async () => {
    resend.emails.receiving.get.mockResolvedValueOnce(
      receivedEmail({ headers: { "In-Reply-To": messageId } })
    );
    const event = inbound();
    await deliver(event);

    expect(await getEnquiry(db, enquiryId)).toMatchObject({
      status: "replied",
      sequence_status: "stopped",
      sequence_reason: "customer_replied",
      stop_state: "sent",
    });
    expect(lastEmail()).toMatchObject([
      expect.objectContaining({ to: ["team@baagul.in"], replyTo: "asha@example.com" }),
      { idempotencyKey: `enquiry-forward/${event.data.email_id}` },
    ]);
  });

  it("still stops follow-up when forwarding fails, and forwards on redelivery", async () => {
    const event = inbound();
    const reply = receivedEmail({ headers: { "In-Reply-To": messageId } });
    resend.emails.receiving.get.mockResolvedValue(reply);
    resend.emails.send.mockResolvedValueOnce({ data: null, error: { message: "quota" } } as never);

    expect((await deliver(event, { id: "msg_forward" })).status).toBe(500);
    expect(await getEnquiry(db, enquiryId)).toMatchObject({
      status: "replied",
      sequence_status: "stopped",
      stop_state: "sent",
    });

    resend.events.send.mockClear();
    expect((await deliver(event, { id: "msg_forward" })).status).toBe(200);
    expect(resend.events.send).not.toHaveBeenCalled();
    expect(lastEmail()[0]).toMatchObject({ replyTo: "asha@example.com" });

    const { rows } = await db.query(`SELECT 1 FROM enquiry_status_history WHERE to_status = 'replied'`);
    expect(rows).toHaveLength(1);
  });

  it("attaches the original message so nothing in it is lost", async () => {
    const fetchStub = vi.fn(async () => new Response("raw message"));
    vi.stubGlobal("fetch", fetchStub);
    resend.emails.receiving.get.mockResolvedValueOnce(
      receivedEmail({ raw: { download_url: "https://example.com/raw", expires_at: "" } })
    );
    await deliver(inbound());
    vi.unstubAllGlobals();

    const [message] = lastEmail() as unknown as [{ attachments: { filename: string; content: Buffer }[] }];
    expect(message.attachments[0].filename).toBe("original-message.eml");
    expect(message.attachments[0].content.toString()).toBe("raw message");
  });

  it("matches on the enquiry ID when threading headers are missing", async () => {
    resend.emails.receiving.get.mockResolvedValueOnce(
      receivedEmail({ text: `> Enquiry ID: ${enquiryId}\nYes please` })
    );
    await deliver(inbound());
    expect((await getEnquiry(db, enquiryId)).status).toBe("replied");
  });

  it("does not treat unrelated mail from the same customer as a reply", async () => {
    resend.emails.receiving.get.mockResolvedValueOnce(
      receivedEmail({ subject: "Invoice question", text: "A separate matter." })
    );
    await deliver(inbound({ subject: "Invoice question" }));

    expect(await getEnquiry(db, enquiryId)).toMatchObject({ status: "new", sequence_status: "active" });
    expect(lastEmail()[0]).toMatchObject({ to: ["team@baagul.in"] });
  });

  it("does not treat a stranger quoting an enquiry ID as a reply", async () => {
    resend.emails.receiving.get.mockResolvedValueOnce(
      receivedEmail({ from: "stranger@example.com", text: `About ${enquiryId}` })
    );
    await deliver(inbound({ from: "stranger@example.com" }));
    expect((await getEnquiry(db, enquiryId)).status).toBe("new");
  });

  it.each([
    ["an auto-submitted header", { headers: { "In-Reply-To": messageId, "Auto-Submitted": "auto-replied" } }],
    ["an out-of-office subject", { subject: "Out of office: back Monday", headers: { "In-Reply-To": messageId } }],
    ["a mailer daemon", { from: "mailer-daemon@example.com", headers: { "In-Reply-To": messageId } }],
  ])("does not treat %s as a reply", async (_name, overrides) => {
    resend.emails.receiving.get.mockResolvedValueOnce(receivedEmail(overrides));
    await deliver(inbound());
    expect((await getEnquiry(db, enquiryId)).sequence_status).toBe("active");
  });

  it("ignores mail sent to other addresses without fetching it", async () => {
    const { json } = await deliver(inbound({ to: ["sales@reply.baagul.in"] }));
    expect(json.status).toBe("ignored");
    expect(resend.emails.receiving.get).not.toHaveBeenCalled();
  });

  it("does not move a qualified enquiry back to replied", async () => {
    await db.query(`UPDATE enquiries SET status = 'qualified'`);
    resend.emails.receiving.get.mockResolvedValueOnce(
      receivedEmail({ headers: { References: `<other@x> ${messageId}` } })
    );
    await deliver(inbound());
    expect(await getEnquiry(db, enquiryId)).toMatchObject({ status: "qualified", sequence_status: "stopped" });
  });
});

function contactUpdated(unsubscribed: boolean) {
  return {
    type: "contact.updated",
    created_at: new Date().toISOString(),
    data: {
      id: randomUUID(),
      audience_id: "a",
      segment_ids: [],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      email: "asha@example.com",
      unsubscribed,
    },
  };
}
