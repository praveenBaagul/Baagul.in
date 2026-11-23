import React from "react";
import Link from "next/link";

interface ProcessCard {
  number: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  iconBg: string;
}

const cards: ProcessCard[] = [
  {
    number: "01",
    title: "Social Media Graphic Design",
    description: "Posts, carousels, stories, cover images and reusable templates for Instagram, LinkedIn, Facebook and X, consistent with your brand.",
    bgColor: "bg-[#FFFFFF]",
    textColor: "text-[#0E1153]",
    iconBg: "bg-[#EDE8DC]",
  },
  {
    number: "02",
    title: "Advertising Creatives",
    description: "Ad creative sets for Meta, Google Display and LinkedIn, sized for each placement, plus promotional banners for campaigns and offers.",
    bgColor: "bg-[#CFE8DC]",
    textColor: "text-[#0E1153]",
    iconBg: "bg-[#FFFFFF]",
  },
  {
    number: "03",
    title: "Brochures & Marketing Collateral",
    description: "Brochures, flyers, one-pagers, posters, packaging and exhibition graphics, prepared as print-ready files.",
    bgColor: "bg-[#E1E3F7]",
    textColor: "text-[#0E1153]",
    iconBg: "bg-[#FFFFFF]",
  },
  {
    number: "04",
    title: "Corporate Presentations",
    description: "Pitch decks, sales presentations and company profiles that make complex information clear and look consistent slide after slide.",
    bgColor: "bg-[#FFA800]",
    textColor: "text-[#0E1153]",
    iconBg: "bg-[#0E1153]",
  },
];

export default function GraphicsDesignServicesGrid() {
  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#FEF9ED] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-[#005F4C]">
              <span className="w-2.5 h-2.5 bg-[#FFA800]" />
              <span>CAPABILITIES &amp; DELIVERABLES</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-[#0E1153]">
              Social Media, Advertising &amp; Marketing Collateral Design
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#3E4945] max-w-md leading-relaxed">
            The graphic design work we deliver most often, from daily social media content to corporate presentations.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          {cards.map((card) => (
            <div
              key={card.number}
              className={`p-6 sm:p-7 rounded-2xl border-2 border-[#0E1153] ${card.bgColor} ${card.textColor} shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between min-h-[300px] transition-transform hover:-translate-y-1`}
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-3 border-b border-current/15">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    MODULE {card.number}
                  </span>
                  <span className="font-heading text-3xl font-black opacity-30">
                    {card.number}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-white/80 border border-[#0E1153] flex items-center justify-center text-lg font-black mb-5 shadow-[1px_1px_0px_#0E1153]">
                  ✦
                </div>

                <h3 className="font-heading text-xl font-bold mb-3 leading-snug">
                  {card.title}
                </h3>

                <p className="font-sans text-xs opacity-90 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div className="pt-3 border-t border-current/15 flex items-center justify-between font-mono text-[10px] font-bold uppercase">
                <span>SERVICE {card.number}</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#1A1F5E] text-[#FEF9ED] font-heading font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FFA800] transition-all"
        >
          <span>Read More Our Services</span>
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}

