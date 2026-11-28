import React, { cache } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import BlogConsultationCTA from "@/components/blog/BlogConsultationCTA";
import { SITE_URL } from "@/lib/site";
import { ORG_ID } from "@/lib/structured-data";
import { formatBlogDate, getBlogPost, listBlogPosts, type BlogArticle } from "@/lib/wordpress-blog-content";

type Props = { params: Promise<{ slug: string }> };

// A slug that was not prerendered waits for its complete page instead of
// getting an instant placeholder shell. That is what lets a missing post
// answer with a real 404 status rather than a 200.
export const ensureStatic = "navigation";

// One lookup per request, shared by the metadata and the page, so the two can
// never disagree about whether the post exists while the cache is refreshing.
const loadPost = cache((slug: string) => getBlogPost(slug));

// Never a valid WordPress slug, so it renders the 404 page. Used only when the
// post list is empty or WordPress is unreachable during a build, because Cache
// Components needs at least one param here.
const NO_POSTS_PLACEHOLDER = "_";

// Posts known at build time are prerendered. Posts published later are
// rendered on their first request and then cached, with no rebuild.
export async function generateStaticParams() {
  const result = await listBlogPosts();
  const slugs = result.ok ? result.posts.map((post) => ({ slug: post.slug })) : [];
  return slugs.length > 0 ? slugs : [{ slug: NO_POSTS_PLACEHOLDER }];
}

function description(post: BlogArticle) {
  const text = post.excerpt || `${post.title}. Read the full article on Baagul Insights.`;
  return text.length > 160 ? text.slice(0, 157).trimEnd() + "..." : text;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = await loadPost(slug);
  if (result.state !== "found") return {};
  const { post } = result;
  const title = `${post.title} | Baagul Insights`;
  const images = post.image ? [{ url: post.image.src, alt: post.image.alt }] : undefined;

  return {
    title,
    description: description(post),
    alternates: { canonical: post.path },
    openGraph: {
      type: "article",
      url: post.path,
      title,
      description: description(post),
      ...(post.publishedAt ? { publishedTime: post.publishedAt } : {}),
      ...(post.modifiedAt ? { modifiedTime: post.modifiedAt } : {}),
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: description(post),
      ...(images ? { images: images.map((image) => image.url) } : {}),
    },
  };
}

function articleSchema(post: BlogArticle) {
  const url = `${SITE_URL}${post.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: description(post),
    url,
    mainEntityOfPage: url,
    ...(post.publishedAt ? { datePublished: post.publishedAt } : {}),
    ...(post.modifiedAt ? { dateModified: post.modifiedAt } : {}),
    ...(post.image ? { image: `${SITE_URL}${post.image.src}` } : {}),
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const result = await loadPost(slug);
  if (result.state === "missing") notFound();
  // Not a 404: the post may exist. Failing keeps an already cached copy live.
  if (result.state === "error") throw new Error("Blog post could not be loaded from WordPress");

  const { post } = result;
  const date = formatBlogDate(post.publishedAt);

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-indigo-main antialiased selection:bg-marigold selection:text-indigo-main">
      <JsonLd data={articleSchema(post)} />
      <Header />

      <main className="flex-1 flex flex-col">
        <article className="w-full py-12 sm:py-16 px-4 sm:px-12 max-w-4xl mx-auto">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 mb-6 font-sans text-xs font-bold uppercase tracking-wider text-peacock"
          >
            <Link href="/" className="hover:underline">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog" className="hover:underline">Insights</Link>
          </nav>

          <header className="border-b-2 border-indigo-main pb-8 mb-10">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-indigo-main tracking-tight mb-4">
              {post.title}
            </h1>
            {date && (
              <p className="font-sans text-sm text-slate-text">
                Published <time dateTime={post.publishedAt}>{date}</time> · Baagul Insights
              </p>
            )}
          </header>

          {post.image && (
            // Served by this site's own /blog/wp-content/uploads route.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.image.src}
              srcSet={post.image.srcSet}
              sizes="(min-width: 896px) 800px, 100vw"
              width={post.image.width}
              height={post.image.height}
              alt={post.image.alt}
              className="w-full h-auto mb-10 rounded-xl border-2 border-indigo-main shadow-[5px_5px_0px_#121a4a] bg-canvas-alt"
            />
          )}

          {/* Sanitized on the server by sanitizeArticleHtml (allowlist). */}
          <div
            className="font-sans text-base sm:text-lg leading-relaxed text-indigo-main/90 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <div className="mt-12 pt-8 border-t-2 border-dashed border-indigo-main/30">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-indigo-main bg-marigold font-semibold text-xs sm:text-sm text-indigo-main shadow-[3px_3px_0px_#121a4a] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#121a4a] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-150"
            >
              ← All insights
            </Link>
          </div>
        </article>

        <BlogConsultationCTA />
      </main>

      <Footer />
    </div>
  );
}
