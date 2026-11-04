import React from "react";
import Link from "next/link";

interface SketchCard {
  id: string;
  title: string;
  iconBg: string;
  iconShape: string;
  iconColor: string;
  symbol: string;
}

const sketchCards: SketchCard[] = [
  {
    id: "01",
    title: "Logo Design",
    iconBg: "bg-[#FFA800]",
    iconShape: "rounded-full",
    iconColor: "text-[#0E1153]",
    symbol: "●",
  },
  {
    id: "02",
    title: "Social Creatives",
    iconBg: "bg-[#CFE8DC]",
    iconShape: "rounded-lg",
    iconColor: "text-[#005F4C]",
    symbol: "⚅",
  },
  {
    id: "03",
    title: "Marketing",
    iconBg: "bg-[#FEF9ED]",
    iconShape: "rotate-45 rounded-sm",
    iconColor: "text-[#0E1153]",
    symbol: "▲",
  },
  {
    id: "04",
    title: "Ad Design",
    iconBg: "bg-[#005F4C]",
    iconShape: "rotate-45 rounded-sm",
    iconColor: "text-[#FEF9ED]",
    symbol: "◆",
  },
  {
    id: "05",
    title: "Websites",
    iconBg: "bg-[#E1E3F7]",
    iconShape: "rounded-lg",
    iconColor: "text-[#0E1153]",
    symbol: "▣",
  },
  {
    id: "06",
    title: "UI Graphics",
    iconBg: "bg-[#FFA800]",
    iconShape: "rounded-xl",
    iconColor: "text-[#0E1153]",
    symbol: "✚",
  },
];

export default function GraphicsDesignFeatures() {
  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#E1E3F7] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-[#0E1153] text-[#FEF9ED] text-xs font-mono font-bold uppercase tracking-widest">
            <span>SERVICE OVERVIEW</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#0E1153] leading-tight mb-6">
            Unique logos, color palettes, and brand guidelines that define your business.
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#3E4945] leading-relaxed mb-8">
            From high-conversion ad creatives and promotional banners to packaging and brand collateral, we design graphics that capture attention and convert.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FFA800] transition-all"
          >
            <span>View our portfolios</span>
            <span>→</span>
          </Link>
        </div>

        {/* Right Column (7 cols) - 2x3 Grid of 6 Sketch Sticky Cards */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {sketchCards.map((card) => (
            <div
              key={card.id}
              className="p-6 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[5px_5px_0px_#0E1153] flex flex-col items-center justify-center text-center min-h-[170px] transition-transform hover:-translate-y-1 hover:rotate-1"
            >
              <div
                className={`w-12 h-12 ${card.iconBg} ${card.iconColor} border-2 border-[#0E1153] ${card.iconShape} flex items-center justify-center text-xl font-black mb-3 shadow-[2px_2px_0px_#0E1153]`}
              >
                <span>{card.symbol}</span>
              </div>
              <h3 className="font-heading text-sm sm:text-base font-bold text-[#0E1153]">
                {card.title}
              </h3>
              <span className="text-[10px] font-mono text-[#3E4945] mt-1 font-bold">
                MODULE 0{card.id}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

