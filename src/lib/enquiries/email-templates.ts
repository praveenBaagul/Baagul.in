import type { TemplateKey } from "./automation-definition";

/*
 * Source of truth for the four Resend templates. `npm run templates -- sync`
 * pushes them to Resend. Resend's own unsubscribe placeholder is used for the
 * three follow-ups, and the link only resolves in emails Resend sends.
 *
 * Colours come from src/app/globals.css. Layout is table-based with inline
 * styles because mail clients ignore most stylesheets.
 */

const COLORS = {
  canvas: "#f8f2e4",
  card: "#fffbf2",
  indigo: "#121a4a",
  marigold: "#f4a300",
  peacock: "#0e7c6b",
  terracotta: "#c8553d",
  slate: "#5f6485",
  border: "#dadff4",
};

const SERIF = "Georgia, 'Times New Roman', serif";
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const paragraph = (html: string) =>
  `<p style="margin:0 0 16px;font-family:${SANS};font-size:15px;line-height:1.6;color:${COLORS.indigo};">${html}</p>`;

const heading = (text: string) =>
  `<h1 style="margin:0 0 16px;font-family:${SERIF};font-size:26px;line-height:1.25;font-weight:normal;color:${COLORS.indigo};">${text}</h1>`;

const eyebrow = (text: string) =>
  `<p style="margin:0 0 8px;font-family:${SANS};font-size:11px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;color:${COLORS.terracotta};">${text}</p>`;

const button = (href: string, label: string) => `
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 24px;">
    <tr>
      <td style="border-radius:10px;background-color:${COLORS.marigold};border:2px solid ${COLORS.indigo};">
        <a href="${href}" style="display:inline-block;padding:12px 22px;font-family:${SANS};font-size:14px;font-weight:bold;color:${COLORS.indigo};text-decoration:none;">${label}</a>
      </td>
    </tr>
  </table>`;

const detailsCard = (rows: [string, string][]) => `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 20px;background-color:#ffffff;border:1px solid ${COLORS.border};border-radius:10px;">
    ${rows
      .map(
        ([label, value]) => `<tr>
      <td style="padding:12px 16px;border-bottom:1px solid ${COLORS.border};">
        <div style="font-family:${SANS};font-size:11px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;color:${COLORS.slate};">${label}</div>
        <div style="margin-top:4px;font-family:${SANS};font-size:15px;color:${COLORS.indigo};">${value}</div>
      </td>
    </tr>`
      )
      .join("")}
  </table>`;

