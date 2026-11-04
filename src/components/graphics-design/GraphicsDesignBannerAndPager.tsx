import React from "react";
import Link from "next/link";

export default function GraphicsDesignBannerAndPager() {
  return (
    <section className="w-full bg-[#FEF9ED] text-[#0E1153]">
      {/* Top Banner Strip */}
      <div className="w-full py-16 px-6 sm:px-12 lg:px-16 bg-[#E1E3F7] border-b-2 border-[#0E1153]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold max-w-xl text-[#0E1153] leading-snug">
            We think big and have hands in all leading technology platforms to provide you wide array of services.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-xs uppercase tracking-wider border-2 border-[#0E1153] shadow-[3px_3px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              Contact Us →
            </Link>
            <span className="px-3 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#0E1153] text-[10px] font-mono font-bold text-[#0E1153]">
              BENGALURU STUDIO
            </span>
          </div>
        </div>
      </div>

      {/* Yellow Service Card: Video Editing & Production */}
      <div className="w-full py-16 px-6 sm:px-12 lg:px-16 border-b-2 border-[#0E1153]">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-6 p-8 bg-[#FFA800] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153]">
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0E1153]/70 mb-2 block">
              NEXT SERVICE // MODULE 06
            </span>
            <h3 className="font-heading text-2xl sm:text-4xl font-bold text-[#0E1153] mb-2">
              Video Editing &amp; Production
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#0E1153]/90">
              Motion design, commercial video cuts, and dynamic social reel production.
            </p>
          </div>

          <div className="hidden sm:flex w-14 h-14 rounded-full bg-[#FFFFFF] border-2 border-[#0E1153] shadow-[3px_3px_0px_#0E1153] items-center justify-center font-heading font-black text-xl text-[#0E1153] flex-shrink-0">
            ★
          </div>
        </div>
      </div>
    </section>
  );
}

