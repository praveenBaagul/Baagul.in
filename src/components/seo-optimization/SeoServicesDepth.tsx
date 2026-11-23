"use client";

import React, { useState } from "react";
import Link from "next/link";

interface DeliverableItem {
  id: string;
  title: string;
  tag: string;
  description: string;
}

const deliverables: DeliverableItem[] = [
  {
    id: "01",
    title: "On-Page SEO Services",
    tag: "MODULE 01",
    description:
      "Meta title/description optimization, semantic heading taxonomy (H1-H6), internal linking silos, and rich structured data markup.",
  },
  {
    id: "02",
    title: "Keyword Research Services",
    tag: "MODULE 02",
    description:
      "In-depth keyword gap analysis, high-commercial intent discovery, competitor SERP volatility tracking, and programmatic query clustering.",
  },
  {
    id: "03",
    title: "Technical SEO Services",
    tag: "MODULE 03",
    description:
      "Server log analysis, XML sitemaps, robots.txt management, canonical deduplication, and Core Web Vitals (LCP, CLS, INP) performance.",
  },
  {
    id: "04",
    title: "Content Optimization & Creation",
    tag: "MODULE 04",
    description:
      "Search-first editorial content creation, semantic topic authority maps, automated refresh cycles, and keyword cannibalization audits.",
  },
  {
    id: "05",
    title: "Local SEO Services in Bangalore",
    tag: "MODULE 05",
    description:
      "Google Business Profile optimization, localized citation networks, local schema implementation, and geo-targeted landing pages.",
  },
  {
    id: "06",
    title: "Analytics, Attribution & Reporting",
    tag: "MODULE 06",
    description:
      "Google Search Console & GA4 multi-touch revenue attribution, automated rank telemetry, crawl budget tracking, and monthly executive summaries.",
  },
  {
    id: "07",
    title: "E-commerce SEO Services",
    tag: "MODULE 07",
    description:
      "Category and product page optimization, product schema, faceted navigation and duplicate-URL control, and site speed fixes for Shopify, WooCommerce, and custom stores.",
  },
  {
    id: "08",
    title: "SEO Consulting Services",
    tag: "MODULE 08",
    description:
      "Strategy sessions, SEO audits, and roadmaps for in-house teams, plus SEO guidance for site migrations and redesigns so you keep the rankings you have earned.",
  },
];

export default function SeoDeliverables() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full py-20 px-4 sm:px-8 lg:px-12 bg-[#FEF9ED] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Narrative & CTA */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-[#FFBA45] shadow-[1px_1px_0px_#0E1153]" />
            <span className="font-mono font-bold text-xs uppercase tracking-widest text-[#0E1153]">
              SERVICE OVERVIEW
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#0E1153] leading-tight mb-6">
            Professional SEO Services for Growing Businesses
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#3E4945] leading-relaxed mb-8">
            Data-driven search engine optimization services that boost visibility, bring in qualified traffic, and generate measurable leads. We combine technical fixes, structured data, and authoritative content so your website outranks competitors on the searches your customers actually make.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#FFBA45] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FFBA45] transition-all mb-8"
          >
            <span>Contact our experts</span>
            <span>→</span>
          </Link>

          {/* Guarantee / Review Pill */}
          <div className="flex items-center gap-3 p-3 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153]">
            <span className="w-8 h-8 rounded-full bg-[#005F4C] text-[#FEF9ED] flex items-center justify-center font-bold text-sm">
              ✓
            </span>
            <span className="font-mono text-xs font-bold text-[#0E1153]">
              100% WHITE-HAT // SUSTAINABLE SERP GROWTH
            </span>
          </div>
        </div>

        {/* Right Column: Accordion Card */}
        <div className="lg:col-span-7 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] overflow-hidden">
          {/* Header Banner */}
          <div className="px-6 py-4 bg-[#FFBA45] border-b-2 border-[#0E1153] flex items-center justify-between">
            <p className="font-heading text-lg font-bold text-[#0E1153]">
              Overview &amp; Deliverables
            </p>
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0E1153]/80">
              FULL-CYCLE EXECUTION
            </span>
          </div>

          {/* Accordion Rows */}
          <div className="divide-y-2 divide-[#0E1153]">
            {deliverables.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.id} className="transition-colors">
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className={`w-full px-6 py-4 flex items-center justify-between text-left transition-colors ${
                      isOpen ? "bg-[#EDE8DC]" : "hover:bg-[#FAF8F5]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-md bg-[#0E1153] text-[#FEF9ED] text-xs font-mono font-bold flex items-center justify-center">
                        {item.id}
                      </span>
                      <span className="font-heading text-base sm:text-lg font-bold text-[#0E1153]">
                        {item.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline-block font-mono text-[10px] uppercase font-bold text-[#3E4945]">
                        {item.tag}
                      </span>
                      <span className="text-sm font-bold text-[#0E1153] w-5 h-5 rounded-full border border-[#0E1153] flex items-center justify-center">
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-2 bg-[#EDE8DC] text-xs sm:text-sm text-[#3E4945] font-sans leading-relaxed border-t border-[#0E1153]/10">
                      {item.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
