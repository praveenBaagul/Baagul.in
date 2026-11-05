import type {
  AutomationConnection,
  AutomationResponseConnection,
  AutomationResponseStep,
  AutomationStep,
  ConditionRule,
  CreateAutomationOptions,
} from "resend";
import {
  ENQUIRY_STOP_EVENT,
  ENQUIRY_SUBMITTED_EVENT,
  getConfig,
  type AutomationProfile,
  type EnquiryConfig,
} from "./config";
import type { EmailStep } from "./types";

export const AUTOMATION_NAMES: Record<AutomationProfile, string> = {
  production: "Enquiry follow-up",
  test: "Enquiry follow-up [test]",
};

export type TemplateKey = "confirmation" | "information" | "followup" | "final";

interface SequenceEmail {
  step: EmailStep;
  /** Day of the sequence on which this email goes out. */
  day: number;
  templateKey: TemplateKey;
  sendKey: string;
  /** Key of the wait step in front of this email. The first email has none. */
  waitKey: string | null;
}

/** The one place the Day 0 / 3 / 7 / 10 schedule is defined. */
export const SEQUENCE: readonly SequenceEmail[] = [
  { step: 1, day: 0, templateKey: "confirmation", sendKey: "send_confirmation_email", waitKey: null },
  { step: 2, day: 3, templateKey: "information", sendKey: "send_information_email", waitKey: "wait_until_day_3" },
  { step: 3, day: 7, templateKey: "followup", sendKey: "send_followup_email", waitKey: "wait_until_day_7" },
  { step: 4, day: 10, templateKey: "final", sendKey: "send_final_email", waitKey: "wait_until_day_10" },
];

export const TRIGGER_KEY = "enquiry_submitted";

/** Hours after the last scheduled email before a silent sequence is closed out. */
const COMPLETION_GRACE_HOURS = 48;

export function sequenceDurationHours(profile: AutomationProfile): number {
  // Test timers are minutes long, so the sweep can run soon after a test.
  return profile === "production" ? 10 * 24 + COMPLETION_GRACE_HOURS : 6;
}

/**
 * Length of each wait.
 *
 * Production waits are the gaps between send days: 3, 4 and 3 days. Test mode
 * replaces every gap with one short value so the journey finishes in minutes.
 */
export function waitDuration(
  email: SequenceEmail,
  previous: SequenceEmail,
  config: Pick<EnquiryConfig, "profile" | "testStepDelay">
): string {
  if (config.profile === "test") return config.testStepDelay;
  const days = email.day - previous.day;
  return days === 1 ? "1 day" : `${days} days`;
}

/**
 * The wait resumes only for a stop event carrying this run's enquiry ID.
 *
 * `value` as a `{ var }` reference is documented for filter rules, and the SDK
 * forwards `filterRule` untouched, but SDK 6.37 types `value` as a literal.
 */
const sameEnquiryFilter = {
  type: "rule",
  field: "event.enquiryId",
  operator: "eq",
  value: { var: "event.enquiryId" },
} as unknown as ConditionRule;

/**
 * Builds the single four-email workflow.
 *
 * Wait steps are `wait_for_event` with a timeout rather than `delay`. A `delay`
 * cannot be interrupted, and Resend has no API to cancel a single run. Here the
 * timeout path continues to the next email, and the `event_received` path has
 * no outgoing connection, so a stop event ends that customer's run and leaves
 * every other run alone.
 */
export function buildAutomationDefinition(
  config: EnquiryConfig = getConfig()
): Required<Pick<CreateAutomationOptions, "name" | "steps" | "connections">> {
  const missing = SEQUENCE.filter(({ templateKey }) => !config.templateIds[templateKey]).map(
    ({ templateKey }) => `RESEND_TEMPLATE_${templateKey.toUpperCase()}_ID`
  );
  if (missing.length > 0) {
    throw new Error(`Missing template IDs: ${missing.join(", ")}`);
  }

  const variables = {
    CUSTOMER_NAME: { var: "event.customerName" },
    ENQUIRY_ID: { var: "event.enquiryId" },
    SERVICE_REQUESTED: { var: "event.serviceRequested" },
    SERVICE_SUMMARY: { var: "event.serviceSummary" },
    SERVICE_BENEFITS: { var: "event.serviceBenefits" },
    SERVICE_URL: { var: "event.serviceUrl" },
    COMPANY_NAME: config.companyName,
    COMPANY_WEBSITE_URL: config.companyWebsiteUrl,
    COMPANY_PHONE: config.companyPhone,
    COMPANY_ADDRESS: config.companyAddress,
    REPLY_EMAIL: config.replyToEmail,
  };

  const steps: AutomationStep[] = [
    { key: TRIGGER_KEY, type: "trigger", config: { eventName: ENQUIRY_SUBMITTED_EVENT } },
  ];
  const connections: AutomationConnection[] = [];

  SEQUENCE.forEach((email, index) => {
    const previous = SEQUENCE[index - 1];

    if (email.waitKey && previous) {
      steps.push({
        key: email.waitKey,
        type: "wait_for_event",
        config: {
          eventName: ENQUIRY_STOP_EVENT,
          timeout: waitDuration(email, previous, config),
          filterRule: sameEnquiryFilter,
        },
      });
      connections.push({ from: previous.sendKey, to: email.waitKey, type: "default" });
      connections.push({ from: email.waitKey, to: email.sendKey, type: "timeout" });
    } else {
      connections.push({ from: TRIGGER_KEY, to: email.sendKey, type: "default" });
    }

    steps.push({
      key: email.sendKey,
      type: "send_email",
      config: {
        template: { id: config.templateIds[email.templateKey] as string, variables },
        from: `${config.companyName} <${config.senderEmail}>`,
        replyTo: config.replyToEmail,
      },
    });
  });

  return { name: AUTOMATION_NAMES[config.profile], steps, connections };
}

/** Lists the ways a deployed automation differs from the code. Empty means in sync. */
export function diffDefinition(
  remote: { steps: AutomationResponseStep[]; connections: AutomationResponseConnection[] },
  local: ReturnType<typeof buildAutomationDefinition>
): string[] {
  const differences: string[] = [];
  const remoteSteps = new Map(remote.steps.map((step) => [step.key, step]));

  for (const step of local.steps) {
    const found = remoteSteps.get(step.key);
    if (!found) {
      differences.push(`missing step: ${step.key}`);
      continue;
    }
    if (found.type !== step.type) {
      differences.push(`step ${step.key}: type is ${found.type}, expected ${step.type}`);
    }
    if (step.type === "wait_for_event" && found.config.timeout !== step.config.timeout) {
      differences.push(
        `step ${step.key}: timeout is ${String(found.config.timeout)}, expected ${step.config.timeout}`
      );
    }
    if (step.type === "send_email") {
      const template = found.config.template as { id?: string } | undefined;
      if (template?.id !== step.config.template.id) {
        differences.push(`step ${step.key}: template is ${template?.id}, expected ${step.config.template.id}`);
      }
    }
  }

  for (const key of remoteSteps.keys()) {
    if (!local.steps.some((step) => step.key === key)) differences.push(`unexpected step: ${key}`);
  }

  const edge = (c: { from: string; to: string; type?: string }) =>
    `${c.from} -> ${c.to} (${c.type ?? "default"})`;
  const remoteEdges = new Set(remote.connections.map(edge));
  const localEdges = new Set(local.connections.map(edge));
  for (const item of localEdges) if (!remoteEdges.has(item)) differences.push(`missing connection: ${item}`);
  for (const item of remoteEdges) if (!localEdges.has(item)) differences.push(`unexpected connection: ${item}`);

  return differences;
}
