import React from "react";
import Link from "next/link";

export default function GuestPostPillsStrip() {
  const pills = [
    { title: "High-DA Authority Websites", bg: "bg-[#FFA800]", text: "text-[#0E1153]" },
    { title: "Niche-Relevant Portfolios", bg: "bg-[#FFFFFF]", text: "text-[#0E1153]" },
    { title: "100% Do-Follow Backlinks", bg: "bg-[#CFE8DC]", text: "text-[#005F4C]" },
    { title: "Real Traffic Growth", bg: "bg-[#E1E3F7]", text: "text-[#0E1153]" },
    { title: "Brand Authority & Trust", bg: "bg-[#FFFFFF]", text: "text-[#0E1153]" },
    { title: "Qualified Heavy Buyer Leads", bg: "bg-[#FFA800]", text: "text-[#0E1153]" },
  ];

  return (
    <section className="w-full py-20 px-6 sm:px-12 bg-[#FEF9ED] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-[#FFFFFF] border border-[#0E1153]/20 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0E1153] shadow-[2px_2px_0px_#0E1153]">
          <span className="w-2 h-2 rounded-full bg-[#005F4C]" />
          <span>PROVEN RESULTS</span>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#0E1153] leading-snug mb-10 max-w-2xl">
          High-quality content, niche-relevant placements, and authority backlinks that grow your business online.
        </h2>

        {/* Two rows of rounded pills */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mb-10">
          {pills.map((pill, idx) => (
            <div
              key={idx}
              className={`px-5 py-2.5 rounded-full border-2 border-[#0E1153] ${pill.bg} ${pill.text} font-heading font-bold text-xs sm:text-sm shadow-[3px_3px_0px_#0E1153]`}
            >
              {pill.title}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1A1F5E] text-[#FEF9ED] font-heading font-bold text-xs sm:text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FFA800] transition-all"
        >
          <span>Find Out More</span>
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}
