"use client";

import React, { useState } from "react";
import Link from "next/link";
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
    q: "What is performance marketing, and how does it work?",
    a: "Performance marketing is paid advertising measured by results such as leads, sales and cost per acquisition, rather than impressions alone. We run ads on platforms like Google and Meta, track what each campaign delivers, and move budget towards the ads and audiences that perform best.",
  },
  {
    q: "How much does performance marketing cost in Bangalore?",
    a: "There are two parts: your ad spend, which you pay to the platforms such as Google or Meta, and our management fee. Both depend on your goals, the platforms, the number of campaigns and the creatives you need. We share a fixed proposal with clear deliverables before we start.",
  },
  {
    q: "Do you manage Google Ads and Facebook Ads campaigns?",
    a: "Yes. We manage Google Ads campaigns across Search, Display and YouTube, Meta Ads on Facebook and Instagram, and LinkedIn Ads for B2B audiences, from setup and targeting to day-to-day optimization.",
  },
  {
    q: "Can performance marketing help generate leads and online sales?",
    a: "Yes, that is what it is built for. Results depend on your offer, budget, market and landing pages, so no agency can honestly guarantee a number of leads or sales. We set clear targets with you, test what works and keep improving campaigns based on the data.",
  },
  {
    q: "What is the difference between SEO and performance marketing?",
    a: "Performance marketing buys visibility: your ads can appear as soon as campaigns go live, and you pay for clicks or impressions while they run. SEO earns organic visibility that builds over time without paying per click. Many businesses use paid campaigns for immediate results while SEO grows in the background.",
  },
  {
    q: "Do you provide paid advertising for e-commerce websites?",
    a: "Yes. We run campaigns for online stores, including product promotions, retargeting and seasonal sale campaigns, with conversion tracking set up on your store so sales can be measured against ad spend.",
  },
  {
    q: "How do you measure campaign performance and ROAS?",
    a: "Before launch we set up conversion tracking with your analytics and the ad platforms' pixels. Our regular reports show spend, clicks, leads, sales, cost per acquisition and return on ad spend (ROAS), along with what we are changing next.",
  },
  {
    q: "Do you create the ad creatives and landing pages?",
    a: "Yes. Our graphic design, video and web teams create ad designs, promotional videos and campaign landing pages, and we work with creators for sponsored content where it suits your audience.",
  },
];

export default function PaidPromotionFAQ() {
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
          <h2 className="font-heading text-4xl sm:text-5xl text-[#0E1153] leading-tight mb-4">
            <span>Frequently Asked Questions</span>
            <br />
            <span>About Paid Advertising</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#3E4945] leading-relaxed">
            Looking to grow organic traffic as well? See our{" "}
            <Link href="/services/seo-optimizations" className="font-bold text-[#005F4C] underline underline-offset-2 hover:text-[#0E1153]">
              SEO optimization services
            </Link>
            .
          </p>
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
