import { load } from "cheerio";
import { cacheLife } from "next/cache";

// Native blog content: published posts are read from the WordPress REST API on
// the server and rendered by Next.js pages. Nothing from the WordPress theme
// (markup, stylesheets, scripts, fonts) reaches the browser.
//
// The REST API is called without credentials, so WordPress itself only returns
// published posts: drafts, private and scheduled posts are never visible here.

export type BlogImage = {
  src: string;
  srcSet?: string;
  width?: number;
  height?: number;
  alt: string;
};

export type BlogPostSummary = {
  slug: string;
  /** Public path on this site, e.g. `/blog/hello-world`. */
  path: string;
  title: string;
  excerpt: string;
  /** ISO timestamps (UTC), or "" when WordPress sent none. */
  publishedAt: string;
  modifiedAt: string;
  categories: string[];
  image: BlogImage | null;
};

export type BlogArticle = BlogPostSummary & { contentHtml: string };

export type BlogListResult = { ok: true; posts: BlogPostSummary[] } | { ok: false };
export type BlogArticleResult =
  | { state: "found"; post: BlogArticle }
  | { state: "missing" }
  | { state: "error" };

const BLOG_PREFIX = "/blog";
const UPLOADS = /^\/wp-content\/uploads\//i;
const SLUG = /^[a-z0-9%][a-z0-9%_-]{0,199}$/i;
const MAX_LIST_PAGES = 5; // 500 posts

/** How many cards the /blog listing shows. */
export const LISTING_SIZE = 3;
/** WordPress's sample post: its page still works, but it is not listed. */
const SAMPLE_POST_SLUG = "hello-world";

/**
 * The posts shown as cards on /blog: the latest few, without the WordPress
 * sample post. Older posts are only left off the listing; their own pages at
 * /blog/[slug] keep working.
 */
export function listingPosts(posts: BlogPostSummary[]): BlogPostSummary[] {
  return posts.filter((post) => post.slug !== SAMPLE_POST_SLUG).slice(0, LISTING_SIZE);
}

const wordPressOrigin = () =>
  new URL(process.env.WORDPRESS_BLOG_ORIGIN || "https://honest-yellowgreen-dinosaur-65.hostingersite.com");

export const isBlogSlug = (slug: string) => SLUG.test(slug);

// ---------------------------------------------------------------------------
// URLs
// ---------------------------------------------------------------------------

/**
 * Maps a URL found in WordPress content to what the public site should use.
 * WordPress-origin URLs become local `/blog/...` paths (uploads are served by
 * the media route, post links by the article page). Other http(s) URLs pass
 * through; `allowContact` additionally allows mailto:, tel: and #fragment
 * links. Anything else (javascript:, data:, ...) returns null.
 */
