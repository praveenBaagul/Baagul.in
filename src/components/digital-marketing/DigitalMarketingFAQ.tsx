"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "01",
    question: "What digital marketing services do you offer?",
    answer: "We provide full-spectrum growth engineering including technical Search Engine Optimization (SEO), high-conversion Pay-Per-Click management (Google & Meta Ads), social media brand positioning, programmatic content syndication, full-funnel email automation, and multi-touch analytics attribution models.",
  },
  {
    id: "02",
    question: "How long does it take to see results from digital marketing?",
    answer: "Paid ads and conversion rate improvements typically reflect data within 7–14 days. Organic SEO, content authority building, and algorithmic brand traction compound significantly over a 3 to 6-month operational horizon.",
  },
  {
    id: "03",
    question: "Do you provide SEO services?",
    answer: "Yes. Our SEO framework spans technical Core Web Vitals remediation, semantic entity architecture, schema graphs, programmatic indexing, and authoritative backlink acquisition.",
  },
  {
    id: "04",
    question: "Can you manage paid ads like Google Ads and Meta Ads?",
    answer: "Yes, we handle end-to-end media buying across Google Search, Shopping, YouTube, Instagram Reels, and Meta feed ads with high creative turnover and algorithmic bid optimization.",
  },
  {
    id: "05",
    question: "How do you measure digital marketing performance?",
    answer: "We use server-side tracking, GA4 custom conversion events, and blended ROAS / CAC metrics visualized on real-time Looker Studio dashboards directly connected to your store backend.",
  },
  {
    id: "06",
    question: "Do you offer customized digital marketing strategies?",
    answer: "Absolutely. We reject one-size-fits-all playbooks. Every brand receives a bespoke channel allocation strategy calibrated to your market vertical, customer acquisition economics, and sprint goals.",
  },
];

export default function DigitalMarketingFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="relative w-full bg-[#FEF9ED] border-b-2 border-[#0E1153] py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (4 cols): Sticky Info & Consultation Box */}
          <div className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-28">
            
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#FFBA45] border border-[#0E1153] shadow-[1px_1px_0px_#0E1153]" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#0E1153]">
                ■ FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl text-[#0E1153] leading-snug mb-4">
              Everything You Need to Know About Our Digital Marketing Services
            </h2>

            <p className="font-sans text-xs sm:text-sm text-[#121A4A]/75 leading-relaxed mb-8">
              Clear, transparent operational answers on how Baagul handles channel allocations, analytics attribution, and sprint deliverables.
            </p>

            {/* Still Curious Card */}
            <div className="w-full bg-[#CFE8DC] border-2 border-[#0E1153] rounded-2xl p-6 shadow-[5px_5px_0px_#0E1153]">
              <span className="font-mono text-[10px] uppercase font-bold text-[#0E1153] tracking-wider block mb-1">
                EXPERT CONSULTATION
              </span>
              <h4 className="font-heading text-xl font-bold text-[#0E1153] mb-2">
                Still curious?
              </h4>
              <p className="font-sans text-xs text-[#0E1153]/80 leading-relaxed mb-5">
                Have specific industry constraints or questions about enterprise integrations? Talk directly to our technical directors.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0E1153] text-[#FEF9ED] rounded-xl font-mono text-xs uppercase font-bold border border-[#0E1153] shadow-[3px_3px_0px_#FFBA45] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <span>CONNECT US</span>
                <span>→</span>
              </Link>
            </div>

          </div>

          {/* Right Column (8 cols): Interactive Accordion */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.id}
                  className={`border-2 border-[#0E1153] rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white shadow-[6px_6px_0px_#0E1153]"
                      : "bg-[#FEF9ED] shadow-[4px_4px_0px_#0E1153] hover:shadow-[5px_5px_0px_#0E1153]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-bold text-[#0E7A63]">
                        {faq.id}
                      </span>
                      <span className="font-heading text-lg sm:text-xl font-bold text-[#0E1153]">
                        {faq.question}
                      </span>
                    </div>
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-base font-bold border border-[#0E1153] transition-colors ${
                        isOpen
                          ? "bg-[#FFBA45] text-[#0E1153]"
                          : "bg-[#E1E3F7] text-[#0E1153]"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#0E1153]/15">
                      <p className="font-sans text-xs sm:text-sm text-[#121A4A]/85 leading-relaxed pl-8">
                        {faq.answer}
                      </p>
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

