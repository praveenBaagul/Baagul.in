import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("next/cache", async (importOriginal) => ({
  ...(await importOriginal<typeof import("next/cache")>()),
  cacheLife: () => {},
}));

import {
  getBlogPost,
  htmlToText,
  listBlogPosts,
  listingPosts,
  publicBlogUrl,
  sanitizeArticleHtml,
} from "@/lib/wordpress-blog-content";

const ORIGIN = "https://wp.example.test";

beforeEach(() => {
  vi.stubEnv("WORDPRESS_BLOG_ORIGIN", ORIGIN);
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});

describe("publicBlogUrl", () => {
  it("serves WordPress uploads from this site's media route", () => {
    expect(publicBlogUrl(`${ORIGIN}/wp-content/uploads/2026/11/a.png`)).toBe("/blog/wp-content/uploads/2026/11/a.png");
    expect(publicBlogUrl("/wp-content/uploads/a.png")).toBe("/blog/wp-content/uploads/a.png");
  });

  it("points links to other posts at the public article URL", () => {
    expect(publicBlogUrl(`${ORIGIN}/hello-world/`)).toBe("/blog/hello-world");
    expect(publicBlogUrl(`${ORIGIN}/`)).toBe("/blog");
  });

  it("keeps external links and never exposes the WordPress admin", () => {
    expect(publicBlogUrl("https://example.com/page?a=1")).toBe("https://example.com/page?a=1");
    expect(publicBlogUrl(`${ORIGIN}/wp-admin/post.php?post=1`)).toBeNull();
    expect(publicBlogUrl(`${ORIGIN}/wp-login.php`)).toBeNull();
  });

  it("rejects script and data URLs", () => {
    expect(publicBlogUrl("javascript:alert(1)")).toBeNull();
    expect(publicBlogUrl(" JaVaScRiPt:alert(1)", { allowContact: true })).toBeNull();
    expect(publicBlogUrl("data:text/html,<script>alert(1)</script>")).toBeNull();
    expect(publicBlogUrl("mailto:support@baagul.in")).toBeNull();
    expect(publicBlogUrl("mailto:support@baagul.in", { allowContact: true })).toBe("mailto:support@baagul.in");
  });
});

describe("sanitizeArticleHtml", () => {
  it("keeps editor content and gives it Baagul typography instead of WordPress classes", () => {
    const html = sanitizeArticleHtml(`
      <h2 class="wp-block-heading" id="intro" style="color:red">Heading</h2>
      <p class="wp-block-paragraph has-text-align-center">Text with <strong>bold</strong> and <a href="${ORIGIN}/other-post/">a link</a>.</p>
      <ul class="wp-block-list"><li>One</li><li>Two</li></ul>
      <figure class="wp-block-image size-large"><img src="${ORIGIN}/wp-content/uploads/a.png" srcset="${ORIGIN}/wp-content/uploads/a-300.png 300w, ${ORIGIN}/wp-content/uploads/a.png 1024w" alt="Chart" width="1024" height="512" class="wp-image-7"><figcaption>Caption</figcaption></figure>
    `);

    expect(html).toContain('<h2 class="font-heading');
    expect(html).toMatch(/<p class="mb-6 text-center">/);
    expect(html).toContain('href="/blog/other-post"');
    expect(html).toMatch(/<ul class="list-disc[^"]*"><li class="pl-1">One<\/li>/);
    expect(html).toContain('src="/blog/wp-content/uploads/a.png"');
    expect(html).toContain('srcset="/blog/wp-content/uploads/a-300.png 300w, /blog/wp-content/uploads/a.png 1024w"');
    expect(html).toContain('alt="Chart"');
    expect(html).toContain("<figcaption");
    expect(html).not.toMatch(/wp-block|wp-image|style=|id=|wp\.example\.test/);
  });

  it("removes scripts, styles, embeds, forms and event handlers", () => {
    const html = sanitizeArticleHtml(`
      <p onclick="alert(1)">Safe text</p>
      <script>alert(1)</script>
      <style>body{display:none}</style>
      <link rel="stylesheet" href="${ORIGIN}/wp-content/themes/t/style.css">
      <iframe src="https://evil.example/"></iframe>
      <form action="/wp-comments-post.php"><input name="comment"><button>Send</button></form>
      <img src="x" onerror="alert(1)">
      <a href="javascript:alert(1)">bad link</a>
      <svg><script>alert(1)</script></svg>
      <!-- comment -->
    `);

    expect(html).toContain("Safe text");
    expect(html).toContain("bad link");
    expect(html).not.toMatch(/<script|<style|<link|<iframe|<form|<input|<button|<svg|onclick|onerror|javascript:|alert|comment/i);
  });

  it("demotes h1 and unwraps unknown tags while keeping their text", () => {
    const html = sanitizeArticleHtml("<h1>Title</h1><section><custom-tag>Kept text</custom-tag></section>");
    expect(html).toMatch(/^<h2 class="font-heading[^"]*">Title<\/h2>Kept text$/);
  });

  it("marks external links that open a new tab as noopener", () => {
    const html = sanitizeArticleHtml('<a href="https://example.com" target="_blank" rel="nofollow">Out</a>');
    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="noopener noreferrer"');
  });
});

