import { NextRequest } from "next/server";
import { afterAll, beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { GET as cron } from "@/app/api/cron/enquiries/route";
import { GET as detail, PATCH } from "@/app/api/admin/enquiries/[id]/route";
import { GET as report } from "@/app/api/admin/enquiries/report/route";
import { GET as list } from "@/app/api/admin/enquiries/route";
import { POST as contactPost } from "@/app/api/contact/route";
import { setDbForTests, type Db } from "@/lib/enquiries/db";
import { runMaintenance } from "@/lib/enquiries/sequence";
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
  enquiryId = (await (await contactPost(contactRequest(submission()))).json()).enquiryId;
});

const adminRequest = (path: string, init: { method?: string; body?: unknown; token?: string | null } = {}) =>
  new NextRequest(`http://localhost${path}`, {
    method: init.method ?? "GET",
    headers:
      init.token === null ? {} : { authorization: `Bearer ${init.token ?? "admin-token"}` },
    body: init.body === undefined ? undefined : JSON.stringify(init.body),
  });

const context = (id: string) => ({ params: Promise.resolve({ id }) });

const setStatus = (status: string, reason?: string) =>
  PATCH(
    adminRequest(`/api/admin/enquiries/${enquiryId}`, { method: "PATCH", body: { status, reason } }),
    context(enquiryId)
  );

describe("access control", () => {
  it.each([
    ["no token", null],
    ["a wrong token", "guess"],
  ])("rejects %s on every protected route", async (_name, token) => {
    const path = `/api/admin/enquiries/${enquiryId}`;
    expect((await report(adminRequest("/api/admin/enquiries/report", { token }))).status).toBe(401);
    expect((await list(adminRequest("/api/admin/enquiries", { token }))).status).toBe(401);
    expect((await detail(adminRequest(path, { token }), context(enquiryId))).status).toBe(401);
    expect(
      (await PATCH(adminRequest(path, { method: "PATCH", body: { status: "closed" }, token }), context(enquiryId))).status
    ).toBe(401);
    expect((await getEnquiry(db, enquiryId)).status).toBe("new");
  });

  it("denies everything when the token is not configured", async () => {
    setEnv({ ADMIN_API_TOKEN: undefined });
    expect((await report(adminRequest("/api/admin/enquiries/report", { token: "" }))).status).toBe(401);
  });

  it("protects the cron route with its own secret", async () => {
    const request = (token: string) => adminRequest("/api/cron/enquiries", { token });
    expect((await cron(request("admin-token"))).status).toBe(401);
    expect((await cron(request("cron-secret"))).status).toBe(200);
  });
});

