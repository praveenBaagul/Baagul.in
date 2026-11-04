import React from "react";
import Link from "next/link";

interface ExecutionCard {
  number: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  shadowColor: string;
  tagBg: string;
  tagText: string;
  icon: string;
}

const cards: ExecutionCard[] = [
  {
    number: "01",
    title: "Website Audit & Analysis",
    description:
      "Comprehensive evaluation of your technical architecture, crawling efficiency, indexation barriers, Core Web Vitals, and backlink profile health.",
    bgColor: "bg-[#FFFFFF]",
    textColor: "text-[#0E1153]",
    borderColor: "border-[#0E1153]",
    shadowColor: "#0E1153",
    tagBg: "bg-[#CFE8DC]",
    tagText: "text-[#005F4C]",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Keyword Research & Strategy",
    description:
      "In-depth keyword gap exploration, high-commercial intent query mapping, customer journey search behavior, and competitor SERP vulnerability analysis.",
    bgColor: "bg-[#F5A800]",
    textColor: "text-[#0E1153]",
    borderColor: "border-[#0E1153]",
    shadowColor: "#0E1153",
    tagBg: "bg-[#FFFFFF]",
    tagText: "text-[#0E1153]",
    icon: "🎯",
  },
  {
    number: "03",
    title: "On-Page & Technical SEO",
    description:
      "Semantic HTML heading structures, meta descriptions, internal linking matrices, image asset compression, and JSON-LD entity graph integration.",
    bgColor: "bg-[#CFE8DC]",
    textColor: "text-[#0E1153]",
    borderColor: "border-[#0E1153]",
    shadowColor: "#0E1153",
    tagBg: "bg-[#FFFFFF]",
    tagText: "text-[#005F4C]",
    icon: "⚡",
  },
  {
    number: "04",
    title: "Content & Link Building",
    description:
      "Authority-building editorial campaigns, digital PR placements, high-DA brand mentions, and conversion-optimized informational topic clusters.",
    bgColor: "bg-[#E1E3F7]",
    textColor: "text-[#0E1153]",
    borderColor: "border-[#0E1153]",
    shadowColor: "#0E1153",
    tagBg: "bg-[#0E1153]",
    tagText: "text-[#FEF9ED]",
    icon: "🔗",
  },
];

export default function SeoMainFeatures() {
  return (
    <section className="w-full py-24 px-4 sm:px-8 lg:px-12 bg-[#0E1153] text-[#FEF9ED] border-b-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-[#FFBA45]">
              <span className="w-2.5 h-2.5 bg-[#FFBA45]" />
              <span>CORE ARCHITECTURE // 04 PILLARS</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#FEF9ED] leading-tight">
              Technical &amp; Organic Execution
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#FEF9ED]/70 max-w-md leading-relaxed">
            Every layer of your search presence engineered for maximum crawl efficiency, index authority, and revenue-driving conversions.
          </p>
        </div>

        {/* 2x2 Grid of Large Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div
              key={card.number}
              className={`p-8 sm:p-10 rounded-2xl border-2 ${card.borderColor} ${card.bgColor} ${card.textColor} shadow-[8px_8px_0px_#FFBA45] flex flex-col justify-between min-h-[320px] transition-transform hover:-translate-y-1`}
            >
              <div>
                {/* Top Row: Icon + Number */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white/80 border-2 border-[#0E1153] flex items-center justify-center text-2xl shadow-[2px_2px_0px_#0E1153]">
                    {card.icon}
                  </div>
                  <span className="font-heading text-4xl font-bold opacity-30">
                    {card.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-4 leading-snug">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm sm:text-base opacity-90 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Bottom Action Row */}
              <div className="pt-4 border-t border-[#0E1153]/20 flex items-center justify-between">
                <span className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold uppercase ${card.tagBg} ${card.tagText} border border-[#0E1153]/30`}>
                  DELIVERABLE SPEC: 0{card.number}
                </span>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider hover:underline"
                >
                  <span>LEARN MORE</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
