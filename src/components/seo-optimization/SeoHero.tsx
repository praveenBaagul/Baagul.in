import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SeoHero() {
  return (
    <section className="relative w-full bg-[#FEF9ED] text-[#0E1153] pt-12 pb-20 px-4 sm:px-8 lg:px-12 border-b-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#0E1153]/20 mb-6 text-xs font-mono font-bold uppercase tracking-widest text-[#0E1153] shadow-[2px_2px_0px_#0E1153]">
          <span className="w-2 h-2 rounded-full bg-[#005F4C]" />
          <span>SEARCH ENGINE ARCHITECTURE // MODULE: 01</span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#0E1153] mb-6 leading-none">
          <span>SEO / </span>
          <span className="inline-block bg-[#FFBA45] text-[#0E1153] px-4 py-1 rounded-lg border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153]">
            Optimization
          </span>
        </h1>

        {/* Subtitle / Paragraph */}
        <p className="font-sans text-base sm:text-lg text-[#3E4945] max-w-3xl leading-relaxed mb-8">
          All-in-one organic search architecture that converts impressions into high-margin paying clients. 
          Whether you are dominating local map packs or ranking #1 for high-commercial terms, 
          we build durable authority that survives search algorithm updates.
        </p>

        {/* CTA Button */}
        <div className="mb-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#005F4C] text-[#FEF9ED] font-heading font-bold text-base border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#0E1153] transition-all"
          >
            <span>Audit your website</span>
            <span className="text-lg">→</span>
          </Link>
        </div>

        {/* Google Search Console Performance Showcase */}
        <div className="w-full max-w-5xl bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] overflow-hidden text-left relative group">
          {/* Screenshot container */}
          <div className="relative w-full aspect-[1024/527] bg-[#FAFAFA] overflow-hidden">
            <Image
              src="/assets/google-search-console-performance.jpg"
              alt="Google Search Console performance dashboard showing organic clicks, impressions, and ranking growth"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>
        </div>

        {/* Feature Highlights Strip */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 text-left">
          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153] flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#FFBA45] border border-[#0E1153] shrink-0" />
            <span className="font-heading text-sm font-bold text-[#0E1153] tracking-wide">
              1. Get Found on Google
            </span>
          </div>

          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153] flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#005F4C] border border-[#0E1153] shrink-0" />
            <span className="font-heading text-sm font-bold text-[#0E1153] tracking-wide">
              2. Attract Organic Customers
            </span>
          </div>

          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153] flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#C8553D] border border-[#0E1153] shrink-0" />
            <span className="font-heading text-sm font-bold text-[#0E1153] tracking-wide">
              3. Turn Searches into Leads
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