describe("htmlToText", () => {
  it("decodes entities and strips tags", () => {
    expect(htmlToText("<p>Tom &amp; Jerry&#8217;s <em>guide</em></p>\n")).toBe("Tom & Jerry’s guide");
  });
});

describe("WordPress lookups", () => {
  const post = (overrides: object = {}) => ({
    slug: "hello-world",
    status: "publish",
    date_gmt: "2026-11-28T07:32:18",
    modified_gmt: "2026-11-28T08:00:00",
    title: { rendered: "Hello &amp; welcome" },
    excerpt: { rendered: "<p>Short summary.</p>", protected: false },
    content: { rendered: "<p>Body</p><script>alert(1)</script>", protected: false },
    _embedded: {
      "wp:featuredmedia": [
        { source_url: `${ORIGIN}/wp-content/uploads/cover.jpg`, alt_text: "", media_details: { width: 1200, height: 630 } },
      ],
      "wp:term": [[{ taxonomy: "category", name: "SEO" }, { taxonomy: "category", name: "Uncategorized" }], [{ taxonomy: "post_tag", name: "tips" }]],
    },
    ...overrides,
  });

  const respondWith = (posts: object[], status = 200) => {
    const fetchMock = vi.fn<(...request: unknown[]) => Promise<Response>>(async () => Response.json(posts, { status, headers: { "X-WP-TotalPages": "1" } }));
    vi.stubGlobal("fetch", fetchMock);
    return fetchMock;
  };

  it("lists published posts with image, categories and plain-text fields", async () => {
    const fetchMock = respondWith([post(), post({ slug: "secret", content: { protected: true } }), post({ slug: "draft", status: "draft" })]);
    const result = await listBlogPosts();

    expect(result).toEqual({
      ok: true,
      posts: [
        {
          slug: "hello-world",
          path: "/blog/hello-world",
          title: "Hello & welcome",
          excerpt: "Short summary.",
          publishedAt: "2026-11-28T07:32:18.000Z",
          modifiedAt: "2026-11-28T08:00:00.000Z",
          categories: ["SEO"],
          image: { src: "/blog/wp-content/uploads/cover.jpg", width: 1200, height: 630, alt: "Hello & welcome" },
        },
      ],
    });
    const url = new URL(String(fetchMock.mock.calls[0][0]));
    expect(url.origin).toBe(ORIGIN);
    expect(url.searchParams.get("status")).toBe("publish");
  });

  it("returns a sanitized article for a published slug", async () => {
    respondWith([post()]);
    const result = await getBlogPost("hello-world");
    expect(result.state).toBe("found");
    if (result.state === "found") expect(result.post.contentHtml).toBe('<p class="mb-6">Body</p>');
  });

  it("reports a missing post, and never asks WordPress about admin-style paths", async () => {
    const fetchMock = respondWith([]);
    expect(await getBlogPost("no-such-post")).toEqual({ state: "missing" });
    expect(await getBlogPost("wp-login.php")).toEqual({ state: "missing" });
    expect(await getBlogPost("../wp-admin")).toEqual({ state: "missing" });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("reports an error, not a missing post, when WordPress is down", async () => {
    respondWith([], 503);
    expect(await getBlogPost("hello-world")).toEqual({ state: "error" });
    expect(await listBlogPosts()).toEqual({ ok: false });
  });
});

describe("listingPosts", () => {
  const summary = (slug: string) => ({
    slug, path: `/blog/${slug}`, title: slug, excerpt: "", publishedAt: "", modifiedAt: "", categories: [], image: null,
  });

  it("shows the three latest posts and leaves out the WordPress sample post", () => {
    const posts = ["newest", "hello-world", "second", "third", "fourth"].map(summary);
    expect(listingPosts(posts).map((post) => post.slug)).toEqual(["newest", "second", "third"]);
  });
});

describe("featured image in the article body", () => {
  it("is left out when the editor also placed it in the content, other images stay", () => {
    const html = sanitizeArticleHtml(
      `<figure class="wp-block-image"><img src="${ORIGIN}/wp-content/uploads/2026/11/cover-1024x576.jpg" alt="Cover"><figcaption>Cover caption</figcaption></figure>` +
        `<p>Text</p><figure><img src="${ORIGIN}/wp-content/uploads/2026/11/chart.png" alt="Chart"></figure>`,
      { omitImage: "/blog/wp-content/uploads/2026/11/cover.jpg" }
    );
    expect(html).not.toContain("cover");
    expect(html).not.toContain("Cover caption");
    expect(html).toContain('src="/blog/wp-content/uploads/2026/11/chart.png"');
    expect(html).toContain("Text");
  });
});