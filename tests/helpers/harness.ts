import { randomUUID } from "node:crypto";
import { PGlite } from "@electric-sql/pglite";
import { NextRequest } from "next/server";
import { Resend } from "resend";
import { Webhook } from "standardwebhooks";
import { vi } from "vitest";
import { setDbForTests, type Db } from "@/lib/enquiries/db";
import { applyMigrations } from "@/lib/enquiries/migrate";
import { setResendForTests } from "@/lib/enquiries/resend-client";
import type { EnquiryRow } from "@/lib/enquiries/types";

export const WEBHOOK_SECRET = `whsec_${Buffer.from("test-secret-for-signature-checks").toString("base64")}`;

export const TEMPLATE_IDS = {
  confirmation: "tmpl-confirmation",
  information: "tmpl-information",
  followup: "tmpl-followup",
  final: "tmpl-final",
};

const ENV: Record<string, string> = {
  EMAIL_AUTOMATION_ENV: "production",
  RESEND_API_KEY: "re_test_key",
  RESEND_WEBHOOK_SECRET: WEBHOOK_SECRET,
  RESEND_AUTOMATION_ID: "automation-1",
  RESEND_TEMPLATE_CONFIRMATION_ID: TEMPLATE_IDS.confirmation,
  RESEND_TEMPLATE_INFORMATION_ID: TEMPLATE_IDS.information,
  RESEND_TEMPLATE_FOLLOWUP_ID: TEMPLATE_IDS.followup,
  RESEND_TEMPLATE_FINAL_ID: TEMPLATE_IDS.final,
  RESEND_FROM_EMAIL: "hello@mail.baagul.in",
  RESEND_REPLY_TO_EMAIL: "replies@reply.baagul.in",
  RESEND_INBOUND_FORWARD_TO: "team@baagul.in",
  CONTACT_RECEIVER_EMAIL: "team@baagul.in",
  ADMIN_API_TOKEN: "admin-token",
  CRON_SECRET: "cron-secret",
};

export function setEnv(overrides: Record<string, string | undefined> = {}) {
  for (const [key, value] of Object.entries({ ...ENV, ...overrides })) {
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
}

/** Runs the real migration and SQL against Postgres compiled to WebAssembly. */
export async function createTestDb(): Promise<{ db: Db; close: () => Promise<void> }> {
  const pg = await PGlite.create();

  type Queryable = Pick<PGlite, "query" | "exec">;
  const wrap = (client: Queryable): Omit<Db, "transaction"> => ({
    async query<Row>(text: string, params?: unknown[]) {
      if (params === undefined) {
        // exec accepts several statements, as a migration file contains.
        const results = await client.exec(text);
        return { rows: (results.at(-1)?.rows ?? []) as Row[] };
      }
      const result = await client.query<Row>(text, params as unknown[]);
      return { rows: result.rows };
    },
  });

  const db: Db = {
    ...wrap(pg),
    async transaction<T>(work: (tx: Db) => Promise<T>) {
      return (await pg.transaction(async (client) => {
        const tx: Db = {
          ...wrap(client as unknown as Queryable),
          transaction: (nested) => nested(tx),
        };
        return work(tx);
      })) as T;
    },
  };

  await applyMigrations(db);
  setDbForTests(db);
  return { db, close: () => pg.close() };
}

export async function resetDb(db: Db) {
  await db.query(`TRUNCATE enquiries, resend_webhook_events, enquiry_email_events,
    enquiry_status_history, email_suppressions, rate_limit_counters RESTART IDENTITY CASCADE`);
}

/** A fake of the Resend calls the app makes, keeping real webhook verification. */
export function createResendStub() {
  const success = (data: Record<string, unknown>) => ({ data, error: null, headers: null });
  const stub = {
    events: { send: vi.fn(async () => success({ object: "event", event: "x" })) },
    emails: {
      send: vi.fn(async () => success({ id: randomUUID() })),
      receiving: {
        get: vi.fn(),
      },
    },
    contacts: { update: vi.fn(async () => success({ id: "contact" })) },
    webhooks: new Resend("re_test_key").webhooks,
  };
  setResendForTests(stub as unknown as Resend);
  return stub;
}

export type ResendStub = ReturnType<typeof createResendStub>;

export function submission(overrides: Record<string, unknown> = {}) {
  return {
    selectedServices: ["SEO Optimization"],
    fullName: "Asha Rao",
    email: "asha@example.com",
    phone: "+919876543210",
    company: "Acme",
    selectedBudget: "₹50K - ₹1.5L",
    details: "We would like help improving our organic search traffic.",
    idempotencyKey: randomUUID(),
    website: "",
    ...overrides,
  };
}

export function contactRequest(body: unknown, ip = "203.0.113.10") {
  return new NextRequest("http://localhost/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": ip },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

/** Builds a webhook request signed with the library the SDK verifies against. */
export function signedWebhook(
  event: unknown,
  options: { id?: string; secret?: string; tamper?: boolean; timestamp?: Date } = {}
) {
  const id = options.id ?? `msg_${randomUUID()}`;
  const timestamp = options.timestamp ?? new Date();
  const payload = JSON.stringify(event);
  const signature = new Webhook(options.secret ?? WEBHOOK_SECRET).sign(id, timestamp, payload);

  return new NextRequest("http://localhost/api/webhooks/resend", {
    method: "POST",
    headers: {
      "svix-id": id,
      "svix-timestamp": String(Math.floor(timestamp.getTime() / 1000)),
      "svix-signature": signature,
    },
    body: options.tamper ? payload.replace("email", "EMAIL") : payload,
  });
}

export function emailEvent(
  type: string,
  overrides: Record<string, unknown> = {}
): { type: string; created_at: string; data: Record<string, unknown> } {
  return {
    type,
    created_at: new Date().toISOString(),
    data: {
      email_id: randomUUID(),
      created_at: new Date().toISOString(),
      from: "Baagul <hello@mail.baagul.in>",
      to: ["asha@example.com"],
      subject: "x",
      message_id: `<${randomUUID()}@mail.baagul.in>`,
      ...overrides,
    },
  };
}

export async function getEnquiry(db: Db, id: string): Promise<EnquiryRow> {
  const { rows } = await db.query<EnquiryRow>(`SELECT * FROM enquiries WHERE id = $1`, [id]);
  return rows[0];
}

export function eventNames(stub: ResendStub): string[] {
  return (stub.events.send.mock.calls as unknown as [{ event: string }][]).map(([call]) => call.event);
}
