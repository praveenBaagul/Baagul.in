import React from "react";
import Link from "next/link";

export default function PaidPromotionHero() {
  return (
    <section className="relative w-full bg-[#FEF9ED] text-[#0E1153] pt-12 pb-20 px-6 sm:px-12 lg:px-16 border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow & Breadcrumb strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-mono">
          <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[#0E1153]/70">
            <Link href="/" className="hover:text-[#005F4C] transition-colors">
              HOME
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#005F4C] transition-colors">
              OUR SERVICES
            </Link>
            <span>/</span>
            <span className="text-[#0E1153] font-black">PAID PROMOTIONS</span>
          </div>

          {/* Quad Color Motif */}
          <div className="grid grid-cols-2 gap-1 w-5 h-5">
            <span className="w-2 h-2 rounded-sm bg-[#005F4C]" />
            <span className="w-2 h-2 rounded-sm bg-[#FFA800]" />
            <span className="w-2 h-2 rounded-sm bg-[#0E1153]" />
            <span className="w-2 h-2 rounded-sm bg-[#E1E3F7]" />
          </div>
        </div>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-widest text-[#0E1153]">
              <span className="w-2.5 h-2.5 bg-[#FFA800]" />
              <span>PAID PROMOTION SERVICES</span>
            </div>

            <h1 className="font-heading text-6xl sm:text-7xl lg:text-[78px] tracking-tight text-[#0E1153] leading-none mb-4">
              <span>Paid / </span>
              <span className="inline-block bg-[#FFA800] text-[#0E1153] px-5 py-1 rounded-[4px] border-2 border-[#0E1153] shadow-[5px_5px_0px_#0E1153] mt-2">
                Promotion
              </span>
            </h1>

            <p className="font-heading text-xl sm:text-2xl italic text-[#005F4C] font-semibold mb-6">
              Elevate Your Brand&apos;s Visibility and Impact
            </p>

            {/* Two Pill Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#0E1153] text-xs font-mono font-bold text-[#005F4C] shadow-[2px_2px_0px_#0E1153]">
                ✓ HIGH-ROI PROMOTION
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#0E1153] text-xs font-mono font-bold text-[#0E1153] shadow-[2px_2px_0px_#0E1153]">
                ✓ CAMPAIGN TRANSPARENCY
              </span>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#3E4945] max-w-xl leading-relaxed mb-8">
              At Baagul, we craft data-backed paid promotion strategies that drive real business results. From high-converting influencer campaigns and sponsor placements to targeted video promotions, we position your brand directly in front of buyers.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FFA800] transition-all"
              >
                <span>Enroll our Service</span>
                <span>→</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FFFFFF] text-[#0E1153] font-heading font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] hover:bg-[#FAF8F5] transition-all"
              >
                <span>Schedule a discovery call</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Column (5 cols) - Golden Video Player Mockup Frame */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Tilted Stamp Badge */}
            <div className="absolute -bottom-4 -left-4 z-20 w-20 h-20 rounded-full bg-[#1A1F5E] text-[#FEF9ED] border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] flex flex-col items-center justify-center text-center p-1 font-mono text-[9px] font-bold uppercase rotate-[-12deg]">
              <span>★ 100% ★</span>
              <span className="text-[#FFA800]">VERIFIED</span>
              <span className="text-[7px]">AUDIENCE REACH</span>
            </div>

            {/* Video Player Card */}
            <div className="w-full max-w-md bg-[#FFA800] border-2 border-[#0E1153] rounded-2xl p-6 sm:p-8 shadow-[8px_8px_0px_#0E1153] flex flex-col justify-between min-h-[260px] relative">
              {/* Top window controls */}
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#0E1153] pb-3 border-b border-[#0E1153]/20">
                <span className="px-2 py-0.5 bg-[#FFFFFF] rounded border border-[#0E1153] text-[10px]">
                  REC ● 4K 60FPS
                </span>
                <span className="text-[11px]">SPONSORED SPOTLIGHT</span>
              </div>

              {/* Central Play Button */}
              <div className="py-8 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#FFFFFF] border-2 border-[#0E1153] shadow-[3px_3px_0px_#0E1153] flex items-center justify-center text-xl text-[#0E1153] pl-1 hover:scale-105 transition-transform cursor-pointer">
                  ▶
                </div>
              </div>

              {/* Bottom Progress Scrub Bar */}
              <div className="w-full pt-3 border-t border-[#0E1153]/20 flex items-center gap-3 text-[10px] font-mono font-bold text-[#0E1153]">
                <span>02:14</span>
                <div className="flex-1 h-2 bg-[#FFFFFF] rounded-full border border-[#0E1153] overflow-hidden">
                  <div className="h-full bg-[#0E1153]" style={{ width: "68%" }} />
                </div>
                <span>03:45</span>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Tags Strip at Base */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-6 border-t border-dashed border-[#0E1153]/20">
          <span className="text-xs font-mono font-bold text-[#3E4945] uppercase mr-2">
            PROMOTION CHANNELS:
          </span>
          <span className="px-4 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#0E1153] text-xs font-mono font-bold text-[#0E1153] shadow-[2px_2px_0px_#0E1153]">
            YOUTUBE
          </span>
          <span className="px-4 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#0E1153] text-xs font-mono font-bold text-[#0E1153] shadow-[2px_2px_0px_#0E1153]">
            INSTAGRAM
          </span>
          <span className="px-4 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#0E1153] text-xs font-mono font-bold text-[#0E1153] shadow-[2px_2px_0px_#0E1153]">
            TIKTOK
          </span>
          <span className="px-4 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#0E1153] text-xs font-mono font-bold text-[#0E1153] shadow-[2px_2px_0px_#0E1153]">
            LINKEDIN
          </span>
        </div>
      </div>
    </section>
  );
}

