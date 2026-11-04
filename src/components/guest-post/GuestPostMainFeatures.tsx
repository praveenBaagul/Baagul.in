import React from "react";
import Link from "next/link";

interface ServiceCard {
  number: string;
  title: string;
  description: string;
  iconBg: string;
  iconText: string;
  tag: string;
}

const cards: ServiceCard[] = [
  {
    number: "01",
    title: "High-Quality Content Creation",
    description: "Search-first, niche-crafted articles authored by industry specialists to establish genuine brand credibility and engagement.",
    iconBg: "bg-[#CFE8DC]",
    iconText: "text-[#005F4C]",
    tag: "MODULE 01",
  },
  {
    number: "02",
    title: "SEO-Optimized Articles",
    description: "Strategic anchor text mapping, secondary semantic keywords, and intent-matched headers tailored to pass algorithmic audits.",
    iconBg: "bg-[#FFA800]",
    iconText: "text-[#0E1153]",
    tag: "MODULE 02",
  },
  {
    number: "03",
    title: "Authority & Do-Follow Building",
    description: "High Domain Authority (DA 50–90+) publisher relationships ensuring permanent do-follow links that transfer real link equity.",
    iconBg: "bg-[#CFE8DC]",
    iconText: "text-[#005F4C]",
    tag: "MODULE 03",
  },
  {
    number: "04",
    title: "Custom Outreach & Placements",
    description: "Manual, relationship-driven outreach to real editorial blogs. Absolutely no PBNs, automated links, or low-quality link farms.",
    iconBg: "bg-[#FFA800]",
    iconText: "text-[#0E1153]",
    tag: "MODULE 04",
  },
];

export default function GuestPostMainFeatures() {
  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#E1E3F7] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-[#005F4C]">
              <span className="w-2.5 h-2.5 bg-[#005F4C]" />
              <span>OUTREACH SOLUTIONS</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-[#0E1153]">
              Our Services
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#3E4945] max-w-sm leading-relaxed">
            We identify authoritative editorial outlets, secure verified context placements, and manage end-to-end publishing pipelines.
          </p>
        </div>

        {/* 4 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {cards.map((card) => (
            <div
              key={card.number}
              className="p-6 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between transition-transform hover:-translate-y-1"
            >
              <div>
                {/* Header row inside card */}
                <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#0E1153]/15">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#3E4945]">
                    {card.tag}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#0E1153]/40">
                    {card.number}
                  </span>
                </div>

                {/* Icon box */}
                <div className={`w-9 h-9 rounded-lg ${card.iconBg} ${card.iconText} border border-[#0E1153] flex items-center justify-center font-bold text-sm mb-5 shadow-[1px_1px_0px_#0E1153]`}>
                  ✍
                </div>

                <h3 className="font-heading text-xl font-bold mb-3 leading-snug">
                  {card.title}
                </h3>

                <p className="font-sans text-xs text-[#3E4945] leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#0E1153]/15 flex items-center justify-between text-[11px] font-mono font-bold text-[#005F4C]">
                <span>VIEW SPEC</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
