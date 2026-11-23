import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

/**
 * Last-modified dates for the sitemap.
 *
 * Each route's date is the day its content last changed: its page file plus
 * every component that page imports (layout chrome such as Header and Footer
 * excluded, since a footer tweak is not a content change on every page).
 * A content hash is stored next to each date, so `npm run sitemap:dates` only
 * moves the date of routes whose content really changed. The dates never come
 * from the build or deploy time.
 */

const ROOT = path.resolve(__dirname, "..");
const APP_DIR = path.join(ROOT, "src", "app");
export const DATES_FILE = path.join(ROOT, "src", "lib", "sitemap-dates.json");

/** Shared on every page; changing them is not a content change. */
const LAYOUT_CHROME = new Set(
  ["Header.tsx", "Footer.tsx", "WhatsAppChatWidget.tsx", "Icons.tsx", "seo/JsonLd.tsx"].map((file) =>
    path.join(ROOT, "src", "components", file)
  )
);

/** Routes that are not page files but are listed in the sitemap. */
const EXTRA_ROUTES: Record<string, string[]> = {
  "/mcp": ["src/app/mcp/route.ts", "src/lib/mcp/docs-page.ts"],
};

export interface DateEntry {
  lastModified: string;
  hash: string;
}

export type DatesFile = Record<string, DateEntry>;

const PAGE_FILE = /^page\.(tsx|ts|jsx|js|mdx)$/;

function collectPages(dir: string, segments: string[] = []): Record<string, string> {
  const pages: Record<string, string> = {};
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const name = entry.name;
      if (name === "api" || /^[_@[]/.test(name) || name.startsWith("(.")) continue;
      const isGroup = name.startsWith("(") && name.endsWith(")");
      Object.assign(pages, collectPages(full, isGroup ? segments : [...segments, name]));
    } else if (PAGE_FILE.test(entry.name)) {
      pages["/" + segments.join("/")] = full;
    }
  }
  return pages;
}

const IMPORT = /(?:import|export)\s[^;]*?from\s+["']([^"']+)["']|import\s+["']([^"']+)["']/g;
const EXTENSIONS = ["", ".tsx", ".ts", "/index.tsx", "/index.ts"];

function resolveImport(specifier: string, fromFile: string): string | null {
  let base: string;
  if (specifier.startsWith("@/")) base = path.join(ROOT, "src", specifier.slice(2));
  else if (specifier.startsWith(".")) base = path.resolve(path.dirname(fromFile), specifier);
  else return null; // a package

  for (const extension of EXTENSIONS) {
    const candidate = base + extension;
    if (existsSync(candidate) && !candidate.endsWith(path.sep) && /\.(tsx?|jsx?)$/.test(candidate)) return candidate;
  }
  return null;
}

/** Page content files: the page and the components it pulls in, recursively. */
function contentFiles(entry: string): string[] {
  const seen = new Set<string>();
  const queue = [entry];
  const components = path.join(ROOT, "src", "components");

  while (queue.length > 0) {
    const file = queue.pop()!;
    if (seen.has(file)) continue;
    seen.add(file);
    const source = readFileSync(file, "utf8");
    for (const match of source.matchAll(IMPORT)) {
      const resolved = resolveImport(match[1] ?? match[2], file);
      if (!resolved || LAYOUT_CHROME.has(resolved)) continue;
      // Only follow into components; lib code is behaviour, not page content.
      if (resolved.startsWith(components) || resolved.startsWith(APP_DIR)) queue.push(resolved);
    }
  }
  return [...seen].sort();
}

const relative = (file: string) => path.relative(ROOT, file).split(path.sep).join("/");

function hashFiles(files: string[]): string {
  const hash = createHash("sha256");
  for (const file of files) {
    hash.update(relative(file));
    hash.update(readFileSync(file, "utf8").replace(/\r\n/g, "\n"));
  }
  return hash.digest("hex").slice(0, 16);
}

/** Every sitemap route with the files that make up its content. */
export function routeFiles(): Record<string, string[]> {
  const routes: Record<string, string[]> = {};
  for (const [route, page] of Object.entries(collectPages(APP_DIR))) routes[route] = contentFiles(page);
  for (const [route, files] of Object.entries(EXTRA_ROUTES)) routes[route] = files.map((file) => path.join(ROOT, file));
  return routes;
}

export function currentHashes(): Record<string, string> {
  return Object.fromEntries(Object.entries(routeFiles()).map(([route, files]) => [route, hashFiles(files)]));
}

export function readDatesFile(): DatesFile {
  return existsSync(DATES_FILE) ? (JSON.parse(readFileSync(DATES_FILE, "utf8")) as DatesFile) : {};
}

function today(): string {
  const now = new Date();
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

/** The last commit date of any of the files, or null if none is committed. */
function gitDate(files: string[]): string | null {
  try {
    const output = execFileSync("git", ["log", "-1", "--format=%cs", "--", ...files.map(relative)], {
      cwd: ROOT,
      encoding: "utf8",
    }).trim();
    return output || null;
  } catch {
    return null;
  }
}

/**
 * Builds the new dates file. A route keeps its date while its content is
 * unchanged. A changed or new route gets today's date, or with `fromGit` the
 * date of the last commit that touched its files.
 */
export function buildDates(options: { fromGit?: boolean } = {}): DatesFile {
  const previous = readDatesFile();
  const routes = routeFiles();
  const next: DatesFile = {};

  for (const route of Object.keys(routes).sort()) {
    const hash = hashFiles(routes[route]);
    const kept = previous[route]?.hash === hash ? previous[route].lastModified : null;
    const lastModified = kept ?? (options.fromGit ? gitDate(routes[route]) : null) ?? today();
    next[route] = { lastModified, hash };
  }
  return next;
}
