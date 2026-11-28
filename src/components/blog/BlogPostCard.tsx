import React from "react";
import Link from "next/link";
import type { BlogPostSummary } from "@/lib/wordpress-blog-content";

// Same card treatment as the homepage services grid (ServicesGrid.tsx): border,
// hard shadow and hover lift. The whole card is one link to the article and
// shows only the featured image, the title and the WordPress excerpt.
export default function BlogPostCard({ post }: { post: BlogPostSummary }) {
  return (
    <Link
      href={post.path}
      className="group h-full rounded-xl border-2 border-indigo-main bg-canvas-card text-indigo-main shadow-[5px_5px_0px_#121a4a] hover:-translate-y-1 hover:shadow-[7px_7px_0px_#121a4a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-main transition-all duration-200 flex flex-col overflow-hidden"
    >
      {post.image ? (
        // Served by this site's own /blog/wp-content/uploads route.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.image.src}
          srcSet={post.image.srcSet}
          sizes="(min-width: 1024px) 400px, 100vw"
          width={post.image.width}
          height={post.image.height}
          alt={post.image.alt}
          loading="lazy"
          decoding="async"
          className="w-full aspect-[16/9] object-cover border-b-2 border-indigo-main bg-canvas-alt"
        />
      ) : (
        // Keeps cards aligned if a post was published without a featured image.
        <div
          aria-hidden="true"
          className="w-full aspect-[16/9] border-b-2 border-indigo-main bg-indigo-mid bg-[radial-gradient(#dadff4_1px,transparent_1px)] [background-size:24px_24px]"
        />
      )}

      <div className="p-6 flex flex-col flex-1">
        <h2 className="font-heading text-2xl font-normal mb-3 leading-snug group-hover:underline decoration-2 underline-offset-4">
          {post.title}
        </h2>
        {post.excerpt && (
          <p className="font-sans text-xs sm:text-sm leading-relaxed opacity-85 line-clamp-3">{post.excerpt}</p>
        )}
      </div>
    </Link>
  );
}
