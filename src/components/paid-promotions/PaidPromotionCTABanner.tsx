import React from "react";
import Link from "next/link";

export default function PaidPromotionCTABanner() {
  return (
    <section className="w-full py-20 px-6 sm:px-12 lg:px-16 bg-[#005F4C] text-[#FEF9ED] border-b-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-widest text-[#FFA800]">
            <span className="w-2 h-2 rounded-full bg-[#FFA800]" />
            <span>GROWTH ACCELERATION</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#FEF9ED] leading-tight">
            <span>Amplify your brand&apos;s </span>
            <span className="inline-block bg-[#FFA800] text-[#0E1153] px-4 py-0.5 rounded-[4px] border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153]">
              reach.
            </span>
          </h2>
        </div>

        <Link
          href="/contact"
          className="px-8 py-4 rounded-full bg-[#FFFFFF] text-[#0E1153] font-heading font-bold text-sm uppercase tracking-wider border-2 border-[#0E1153] shadow-[4px_4px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FFA800] transition-all flex-shrink-0"
        >
          <span>Start Your Campaign</span>
          <span className="ml-2">→</span>
        </Link>
      </div>
    </section>
  );
}

