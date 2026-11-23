import { readFile } from "node:fs/promises";
import path from "node:path";
import { SITE_URL } from "@/lib/site";
import { getService } from "./content";

/**
 * MCP resources:
 * - the site's llms.txt files, read from public/ so the website and the MCP
 *   server always hand out the same text;
 * - one JSON document per service, through the baagul://service/{slug} template.
 */

interface FileResource {
  /** File name inside public/. */
  file: string;
  name: string;
  title: string;
  description: string;
}

const FILE_RESOURCES: FileResource[] = [
  {
    file: "llms.txt",
    name: "llms.txt",
    title: "Baagul LLP summary",
    description: "Short overview of Baagul LLP: main site sections, the service list and contact details.",
  },
  {
    file: "llms-full.txt",
    name: "llms-full.txt",
    title: "Baagul LLP full context",
    description: "Complete studio context: overview, technical standards, the detailed service catalogue and case studies.",
  },
];

const MARKDOWN = "text/markdown";
const SERVICE_URI_PREFIX = "baagul://service/";

const uriFor = (resource: FileResource) => `${SITE_URL}/${resource.file}`;

/** The resource list as clients see it. */
export const RESOURCES = FILE_RESOURCES.map((resource) => ({
  uri: uriFor(resource),
  name: resource.name,
  title: resource.title,
  description: resource.description,
  mimeType: MARKDOWN,
}));

export const RESOURCE_TEMPLATES = [
  {
    uriTemplate: `${SERVICE_URI_PREFIX}{slug}`,
    name: "service",
    title: "Service dossier",
    description:
      "Everything about one Baagul service as JSON: description, deliverables, delivery process, FAQs and page URL. " +
      "The slug is one of the values list_services returns (e.g. baagul://service/web-design).",
    mimeType: "application/json",
  },
];

const cache = new Map<string, Promise<string>>();

/** Reads a file from public/ once per server process. A failed read is retried next time. */
export function readPublicText(file: string): Promise<string> {
  let text = cache.get(file);
  if (!text) {
    text = readFile(path.join(process.cwd(), "public", file), "utf8");
    text.catch(() => cache.delete(file));
    cache.set(file, text);
  }
  return text;
}

/** Returns null when the URI is not one of ours. */
export async function readResource(uri: unknown) {
  if (typeof uri !== "string") return null;

  if (uri.startsWith(SERVICE_URI_PREFIX)) {
    const service = getService(uri.slice(SERVICE_URI_PREFIX.length));
    if (!service) return null;
    return { contents: [{ uri, mimeType: "application/json", text: JSON.stringify(service, null, 2) }] };
  }

  const resource = FILE_RESOURCES.find((candidate) => uriFor(candidate) === uri);
  if (!resource) return null;
  return { contents: [{ uri, mimeType: MARKDOWN, text: await readPublicText(resource.file) }] };
}
