"use client";

import React, { useState } from "react";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/structured-data";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "What is SEO and why is it important for my business?",
    a: "SEO (Search Engine Optimization) is the process of improving your website's visibility on search engines like Google. When potential customers search for services or products related to your business, SEO ensures your website ranks near the top of the search results, driving organic, qualified traffic without ongoing ad spend.",
  },
  {
    q: "How long does it take to see SEO results?",
    a: "Technical site fixes and schema enhancements usually reflect in Google Search Console within 14–28 days. Measurable organic ranking jumps and customer conversion momentum typically compound strongly between months 2 and 4 as search engines index your updated topical clusters.",
  },
  {
    q: "What is the difference between on-page and off-page SEO?",
    a: "On-page SEO involves optimizing elements directly on your site, such as HTML headings, content semantics, internal linking, and Core Web Vitals speed. Off-page SEO focuses on external authority signals, including digital PR, niche citations, and high-domain backlinks.",
  },
  {
    q: "Do you provide local SEO services?",
    a: "Yes. We configure and optimize your Google Business Profile, implement local schema markups, standardize NAP (Name, Address, Phone) citations, and craft localized landing pages to dominate your area's local map pack.",
  },
  {
    q: "Will SEO guarantee first-page rankings?",
    a: "No ethical agency can guarantee specific #1 positions because search engine algorithms evolve continuously. However, our proven white-hat methodologies, technical audits, and content frameworks reliably produce top 3 rankings for high-intent queries.",
  },
  {
    q: "Do you provide transparent reports and performance tracking?",
    a: "Yes. Every client receives continuous live dashboard access and comprehensive monthly executive reports covering keyword position velocity, organic conversion metrics, crawl health, and revenue attribution.",
  },
];

export default function SeoFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full py-24 px-4 sm:px-8 lg:px-12 bg-[#005F4C] text-[#FEF9ED] border-b-2 border-[#0E1153]">
      <JsonLd data={faqSchema(faqs)} />
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase tracking-widest text-[#FFBA45]">
            <span className="w-2.5 h-2.5 bg-[#FFBA45]" />
            <span>KNOWLEDGE BASE // FREQUENT INQUIRIES</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#FEF9ED] leading-tight">
            Everything You Need to Know About Our SEO Optimization Services
          </h2>
        </div>

        {/* Accordion List */}
        <div className="w-full flex flex-col gap-4 mb-12">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[4px_4px_0px_#0E1153] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 flex items-center justify-between text-left gap-4 font-heading text-lg sm:text-xl font-bold hover:bg-[#FAF8F5] transition-colors"
                >
                  <span>{item.q}</span>
                  <span className="w-8 h-8 rounded-full bg-[#EDE8DC] border border-[#0E1153] flex items-center justify-center text-sm font-mono flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 font-sans text-sm sm:text-base text-[#3E4945] leading-relaxed border-t border-[#0E1153]/15">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA question */}
        <div className="text-center font-mono text-xs sm:text-sm text-[#FEF9ED]/80">
          <span>Have more specific indexing or technical questions? </span>
          <Link href="/contact" className="text-[#FFBA45] underline font-bold hover:text-white ml-1">
            Talk to our search architect →
          </Link>
        </div>
      </div>
    </section>
  );
}
