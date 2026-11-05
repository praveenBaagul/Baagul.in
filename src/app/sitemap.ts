import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { SITE_URL, SITEMAP_EXCLUDE, SITEMAP_OVERRIDES } from "@/lib/site";

// Generated at build time: every new `page.tsx` under src/app is picked up
// automatically on the next deploy. No manual sitemap edits needed.

const APP_DIR = path.join(process.cwd(), "src", "app");
const PAGE_FILE = /^page\.(tsx|ts|jsx|js|mdx)$/;

function isRedirectOnly(file: string): boolean {
  const src = fs.readFileSync(file, "utf8");
  return /from\s+["']next\/navigation["']/.test(src) && /\b(permanentRedirect|redirect)\(/.test(src);
}

function collectRoutes(dir: string, segments: string[] = []): string[] {
  const routes: string[] = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const name = entry.name;
      // Skip API routes, private folders (_x), parallel slots (@x),
      // intercepting routes ((.)x) and dynamic segments ([slug]) — dynamic
      // pages should add their own entries below from their data source.
      if (name === "api" || name.startsWith("_") || name.startsWith("@") || name.startsWith("(.") || name.startsWith("[")) {
        continue;
      }
      // Route groups like (marketing) don't appear in the URL.
      const isGroup = name.startsWith("(") && name.endsWith(")");
      routes.push(...collectRoutes(full, isGroup ? segments : [...segments, name]));
    } else if (PAGE_FILE.test(entry.name) && !isRedirectOnly(full)) {
      routes.push("/" + segments.join("/"));
    }
  }

  return routes;
}

function defaults(route: string) {
  if (route.startsWith("/services/")) return { priority: 0.8, changeFrequency: "monthly" as const };
  return { priority: 0.6, changeFrequency: "monthly" as const };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = collectRoutes(APP_DIR)
    .filter((route) => !SITEMAP_EXCLUDE.includes(route))
    .sort();

  return routes.map((route) => ({
    url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
    ...defaults(route),
    ...SITEMAP_OVERRIDES[route],
  }));
}
