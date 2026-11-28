import React from "react";
import type { Metadata } from "next";
import { PHASE_PRODUCTION_BUILD } from "next/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostCard from "@/components/blog/BlogPostCard";
import BlogConsultationCTA from "@/components/blog/BlogConsultationCTA";
import { listBlogPosts, listingPosts } from "@/lib/wordpress-blog-content";

const TITLE = "Baagul Insights | Digital Marketing, SEO & Web Design Blog";
const DESCRIPTION =
  "Practical guides and studio notes on SEO, web design, paid promotions and digital growth from the Baagul team in Bengaluru.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/feed" },
  },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/blog" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default async function BlogIndexPage() {
  const result = await listBlogPosts();
  // On a running server, fail the refresh so the last good page keeps being
  // served. During a build there is no earlier page, so render the notice.
  if (!result.ok && process.env.NEXT_PHASE !== PHASE_PRODUCTION_BUILD) {
    throw new Error("Blog posts could not be loaded from WordPress");
  }
  // The three latest articles. Older ones keep their own pages.
  const posts = result.ok ? listingPosts(result.posts) : [];

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-indigo-main antialiased selection:bg-marigold selection:text-indigo-main">
      <Header />

      <main className="flex-1 flex flex-col">
        <section className="w-full py-16 sm:py-20 px-4 sm:px-12 max-w-7xl mx-auto">
          {/* Section header: same pattern as the homepage services grid */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-terracotta" />
                <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-indigo-main">
                  THE BAAGUL BLOG
                </span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-indigo-main tracking-tight">
                Baagul Insights
              </h1>
            </div>
            <p className="font-sans text-sm sm:text-base text-slate-text max-w-md">
              Practical guides and studio notes on SEO, web design, paid promotions and digital
              growth, written by the team that does the work.
            </p>
          </div>

          <div className="relative w-full mb-8">
            <div className="h-2 bg-indigo-main rounded-full w-full" />
            <div className="absolute -top-1 left-8 w-4 h-4 bg-marigold border border-indigo-main rounded-full" />
            <div className="absolute -top-1 right-8 w-4 h-4 bg-terracotta border border-indigo-main rounded-full" />
          </div>

          {posts.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-xl lg:max-w-none mx-auto">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="p-8 rounded-xl border-2 border-indigo-main bg-canvas-card shadow-[5px_5px_0px_#121a4a] max-w-2xl">
              <h2 className="font-heading text-2xl font-normal mb-3 leading-snug">
                {result.ok ? "New articles are on the way" : "Articles are taking a moment to load"}
              </h2>
              <p className="font-sans text-sm sm:text-base leading-relaxed text-slate-text">
                {result.ok
                  ? "We are writing our first insights. Please check back soon."
                  : "Please refresh this page in a minute."}
              </p>
            </div>
          )}
        </section>

        <BlogConsultationCTA />
      </main>

      <Footer />
    </div>
  );
}
