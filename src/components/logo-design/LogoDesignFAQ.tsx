"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FAQItem {
  id: number;
  q: string;
  a: string;
  leftBorderColor: string;
  shadowColor: string;
}

const faqs: FAQItem[] = [
  {
    id: 0,
    q: "What file formats will I receive with my finalized logo?",
    a: "You receive high-resolution vector and raster master files: Adobe Illustrator (.AI), Scalable Vector Graphics (.SVG), Encapsulated PostScript (.EPS), high-resolution transparent .PNGs, and print-ready .PDF files for universal use.",
    leftBorderColor: "border-l-[#005F4C]",
    shadowColor: "shadow-[6px_6px_0px_#005F4C]",
  },
  {
    id: 1,
    q: "How many initial concepts do you provide?",
    a: "We provide 3 to 5 distinct creative directions based on our discovery research, each exploring different layout, typography, and visual mark options.",
    leftBorderColor: "border-l-[#FFA800]",
    shadowColor: "shadow-[6px_6px_0px_#FFA800]",
  },
  {
    id: 2,
    q: "Do I get full commercial copyright ownership?",
    a: "Yes. 100% full legal ownership and commercial copyright are transferred directly to your company upon final delivery and project completion.",
    leftBorderColor: "border-l-[#1A1F5E]",
    shadowColor: "shadow-[6px_6px_0px_#1A1F5E]",
  },
  {
    id: 3,
    q: "What is the standard turnaround time for a complete logo project?",
    a: "Our standard identity turnaround is 7 to 14 business days from kickoff through final delivery, with dedicated milestone checkpoints along the way.",
    leftBorderColor: "border-l-[#005F4C]",
    shadowColor: "shadow-[6px_6px_0px_#005F4C]",
  },
  {
    id: 4,
    q: "Can you redesign or vectorize an existing logo?",
    a: "Yes. We can rebuild, clean up, and vectorize legacy logos, bringing them into modern vector precision while keeping your existing brand equity.",
    leftBorderColor: "border-l-[#FFA800]",
    shadowColor: "shadow-[6px_6px_0px_#FFA800]",
  },
];

export default function LogoDesignFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#E1E3F7] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-start">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-[#FFFFFF] border-2 border-[#0E1153] text-[11px] font-mono font-bold uppercase tracking-widest text-[#0E1153] shadow-[2px_2px_0px_#0E1153]">
            <span className="w-2 h-2 rounded-sm bg-[#FFA800]" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl text-[#0E1153] leading-tight mb-6">
            Everything You Need to Know About Our Logo Design Services
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed mb-8 max-w-sm">
            Clear terms, straightforward copyright handover, and transparent workflows. If you have special branding requirements, our studio is ready to consult.
          </p>

          {/* Yellow Card: Still curious? */}
          <div className="p-6 bg-[#FFA800] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] w-full max-w-sm">
            <h4 className="font-heading text-lg font-bold text-[#0E1153] mb-2">
              Still curious?
            </h4>
            <p className="font-sans text-xs text-[#0E1153]/90 leading-relaxed mb-6">
              Speak with our principal design strategist about your project timeline and custom assets.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1A1F5E] text-[#FEF9ED] font-heading font-bold text-xs border border-[#0E1153] shadow-[2px_2px_0px_#0E1153] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <span>Connect Us</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Right Column (7 cols): Accordion Items with Colored Left Edge & Colored Shadow */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {faqs.map((item) => {
            const isOpen = openIdx === item.id;
            return (
              <div
                key={item.id}
                className={`bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] border-l-8 ${item.leftBorderColor} rounded-xl ${item.shadowColor} overflow-hidden transition-all`}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-5 flex items-center justify-between text-left gap-4 font-heading text-base sm:text-lg font-bold text-[#0E1153] hover:bg-[#FAF8F5] transition-colors"
                >
                  <span className="leading-snug">{item.q}</span>

                  {/* Circular Toggle Button: Gold filled when open, white outline when closed */}
                  <span
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#0E1153] flex items-center justify-center font-mono font-bold text-sm flex-shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#FFA800] text-[#0E1153]"
                        : "bg-[#FFFFFF] text-[#0E1153]"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed border-t border-[#0E1153]/15">
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
