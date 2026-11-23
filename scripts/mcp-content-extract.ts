import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

/**
 * Reads the copy the website already shows (FAQs, process steps, team, job
 * openings) out of the page components and renders it as the data file the MCP
 * server uses. The components stay the single source: after changing one, run
 * `npm run mcp:sync`. tests/mcp-content.test.ts fails if the file is stale.
 */

const ROOT = path.resolve(__dirname, "..");
export const GENERATED_FILE = path.join(ROOT, "src/lib/mcp/content/generated.ts");

/** Where each service keeps its FAQ and process components. Add new services here. */
const SERVICE_SOURCES: Record<string, { faq?: string; process?: string; processIsInlineJsx?: boolean }> = {
  "web-design": { faq: "web-design/WebDesignFAQ.tsx", process: "web-design/WebDesignProcess.tsx" },
  "seo-optimizations": { faq: "seo-optimization/SeoFAQ.tsx", process: "seo-optimization/SeoProcess.tsx" },
  "logo-design": {
    faq: "logo-design/LogoDesignFAQ.tsx",
    process: "logo-design/LogoDesignProcess.tsx",
    processIsInlineJsx: true,
  },
  "guest-post": { faq: "guest-post/GuestPostFAQ.tsx", process: "guest-post/GuestPostProcess.tsx" },
  "graphics-design": { process: "graphics-design/GraphicsDesignProcess.tsx" },
  "e-commerce-solutions": { faq: "e-commerce/EcommerceFAQ.tsx", process: "e-commerce/EcommerceProcess.tsx" },
  "wordpress-development": {
    faq: "wordpress-development/WordPressFAQ.tsx",
    process: "wordpress-development/WordPressProcess.tsx",
  },
  "paid-promotions": { process: "paid-promotions/PaidPromotionProcess.tsx" },
  "video-editing": { faq: "video-editing/VideoEditingFAQ.tsx", process: "video-editing/VideoEditingProcess.tsx" },
  "app-development": {
    faq: "app-development/AppDevelopmentFAQ.tsx",
    process: "app-development/AppDevelopmentProcess.tsx",
  },
};

const read = (relative: string) => readFileSync(path.join(ROOT, relative), "utf8").replace(/\r\n/g, "\n");
const component = (relative: string) => read(`src/components/${relative}`);

const STRING_LITERAL = `"(?:[^"\\\\]|\\\\.)*"|'(?:[^'\\\\]|\\\\.)*'`;

function parseLiteral(literal: string): string {
  const inner = literal.slice(1, -1);
  if (literal.startsWith('"')) return JSON.parse(literal) as string;
  return JSON.parse(`"${inner.replace(/\\'/g, "'").replace(/"/g, '\\"')}"`) as string;
}

/** The text between `const name = [` and its closing `];`. */
function arrayBody(source: string, name: string, file: string): string {
  const match = new RegExp(`const ${name}\\b[^=]*=\\s*\\[([\\s\\S]*?)\\n\\];`).exec(source);
  if (!match) throw new Error(`${file}: could not find the "${name}" array.`);
  return match[1];
}

/** Splits an array body into the source text of each top-level object. */
function topLevelObjects(body: string): string[] {
  const objects: string[] = [];
  let depth = 0;
  let start = -1;
  let quote: string | null = null;

  for (let i = 0; i < body.length; i++) {
    const char = body[i];
    if (quote) {
      if (char === "\\") i++;
      else if (char === quote) quote = null;
    } else if (char === '"' || char === "'" || char === "`") {
      quote = char;
    } else if (char === "{") {
      if (depth === 0) start = i;
      depth++;
    } else if (char === "}") {
      depth--;
      if (depth === 0) objects.push(body.slice(start, i + 1));
    }
  }
  return objects;
}

/** The first string value found under any of the given keys. */
function field(objectSource: string, keys: string[]): string | undefined {
  const match = new RegExp(`\\b(?:${keys.join("|")})\\s*:\\s*(${STRING_LITERAL})`).exec(objectSource);
  return match ? parseLiteral(match[1]).trim() : undefined;
}

function required(objectSource: string, keys: string[], file: string): string {
  const value = field(objectSource, keys);
  if (!value) throw new Error(`${file}: an entry has no ${keys.join("/")} value.`);
  return value;
}

function extractFaqs(relative: string) {
  const source = component(relative);
  return topLevelObjects(arrayBody(source, "faqs", relative)).map((object) => ({
    // Some pages number their questions ("1. ..."); the number is presentation.
    question: required(object, ["q", "question"], relative).replace(/^\d+\.\s*/, ""),
    answer: required(object, ["a", "answer"], relative),
  }));
}

