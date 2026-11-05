import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/contact/route";
import { setDbForTests, type Db } from "@/lib/enquiries/db";
import { dispatchTrigger, runMaintenance } from "@/lib/enquiries/sequence";
import {
  contactRequest,
  createResendStub,
  createTestDb,
  eventNames,
  getEnquiry,
  resetDb,
  setEnv,
  submission,
  type ResendStub,
} from "./helpers/harness";

let db: Db;
let close: () => Promise<void>;
let resend: ResendStub;

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
});

const submit = async (body: unknown, ip?: string) => {
  const response = await POST(contactRequest(body, ip));
  return { response, json: await response.json() };
};

describe("POST /api/contact", () => {
  it("stores the enquiry, starts the sequence and notifies the team", async () => {
    const { response, json } = await submit(submission());

    expect(response.status).toBe(200);
    expect(json.enquiryId).toMatch(/^ENQ-[0-9A-Z]{10}$/);

    const enquiry = await getEnquiry(db, json.enquiryId);
    expect(enquiry).toMatchObject({
      customer_name: "Asha Rao",
      email: "asha@example.com",
      services: ["SEO Optimization"],
      status: "new",
      sequence_status: "active",
      trigger_state: "sent",
      automation_id: "automation-1",
    });
    expect(enquiry.admin_notified_at).not.toBeNull();

    expect(resend.events.send).toHaveBeenCalledTimes(1);
    expect(resend.events.send).toHaveBeenCalledWith({
      event: "enquiry.submitted",
      email: "asha@example.com",
      payload: expect.objectContaining({
        enquiryId: json.enquiryId,
        customerName: "Asha Rao",
        serviceRequested: "SEO Optimization",
        serviceUrl: expect.stringContaining("/services/seo-optimizations"),
      }),
    });
    expect(resend.emails.send).toHaveBeenCalledTimes(1);

    const { rows } = await db.query(`SELECT * FROM enquiry_status_history WHERE enquiry_id = $1`, [
      json.enquiryId,
    ]);
    expect(rows).toHaveLength(1);
  });

  it("rejects invalid input, malformed JSON and unknown services without saving", async () => {
    expect((await submit(submission({ email: "nope" }))).response.status).toBe(400);
    expect((await submit(submission({ selectedServices: ["Hacking"] }))).response.status).toBe(400);
    expect((await submit(submission({ idempotencyKey: "abc" }))).response.status).toBe(400);
    expect((await submit("{not json")).response.status).toBe(400);

    const { rows } = await db.query(`SELECT 1 FROM enquiries`);
    expect(rows).toHaveLength(0);
    expect(resend.events.send).not.toHaveBeenCalled();
  });

  it("gives bots a fake success when the honeypot is filled", async () => {
    const { response } = await submit(submission({ website: "http://spam.example" }));
    expect(response.status).toBe(200);
    const { rows } = await db.query(`SELECT 1 FROM enquiries`);
    expect(rows).toHaveLength(0);
    expect(resend.events.send).not.toHaveBeenCalled();
    expect(resend.emails.send).not.toHaveBeenCalled();
  });

  it("removes markup and links from the name before it reaches a template", async () => {
    const { json } = await submit(
      submission({ fullName: '<a href="http://evil.example">Click</a> Dr. Rao' })
    );
    const [[call]] = resend.events.send.mock.calls as unknown as [[{ payload: { customerName: string } }]];
    expect(call.payload.customerName).not.toMatch(/[<>"]/);
    expect(call.payload.customerName).not.toContain("evil.example");
    expect(call.payload.customerName).toContain("Dr. Rao");
    expect(json.enquiryId).toBeDefined();
  });

  it("escapes form input in the team notification", async () => {
    await submit(submission({ details: "<script>alert(1)</script> please call me" }));
    const [[message]] = resend.emails.send.mock.calls as unknown as [[{ html: string }]];
    expect(message.html).not.toContain("<script>");
    expect(message.html).toContain("&lt;script&gt;");
  });

  describe("duplicate protection", () => {
    it("treats a retry with the same key as one enquiry and one event", async () => {
      const body = submission();
      const first = await submit(body);
      const second = await submit(body);

      expect(second.response.status).toBe(200);
      expect(second.json.enquiryId).toBe(first.json.enquiryId);
      const { rows } = await db.query(`SELECT 1 FROM enquiries`);
      expect(rows).toHaveLength(1);
      expect(resend.events.send).toHaveBeenCalledTimes(1);
      expect(resend.emails.send).toHaveBeenCalledTimes(1);
    });

    it("treats a double click sent concurrently as one enquiry and one event", async () => {
      const body = submission();
      const results = await Promise.all([submit(body), submit(body), submit(body)]);

      expect(results.every(({ response }) => response.status === 200)).toBe(true);
      expect(new Set(results.map(({ json }) => json.enquiryId)).size).toBe(1);
      expect(resend.events.send).toHaveBeenCalledTimes(1);
    });

    it("recognises identical content sent with a new key", async () => {
      const first = await submit(submission());
      const second = await submit(submission());
      expect(second.json.enquiryId).toBe(first.json.enquiryId);
      expect(resend.events.send).toHaveBeenCalledTimes(1);
    });

    it("confirms a second enquiry without opening a second sequence", async () => {
      await submit(submission());
      const { json } = await submit(submission({ details: "A separate question about a logo project." }));

      expect(await getEnquiry(db, json.enquiryId)).toMatchObject({
        sequence_status: "skipped",
        sequence_reason: "sequence_already_active",
        trigger_state: "not_required",
      });
      expect(resend.events.send).toHaveBeenCalledTimes(1);
      const subjects = (resend.emails.send.mock.calls as unknown as [{ subject: string }][]).map(
        ([message]) => message.subject
      );
      expect(subjects).toContain("We've received your enquiry");
    });
  });

  describe("rate limiting", () => {
    it("limits one address to three enquiries a day", async () => {
      for (let attempt = 1; attempt <= 3; attempt += 1) {
        const { response } = await submit(
          submission({ details: `Question number ${attempt} about our website.` }),
          `203.0.113.${attempt}`
        );
        expect(response.status).toBe(200);
      }
      const { response } = await submit(submission({ details: "One more question about the website." }));
      expect(response.status).toBe(429);
      expect(response.headers.get("Retry-After")).toBeTruthy();
    });

    it("limits one IP to five enquiries an hour", async () => {
      for (let attempt = 1; attempt <= 5; attempt += 1) {
        const { response } = await submit(submission({ email: `person${attempt}@example.com` }), "198.51.100.7");
        expect(response.status).toBe(200);
      }
      const { response } = await submit(submission({ email: "person6@example.com" }), "198.51.100.7");
      expect(response.status).toBe(429);
    });

    it("never rate limits a retry of an accepted enquiry", async () => {
      const body = submission();
      await submit(body);
      for (let attempt = 0; attempt < 10; attempt += 1) {
        expect((await submit(body)).response.status).toBe(200);
      }
    });
  });

  describe("email safety", () => {
    it("sends nothing to real customers outside production", async () => {
      setEnv({ EMAIL_AUTOMATION_ENV: "test", TEST_RECIPIENT_ALLOWLIST: "tester@baagul.in" });
      const { json } = await submit(submission());

      expect(await getEnquiry(db, json.enquiryId)).toMatchObject({
        sequence_status: "skipped",
        sequence_reason: "test_recipient_blocked",
      });
      expect(resend.events.send).not.toHaveBeenCalled();
      const recipients = (resend.emails.send.mock.calls as unknown as [{ to: string[] }][]).flatMap(
        ([message]) => message.to
      );
      expect(recipients).not.toContain("asha@example.com");
    });

    it("runs the sequence for allowlisted and sandbox addresses in test mode", async () => {
      setEnv({ EMAIL_AUTOMATION_ENV: "test", TEST_RECIPIENT_ALLOWLIST: "tester@baagul.in" });
      await submit(submission({ email: "Tester@Baagul.in" }));
      await submit(submission({ email: "delivered@resend.dev" }));
      expect(resend.events.send).toHaveBeenCalledTimes(2);
    });

    it("never emails a bounced or complaining address", async () => {
      await db.query(
        `INSERT INTO email_suppressions (email, reason, source) VALUES ('asha@example.com', 'bounced', 'test')`
      );
      const { json } = await submit(submission());

      expect((await getEnquiry(db, json.enquiryId)).sequence_reason).toBe("suppressed_bounced");
      expect(resend.events.send).not.toHaveBeenCalled();
      const recipients = (resend.emails.send.mock.calls as unknown as [{ to: string[] }][]).flatMap(
        ([message]) => message.to
      );
      expect(recipients).toEqual(["team@baagul.in"]);
    });

    it("confirms but does not follow up with someone who unsubscribed", async () => {
      await db.query(
        `INSERT INTO email_suppressions (email, reason, source) VALUES ('asha@example.com', 'unsubscribed', 'test')`
      );
      await submit(submission());
      expect(eventNames(resend)).toEqual([]);
      const recipients = (resend.emails.send.mock.calls as unknown as [{ to: string[] }][]).flatMap(
        ([message]) => message.to
      );
      expect(recipients).toContain("asha@example.com");
    });

    it("keeps the customer informed when no automation is configured yet", async () => {
      setEnv({ RESEND_AUTOMATION_ID: undefined });
      const { json } = await submit(submission());
      expect((await getEnquiry(db, json.enquiryId)).sequence_reason).toBe("automation_not_configured");
      expect(resend.events.send).not.toHaveBeenCalled();
      expect(resend.emails.send).toHaveBeenCalledTimes(2);
    });
  });

  describe("failure handling", () => {
    it("saves the enquiry and retries the event later when Resend is down", async () => {
      resend.events.send.mockResolvedValueOnce({
        data: null,
        error: { message: "unavailable", statusCode: 503 },
      } as never);

      const { response, json } = await submit(submission());
      expect(response.status).toBe(200);
      expect(await getEnquiry(db, json.enquiryId)).toMatchObject({
        sequence_status: "pending",
        trigger_state: "pending",
        trigger_attempts: 1,
      });

      await db.query(`UPDATE enquiries SET trigger_next_attempt_at = now() - interval '1 minute'`);
      await runMaintenance(db);

      expect(await getEnquiry(db, json.enquiryId)).toMatchObject({
        sequence_status: "active",
        trigger_state: "sent",
      });
      expect(resend.events.send).toHaveBeenCalledTimes(2);
    });

    it("does not retry before the backoff has elapsed", async () => {
      resend.events.send.mockResolvedValueOnce({
        data: null,
        error: { message: "unavailable", statusCode: 503 },
      } as never);
      await submit(submission());
      await runMaintenance(db);
      expect(resend.events.send).toHaveBeenCalledTimes(1);
    });

    it("gives up on a permanent error and confirms the customer directly", async () => {
      resend.events.send.mockResolvedValueOnce({
        data: null,
        error: { message: "schema mismatch", statusCode: 422 },
      } as never);

      const { response, json } = await submit(submission());
      expect(response.status).toBe(200);
      expect(await getEnquiry(db, json.enquiryId)).toMatchObject({
        sequence_status: "failed",
        trigger_state: "failed",
      });
      expect(resend.emails.send).toHaveBeenCalledTimes(2);
    });

    const parkAsPending = async () => {
      const { json } = await submit(submission());
      await db.query(`UPDATE enquiries SET sequence_status = 'pending', trigger_state = 'pending'`);
      resend.events.send.mockClear();
      return json.enquiryId as string;
    };

    it("sends the trigger once when several workers dispatch at the same moment", async () => {
      const id = await parkAsPending();
      await Promise.all([dispatchTrigger(id, db), dispatchTrigger(id, db), dispatchTrigger(id, db)]);

      expect(resend.events.send).toHaveBeenCalledTimes(1);
      expect((await getEnquiry(db, id)).trigger_attempts).toBe(2);
    });

    it("does not resend while another attempt holds the lease", async () => {
      const id = await parkAsPending();
      await db.query(
        `UPDATE enquiries SET trigger_state = 'sending', trigger_lease_until = now() + interval '10 minutes'`
      );

      await dispatchTrigger(id, db);
      await runMaintenance(db);

      expect(resend.events.send).not.toHaveBeenCalled();
      expect((await getEnquiry(db, id)).trigger_state).toBe("sending");
    });

    it("retries once a crashed attempt's lease has expired", async () => {
      const id = await parkAsPending();
      await db.query(
        `UPDATE enquiries SET trigger_state = 'sending', trigger_lease_until = now() - interval '1 minute'`
      );

      await runMaintenance(db);

      expect(resend.events.send).toHaveBeenCalledTimes(1);
      expect((await getEnquiry(db, id)).sequence_status).toBe("active");
    });

    it("tells the customer to retry but still alerts the team if the database fails", async () => {
      const broken: Db = {
        query: async () => {
          throw new Error("connection refused");
        },
        transaction: async () => {
          throw new Error("connection refused");
        },
      };
      setDbForTests(broken);

      const { response, json } = await submit(submission());
      expect(response.status).toBe(500);
      expect(json.error).toContain("try again");
      expect(json.error).not.toContain("connection refused");
      expect(resend.emails.send).toHaveBeenCalledTimes(1);
    });

    it("keeps the backend running and notifies admin when no database is configured", async () => {
      setDbForTests(undefined);
      setEnv({ DATABASE_URL: undefined });

      const { response, json } = await submit(submission());
      expect(response.status).toBe(200);
      expect(json.success).toBe(true);
      expect(resend.emails.send).toHaveBeenCalledTimes(1);
    });

    it("runs in mock mode for local dev when neither database nor Resend is configured", async () => {
      setDbForTests(undefined);
      setEnv({ DATABASE_URL: undefined, RESEND_API_KEY: undefined });
      const { setResendForTests } = await import("@/lib/enquiries/resend-client");
      setResendForTests(undefined);

      const { response, json } = await submit(submission());
      expect(response.status).toBe(200);
      expect(json).toEqual({ success: true, mock: true });
    });

    it("retries a failed team notification from maintenance", async () => {
      resend.emails.send.mockRejectedValueOnce(new Error("down") as never);
      const { json } = await submit(submission());
      expect((await getEnquiry(db, json.enquiryId)).admin_notified_at).toBeNull();

      await db.query(`UPDATE enquiries SET submitted_at = now() - interval '10 minutes'`);
      expect((await runMaintenance(db)).adminNotificationsRetried).toBe(1);
      expect((await getEnquiry(db, json.enquiryId)).admin_notified_at).not.toBeNull();
    });
  });
});
