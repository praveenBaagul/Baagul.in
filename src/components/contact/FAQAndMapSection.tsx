"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How fast can Baagul Marketing kick off a sprint?",
    answer: "Upon reviewing your enquiry and executing a mutual non-disclosure agreement, our technical team conducts an initial audit within 48 hours. Most digital marketing, SEO, and development sprints commence within 5 to 7 business days.",
  },
  {
    question: "Do you work with startups, or strictly enterprises?",
    answer: "We partner with both. We work with venture-backed early-stage teams needing full-funnel search dominance and proven performance acquisition, as well as heritage enterprises modernizing their headless e-commerce stacks.",
  },
  {
    question: "Can we schedule an in-person workshop at HSR Layout?",
    answer: "Absolutely. We host founders and core marketing teams at our studio in Hustlehub Tech Park, Sector 4, HSR Layout for whiteboarding, technical audit walk-throughs, and strategy alignment sessions by appointment.",
  },
  {
    question: "What models of engagement do you provide?",
    answer: "We provide dedicated monthly growth pods (combining SEO architects, media buyers, and Next.js developers), targeted milestone projects (such as technical migrations or headless store builds), and performance revenue-share engagements.",
  },
];

export default function FAQAndMapSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full py-20 px-4 sm:px-12 max-w-7xl mx-auto border-t border-indigo-main/20">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-14">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 bg-peacock" />
          <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-indigo-main">
            FREQUENT QUESTIONS &amp; STUDIO
          </span>
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl text-indigo-main max-w-2xl leading-tight">
          Everything you need to know before reaching out.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* FAQ Accordion List (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-canvas-card border-2 border-indigo-main rounded-xl p-6 shadow-[4px_4px_0px_#121a4a] transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-4 text-left font-heading text-lg sm:text-xl text-indigo-main font-semibold"
                >
                  <span>{item.question}</span>
                  <span className={`text-sm text-terracotta transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <p className="font-sans text-sm text-slate-text leading-relaxed mt-4 pt-4 border-t border-indigo-main/15">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Studio Map & Directions Panel (5 Cols) */}
        <div className="lg:col-span-5">
          <div className="bg-canvas-card border-2 border-indigo-main rounded-xl p-6 shadow-[6px_6px_0px_#121a4a] flex flex-col">
            
            {/* Header bar */}
            <div className="flex items-center justify-between pb-3 border-b border-indigo-main/15 text-xs font-mono">
              <div className="flex items-center gap-2 text-indigo-main font-bold">
                <span className="w-2 h-2 rounded-full bg-peacock" />
                <span>HSR STUDIO BASE</span>
              </div>
              <span className="text-slate-text">BENGALURU, KA</span>
            </div>

            {/* Map visual card */}
            <div className="relative my-4 h-48 w-full bg-[#f1ede2] border border-indigo-main/30 rounded-lg p-4 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-peacock text-canvas flex items-center justify-center text-xl mb-2 shadow-[2px_2px_0px_#121a4a]">
                📍
              </div>
              <h4 className="font-heading text-xl text-indigo-main font-bold">
                Hustlehub Tech Park
              </h4>
              <p className="text-xs text-slate-text">
                2nd Floor, Sector 3/4, HSR Layout
              </p>
            </div>

            {/* Parking & transit notes */}
            <div className="flex flex-col gap-2 text-xs text-indigo-main/80 mb-6">
              <div className="flex items-start gap-2">
                <span className="text-marigold">✦</span>
                <span>Visitor parking available on-site at Tech Park basement.</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-marigold">✦</span>
                <span>15 mins from Silk Board Junction &amp; Outer Ring Road tech corridor.</span>
              </div>
            </div>

            {/* Direct Google Maps link button */}
            <a
              href="https://maps.google.com/?q=Hustlehub+Tech+Park+HSR+Layout+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg bg-canvas border border-indigo-main text-indigo-main font-mono text-xs font-bold uppercase tracking-wider text-center shadow-[2px_2px_0px_#121a4a] hover:bg-canvas-alt transition-colors flex items-center justify-center gap-2"
            >
              <span>🧭 Get Directions via Google Maps</span>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}

