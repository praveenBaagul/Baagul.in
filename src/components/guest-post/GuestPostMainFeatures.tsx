import React from "react";

interface ServiceCard {
  serviceNumber: string;
  badgeColor: string;
  iconBg: string;
  title: string;
  description: string;
  footerText: string;
  icon: React.ReactNode;
}

const cards: ServiceCard[] = [
  {
    serviceNumber: "SERVICE 01",
    badgeColor: "bg-[#005F4C]",
    iconBg: "bg-[#CFE8DC]",
    title: "High-Quality Content Creation",
    description:
      "We craft well-researched, engaging, and original articles tailored to your niche.",
    footerText: "EDITORIAL DRAFT",
    icon: (
      <svg
        className="w-5 h-5 text-[#0E1153]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="4" y1="6" x2="14" y2="6" />
        <line x1="4" y1="11" x2="11" y2="11" />
        <line x1="4" y1="16" x2="8" y2="16" />
        <path d="M15 11l4-4 2 2-4 4-3 1 1-3z" />
      </svg>
    ),
  },
  {
    serviceNumber: "SERVICE 02",
    badgeColor: "bg-[#FFA800]",
    iconBg: "bg-[#FFA800]",
    title: "SEO-Optimized Articles",
    description:
      "Each post is optimized with the right keywords to improve search engine rankings and drive organic traffic.",
    footerText: "SERP FOCUSED",
    icon: (
      <svg
        className="w-5 h-5 text-[#0E1153]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 6h7" />
        <path d="M3 12h5" />
        <path d="M3 18h7" />
        <circle cx="16" cy="11" r="3.5" />
        <line x1="18.5" y1="13.5" x2="21.5" y2="16.5" />
      </svg>
    ),
  },
  {
    serviceNumber: "SERVICE 03",
    badgeColor: "bg-[#0E1153]",
    iconBg: "bg-[#CFE8DC]",
    title: "Authority & Backlink Building",
    description:
      "Publish on reputable websites to increase your brand credibility and gain valuable backlinks.",
    footerText: "DO-FOLLOW",
    icon: (
      <svg
        className="w-5 h-5 text-[#0E1153]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    serviceNumber: "SERVICE 04",
    badgeColor: "bg-[#4E8D7C]",
    iconBg: "bg-[#FFA800]",
    title: "Custom Outreach & Placement",
    description:
      "We handle outreach and secure placements on relevant blogs, ensuring your content reaches the right audience.",
    footerText: "TARGET AUDIENCE",
    icon: (
      <svg
        className="w-5 h-5 text-[#0E1153]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
  },
];

export default function GuestPostMainFeatures() {
  return (
    <section className="w-full py-20 lg:py-24 px-6 sm:px-12 lg:px-16 bg-[#E1E3F7] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Header: Title Left, Paragraph Right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-2 border-[#0E1153]/20 mb-10">
          <div>
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded bg-[#FFFFFF] border border-[#0E1153] text-[11px] font-mono font-bold uppercase tracking-widest text-[#0E1153] shadow-[2px_2px_0px_#0E1153]">
              <span className="w-2 h-2 bg-[#FFA800] rounded-[1px]" />
              <span>OUR SERVICES</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#0E1153] leading-tight">
              Our Services
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#3E4945] max-w-md leading-relaxed pb-1">
            We think big and have hands in all leading technology platforms to provide you wide array of services.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {cards.map((card) => (
            <div
              key={card.serviceNumber}
              className="relative bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#0E1153] group"
            >
              {/* Top-Right Dog-Ear Accent Tab */}
              <div className="absolute top-0 right-0 pointer-events-none z-10" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M0 0 L24 24 V0 H0 Z" fill="#FFA800" stroke="#0E1153" strokeWidth="2" strokeLinejoin="miter" />
                </svg>
              </div>

              <div>
                {/* Header Row: SERVICE XX & Square Badge */}
                <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#0E1153]/15 pr-5">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0E1153]/80">
                    {card.serviceNumber}
                  </span>
                  <span
                    className={`w-2.5 h-2.5 rounded-[1px] border border-[#0E1153]/40 ${card.badgeColor}`}
                  />
                </div>

                {/* Icon Box */}
                <div
                  className={`w-12 h-12 rounded-xl border-2 border-[#0E1153] shadow-[3px_3px_0px_#0E1153] flex items-center justify-center mb-5 ${card.iconBg} transition-transform duration-200 group-hover:scale-105`}
                >
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl sm:text-[22px] font-bold text-[#0E1153] leading-snug mb-3">
                  {card.title}
                </h3>

                {/* Dashed Separator */}
                <div
                  className="w-full border-t border-dashed border-[#0E1153]/25 my-4"
                  aria-hidden="true"
                />

                {/* Description */}
                <p className="font-sans text-xs sm:text-[13px] text-[#3E4945] leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Bottom Row / Action */}
              <div className="pt-3.5 flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-wider text-[#0E1153]">
                <span className="group-hover:text-[#005F4C] transition-colors">
                  {card.footerText}
                </span>
                <span className="text-base font-bold transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
