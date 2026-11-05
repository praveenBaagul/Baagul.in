"use client";

import React, { useState } from "react";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/structured-data";

interface FAQItem {
  id: number;
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    id: 0,
    q: "How much does a website design and development cost?",
    a: "Our website packages are tailored to your specific requirements, varying based on page scope, custom interactive components, CMS integration, and e-commerce functionality. We provide fixed-price proposals with transparent milestone deliverables and zero hidden costs.",
  },
  {
    q: "How long does it take to design and launch a website?",
    id: 1,
    a: "A custom 5–10 page corporate website typically takes between 3 to 6 weeks from kickoff through design approval, Next.js engineering, testing, and deployment. Larger e-commerce systems or headless apps usually require 6 to 10 weeks.",
  },
  {
    id: 2,
    q: "Will my website be mobile-friendly and fast on phones?",
    a: "Yes. Every website we build is 100% mobile-first and responsive. We test across all major viewports and optimize every asset to guarantee sub-second load times on mobile connections.",
  },
  {
    id: 3,
    q: "Can I update the website content myself after launch?",
    a: "Yes. We integrate lightweight, user-friendly CMS workflows (Headless or WordPress) so your marketing team can easily create blog posts, modify copy, and add new landing pages without coding knowledge.",
  },
  {
    id: 4,
    q: "Do you provide SEO optimization with web design?",
    a: "Yes. Technical SEO foundation is built into our core codebase — including clean semantic HTML5 markup, automated XML sitemaps, JSON-LD structured schema, and Core Web Vitals optimization.",
  },
];

export default function WebDesignFAQ() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#E1E3F7] text-[#0E1153] border-b-2 border-[#0E1153]">
      <JsonLd data={faqSchema(faqs)} />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-[#005F4C]">
            <span className="w-2.5 h-2.5 bg-[#FFA800]" />
            <span>KNOWLEDGE BASE // FREQUENT INQUIRIES</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl text-[#0E1153] leading-tight">
            Everything You Need to Know About Our Website Design &amp; Development Services
          </h2>
        </div>

        {/* 2-Column Interactive Split Layout matching Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (5 cols): List of Questions */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {faqs.map((item) => {
              const isActive = activeIdx === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIdx(item.id)}
                  className={`p-4 rounded-xl border-2 border-[#0E1153] text-left transition-all ${
                    isActive
                      ? "bg-[#FFA800] text-[#0E1153] shadow-[4px_4px_0px_#0E1153] font-bold"
                      : "bg-[#FFFFFF] text-[#0E1153] shadow-[2px_2px_0px_#0E1153] hover:bg-[#FAF8F5]"
                  }`}
                >
                  <span className="font-heading text-sm sm:text-base leading-snug">
                    {item.q}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column (7 cols): Active Answer Callout Card */}
          <div className="lg:col-span-7 p-8 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] flex flex-col justify-between min-h-[340px]">
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#0E1153]/15">
                <span className="px-2.5 py-1 rounded bg-[#CFE8DC] text-[#005F4C] text-[10px] font-mono font-bold uppercase">
                  QUESTION 0{activeIdx + 1} // ANSWER
                </span>
                <span className="w-7 h-7 rounded-full bg-[#FFA800] border border-[#0E1153] flex items-center justify-center font-bold text-xs">
                  ✓
                </span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-[#0E1153] mb-4">
                {faqs[activeIdx].q}
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#3E4945] leading-relaxed mb-6">
                {faqs[activeIdx].a}
              </p>
            </div>

            <div className="pt-4 border-t border-[#0E1153]/15 flex items-center justify-between">
              <span className="font-mono text-xs text-[#3E4945]">
                Need a specific feature or custom quote?
              </span>
              <Link
                href="/contact"
                className="font-mono text-xs font-bold text-[#005F4C] hover:underline"
              >
                Talk to an architect →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

