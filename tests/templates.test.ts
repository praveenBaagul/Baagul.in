import { describe, expect, it } from "vitest";
import {
  ENQUIRY_TEMPLATES,
  TEMPLATE_VARIABLES,
  renderTemplate,
} from "@/lib/enquiries/email-templates";
import { sanitizeDisplayName } from "@/lib/enquiries/sanitize";
import { SERVICE_INFO, describeServices } from "@/lib/enquiries/service-info";
import { serviceOptions } from "@/lib/validations/enquiry";

const RESERVED = ["FIRST_NAME", "LAST_NAME", "EMAIL", "UNSUBSCRIBE_URL", "contact", "this"];
const templates = Object.entries(ENQUIRY_TEMPLATES);

const placeholders = (source: string) =>
  [...source.matchAll(/\{\{\{([A-Za-z_]+)\}\}\}/g)].map((match) => match[1]);

describe("email templates", () => {
  it("declares every variable used, and no reserved names", () => {
    const declared = TEMPLATE_VARIABLES.map(({ key }) => key);
    for (const [, template] of templates) {
      for (const name of placeholders(template.html + template.text)) {
        if (name !== "RESEND_UNSUBSCRIBE_URL") expect(declared).toContain(name);
      }
    }
    for (const key of declared) expect(RESERVED).not.toContain(key);
  });

  it("includes an unsubscribe link in both versions of the follow-ups only", () => {
    const { confirmation, ...followUps } = ENQUIRY_TEMPLATES;
    expect(confirmation.html + confirmation.text).not.toContain("RESEND_UNSUBSCRIBE_URL");
    for (const template of Object.values(followUps)) {
      expect(template.html).toContain("{{{RESEND_UNSUBSCRIBE_URL}}}");
      expect(template.text).toContain("{{{RESEND_UNSUBSCRIBE_URL}}}");
    }
  });

  it("gives every template the company, reply address, service and enquiry ID", () => {
    for (const [, template] of templates) {
      for (const source of [template.html, template.text]) {
        for (const name of ["COMPANY_NAME", "REPLY_EMAIL", "SERVICE_REQUESTED", "ENQUIRY_ID"]) {
          expect(source).toContain(`{{{${name}}}}`);
        }
      }
    }
  });

  it("is mobile friendly: fluid width, viewport tag, no fixed page width", () => {
    for (const [, template] of templates) {
      expect(template.html).toContain('name="viewport"');
      expect(template.html).toContain("max-width:560px");
      expect(template.html).not.toMatch(/width="\d{3,}"/);
    }
  });

  it("makes no discount, guarantee or testimonial claims", () => {
    const visibleCopy = Object.values(ENQUIRY_TEMPLATES).map(({ subject, text }) => subject + text);
    const copy = JSON.stringify([visibleCopy, SERVICE_INFO]).toLowerCase();
    for (const claim of ["guarantee", "discount", "% off", "testimonial", "#1", "best in", "24 hours"]) {
      expect(copy).not.toContain(claim);
    }
  });

  it("renders known variables and leaves others in place", () => {
    expect(renderTemplate("{{{CUSTOMER_NAME}}} {{{OTHER}}}", { CUSTOMER_NAME: "Asha" })).toBe("Asha {{{OTHER}}}");
  });

  it("does not expand replacement patterns inside a value", () => {
    expect(renderTemplate("{{{CUSTOMER_NAME}}}", { CUSTOMER_NAME: "$& $1" })).toBe("$& $1");
  });
});

describe("service information", () => {
  it("covers every option on the form", () => {
    for (const service of serviceOptions) expect(SERVICE_INFO[service]).toBeDefined();
  });

  it("links to the service page for one service and the overview for several", () => {
    const site = "https://www.baagul.in";
    expect(describeServices(["Logo & Brand"], site).serviceUrl).toBe(`${site}/services/logo-design`);
    expect(describeServices(["Logo & Brand", "E-Commerce"], site)).toMatchObject({
      serviceRequested: "Logo & Brand, E-Commerce",
      serviceUrl: `${site}/services`,
    });
  });
});

describe("name sanitizing", () => {
  it.each([
    ["Asha Rao", "Asha Rao"],
    ["Dr. Rao", "Dr. Rao"],
    ["O'Brien-Smith", "O'Brien-Smith"],
    ["ರವಿ ಕುಮಾರ್", "ರವಿ ಕುಮಾರ್"],
    ["<script>alert(1)</script>", "script alert 1 script"],
    ["visit evil.example now", "visit evil example now"],
    ["https://evil.example/x", "https evil example x"],
    ["<<<>>>", "there"],
  ])("%s becomes %s", (input, expected) => {
    expect(sanitizeDisplayName(input)).toBe(expected);
  });
});
