import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function GuestPostHero() {
  return (
    <section className="relative w-full bg-[#005F4C] text-[#FEF9ED] pt-12 pb-20 px-6 sm:px-12 lg:px-16 border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Top Eyebrow row */}
        <div className="flex items-center justify-between mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E1153] text-[#FEF9ED] text-[11px] font-mono font-bold uppercase tracking-wider">
            <span>DIGITAL PR &amp; OUTREACH</span>
          </div>

          {/* Quad Grid Icon */}
          <div className="grid grid-cols-2 gap-1 w-5 h-5">
            <span className="w-2 h-2 rounded-sm bg-[#FFA800]" />
            <span className="w-2 h-2 rounded-sm bg-[#FEF9ED]" />
            <span className="w-2 h-2 rounded-sm bg-[#FEF9ED]" />
            <span className="w-2 h-2 rounded-sm bg-[#FFA800]" />
          </div>
        </div>

        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl tracking-tight text-[#FEF9ED] leading-none mb-6">
              <span>Guest</span>
              <br />
              <span className="inline-block bg-[#FFA800] text-[#0E1153] px-5 py-1 rounded-xl border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] mt-2">
                Post
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#FEF9ED]/90 max-w-xl leading-relaxed mb-8">
              At Baagul, we design with purpose — creating visual assets that engage, and distinct identities. From custom brand identity to bespoke marketing collateral, we help your business stand out and convey authority to your audience.
            </p>

            {/* CTA Button */}
            <div className="mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#FFA800] text-[#0E1153] font-heading font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#0E1153] transition-all"
              >
                <span>GET A FREE CONSULTATION</span>
                <span>→</span>
              </Link>
            </div>

            {/* Bar Chart Card Widget */}
            <div className="w-full max-w-md bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl p-5 shadow-[6px_6px_0px_#0E1153] text-[#0E1153]">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#0E1153]/15">
                <span className="font-heading text-base font-bold text-[#0E1153]">
                  1. Elevate Your Brand Identity
                </span>
                <span className="text-[10px] font-mono font-bold bg-[#CFE8DC] px-2 py-0.5 rounded text-[#005F4C]">
                  ESTIMATED IMPRESSION IMPACT
                </span>
              </div>

              {/* 3 Vertical Bars */}
              <div className="grid grid-cols-3 gap-6 items-end h-28 pt-2 px-2 text-center">
                <div className="flex flex-col items-center h-full justify-end">
                  <div className="w-10 bg-[#FFA800] border-2 border-[#0E1153] rounded-md h-[88%] relative flex items-center justify-center">
                    <span className="font-mono text-xs font-bold text-[#0E1153]">88%</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#3E4945] mt-2">
                    ORGANIC PR
                  </span>
                </div>

                <div className="flex flex-col items-center h-full justify-end">
                  <div className="w-10 bg-[#FFA800] border-2 border-[#0E1153] rounded-md h-[72%] relative flex items-center justify-center">
                    <span className="font-mono text-xs font-bold text-[#0E1153]">72%</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#3E4945] mt-2">
                    EDITORIAL
                  </span>
                </div>

                <div className="flex flex-col items-center h-full justify-end">
                  <div className="w-10 bg-[#FFA800] border-2 border-[#0E1153] rounded-md h-[54%] relative flex items-center justify-center">
                    <span className="font-mono text-xs font-bold text-[#0E1153]">54%</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#3E4945] mt-2">
                    AFFILIATE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols) - Art Illustration Card */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Tilted Stamp Badge */}
            <div className="absolute -top-4 -left-4 z-20 w-20 h-20 rounded-full bg-[#1A1F5E] text-[#FFA800] border-2 border-[#0E1153] shadow-[3px_3px_0px_#0E1153] flex flex-col items-center justify-center text-center p-1 font-mono text-[9px] font-bold uppercase rotate-[-12deg]">
              <span>★ 100% ★</span>
              <span>WHITE-HAT</span>
              <span>AUTHORITY</span>
            </div>

            {/* Poster / Canvas Card */}
            <div className="w-full max-w-sm bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[10px_10px_0px_#0E1153] overflow-hidden rotate-[2deg] hover:rotate-0 transition-transform">
              <div className="p-3 bg-[#EDE8DC] border-b-2 border-[#0E1153] flex items-center justify-between text-[11px] font-mono font-bold text-[#0E1153]">
                <span>EDITORIAL ARCHIVE // CLUSTER 04</span>
                <span>BAAGUL</span>
              </div>
              <div className="relative w-full aspect-[4/5] bg-[#FAF8F5]">
                <Image
                  src="/assets/cacf1.png"
                  alt="Guest Post editorial illustration"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-[#FFFFFF] border-t-2 border-[#0E1153] flex items-center justify-between text-xs font-mono font-bold text-[#0E1153]">
                <span>NICHE CITATIONS &amp; PR</span>
                <span className="text-[#005F4C]">VERIFIED DA 60+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
