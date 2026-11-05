import { Resend } from "resend";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  buildAutomationDefinition,
  diffDefinition,
  SEQUENCE,
  TRIGGER_KEY,
} from "@/lib/enquiries/automation-definition";
import { TEMPLATE_IDS, setEnv } from "./helpers/harness";

const parseDays = (duration: string) => Number(duration.split(" ")[0]);

describe("automation definition", () => {
  beforeEach(() => setEnv());

  it("has one trigger, four emails and three cancellable waits", () => {
    const { steps } = buildAutomationDefinition();
    const count = (type: string) => steps.filter((step) => step.type === type).length;
    expect(count("trigger")).toBe(1);
    expect(count("send_email")).toBe(4);
    expect(count("wait_for_event")).toBe(3);
    expect(count("delay")).toBe(0);
    expect(steps[0]).toMatchObject({ type: "trigger", config: { eventName: "enquiry.submitted" } });
  });

  it("schedules emails on days 0, 3, 7 and 10", () => {
    const { steps, connections } = buildAutomationDefinition();
    const byKey = new Map(steps.map((step) => [step.key, step]));

    let day = 0;
    const sendDays: Record<string, number> = {};
    let current = TRIGGER_KEY;
    for (;;) {
      const next = connections.find(({ from, type }) => from === current && type !== "event_received");
      if (!next) break;
      const step = byKey.get(next.to)!;
      if (step.type === "wait_for_event") day += parseDays(step.config.timeout!);
      if (step.type === "send_email") sendDays[step.key] = day;
      current = next.to;
    }

    expect(sendDays).toEqual({
      send_confirmation_email: 0,
      send_information_email: 3,
      send_followup_email: 7,
      send_final_email: 10,
    });
  });

  it("uses the right template for each email and continues only on timeout", () => {
    const { steps, connections } = buildAutomationDefinition();

    for (const { sendKey, templateKey, waitKey } of SEQUENCE) {
      const step = steps.find(({ key }) => key === sendKey)!;
      expect(step.type === "send_email" && step.config.template.id).toBe(TEMPLATE_IDS[templateKey]);
      if (waitKey) {
        expect(connections).toContainEqual({ from: waitKey, to: sendKey, type: "timeout" });
      }
    }
    // A stop event takes the event_received path, which leads nowhere and ends the run.
    expect(connections.some(({ type }) => type === "event_received")).toBe(false);
  });

  it("only resumes a wait for a stop event about the same enquiry", () => {
    const waits = buildAutomationDefinition().steps.filter((step) => step.type === "wait_for_event");
    for (const wait of waits) {
      expect(wait.config).toMatchObject({
        eventName: "enquiry.followup_stopped",
        filterRule: {
          type: "rule",
          field: "event.enquiryId",
          operator: "eq",
          value: { var: "event.enquiryId" },
        },
      });
    }
  });

  it("uses descriptive unique step keys and connects every step", () => {
    const { steps, connections } = buildAutomationDefinition();
    const keys = steps.map(({ key }) => key);
    expect(new Set(keys).size).toBe(keys.length);
    expect(keys.every((key) => /^[a-z0-9_]+$/.test(key))).toBe(true);

    const reached = new Set(connections.map(({ to }) => to));
    expect(keys.filter((key) => key !== TRIGGER_KEY).every((key) => reached.has(key))).toBe(true);
    for (const { from, to } of connections) {
      expect(keys).toContain(from);
      expect(keys).toContain(to);
    }
  });

  it("swaps every wait for the short delay in test mode, under its own name", () => {
    setEnv({ EMAIL_AUTOMATION_ENV: "test", RESEND_TEST_STEP_DELAY: "2 minutes" });
    const { name, steps } = buildAutomationDefinition();
    expect(name).toBe("Enquiry follow-up [test]");
    const timeouts = steps.flatMap((step) => (step.type === "wait_for_event" ? [step.config.timeout] : []));
    expect(timeouts).toEqual(["2 minutes", "2 minutes", "2 minutes"]);
  });

  it("treats anything but an explicit production setting as test mode", () => {
    setEnv({ EMAIL_AUTOMATION_ENV: undefined });
    expect(buildAutomationDefinition().name).toContain("[test]");
  });

  it("refuses to build without template IDs", () => {
    setEnv({ RESEND_TEMPLATE_FINAL_ID: undefined });
    expect(() => buildAutomationDefinition()).toThrow("RESEND_TEMPLATE_FINAL_ID");
  });
});

describe("SDK serialization", () => {
  afterEach(() => vi.unstubAllGlobals());

  it("sends the documented wire format through the real SDK", async () => {
    setEnv();
    const fetchStub = vi.fn<(url: string, init: RequestInit) => Promise<Response>>(
      async () =>
        new Response(JSON.stringify({ object: "automation", id: "a" }), {
          status: 201,
          headers: { "content-type": "application/json" },
        })
    );
    vi.stubGlobal("fetch", fetchStub);

    await new Resend("re_test_key").automations.create({
      ...buildAutomationDefinition(),
      status: "disabled",
    });

    const body = JSON.parse(fetchStub.mock.calls[0][1].body as string);
    expect(body.status).toBe("disabled");
    expect(body.steps[0].config).toEqual({ event_name: "enquiry.submitted" });

    const wait = body.steps.find((step: { key: string }) => step.key === "wait_until_day_3");
    expect(wait.config).toEqual({
      event_name: "enquiry.followup_stopped",
      timeout: "3 days",
      filter_rule: {
        type: "rule",
        field: "event.enquiryId",
        operator: "eq",
        value: { var: "event.enquiryId" },
      },
    });

    const send = body.steps.find((step: { key: string }) => step.key === "send_final_email");
    expect(send.config.reply_to).toBe("replies@reply.baagul.in");
    expect(send.config.template.variables.ENQUIRY_ID).toEqual({ var: "event.enquiryId" });
  });
});

describe("drift detection", () => {
  beforeEach(() => setEnv());

  const asRemote = () => {
    const local = buildAutomationDefinition();
    return {
      local,
      remote: {
        steps: local.steps.map((step) => ({
          key: step.key,
          type: step.type,
          config: JSON.parse(JSON.stringify(step.config)) as Record<string, unknown>,
        })),
        connections: local.connections.map((connection) => ({
          ...connection,
          type: connection.type ?? ("default" as const),
        })),
      },
    };
  };

  it("reports nothing when the deployed graph matches", () => {
    const { local, remote } = asRemote();
    expect(diffDefinition(remote, local)).toEqual([]);
  });

  it("reports a changed timeout, a changed template and a missing connection", () => {
    const { local, remote } = asRemote();
    remote.steps.find(({ key }) => key === "wait_until_day_3")!.config.timeout = "1 day";
    remote.steps.find(({ key }) => key === "send_final_email")!.config.template = { id: "other" };
    remote.connections.pop();

    expect(diffDefinition(remote, local)).toEqual(
      expect.arrayContaining([
        expect.stringContaining("wait_until_day_3: timeout"),
        expect.stringContaining("send_final_email: template"),
        expect.stringContaining("missing connection"),
      ])
    );
  });
});