describe("status changes", () => {
  it.each([
    ["replied", undefined, "customer_replied"],
    ["qualified", "meeting_booked", "meeting_booked"],
    ["converted", "purchased", "purchased"],
    ["closed", "not_interested", "not_interested"],
    ["unsubscribed", undefined, "unsubscribed"],
  ])("%s ends follow-up with reason %s", async (status, reason, expected) => {
    const response = await setStatus(status, reason);
    expect(response.status).toBe(200);
    expect(await getEnquiry(db, enquiryId)).toMatchObject({
      status,
      sequence_status: "stopped",
      sequence_reason: expected,
      stop_state: "sent",
    });
    expect(resend.events.send).toHaveBeenLastCalledWith({
      event: "enquiry.followup_stopped",
      email: "asha@example.com",
      payload: { enquiryId, reason: expected },
    });
  });

  it("keeps following up after `contacted`", async () => {
    await setStatus("contacted");
    expect(await getEnquiry(db, enquiryId)).toMatchObject({ status: "contacted", sequence_status: "active" });
    expect(eventNames(resend)).not.toContain("enquiry.followup_stopped");
  });

  it("sends one stop event however many status changes follow", async () => {
    await setStatus("qualified");
    await setStatus("converted");
    await setStatus("closed");
    expect(eventNames(resend).filter((name) => name === "enquiry.followup_stopped")).toHaveLength(1);
  });

  it("records who changed what", async () => {
    await setStatus("converted", "purchased");
    const response = await detail(adminRequest(`/api/admin/enquiries/${enquiryId}`), context(enquiryId));
    const body = await response.json();
    expect(body.statusHistory.at(-1)).toMatchObject({
      from_status: "new",
      to_status: "converted",
      reason: "purchased",
      actor: "admin_api",
    });
  });

  it("propagates an admin unsubscribe to the Resend contact and blocks future sequences", async () => {
    await setStatus("unsubscribed");
    expect(resend.contacts.update).toHaveBeenCalledWith({ email: "asha@example.com", unsubscribed: true });

    const { rows } = await db.query(`SELECT reason FROM email_suppressions`);
    expect(rows).toEqual([{ reason: "unsubscribed" }]);
  });

  it("stops an enquiry whose trigger has not been sent yet without any stop event", async () => {
    await db.query(`UPDATE enquiries SET sequence_status = 'pending', trigger_state = 'pending', stop_state = 'none'`);
    await setStatus("closed");

    expect(await getEnquiry(db, enquiryId)).toMatchObject({
      sequence_status: "stopped",
      trigger_state: "not_required",
      stop_state: "none",
    });
    expect(eventNames(resend)).not.toContain("enquiry.followup_stopped");

    await runMaintenance(db);
    expect(eventNames(resend).filter((name) => name === "enquiry.submitted")).toHaveLength(1);
  });

  it("queues a stop when one lands while the trigger is in flight", async () => {
    await db.query(
      `UPDATE enquiries SET sequence_status = 'pending', trigger_state = 'sending',
         trigger_lease_until = now() + interval '10 minutes'`
    );
    resend.events.send.mockClear();
    await setStatus("closed");

    expect(eventNames(resend)).toEqual(["enquiry.followup_stopped"]);
  });

  it("repeats a stop event daily during the sequence window, then stops repeating", async () => {
    await setStatus("closed");
    resend.events.send.mockClear();

    await db.query(`UPDATE enquiries SET stop_last_sent_at = now() - interval '25 hours'`);
    await runMaintenance(db);
    expect(resend.events.send).toHaveBeenCalledTimes(1);

    await runMaintenance(db);
    expect(resend.events.send).toHaveBeenCalledTimes(1);

    await db.query(
      `UPDATE enquiries SET stop_last_sent_at = now() - interval '25 hours',
         sequence_started_at = now() - interval '13 days'`
    );
    await runMaintenance(db);
    expect(resend.events.send).toHaveBeenCalledTimes(1);
  });

  it("rejects an unknown status or malformed reason", async () => {
    expect((await setStatus("archived")).status).toBe(400);
    expect((await setStatus("closed", "<b>x</b>")).status).toBe(400);
  });

  it("returns 404 for an unknown enquiry", async () => {
    const response = await PATCH(
      adminRequest("/api/admin/enquiries/ENQ-NONE", { method: "PATCH", body: { status: "closed" } }),
      context("ENQ-NONE")
    );
    expect(response.status).toBe(404);
  });
});

describe("reporting", () => {
  it("summarises enquiries, sequences and email outcomes", async () => {
    await contactPost(contactRequest(submission({ email: "b@example.com" }), "203.0.113.20"));
    await contactPost(contactRequest(submission({ email: "c@example.com" }), "203.0.113.21"));
    await setStatus("converted", "purchased");
    await db.query(`UPDATE enquiries SET sequence_status = 'completed' WHERE email = 'b@example.com'`);
    await db.query(
      `INSERT INTO resend_webhook_events (id, type, payload, status) VALUES ('w1', 'email.bounced', '{}', 'processed')`
    );
    await db.query(
      `INSERT INTO enquiry_email_events (webhook_id, enquiry_id, step, type, occurred_at)
       VALUES ('w1', $1, 2, 'email.bounced', now())`,
      [enquiryId]
    );

    const response = await report(adminRequest("/api/admin/enquiries/report"));
    const body = await response.json();

    expect(body).toMatchObject({
      totalEnquiries: 3,
      conversions: 1,
      sequences: { active: 1, completed: 1, stopped: 1 },
      emails: { bounced: 1 },
      byStatus: { new: 2, converted: 1 },
    });
  });

  it("lists with a status filter and exposes no message bodies", async () => {
    await setStatus("closed");
    const response = await list(adminRequest("/api/admin/enquiries?status=closed"));
    const { enquiries } = await response.json();
    expect(enquiries).toHaveLength(1);
    expect(enquiries[0].id).toBe(enquiryId);
    expect(enquiries[0].message).toBeUndefined();

    const invalid = await list(adminRequest("/api/admin/enquiries?status=nope"));
    expect(invalid.status).toBe(400);
  });
});

describe("sequence completion sweep", () => {
  it("closes a sequence after its window even if the last webhook was lost", async () => {
    await db.query(`UPDATE enquiries SET sequence_started_at = now() - interval '13 days'`);
    expect((await runMaintenance(db)).sequencesCompleted).toBe(1);
    expect((await getEnquiry(db, enquiryId)).sequence_status).toBe("completed");
  });

  it("leaves a sequence inside its window alone", async () => {
    await db.query(`UPDATE enquiries SET sequence_started_at = now() - interval '9 days'`);
    expect((await runMaintenance(db)).sequencesCompleted).toBe(0);
  });
});
