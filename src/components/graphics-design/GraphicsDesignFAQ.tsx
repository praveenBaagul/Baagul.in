"use client";

import React, { useState } from "react";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/structured-data";

interface FAQItem {
  q: string;
  a: string;
}

// Cards cycle through these backgrounds in order.
const BACKGROUNDS = ["bg-[#FFFFFF]", "bg-[#CFE8DC]", "bg-[#E1E3F7]"];

const faqs: FAQItem[] = [
  {
    q: "What graphic design services do you offer?",
    a: "We design social media graphics, advertising creatives, brochures, flyers, one-pagers, posters, packaging, exhibition graphics, and corporate presentations and pitch decks. For logos and complete brand identities, see our logo design service.",
  },
  {
    q: "Do you design social media graphics and templates?",
    a: "Yes. We create posts, carousels, stories and cover images for platforms such as Instagram, LinkedIn, Facebook and X, and can build reusable templates so your team can publish consistent content.",
  },
  {
    q: "Can you design ad creatives for Meta, Google and LinkedIn?",
    a: "Yes. We design ad creative sets sized for each placement, along with promotional banners. If you also need the campaigns planned and managed, our paid promotions team can run them.",
  },
  {
    q: "How much do graphic design services cost?",
    a: "The cost depends on the number and type of designs, and whether you need a one-off project or ongoing support. We share a fixed quote with clear deliverables before we start, so there are no surprises.",
  },
  {
    q: "Which file formats will I receive?",
    a: "We agree the formats in your quote. Printed work is delivered as print-ready files and digital work as web-ready images sized for each platform. Editable source files can be included when agreed.",
  },
  {
    q: "How long does a graphic design project take?",
    a: "It depends on the scope. A set of social media posts or ad creatives is quicker than a multi-page brochure or a full presentation. We agree a delivery schedule in your quote before work begins.",
  },
  {
    q: "Are revisions included?",
    a: "Yes. Every project includes review rounds, so you can share feedback before the files are finalised. The number of revision rounds is set out in your quote.",
  },
  {
    q: "Can you work with our existing brand guidelines?",
    a: "Yes. We follow your existing logo, colours and typography so every design stays consistent with your brand. If you don't have guidelines yet, we can create them as part of a brand identity project.",
  },
];

export default function GraphicsDesignFAQ() {
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
            <span>Graphic Design Services</span>
            <br />
            <span>FAQs</span>
          </h2>
        </div>

        {/* 2-Column Accordion Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.q}
                className={`${BACKGROUNDS[idx % BACKGROUNDS.length]} text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] overflow-hidden transition-all`}
              >
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4 transition-colors"
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-[#0E1153] leading-snug">
                    {item.q}
                  </span>

                  {/* Toggle Button: Orange when open, White when closed */}
                  <span
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg border-2 border-[#0E1153] flex items-center justify-center font-mono font-bold text-sm flex-shrink-0 transition-colors ${
                      isOpen ? "bg-[#FFA800] text-[#0E1153]" : "bg-[#FFFFFF] text-[#0E1153]"
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
