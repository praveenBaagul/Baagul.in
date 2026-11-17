// Single source of truth for the public site URL.
// Set NEXT_PUBLIC_SITE_URL in the hosting env if the domain ever changes.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://baagul.in").replace(/\/$/, "");

// Routes that exist as pages but must NOT appear in the sitemap
// (thank-you pages, internal tools, drafts...). Redirect-only pages are
// detected automatically and don't need to be listed here.
export const SITEMAP_EXCLUDE: string[] = [];

// Optional per-route SEO hints. Anything not listed gets the defaults
// computed in app/sitemap.ts.
export const SITEMAP_OVERRIDES: Record<
  string,
  { priority?: number; changeFrequency?: "daily" | "weekly" | "monthly" | "yearly" }
> = {
  "/": { priority: 1.0, changeFrequency: "weekly" },
  "/services": { priority: 0.9, changeFrequency: "weekly" },
  "/career": { priority: 0.8, changeFrequency: "weekly" },
  "/team": { priority: 0.8, changeFrequency: "monthly" },
  "/contact": { priority: 0.8, changeFrequency: "monthly" },
  "/privacy-policy": { priority: 0.3, changeFrequency: "yearly" },
};
