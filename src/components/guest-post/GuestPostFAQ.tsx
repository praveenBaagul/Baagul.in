"use client";

import React, { useState } from "react";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/structured-data";

interface FAQItem {
  id: number;
  q: string;
  a: string;
  defaultBg: string;
  defaultShadow: string;
}

const faqs: FAQItem[] = [
  {
    id: 0,
    q: "What are guest posts & PR, and how do they help my business?",
    a: "Guest posts & PR involve writing and publishing articles on other reputable websites within your industry. It helps you acquire high-quality backlinks, improve search engine rankings, drive targeted referral traffic, and establish brand authority.",
    defaultBg: "bg-[#FFFFFF]",
    defaultShadow: "shadow-[6px_6px_0px_#0E1153]",
  },
  {
    id: 1,
    q: "Are the backlinks do-follow and permanent?",
    a: "Yes. All backlinks secured through our guest posts & PR service are 100% natural, permanent do-follow links embedded contextually within authoritative editorial content.",
    defaultBg: "bg-[#CFE8DC]",
    defaultShadow: "shadow-[6px_6px_0px_#0E1153]",
  },
  {
    id: 2,
    q: "How do you choose websites for guest posts & PR outreach?",
    a: "We evaluate websites based on high Domain Authority (DA 50+), real organic Google search traffic, clean backlink profiles with low spam scores, and topical relevance to your target audience.",
    defaultBg: "bg-[#E1E3F7]",
    defaultShadow: "shadow-[6px_6px_0px_#0E1153]",
  },
  {
    id: 3,
    q: "Do I need to supply the article content myself?",
    a: "No. Our dedicated in-house team of professional copywriters and subject specialists crafts well-researched, publication-ready articles matching each host website's editorial guidelines.",
    defaultBg: "bg-[#FFFFFF]",
    defaultShadow: "shadow-[6px_6px_0px_#0E1153]",
  },
  {
    id: 4,
    q: "How long does it take for a guest post or PR placement to get published?",
    a: "On average, the process takes between 7 to 21 business days from pitch approval and drafting to final editorial review, live publication, and search engine indexation.",
    defaultBg: "bg-[#CFE8DC]",
    defaultShadow: "shadow-[6px_6px_0px_#0E1153]",
  },
  {
    id: 5,
    q: "Are your link-building practices safe from Google penalties?",
    a: "Yes. We strictly follow white-hat manual outreach methods with authentic editorial relationships, diversified natural anchor text, and zero involvement with PBNs or link networks.",
    defaultBg: "bg-[#E1E3F7]",
    defaultShadow: "shadow-[6px_6px_0px_#0E1153]",
  },
];

export default function GuestPostFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#FEF9ED] text-[#0E1153] border-b-2 border-[#0E1153]">
      <JsonLd data={faqSchema(faqs)} />
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Eyebrow badge with orange dot */}
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-[#FFFFFF] border-2 border-[#0E1153] text-[11px] font-mono font-bold uppercase tracking-widest text-[#0E1153] shadow-[2px_2px_0px_#0E1153]">
          <span className="w-2 h-2 rounded-sm bg-[#FFA800]" />
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-16 max-w-3xl">
          <h2 className="font-heading text-4xl sm:text-5xl text-[#0E1153] leading-tight">
            <span>Everything You Need to Know About</span>
            <br />
            <span>Our Guest Posts &amp; PR Services</span>
          </h2>
        </div>

        {/* 2-Column Grid Matching Screenshot Colors Exactly */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {faqs.map((item) => {
            const isOpen = openIdx === item.id;
            return (
              <div
                key={item.id}
                className={`${item.defaultBg} text-[#0E1153] border-2 border-[#0E1153] rounded-2xl ${item.defaultShadow} overflow-hidden transition-all`}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4 transition-colors"
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-[#0E1153] leading-snug">
                    {item.q}
                  </span>

                  {/* Toggle Button: Orange when open, White when closed */}
                  <span
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg border-2 border-[#0E1153] flex items-center justify-center font-mono font-bold text-sm flex-shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#FFA800] text-[#0E1153]"
                        : "bg-[#FFFFFF] text-[#0E1153]"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed border-t border-[#0E1153]/15">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
