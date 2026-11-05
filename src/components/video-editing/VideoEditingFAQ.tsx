"use client";

import React, { useState } from "react";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/structured-data";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "01",
    question: "What video editing services do you offer?",
    answer: "We edit short-form reels and shorts, YouTube and long-form videos, corporate and brand films, product demos, testimonials, event highlights, and video ads — including motion graphics, color grading, sound design, and subtitles.",
  },
  {
    id: "02",
    question: "How long does it take to edit a video?",
    answer: "Short-form reels are usually delivered within 24–48 hours. Long-form and brand videos typically take 3–7 days depending on length, footage volume, and the amount of motion graphics required.",
  },
  {
    id: "03",
    question: "How many revisions are included?",
    answer: "Every project includes revision rounds so the final cut matches your vision. We share drafts, collect your feedback with timestamps, and refine until you are happy with the result.",
  },
  {
    id: "04",
    question: "How do I send my raw footage?",
    answer: "You can share footage through Google Drive, Dropbox, WeTransfer, or any cloud link. Along with the footage, send your logo, fonts, music preferences, and any reference videos you like.",
  },
  {
    id: "05",
    question: "Which formats and aspect ratios do you deliver?",
    answer: "We export in MP4 or MOV at up to 4K, in vertical (9:16), horizontal (16:9), and square (1:1) formats, optimized for Instagram, YouTube, Facebook, LinkedIn, and ad platforms.",
  },
  {
    id: "06",
    question: "Do you offer monthly video editing packages?",
    answer: "Yes. Along with one-off projects, we offer monthly plans for creators and brands who publish regularly, with a fixed number of videos, consistent styling, and priority turnaround.",
  },
];

export default function VideoEditingFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="relative w-full bg-[#FEF9ED] border-b-2 border-[#0E1153] py-20 px-4 sm:px-8 lg:px-12">
      <JsonLd data={faqSchema(faqs.map((f) => ({ q: f.question, a: f.answer })))} />
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
              Everything You Need to Know About Our Video Editing Services
            </h2>

            <p className="font-sans text-xs sm:text-sm text-[#121A4A]/75 leading-relaxed mb-8">
              Clear answers on how Baagul handles footage, turnaround times, revisions, and final video delivery.
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
                Have a specific video style, deadline, or volume in mind? Talk directly to our editing team.
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

