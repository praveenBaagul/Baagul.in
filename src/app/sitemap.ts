import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { cacheLife } from "next/cache";
import { SITE_URL, SITEMAP_EXCLUDE, SITEMAP_OVERRIDES } from "@/lib/site";
import { fetchWordPressBlogPosts } from "@/lib/wordpress-blog-posts";
import SITEMAP_DATES from "@/lib/sitemap-dates.json";

// Each route's lastModified is the day its content last changed, kept in
// src/lib/sitemap-dates.json. After editing a page, run `npm run sitemap:dates`.
const LAST_MODIFIED: Record<string, { lastModified: string }> = SITEMAP_DATES;

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

// WordPress blog entries (served under /blog by the reverse proxy). Cached so
// the build and later revalidations reuse one API result. If the WordPress API
// is unavailable, no blog entries are added, and a shorter lifetime retries soon.
async function wordPressBlogEntries(): Promise<MetadataRoute.Sitemap> {
  "use cache";
  try {
    const posts = await fetchWordPressBlogPosts({ all: true });
    cacheLife("hours");
    const site = process.env.BLOG_PUBLIC_ORIGIN || "https://baagul.in";
    const blogHome = new URL(process.env.BLOG_TRAILING_SLASH === "1" ? "/blog/" : "/blog", site).href;
    return [
      { url: blogHome },
      ...posts.map((post) => ({
        url: post.url,
        ...(post.lastModified ? { lastModified: post.lastModified } : {}),
      })),
    ];
  } catch {
    cacheLife("minutes");
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const existing = siteEntries();
  const seen = new Set(existing.map(({ url }) => url));
  const blog = (await wordPressBlogEntries()).filter(({ url }) => {
    if (seen.has(url)) return false;
    seen.add(url);
    return true;
  });
  return [...existing, ...blog];
}

// The sitemap revalidates on the server. If the host runs the build without the
// source tree, src/app cannot be read then, so fall back to the bundled dates
// file, which has one entry per sitemap route (tests/seo.test.ts keeps them equal).
function siteRoutes(): string[] {
  try {
    return collectRoutes(APP_DIR);
  } catch {
    return Object.keys(LAST_MODIFIED);
  }
}

function siteEntries(): MetadataRoute.Sitemap {
  const routes = siteRoutes()
    .filter((route) => !SITEMAP_EXCLUDE.includes(route));

  if (!routes.includes("/mcp")) {
    routes.push("/mcp");
  }

  routes.sort();

  return routes.map((route) => ({
    url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
    ...(LAST_MODIFIED[route] ? { lastModified: LAST_MODIFIED[route].lastModified } : {}),
    ...defaults(route),
    ...SITEMAP_OVERRIDES[route],
  }));
}