export function publicBlogUrl(raw: string | undefined, options: { allowContact?: boolean } = {}): string | null {
  const value = (raw ?? "").trim();
  if (!value) return null;
  if (options.allowContact && (value.startsWith("#") || /^(?:mailto|tel):/i.test(value))) return value;

  const origin = wordPressOrigin();
  let url: URL;
  try {
    url = new URL(value, origin);
  } catch {
    return null;
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") return null;
  if (url.username || url.password) return null;
  if (url.host !== origin.host) return url.href;

  if (UPLOADS.test(url.pathname)) return BLOG_PREFIX + url.pathname;
  // Never link visitors into the WordPress admin, login or API.
  if (/^\/(?:wp-admin|wp-login\.php|wp-json|xmlrpc\.php)(?:\/|$)/i.test(url.pathname)) return null;
  const path = url.pathname.replace(/\/+$/, "");
  return BLOG_PREFIX + path + url.hash;
}

function publicSrcSet(raw: string | undefined): string | null {
  if (!raw) return null;
  const candidates: string[] = [];
  for (const part of raw.split(",")) {
    const [url, descriptor, ...rest] = part.trim().split(/\s+/);
    const mapped = publicBlogUrl(url);
    if (!mapped || rest.length > 0 || (descriptor && !/^\d+(?:\.\d+)?[wx]$/.test(descriptor))) return null;
    candidates.push(descriptor ? `${mapped} ${descriptor}` : mapped);
  }
  return candidates.length > 0 ? candidates.join(", ") : null;
}

// ---------------------------------------------------------------------------
// HTML
// ---------------------------------------------------------------------------

/** Plain text of a WordPress HTML fragment (entities decoded, tags removed). */
export function htmlToText(html: string | undefined): string {
  if (!html) return "";
  const $ = load(html, null, false);
  $("script, style").remove();
  return $.root().text().replace(/\s+/g, " ").trim();
}

// Removed together with everything inside them.
const DROPPED_TAGS = new Set([
  "script", "style", "iframe", "frame", "frameset", "object", "embed", "applet", "form", "input", "button",
  "select", "option", "textarea", "link", "meta", "base", "noscript", "template", "svg", "math", "canvas",
  "dialog", "title", "head",
]);

// The only tags kept, each with the Baagul typography it renders with. These
// are the site's own Tailwind tokens (font-heading = Gloock, font-sans = Hanken
// Grotesk, indigo / marigold / peacock / terracotta), so the article body
// matches the rest of the site. Tags not listed are unwrapped: their text and
// children stay, the tag goes.
const ARTICLE_TAGS: Record<string, string> = {
  p: "mb-6",
  h2: "font-heading font-normal text-3xl sm:text-4xl text-indigo-main tracking-tight leading-tight mt-12 mb-4",
  h3: "font-heading font-normal text-2xl sm:text-3xl text-indigo-main leading-snug mt-10 mb-3",
  h4: "font-heading font-normal text-xl sm:text-2xl text-indigo-main leading-snug mt-8 mb-3",
  h5: "font-sans font-bold text-xs uppercase tracking-[0.2em] text-indigo-main mt-8 mb-3",
  h6: "font-sans font-bold text-xs uppercase tracking-[0.2em] text-slate-text mt-8 mb-3",
  ul: "list-disc pl-6 mb-6 space-y-2 marker:text-terracotta",
  ol: "list-decimal pl-6 mb-6 space-y-2 marker:font-bold marker:text-indigo-main",
  li: "pl-1",
  a: "font-semibold text-peacock underline decoration-2 underline-offset-4 hover:text-indigo-main transition-colors break-words",
  blockquote:
    "my-8 border-l-4 border-marigold bg-canvas-card rounded-r-xl px-6 py-5 font-heading text-xl sm:text-2xl leading-snug text-indigo-main [&>p:last-child]:mb-0",
  figure: "my-8 overflow-x-auto pr-2 pb-2",
  figcaption: "mt-3 text-xs sm:text-sm text-slate-text text-center",
  img: "w-full h-auto rounded-xl border-2 border-indigo-main shadow-[5px_5px_0px_#121a4a]",
  video: "w-full h-auto rounded-xl border-2 border-indigo-main shadow-[5px_5px_0px_#121a4a]",
  audio: "w-full",
  hr: "my-10 border-t-2 border-dashed border-indigo-main/30",
  pre: "my-6 overflow-x-auto rounded-xl border-2 border-indigo-main bg-indigo-main p-4 font-mono text-sm leading-relaxed text-canvas [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0",
  code: "font-mono text-[0.9em] bg-canvas-alt border border-muted-border rounded px-1.5 py-0.5",
  table: "w-full border-collapse border-2 border-indigo-main text-sm sm:text-base",
  thead: "",
  tbody: "",
  tfoot: "",
  tr: "",
  th: "border border-indigo-main bg-indigo-main px-3 py-2 text-left font-bold text-canvas",
  td: "border border-indigo-main/30 px-3 py-2 align-top",
  caption: "mb-2 text-xs sm:text-sm text-slate-text",
  strong: "font-bold text-indigo-main",
  b: "font-bold text-indigo-main",
  mark: "bg-marigold/40 px-1 rounded-sm text-indigo-main",
  em: "", i: "", u: "", s: "", del: "", ins: "", sub: "", sup: "", small: "", cite: "", abbr: "", kbd: "", br: "",
  span: "", div: "",
};

const ALIGNMENT: [RegExp, string][] = [
  [/\bhas-text-align-center\b/, "text-center"],
  [/\bhas-text-align-right\b/, "text-right"],
];

/** An upload's path without WordPress's size suffixes, to compare images. */
const imageKey = (src: string) =>
  src.split(/[?#]/)[0].replace(/-\d+x\d+(?=\.[a-z0-9]+$)/i, "").replace(/-scaled(?=\.[a-z0-9]+$)/i, "").toLowerCase();

const positiveInt = (value: string | undefined) => (value && /^\d{1,5}$/.test(value) ? value : null);

/**
 * Turns WordPress post HTML into safe, Baagul-styled HTML.
 *
 * Allowlist based: only the tags in ARTICLE_TAGS survive, and on each of them
 * only the attributes set below. Every WordPress class, inline style, id,
 * event handler and data attribute is dropped, so no theme styling or script
 * can come through. Link and media URLs are limited to http(s) (plus mailto:
 * and tel: for links) and rewritten from the WordPress origin to this site.
 *
 * `omitImage` is the featured image the page already shows above the article:
 * if the editor also placed that image in the body, it is left out here so it
 * appears once.
 */
export function sanitizeArticleHtml(html: string, options: { omitImage?: string } = {}): string {
  const $ = load(html, null, false);

  $.root()
    .find("*")
    .addBack()
    .contents()
    .each((_, node) => {
      if (node.type === "comment" || node.type === "directive" || node.type === "cdata") $(node).remove();
    });

  for (const element of $("*").toArray()) {
    if (!("attribs" in element)) continue;
    const node = $(element);
    let tag = element.tagName.toLowerCase();

    if (DROPPED_TAGS.has(tag)) {
      node.remove();
      continue;
    }
    // The page already has its own <h1> (the post title).
    if (tag === "h1") {
      element.tagName = "h2";
      tag = "h2";
    }
    if (!(tag in ARTICLE_TAGS)) {
      node.replaceWith(node.contents());
      continue;
    }

    const original = element.attribs;
    const attributes: Record<string, string> = {};
    const classes = [ARTICLE_TAGS[tag]];
    for (const [pattern, className] of ALIGNMENT) {
      if (pattern.test(original.class ?? "")) classes.push(className);
    }

    if (tag === "a") {
      const href = publicBlogUrl(original.href, { allowContact: true });
      if (!href) {
        node.replaceWith(node.contents());
        continue;
      }
      attributes.href = href;
      if (original.title) attributes.title = original.title;
      if (/^https?:/i.test(href)) {
        if (original.target === "_blank") attributes.target = "_blank";
        attributes.rel = "noopener noreferrer";
      }
    } else if (tag === "img") {
      const src = publicBlogUrl(original.src);
      if (!src) {
        node.remove();
        continue;
      }
      if (options.omitImage && imageKey(src) === imageKey(options.omitImage)) {
        const figure = node.closest("figure");
        if (figure.length > 0 && figure.find("img, video").length === 1) figure.remove();
        else node.remove();
        continue;
      }
      attributes.src = src;
      const srcSet = publicSrcSet(original.srcset);
      if (srcSet) {
        attributes.srcset = srcSet;
        if (original.sizes && /^[\w\s(),.:%-]+$/.test(original.sizes)) attributes.sizes = original.sizes;
      }
      attributes.alt = original.alt ?? "";
      const width = positiveInt(original.width);
      const height = positiveInt(original.height);
      if (width && height) {
        attributes.width = width;
        attributes.height = height;
      }
      attributes.loading = "lazy";
      attributes.decoding = "async";
    } else if (tag === "video" || tag === "audio") {
      const src = publicBlogUrl(original.src);
      if (!src) {
        node.remove();
        continue;
      }
      attributes.src = src;
      attributes.controls = "";
      attributes.preload = "metadata";
      const poster = tag === "video" ? publicBlogUrl(original.poster) : null;
      if (poster) attributes.poster = poster;
    } else if (tag === "td" || tag === "th") {
      for (const name of ["colspan", "rowspan"]) {
        const value = positiveInt(original[name]);
        if (value) attributes[name] = value;
      }
    } else if (tag === "ol") {
      const start = positiveInt(original.start);
      if (start) attributes.start = start;
      if ("reversed" in original) attributes.reversed = "";
    }

    const className = classes.filter(Boolean).join(" ");
    if (className) attributes.class = className;
    element.attribs = attributes;
  }

  return $.root().html()?.trim() ?? "";
}

// ---------------------------------------------------------------------------
// WordPress REST API
// ---------------------------------------------------------------------------

type WordPressMedia = {
  source_url?: string;
  alt_text?: string;
  media_details?: {
    width?: number;
    height?: number;
    sizes?: Record<string, { source_url?: string; width?: number }>;
  };
};

type WordPressPost = {
  slug?: string;
  status?: string;
  date_gmt?: string | null;
  modified_gmt?: string | null;
  title?: { rendered?: string };
  excerpt?: { rendered?: string; protected?: boolean };
  content?: { rendered?: string; protected?: boolean };
  _embedded?: {
    "wp:featuredmedia"?: WordPressMedia[];
    "wp:term"?: { taxonomy?: string; name?: string }[][];
  };
};

const LIST_FIELDS = "slug,status,date_gmt,modified_gmt,title,excerpt,content.protected,_links,_embedded";

function isoDate(value: string | null | undefined): string {
  if (!value) return "";
  const parsed = new Date(value.endsWith("Z") ? value : value + "Z");
  return Number.isNaN(parsed.valueOf()) ? "" : parsed.toISOString();
}

function featuredImage(post: WordPressPost, fallbackAlt: string): BlogImage | null {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  const src = publicBlogUrl(media?.source_url);
  if (!media || !src) return null;

  const widths = new Map<number, string>();
  for (const size of Object.values(media.media_details?.sizes ?? {})) {
    const url = publicBlogUrl(size.source_url);
    if (url && size.width && size.width >= 300) widths.set(size.width, url);
  }
  const srcSet = [...widths.entries()]
    .sort(([a], [b]) => a - b)
    .map(([width, url]) => `${url} ${width}w`)
    .join(", ");

  return {
    src,
    ...(widths.size > 1 ? { srcSet } : {}),
    ...(media.media_details?.width && media.media_details?.height
      ? { width: media.media_details.width, height: media.media_details.height }
      : {}),
    alt: media.alt_text?.trim() || fallbackAlt,
  };
}

function isPublic(post: WordPressPost): post is WordPressPost & { slug: string } {
  return (
    post.status === "publish" &&
    typeof post.slug === "string" &&
    isBlogSlug(post.slug) &&
    !post.excerpt?.protected &&
    !post.content?.protected
  );
}

function summarize(post: WordPressPost & { slug: string }): BlogPostSummary {
  const title = htmlToText(post.title?.rendered) || "Untitled";
  const categories = (post._embedded?.["wp:term"] ?? [])
    .flat()
    .filter((term) => term.taxonomy === "category" && term.name)
    .map((term) => htmlToText(term.name))
    .filter((name) => name && name.toLowerCase() !== "uncategorized");

  return {
    slug: post.slug,
    path: `${BLOG_PREFIX}/${post.slug}`,
    title,
    excerpt: htmlToText(post.excerpt?.rendered),
    publishedAt: isoDate(post.date_gmt),
    modifiedAt: isoDate(post.modified_gmt),
    categories: [...new Set(categories)],
    image: featuredImage(post, title),
  };
}

async function fetchPosts(query: Record<string, string>): Promise<{ posts: WordPressPost[]; pages: number }> {
  const endpoint = new URL("/wp-json/wp/v2/posts", wordPressOrigin());
  endpoint.searchParams.set("status", "publish");
  endpoint.searchParams.set("_embed", "wp:featuredmedia,wp:term");
  for (const [key, value] of Object.entries(query)) endpoint.searchParams.set(key, value);

  const response = await fetch(endpoint, { redirect: "error", signal: AbortSignal.timeout(10_000) });
  if (!response.ok) throw new Error(`WordPress posts API returned ${response.status}`);
  const posts: unknown = await response.json();
  if (!Array.isArray(posts)) throw new Error("Unexpected WordPress posts result");
  const pages = Number(response.headers.get("x-wp-totalpages") ?? 1);
  return { posts: posts as WordPressPost[], pages: Number.isSafeInteger(pages) ? Math.max(1, pages) : 1 };
}

// Both lookups are cached for about a minute ("minutes" profile: revalidate
// after 60s), so a post published or edited in WordPress shows up on the site
// shortly afterwards without a rebuild or redeploy. Failures are returned, not
// thrown, so the caller decides (and a WordPress outage cannot break a build).

/** Published posts, newest first. */
export async function listBlogPosts(): Promise<BlogListResult> {
  "use cache";
  cacheLife("minutes");
  try {
    const summaries: BlogPostSummary[] = [];
    const seen = new Set<string>();
    let pages = 1;
    for (let page = 1; page <= Math.min(pages, MAX_LIST_PAGES); page++) {
      const result = await fetchPosts({ _fields: LIST_FIELDS, per_page: "100", page: String(page) });
      if (page === 1) pages = result.pages;
      for (const post of result.posts) {
        if (!isPublic(post) || seen.has(post.slug)) continue;
        seen.add(post.slug);
        summaries.push(summarize(post));
      }
    }
    return { ok: true, posts: summaries };
  } catch {
    return { ok: false };
  }
}

/** One published post by its WordPress slug, with sanitized content. */
export async function getBlogPost(slug: string): Promise<BlogArticleResult> {
  "use cache";
  cacheLife("minutes");
  if (!isBlogSlug(slug)) return { state: "missing" };
  try {
    const { posts } = await fetchPosts({ slug, per_page: "1" });
    const post = posts.find((candidate) => candidate.slug === slug);
    if (!post || !isPublic(post)) return { state: "missing" };
    const summary = summarize(post);
    const contentHtml = sanitizeArticleHtml(post.content?.rendered ?? "", { omitImage: summary.image?.src });
    return { state: "found", post: { ...summary, contentHtml } };
  } catch {
    return { state: "error" };
  }
}

/** e.g. "28 November 2026", in India time. */
export function formatBlogDate(iso: string): string {
  if (!iso) return "";
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" }).format(
    new Date(iso)
  );
}
