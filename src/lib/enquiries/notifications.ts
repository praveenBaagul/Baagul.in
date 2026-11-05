import { canEmailRecipient, getConfig } from "./config";
import { ENQUIRY_TEMPLATES, renderTemplate } from "./email-templates";
import { getResend, isResendConfigured } from "./resend-client";
import { escapeHtml, sanitizeDisplayName, singleLine } from "./sanitize";
import { describeServices } from "./service-info";

const UNVERIFIED_DOMAIN_ERROR = "You can only send testing emails to your own email address";

export interface AdminNotice {
  enquiryId: string | null;
  fullName: string;
  email: string;
  phone: string | null;
  company: string | null;
  budget: string;
  services: string[];
  message: string;
}

function renderAdminEmail(notice: AdminNotice): string {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding: 8px 0; color: #64748b; font-weight: bold; vertical-align: top;">${label}:</td>
      <td style="padding: 8px 0; color: #121a4a;">${escapeHtml(value)}</td>
    </tr>`;

  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 2px solid #121a4a; border-radius: 12px; background-color: #faf9f6;">
      <div style="margin-bottom: 20px; border-bottom: 2px solid #121a4a; padding-bottom: 12px;">
        <span style="background-color: #f4a261; color: #121a4a; font-weight: bold; font-size: 11px; padding: 4px 8px; border-radius: 4px; text-transform: uppercase;">New Lead Received</span>
        <h1 style="color: #121a4a; font-size: 22px; margin: 12px 0 4px 0;">New Client Enquiry</h1>
      </div>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
        ${notice.enquiryId ? row("Enquiry ID", notice.enquiryId) : ""}
        ${row("Name", notice.fullName)}
        ${row("Email", notice.email)}
        ${row("Phone", notice.phone ?? "Not provided")}
        ${row("Company / Web", notice.company ?? "Not provided")}
        ${row("Budget Range", notice.budget)}
        ${row("Services", notice.services.join(", "))}
      </table>
      <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
        <div style="font-size: 12px; font-weight: bold; color: #64748b; text-transform: uppercase; margin-bottom: 8px;">Scope / Message:</div>
        <p style="color: #121a4a; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${escapeHtml(notice.message)}</p>
      </div>
      <div style="text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 12px;">
        Received from Baagul Contact Form
      </div>
    </div>`;
}

/** Sends the team notification. Throws on failure so callers can retry or report. */
export async function notifyAdmin(notice: AdminNotice): Promise<void> {
  const config = getConfig();
  const resend = getResend();
  const subject = `New Project Enquiry: ${singleLine(notice.fullName)} (${notice.budget})`;
  const message = {
    from: `Baagul Inquiries <${config.senderEmail}>`,
    replyTo: notice.email,
    html: renderAdminEmail(notice),
    tags: [{ name: "kind", value: "admin_notification" }],
  };
  const idempotencyKey = notice.enquiryId ? `enquiry-notify/${notice.enquiryId}` : undefined;

  let result = await resend.emails.send(
    { ...message, to: [config.adminEmail], subject },
    { idempotencyKey }
  );

  // Before the sending domain is verified, Resend only delivers to the account owner.
  if (result.error?.message?.includes(UNVERIFIED_DOMAIN_ERROR)) {
    console.warn("Resend test mode: sending the enquiry notification to the fallback address.");
    result = await resend.emails.send(
      { ...message, to: [config.adminFallbackEmail], subject: `[TEST FALLBACK] ${subject}` },
      idempotencyKey ? { idempotencyKey: `${idempotencyKey}/fallback` } : undefined
    );
  }

  if (result.error) throw new Error(`Admin notification failed: ${result.error.message}`);
}

/**
 * Sends the Day 0 confirmation outside the automation, for enquiries that do
 * not start a sequence. Failure is logged and never fails a submission.
 */
export async function sendDirectConfirmation(enquiry: {
  id: string;
  customer_name: string;
  email: string;
  services: string[];
}): Promise<void> {
  const config = getConfig();
  if (!isResendConfigured() || !canEmailRecipient(enquiry.email, config)) return;

  const service = describeServices(enquiry.services, config.companyWebsiteUrl);
  const template = ENQUIRY_TEMPLATES.confirmation;
  const variables = {
    CUSTOMER_NAME: escapeHtml(sanitizeDisplayName(enquiry.customer_name)),
    ENQUIRY_ID: enquiry.id,
    SERVICE_REQUESTED: escapeHtml(service.serviceRequested),
    COMPANY_NAME: escapeHtml(config.companyName),
    COMPANY_WEBSITE_URL: config.companyWebsiteUrl,
    COMPANY_PHONE: escapeHtml(config.companyPhone),
    COMPANY_ADDRESS: escapeHtml(config.companyAddress),
    REPLY_EMAIL: config.replyToEmail,
  };

  try {
    const { error } = await getResend().emails.send(
      {
        from: `${config.companyName} <${config.senderEmail}>`,
        to: [enquiry.email],
        replyTo: config.replyToEmail,
        subject: template.subject,
        html: renderTemplate(template.html, variables),
        text: renderTemplate(template.text, variables),
        tags: [
          { name: "kind", value: "direct_confirmation" },
          { name: "enquiry_id", value: enquiry.id },
        ],
      },
      { idempotencyKey: `enquiry-confirm/${enquiry.id}` }
    );
    if (error) console.warn(`Direct confirmation skipped for ${enquiry.id}: ${error.message}`);
  } catch (error) {
    console.warn(`Direct confirmation skipped for ${enquiry.id}:`, error);
  }
}