function extractSteps(relative: string) {
  const source = component(relative);
  return topLevelObjects(arrayBody(source, "steps", relative)).map((object) => ({
    title: required(object, ["title"], relative),
    description: required(object, ["desc", "description"], relative),
  }));
}

const jsxText = (text: string) =>
  text
    .replace(/\s+/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&apos;|&#39;|&rsquo;/g, "'")
    .replace(/&quot;/g, '"')
    .trim();

/** For a process written straight into JSX: each <h3> followed by its <p>. */
function extractInlineSteps(relative: string) {
  const source = component(relative);
  const pattern = /<h3[^>]*>([^<]+)<\/h3>\s*<p[^>]*>([^<]+)<\/p>/g;
  const steps = [...source.matchAll(pattern)].map((match) => ({
    title: jsxText(match[1]),
    description: jsxText(match[2]),
  }));
  if (steps.length === 0) throw new Error(`${relative}: no process steps found.`);
  return steps;
}

function extractServiceDetails() {
  return Object.fromEntries(
    Object.entries(SERVICE_SOURCES).map(([slug, sources]) => [
      slug,
      {
        process: !sources.process
          ? []
          : sources.processIsInlineJsx
            ? extractInlineSteps(sources.process)
            : extractSteps(sources.process),
        faqs: sources.faq ? extractFaqs(sources.faq) : [],
      },
    ])
  );
}

function extractTeam() {
  const file = "TeamSection.tsx";
  return topLevelObjects(arrayBody(component(file), "members", file)).map((object) => ({
    name: required(object, ["name"], file),
    role: required(object, ["role"], file),
    focus: required(object, ["domain"], file),
    profilePath: field(object, ["profileUrl"]) ?? null,
    linkedinUrl: field(object, ["linkedinUrl"]) ?? null,
  }));
}

const snakeCase = (name: string) => name.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

/** Every `const name = ["...", "..."]` list of plain strings in a job page. */
function extractStringLists(source: string): Record<string, string[]> {
  const pattern = new RegExp(`const (\\w+)\\s*=\\s*\\[((?:\\s*(?:${STRING_LITERAL}),?)+)\\s*\\];`, "g");
  return Object.fromEntries(
    [...source.matchAll(pattern)].map((match) => [
      snakeCase(match[1]),
      [...match[2].matchAll(new RegExp(STRING_LITERAL, "g"))].map((literal) => parseLiteral(literal[0])),
    ])
  );
}

function extractJobOpenings() {
  const file = "career/CareerOpeningsList.tsx";
  return topLevelObjects(arrayBody(component(file), "roles", file)).map((object) => {
    const pagePath = field(object, ["href"]) ?? null;
    const pageFile = pagePath ? `src/app${pagePath}/page.tsx` : null;
    const page = pageFile && existsSync(path.join(ROOT, pageFile)) ? read(pageFile) : "";

    return {
      id: required(object, ["id"], file),
      title: required(object, ["title"], file),
      employmentType: required(object, ["employmentType"], file),
      location: required(object, ["location"], file),
      workMode: required(object, ["region"], file),
      summary: required(object, ["description"], file),
      pagePath,
      applyUrl: new RegExp(`const applyFormUrl\\s*=\\s*(${STRING_LITERAL})`).exec(page)?.[1].slice(1, -1) ?? null,
      datePosted: field(page, ["datePosted"]) ?? null,
      details: extractStringLists(page),
    };
  });
}

/** JSON, but with plain identifiers left unquoted so the file reads like the rest of the code. */
const literal = (value: unknown) => JSON.stringify(value, null, 2).replace(/^(\s*)"([A-Za-z_]\w*)":/gm, "$1$2:");

export function renderGeneratedFile(): string {
  return `// Generated by \`npm run mcp:sync\` from the page components. Do not edit by hand:
// change the component, then run the command again.
import type { Faq, JobOpeningSource, ServiceDetails, TeamMemberSource } from "./types";

export const SERVICE_DETAILS: Record<string, ServiceDetails> = ${literal(extractServiceDetails())};

export const GENERAL_FAQS: Faq[] = ${literal(extractFaqs("contact/FAQAndMapSection.tsx"))};

export const TEAM_SOURCE: TeamMemberSource[] = ${literal(extractTeam())};

export const JOB_OPENINGS_SOURCE: JobOpeningSource[] = ${literal(extractJobOpenings())};
`;
}
