import React from "react";
import Link from "next/link";

interface Benefit {
  num: string;
  title: string;
  description: React.ReactNode;
}

const benefits: Benefit[] = [
  {
    num: "01",
    title: "Google Ads & Meta Ads Management",
    description:
      "We plan, run and optimize campaigns on Google Search, Display and YouTube, Facebook, Instagram and LinkedIn, built around your goals for leads or sales.",
  },
  {
    num: "02",
    title: "Creatives & Landing Pages In-House",
    description: (
      <>
        Ad designs from our{" "}
        <Link href="/services/graphics-design" className="font-bold text-[#FFA800] underline underline-offset-2 hover:text-[#FEF9ED]">
          graphic design
        </Link>{" "}
        team, promotional videos from our{" "}
        <Link href="/services/video-editing" className="font-bold text-[#FFA800] underline underline-offset-2 hover:text-[#FEF9ED]">
          video editors
        </Link> and creator partners, and landing pages from our{" "}
        <Link href="/services/web-design" className="font-bold text-[#FFA800] underline underline-offset-2 hover:text-[#FEF9ED]">
          web team
        </Link>, so your ads and pages work together.
      </>
    ),
  },
  {
    num: "03",
    title: "Conversion Tracking & Reporting",
    description:
      "We set up conversion tracking before launch and report on spend, leads, sales, cost per acquisition and ROAS, so you can see exactly what your budget delivers.",
  },
];

export default function PaidPromotionWhyChooseUs() {
  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#1A1F5E] text-[#FEF9ED] border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Top Running Stitch Strip with 3 square pins */}
        <div className="flex items-center justify-between w-full mb-12 relative" aria-hidden="true">
          <span className="w-3.5 h-3.5 rounded-sm bg-[#FFA800] border-2 border-[#FEF9ED] shadow-sm z-10" />
          <div className="flex-1 border-t-2 border-dashed border-[#FEF9ED]/30 mx-3" />
          <span className="w-3.5 h-3.5 rounded-sm bg-[#CFE8DC] border-2 border-[#0E1153] shadow-sm z-10" />
          <div className="flex-1 border-t-2 border-dashed border-[#FEF9ED]/30 mx-3" />
          <span className="w-3.5 h-3.5 rounded-sm bg-[#FFA800] border-2 border-[#FEF9ED] shadow-sm z-10" />
        </div>

        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-widest text-[#FFA800]">
          <span className="w-2.5 h-2.5 bg-[#FFA800]" />
          <span>WHY CHOOSE US</span>
        </div>

        {/* Headline */}
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#FEF9ED] leading-tight mb-16">
          <span>Why Choose BAAGUL for Performance </span>
          <span className="inline-block bg-[#FFA800] text-[#0E1153] px-5 py-1 rounded-[4px] border-2 border-[#0E1153] shadow-[5px_5px_0px_#0E1153] mt-2">
            Marketing?
          </span>
        </h2>

        {/* 3 Borderless Columns with Giant Watermark Numbers and Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-[#FEF9ED]/15">
          {benefits.map((item, idx) => (
            <div
              key={item.num}
              className={`flex flex-col relative pt-8 md:pt-0 ${
                idx !== 0 ? "md:pl-10 lg:pl-12" : ""
              }`}
            >
              {/* Giant Watermark Number */}
              <span className="font-heading text-8xl lg:text-9xl font-black text-[#FEF9ED]/10 absolute top-2 right-2 sm:right-6 pointer-events-none select-none">
                {item.num}
              </span>

              {/* Square Icon Pin with nested square */}
              <div className="w-8 h-8 rounded-lg bg-[#FFA800] border-2 border-[#FEF9ED] flex items-center justify-center mb-6 shadow-sm">
                <span className="w-2.5 h-2.5 bg-[#0E1153] rounded-xs" />
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#FEF9ED] mb-4 leading-snug relative z-10">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-[#FEF9ED]/80 leading-relaxed max-w-sm relative z-10">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
