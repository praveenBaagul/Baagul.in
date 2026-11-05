import type { AutomationRunStatus, Resend } from "resend";
import {
  AUTOMATION_NAMES,
  buildAutomationDefinition,
  diffDefinition,
} from "./automation-definition";
import { ENQUIRY_STOP_EVENT, ENQUIRY_SUBMITTED_EVENT, getConfig } from "./config";
import { getResend } from "./resend-client";

/*
 * Server-side management of the automation. These functions are called only by
 * scripts/automation.ts. No HTTP route exposes them.
 */

interface SdkResult<Data> {
  data: Data | null;
  error: { message: string; name?: string; statusCode?: number | null } | null;
}

function unwrap<Data>(result: SdkResult<Data>, action: string): Data {
  if (result.error) throw new Error(`${action} failed: ${result.error.message}`);
  if (result.data === null) throw new Error(`${action} returned no data`);
  return result.data;
}

const EVENT_SCHEMAS = {
  [ENQUIRY_SUBMITTED_EVENT]: {
    enquiryId: "string",
    customerName: "string",
    serviceRequested: "string",
    serviceSummary: "string",
    serviceBenefits: "string",
    serviceUrl: "string",
  },
  [ENQUIRY_STOP_EVENT]: { enquiryId: "string", reason: "string" },
} as const;

/** Registers both custom events with a payload schema. Safe to repeat. */
export async function ensureEvents(resend: Resend = getResend()): Promise<string[]> {
  const created: string[] = [];
  for (const [name, schema] of Object.entries(EVENT_SCHEMAS)) {
    const existing = await resend.events.get(name);
    if (existing.data) continue;
    unwrap(await resend.events.create({ name, schema: { ...schema } }), `Create event ${name}`);
    created.push(name);
  }
  return created;
}

export async function findAutomationByName(name: string, resend: Resend = getResend()) {
  let after: string | undefined;
  for (;;) {
    const page = unwrap(
      await resend.automations.list(after ? { limit: 100, after } : { limit: 100 }),
      "List automations"
    );
    const match = page.data.find((automation) => automation.name === name);
    if (match) return match;
    if (!page.has_more || page.data.length === 0) return undefined;
    after = page.data[page.data.length - 1].id;
  }
}

/**
 * Creates the workflow disabled. Repeat runs return the existing automation,
 * found by RESEND_AUTOMATION_ID or by name, instead of creating a second one.
 */
export async function createAutomation(resend: Resend = getResend()) {
  const config = getConfig();
  const definition = buildAutomationDefinition(config);
  await ensureEvents(resend);

  if (config.automationId) {
    const existing = unwrap(await resend.automations.get(config.automationId), "Get automation");
    return { id: existing.id, created: false, status: existing.status };
  }

  const named = await findAutomationByName(AUTOMATION_NAMES[config.profile], resend);
  if (named) return { id: named.id, created: false, status: named.status };

  const created = unwrap(
    await resend.automations.create({ ...definition, status: "disabled" }),
    "Create automation"
  );
  return { id: created.id, created: true, status: "disabled" as const };
}

export async function getAutomation(id: string, resend: Resend = getResend()) {
  return unwrap(await resend.automations.get(id), "Get automation");
}

export async function listAutomations(resend: Resend = getResend()) {
  return unwrap(await resend.automations.list({ limit: 100 }), "List automations").data;
}

/** Compares the deployed graph with the code and returns any differences. */
export async function verifyAutomation(id: string, resend: Resend = getResend()) {
  const remote = await getAutomation(id, resend);
  return { automation: remote, differences: diffDefinition(remote, buildAutomationDefinition()) };
}

/** Pushes the coded graph to Resend. Resend rejects graph edits while enabled. */
export async function syncAutomation(id: string, resend: Resend = getResend()) {
  const remote = await getAutomation(id, resend);
  if (remote.status === "enabled") {
    throw new Error("The automation is enabled. Run the disable command first, then sync.");
  }
  const { steps, connections } = buildAutomationDefinition();
  return unwrap(await resend.automations.update(id, { steps, connections }), "Update automation");
}

/** Enables the automation, refusing if the deployed graph differs from the code. */
export async function enableAutomation(id: string, resend: Resend = getResend()) {
  const { differences } = await verifyAutomation(id, resend);
  if (differences.length > 0) {
    throw new Error(`Automation differs from the code:\n- ${differences.join("\n- ")}`);
  }
  return unwrap(await resend.automations.update(id, { status: "enabled" }), "Enable automation");
}

export async function disableAutomation(id: string, resend: Resend = getResend()) {
  return unwrap(await resend.automations.update(id, { status: "disabled" }), "Disable automation");
}

/**
 * Stops the WHOLE automation: no new runs start for anyone, and in-progress runs
 * continue to completion. This is not a per-customer cancel. For that, use the
 * stop event in sequence.ts.
 */
export async function stopAutomation(id: string, resend: Resend = getResend()) {
  return unwrap(await resend.automations.stop(id), "Stop automation");
}

export async function removeAutomation(id: string, resend: Resend = getResend()) {
  return unwrap(await resend.automations.remove(id), "Delete automation");
}

export async function listRuns(
  automationId: string,
  status?: AutomationRunStatus,
  resend: Resend = getResend()
) {
  const result = await resend.automations.runs.list({
    automationId,
    limit: 100,
    ...(status ? { status } : {}),
  });
  return unwrap(result, "List runs").data;
}

export async function getRun(automationId: string, runId: string, resend: Resend = getResend()) {
  return unwrap(await resend.automations.runs.get({ automationId, runId }), "Get run");
}
