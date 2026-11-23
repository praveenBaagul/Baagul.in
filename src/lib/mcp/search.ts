import { SITE_URL } from "@/lib/site";
import {
  CAREERS_PAGE_URL,
  CASE_STUDIES,
  GENERAL_FAQS,
  getService,
  JOB_OPENINGS,
  SERVICE_SLUGS,
  STUDIO_INFO,
  TEAM,
  TEAM_PAGE_URL,
} from "./content";
import { readPublicText } from "./resources";

/**
 * Keyword search over everything the MCP server knows. The index is small
 * (a few hundred short documents), so it is built in memory on first use and
 * scanned in full for each query. To make new content searchable, add it to
 * buildDocuments().
 */

export type SearchResultType = "service" | "process" | "faq" | "case_study" | "team" | "job" | "studio" | "document";

interface SearchDocument {
  type: SearchResultType;
  title: string;
  url: string;
  text: string;
}

export interface SearchResult {
  type: SearchResultType;
  title: string;
  url: string;
  snippet: string;
}

const STOP_WORDS = new Set(
  "a an and are as at be by can do does for from has have how i in is it of on or our the their to we what when which who will with you your".split(
    " "
  )
);

/** Lowercase words, without stop words, with a plural "s" removed so "logos" finds "logo". */
function tokenize(text: string): string[] {
  return (text.toLowerCase().match(/[a-z0-9]+/g) ?? [])
    .filter((word) => !STOP_WORDS.has(word))
    .map((word) => (word.length > 3 && word.endsWith("s") && !word.endsWith("ss") ? word.slice(0, -1) : word));
}

/** Splits llms-full.txt into one document per "## " section. */
function sectionsOf(markdown: string): SearchDocument[] {
  return markdown
    .split(/^## /m)
    .slice(1)
    .map((section) => {
      const [heading, ...body] = section.split("\n");
      return {
        type: "document" as const,
        title: heading.trim(),
        url: `${SITE_URL}/llms-full.txt`,
        text: body.join("\n").replace(/[#*`>-]+/g, " ").replace(/\s+/g, " ").trim(),
      };
    });
}

async function buildDocuments(): Promise<SearchDocument[]> {
  const documents: SearchDocument[] = [];

  for (const slug of SERVICE_SLUGS) {
    const service = getService(slug)!;
    documents.push({
      type: "service",
      title: service.name,
      url: service.url,
      text: `${service.description} Deliverables: ${service.deliverables.join(", ")}.`,
    });
    if (service.process.length > 0) {
      documents.push({
        type: "process",
        title: `${service.name}: process`,
        url: service.url,
        text: service.process.map((step, index) => `${index + 1}. ${step.title}: ${step.description}`).join(" "),
      });
    }
    for (const faq of service.faqs) {
      documents.push({ type: "faq", title: faq.question, url: service.url, text: faq.answer });
    }
  }

  for (const faq of GENERAL_FAQS) {
    documents.push({ type: "faq", title: faq.question, url: STUDIO_INFO.contact_page, text: faq.answer });
  }

  for (const study of CASE_STUDIES) {
    documents.push({ type: "case_study", title: study.client, url: study.url, text: study.description });
  }

  for (const member of TEAM) {
    documents.push({
      type: "team",
      title: member.name,
      url: member.profile_url ?? TEAM_PAGE_URL,
      text: `${member.role}. ${member.focus}.`,
    });
  }

  for (const opening of JOB_OPENINGS) {
    const lists = Object.values(opening).filter(Array.isArray).flat().join(" ");
    documents.push({
      type: "job",
      title: opening.title,
      url: opening.url,
      text: `Job opening, hiring, career. ${opening.employment_type}, ${opening.location}, ${opening.work_mode}. ${opening.summary} ${lists}`,
    });
  }

  documents.push({
    type: "studio",
    title: `${STUDIO_INFO.name}: contact details`,
    url: STUDIO_INFO.contact_page,
    text:
      `${STUDIO_INFO.tagline}. Address, office, location: ${STUDIO_INFO.headquarters}. Email: ${STUDIO_INFO.email}. ` +
      `Phone: ${STUDIO_INFO.phone}. Operating hours: ${STUDIO_INFO.operating_hours}. Careers: ${CAREERS_PAGE_URL}.`,
  });

  try {
    documents.push(...sectionsOf(await readPublicText("llms-full.txt")));
  } catch {
    // The structured content above is still searchable without the file.
  }

  return documents;
}

interface IndexedDocument extends SearchDocument {
  titleTokens: Set<string>;
  textTokens: Map<string, number>;
}

let index: Promise<IndexedDocument[]> | undefined;

function getIndex(): Promise<IndexedDocument[]> {
  index ??= buildDocuments().then((documents) =>
    documents.map((document) => {
      const textTokens = new Map<string, number>();
      for (const token of tokenize(document.text)) textTokens.set(token, (textTokens.get(token) ?? 0) + 1);
      return { ...document, titleTokens: new Set(tokenize(document.title)), textTokens };
    })
  );
  return index;
}

const SNIPPET_LENGTH = 240;

/** The part of the text around the first matching word. */
function snippet(text: string, tokens: string[]): string {
  if (text.length <= SNIPPET_LENGTH) return text;
  const lower = text.toLowerCase();
  const positions = tokens.map((token) => lower.indexOf(token)).filter((position) => position >= 0);
  const start = Math.max(0, (positions.length > 0 ? Math.min(...positions) : 0) - 60);
  const end = Math.min(text.length, start + SNIPPET_LENGTH);
  return `${start > 0 ? "…" : ""}${text.slice(start, end).trim()}${end < text.length ? "…" : ""}`;
}

export const MAX_SEARCH_RESULTS = 10;

export async function searchSite(query: string, limit = 5): Promise<SearchResult[]> {
  const tokens = [...new Set(tokenize(query))];
  if (tokens.length === 0) return [];
  const phrase = query.trim().toLowerCase();

  const scored = (await getIndex())
    .map((document) => {
      let matched = 0;
      let score = 0;
      for (const token of tokens) {
        const inTitle = document.titleTokens.has(token);
        const inText = document.textTokens.get(token) ?? 0;
        if (inTitle || inText > 0) matched++;
        // A word in the title says more than one in the body; repeats count a little.
        score += (inTitle ? 3 : 0) + Math.min(inText, 3);
      }
      if (phrase.includes(" ") && `${document.title} ${document.text}`.toLowerCase().includes(phrase)) score += 4;
      return { document, matched, score };
    })
    .filter((entry) => entry.matched > 0)
    // Documents matching more of the query's words come first, then the stronger match.
    .sort((a, b) => b.matched - a.matched || b.score - a.score);

  return scored.slice(0, Math.min(Math.max(1, limit), MAX_SEARCH_RESULTS)).map(({ document }) => ({
    type: document.type,
    title: document.title,
    url: document.url,
    snippet: snippet(document.text, tokens),
  }));
}