function layout(options: { preview: string; body: string; unsubscribe: boolean }): string {
  const unsubscribe = options.unsubscribe
    ? `<br /><a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:${COLORS.slate};">Unsubscribe from follow-up emails</a>`
    : "";

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <title>{{{COMPANY_NAME}}}</title>
</head>
<body style="margin:0;padding:0;background-color:${COLORS.canvas};">
  <div style="display:none;max-height:0;overflow:hidden;">${options.preview}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${COLORS.canvas};">
    <tr>
      <td align="center" style="padding:24px 12px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;">
          <tr>
            <td style="padding:0 4px 16px;font-family:${SERIF};font-size:22px;color:${COLORS.indigo};">{{{COMPANY_NAME}}}</td>
          </tr>
          <tr>
            <td style="padding:28px 24px;background-color:${COLORS.card};border:2px solid ${COLORS.indigo};border-radius:14px;">
              ${options.body}
            </td>
          </tr>
          <tr>
            <td style="padding:18px 4px 0;font-family:${SANS};font-size:12px;line-height:1.6;color:${COLORS.slate};">
              {{{COMPANY_NAME}}}, {{{COMPANY_ADDRESS}}}<br />
              <a href="{{{COMPANY_WEBSITE_URL}}}" style="color:${COLORS.peacock};">{{{COMPANY_WEBSITE_URL}}}</a> &middot; {{{COMPANY_PHONE}}} &middot; <a href="mailto:{{{REPLY_EMAIL}}}" style="color:${COLORS.peacock};">{{{REPLY_EMAIL}}}</a>${unsubscribe}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

const textFooter = (unsubscribe: boolean) =>
  `--
{{{COMPANY_NAME}}}, {{{COMPANY_ADDRESS}}}
{{{COMPANY_WEBSITE_URL}}} | {{{COMPANY_PHONE}}} | {{{REPLY_EMAIL}}}${
    unsubscribe ? "\nUnsubscribe from follow-up emails: {{{RESEND_UNSUBSCRIBE_URL}}}" : ""
  }`;

export interface EnquiryTemplate {
  /** Stable handle used to find the template again on later syncs. */
  alias: string;
  name: string;
  subject: string;
  html: string;
  text: string;
}

export const ENQUIRY_TEMPLATES: Record<TemplateKey, EnquiryTemplate> = {
  confirmation: {
    alias: "enquiry-confirmation",
    name: "Enquiry 1: Confirmation (Day 0)",
    subject: "We've received your enquiry",
    html: layout({
      preview: "Thanks for getting in touch. Here are your enquiry details.",
      unsubscribe: false,
      body: `${eyebrow("Enquiry received")}
        ${heading("Thank you, {{{CUSTOMER_NAME}}}")}
        ${paragraph("We have received your enquiry and it is with our team now. Please keep your enquiry ID handy in case you contact us about it.")}
        ${detailsCard([
          ["Enquiry ID", "{{{ENQUIRY_ID}}}"],
          ["Service requested", "{{{SERVICE_REQUESTED}}}"],
        ])}
        ${paragraph("<strong>What happens next</strong>")}
        ${paragraph("1. Our team reviews what you have shared.<br />2. We contact you to talk through the details or ask any questions.<br />3. We follow up with suggested next steps for your project.")}
        ${paragraph("Want to add something? Just reply to this email.")}`,
    }),
    text: `Thank you, {{{CUSTOMER_NAME}}}

We have received your enquiry and it is with our team now. Please keep your enquiry ID handy in case you contact us about it.

Enquiry ID: {{{ENQUIRY_ID}}}
Service requested: {{{SERVICE_REQUESTED}}}

What happens next
1. Our team reviews what you have shared.
2. We contact you to talk through the details or ask any questions.
3. We follow up with suggested next steps for your project.

Want to add something? Just reply to this email.

${textFooter(false)}`,
  },

  information: {
    alias: "enquiry-information",
    name: "Enquiry 2: Service information (Day 3)",
    subject: "More about the service you asked about",
    html: layout({
      preview: "A closer look at how we can help with your enquiry.",
      unsubscribe: true,
      body: `${eyebrow("About your enquiry")}
        ${heading("A closer look at {{{SERVICE_REQUESTED}}}")}
        ${paragraph("Hi {{{CUSTOMER_NAME}}},")}
        ${paragraph("While your enquiry ({{{ENQUIRY_ID}}}) is with us, here is a little more about the service you asked about.")}
        ${paragraph("{{{SERVICE_SUMMARY}}}")}
        ${paragraph("<strong>How it can help</strong><br />{{{SERVICE_BENEFITS}}}")}
        ${button("{{{SERVICE_URL}}}", "See how we work")}
        ${paragraph("If you have a question in the meantime, reply to this email and it will reach our team.")}`,
    }),
    text: `Hi {{{CUSTOMER_NAME}}},

While your enquiry ({{{ENQUIRY_ID}}}) is with us, here is a little more about the service you asked about: {{{SERVICE_REQUESTED}}}.

{{{SERVICE_SUMMARY}}}

How it can help
{{{SERVICE_BENEFITS}}}

See how we work: {{{SERVICE_URL}}}

If you have a question in the meantime, reply to this email and it will reach our team.

${textFooter(true)}`,
  },

  followup: {
    alias: "enquiry-followup",
    name: "Enquiry 3: Follow-up (Day 7)",
    subject: "Any questions about your enquiry?",
    html: layout({
      preview: "Happy to answer questions or put together a quotation.",
      unsubscribe: true,
      body: `${eyebrow("Checking in")}
        ${heading("Can we help with anything?")}
        ${paragraph("Hi {{{CUSTOMER_NAME}}},")}
        ${paragraph("It has been about a week since you enquired about {{{SERVICE_REQUESTED}}} (enquiry {{{ENQUIRY_ID}}}), so we wanted to check in.")}
        ${paragraph("If you have questions, or you would like a quotation for your project, reply to this email and let us know what you need. A rough idea of your scope and timing is enough for us to get started.")}
        ${button("mailto:{{{REPLY_EMAIL}}}", "Ask a question")}
        ${paragraph("Prefer to talk? Call us on {{{COMPANY_PHONE}}}.")}`,
    }),
    text: `Hi {{{CUSTOMER_NAME}}},

It has been about a week since you enquired about {{{SERVICE_REQUESTED}}} (enquiry {{{ENQUIRY_ID}}}), so we wanted to check in.

If you have questions, or you would like a quotation for your project, reply to this email and let us know what you need. A rough idea of your scope and timing is enough for us to get started.

Prefer to talk? Call us on {{{COMPANY_PHONE}}}.

${textFooter(true)}`,
  },

  final: {
    alias: "enquiry-final",
    name: "Enquiry 4: Final check-in (Day 10)",
    subject: "One last check-in about your enquiry",
    html: layout({
      preview: "This is our last automated note about your enquiry.",
      unsubscribe: true,
      body: `${eyebrow("Final check-in")}
        ${heading("Should we keep this open?")}
        ${paragraph("Hi {{{CUSTOMER_NAME}}},")}
        ${paragraph("This is our last automated note about your enquiry for {{{SERVICE_REQUESTED}}} ({{{ENQUIRY_ID}}}). We don't want to fill your inbox, so we will stop here.")}
        ${paragraph("If you would still like to talk, reply to this email or call us on {{{COMPANY_PHONE}}}. If the timing isn't right, no action is needed, and you are welcome to get in touch whenever it suits you.")}
        ${paragraph("Thank you for considering {{{COMPANY_NAME}}}.")}`,
    }),
    text: `Hi {{{CUSTOMER_NAME}}},

This is our last automated note about your enquiry for {{{SERVICE_REQUESTED}}} ({{{ENQUIRY_ID}}}). We don't want to fill your inbox, so we will stop here.

If you would still like to talk, reply to this email or call us on {{{COMPANY_PHONE}}}. If the timing isn't right, no action is needed, and you are welcome to get in touch whenever it suits you.

Thank you for considering {{{COMPANY_NAME}}}.

${textFooter(true)}`,
  },
};

/** Variables declared on each template. Keys avoid Resend's reserved names. */
export const TEMPLATE_VARIABLES: { key: string; fallbackValue: string }[] = [
  { key: "CUSTOMER_NAME", fallbackValue: "there" },
  { key: "ENQUIRY_ID", fallbackValue: "your enquiry" },
  { key: "SERVICE_REQUESTED", fallbackValue: "our services" },
  { key: "SERVICE_SUMMARY", fallbackValue: "We would be happy to tell you more about how we can help." },
  { key: "SERVICE_BENEFITS", fallbackValue: "We will shape our work around what your project needs." },
  { key: "SERVICE_URL", fallbackValue: "https://www.baagul.in/services" },
  { key: "COMPANY_NAME", fallbackValue: "Baagul" },
  { key: "COMPANY_WEBSITE_URL", fallbackValue: "https://www.baagul.in" },
  { key: "COMPANY_PHONE", fallbackValue: "+91 7483737014" },
  { key: "COMPANY_ADDRESS", fallbackValue: "Bengaluru" },
  { key: "REPLY_EMAIL", fallbackValue: "support@baagul.in" },
];

/** Fills a template locally, for confirmations sent outside the automation. */
export function renderTemplate(source: string, variables: Record<string, string>): string {
  return source.replace(/\{\{\{([A-Z_]+)\}\}\}/g, (placeholder, key: string) =>
    key in variables ? variables[key] : placeholder
  );
}

/** Which sequence step a webhook belongs to when only the subject identifies it. */
export function stepForSubject(subject: string | undefined): 1 | 2 | 3 | 4 | null {
  const order: TemplateKey[] = ["confirmation", "information", "followup", "final"];
  const index = order.findIndex((key) => ENQUIRY_TEMPLATES[key].subject === subject);
  return index === -1 ? null : ((index + 1) as 1 | 2 | 3 | 4);
}
