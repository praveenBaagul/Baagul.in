import { SITE_URL } from "../site";

export const ENQUIRY_SUBMITTED_EVENT = "enquiry.submitted";
export const ENQUIRY_STOP_EVENT = "enquiry.followup_stopped";

/** Which set of timers and which automation name the code is working with. */
export type AutomationProfile = "production" | "test";

function env(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

function csv(name: string): string[] {
  return (env(name) ?? "")
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

/** Read on every call so tests and scripts see the current environment. */
export function getConfig() {
  // Anything other than an explicit "production" is test mode, so a preview
  // deployment or a laptop can never email real customers by accident.
  const profile: AutomationProfile =
    env("EMAIL_AUTOMATION_ENV") === "production" ? "production" : "test";

  const senderEmail =
    env("RESEND_FROM_EMAIL") ?? env("CONTACT_SENDER_EMAIL") ?? "onboarding@resend.dev";
  const adminEmail = env("CONTACT_RECEIVER_EMAIL") ?? "support@baagul.in";

  return {
    profile,
    apiKey: env("RESEND_API_KEY"),
    webhookSecret: env("RESEND_WEBHOOK_SECRET"),
    automationId: env("RESEND_AUTOMATION_ID"),
    templateIds: {
      confirmation: env("RESEND_TEMPLATE_CONFIRMATION_ID"),
      information: env("RESEND_TEMPLATE_INFORMATION_ID"),
      followup: env("RESEND_TEMPLATE_FOLLOWUP_ID"),
      final: env("RESEND_TEMPLATE_FINAL_ID"),
    },
    senderEmail,
    replyToEmail: env("RESEND_REPLY_TO_EMAIL") ?? adminEmail,
    adminEmail,
    /** Used when Resend refuses a send because the sending domain is unverified. */
    adminFallbackEmail: env("CONTACT_FALLBACK_EMAIL") ?? "praveen@baagul.com",
    /** Where customer replies received through Resend Inbound are forwarded. */
    inboundForwardTo: env("RESEND_INBOUND_FORWARD_TO") ?? adminEmail,
    companyName: env("COMPANY_NAME") ?? "Baagul",
    companyWebsiteUrl: (env("COMPANY_WEBSITE_URL") ?? SITE_URL).replace(/\/$/, ""),
    companyPhone: env("COMPANY_PHONE") ?? "+91 7483737014",
    companyAddress: env("COMPANY_ADDRESS") ?? "Hustlehub Tech Park, HSR Layout, Bengaluru",
    databaseUrl: env("DATABASE_URL"),
    adminApiToken: env("ADMIN_API_TOKEN"),
    cronSecret: env("CRON_SECRET"),
    rateLimitSalt: env("RATE_LIMIT_SALT") ?? "",
    testRecipients: csv("TEST_RECIPIENT_ALLOWLIST"),
    testStepDelay: env("RESEND_TEST_STEP_DELAY") ?? "5 minutes",
  };
}

export type EnquiryConfig = ReturnType<typeof getConfig>;

/**
 * True when this deployment may email the address. In test mode that means
 * Resend's `*@resend.dev` sandbox addresses plus the explicit allowlist.
 */
export function canEmailRecipient(email: string, config: EnquiryConfig = getConfig()): boolean {
  if (config.profile === "production") return true;
  const address = email.toLowerCase();
  return address.endsWith("@resend.dev") || config.testRecipients.includes(address);
}
