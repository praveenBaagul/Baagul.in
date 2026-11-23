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
    q: "What are guest posting services, and how do they help my business?",
    a: "Guest posting means writing and publishing articles on other relevant websites in your industry. Done well, it puts your brand in front of new readers, brings referral traffic, builds trust and can earn editorial mentions and links that support your wider SEO.",
  },
  {
    q: "How much do guest posting services cost?",
    a: "The cost depends on how many placements you need, the publications you want to appear on, and whether content writing and digital PR are included. We share a fixed quote and the list of target websites before we start, so there are no surprises.",
  },
  {
    q: "How do you select websites for guest posting?",
    a: "We look for websites with a genuine audience and real organic traffic, topical relevance to your business, a clean link profile and real editorial standards. We avoid sites that exist only to sell links.",
  },
  {
    q: "What is the difference between guest posting and digital PR?",
    a: "Guest posting places an article you contribute on another website. Digital PR earns coverage that journalists and editors write themselves, through stories, data, expert commentary and campaigns. Many brands use both: guest posts for steady, targeted visibility and digital PR for wider reach and authority.",
  },
  {
    q: "Can guest posting help increase referral traffic?",
    a: "Yes. A useful article on a website your customers already read sends interested visitors to your site. That is why we choose publications by audience and relevance rather than by metrics alone.",
  },
  {
    q: "Do you provide guest post content writing?",
    a: "Yes. Our in-house writers create well-researched, original, publication-ready articles that follow each website's editorial guidelines. You review and approve every article before it is pitched.",
  },
  {
    q: "Are guest post links do-follow and permanent?",
    a: "Each publisher decides how links on its website are marked. In line with Google's guidelines, paid or sponsored placements should carry rel=\"sponsored\" or rel=\"nofollow\", and we do not disguise them. No agency can guarantee that a third-party website keeps a link forever, but we choose stable, well-run publications and check placements after they go live.",
  },
  {
    q: "How do you report published guest posts?",
    a: "You receive a report for every placement with the live URL, the publishing website, the link and how it is marked, and the publication date, so you always know exactly what was published and where.",
  },
  {
    q: "How long does it take for a guest post or PR placement to get published?",
    a: "Most placements take 7 to 21 business days, from topic approval and writing to the publisher's editorial review and going live. Timelines vary by publication.",
  },
  {
    q: "Is guest posting safe from Google penalties?",
    a: "Guest posting is safe when it is done for audiences, not just links. We use manual, white-hat outreach to relevant websites, natural anchor text, correct labelling of paid placements, and we never use private blog networks or link schemes.",
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
            <span>Frequently Asked Questions</span>
            <br />
            <span>About Guest Posting</span>
          </h2>
        </div>

        {/* 2-Column Grid Matching Screenshot Colors Exactly */}
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
