import React from "react";
import Link from "next/link";

interface DeliverableCard {
  number: string;
  title: string;
  desc: string;
  bgColor: string;
  textColor: string;
  highlight?: boolean;
}

const cards: DeliverableCard[] = [
  {
    number: "01",
    title: "Responsive & Mobile-First",
    desc: "Fluid typography and adaptive grid frameworks that adapt flawlessly to mobile, tablet, and ultra-wide screens.",
    bgColor: "bg-[#FFFFFF]",
    textColor: "text-[#0E1153]",
  },
  {
    number: "02",
    title: "Clean UI / UX Concept",
    desc: "Intuitive interaction design, minimal cognitive friction, and intentional layouts engineered around user intent.",
    bgColor: "bg-[#FFFFFF]",
    textColor: "text-[#0E1153]",
  },
  {
    number: "03",
    title: "Clear Typography",
    desc: "Carefully calibrated font weights, contrast ratios, and line-heights ensuring effortless reading.",
    bgColor: "bg-[#FFA800]",
    textColor: "text-[#0E1153]",
    highlight: true,
  },
  {
    number: "04",
    title: "Fast Loading Speed",
    desc: "Sub-second LCP, minimal CLS, and Next.js server-side caching resulting in 99+ PageSpeed scores.",
    bgColor: "bg-[#E1E3F7]",
    textColor: "text-[#0E1153]",
  },
  {
    number: "05",
    title: "Modern & Minimal Elements",
    desc: "Distinctive neo-brutalist styling, clean borders, and tactical drop-shadows that command authority.",
    bgColor: "bg-[#FFFFFF]",
    textColor: "text-[#0E1153]",
  },
  {
    number: "06",
    title: "Accessible Price",
    desc: "Modular service architecture tailored for ambitious startups through established enterprise studios.",
    bgColor: "bg-[#CFE8DC]",
    textColor: "text-[#005F4C]",
  },
];

export default function WebDesignFeatures() {
  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#FEF9ED] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-[#0E1153] text-[#FEF9ED] text-xs font-mono font-bold uppercase tracking-widest">
            <span>SERVICE OVERVIEW</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#0E1153] leading-tight mb-6">
            Unique Web Design, color palettes, and brand guidelines that define your business.
          </h2>

          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[4px_4px_0px_#0E1153] mb-8">
            <span className="font-heading font-bold text-sm block mb-1">
              Engineered with Modern Code
            </span>
            <p className="font-sans text-xs text-[#3E4945] leading-relaxed">
              We ditch bloated themes and page builders to craft bespoke Next.js and TypeScript digital applications.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FFA800] transition-all"
          >
            <span>Learn more about us</span>
            <span>→</span>
          </Link>
        </div>

        {/* Right Column (7 cols) - 2x3 Grid of 6 Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card) => (
            <div
              key={card.number}
              className={`p-6 ${card.bgColor} ${card.textColor} border-2 border-[#0E1153] rounded-2xl shadow-[5px_5px_0px_#0E1153] flex flex-col justify-between min-h-[190px]`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold uppercase">
                    FEATURE 0{card.number}
                  </span>
                  <span className="font-mono text-xs font-bold opacity-40">
                    {card.number}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold mb-2 leading-snug">
                  {card.title}
                </h3>

                <p className="font-sans text-xs opacity-90 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-current/20 font-mono text-[10px] font-bold uppercase">
                STATUS: INCLUDED
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

