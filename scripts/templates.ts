import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { SEQUENCE, type TemplateKey } from "../src/lib/enquiries/automation-definition";
import { getConfig } from "../src/lib/enquiries/config";
import { ENQUIRY_TEMPLATES, TEMPLATE_VARIABLES } from "../src/lib/enquiries/email-templates";
import { getResend } from "../src/lib/enquiries/resend-client";

const USAGE = `Usage: npm run templates -- <command>

  sync     Create or update the four templates in Resend and publish them.
  export   Write the HTML and text versions to emails/ for review.`;

const variables = TEMPLATE_VARIABLES.map(({ key, fallbackValue }) => ({
  key,
  type: "string" as const,
  fallbackValue,
}));

async function syncTemplate(key: TemplateKey): Promise<string> {
  const resend = getResend();
  const config = getConfig();
  const template = ENQUIRY_TEMPLATES[key];
  const content = {
    name: template.name,
    subject: template.subject,
    html: template.html,
    text: template.text,
    from: `${config.companyName} <${config.senderEmail}>`,
    replyTo: config.replyToEmail,
    variables,
  };

  const existing = await resend.templates.get(template.alias);
  let id = existing.data?.id;

  if (id) {
    const { error } = await resend.templates.update(id, content);
    if (error) throw new Error(`Update ${template.alias} failed: ${error.message}`);
  } else {
    const { data, error } = await resend.templates.create({ ...content, alias: template.alias });
    if (error || !data) throw new Error(`Create ${template.alias} failed: ${error?.message}`);
    id = data.id;
  }

  const published = await resend.templates.publish(id);
  if (published.error) throw new Error(`Publish ${template.alias} failed: ${published.error.message}`);
  return id;
}

async function main() {
  const command = process.argv[2];

  if (command === "sync") {
    const lines: string[] = [];
    for (const { templateKey } of SEQUENCE) {
      const id = await syncTemplate(templateKey);
      console.log(`Published ${ENQUIRY_TEMPLATES[templateKey].alias}`);
      lines.push(`RESEND_TEMPLATE_${templateKey.toUpperCase()}_ID=${id}`);
    }
    console.log(`\nAdd these to your environment:\n\n${lines.join("\n")}`);
    return;
  }

  if (command === "export") {
    const directory = path.join(process.cwd(), "emails");
    mkdirSync(directory, { recursive: true });
    for (const { step, templateKey } of SEQUENCE) {
      const template = ENQUIRY_TEMPLATES[templateKey];
      const base = path.join(directory, `${step}-${templateKey}`);
      writeFileSync(`${base}.html`, template.html);
      writeFileSync(`${base}.txt`, template.text);
    }
    console.log(`Wrote ${SEQUENCE.length * 2} files to emails/`);
    return;
  }

  console.log(USAGE);
  process.exitCode = 1;
}

main()
  .then(() => process.exit(process.exitCode ?? 0))
  .catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
