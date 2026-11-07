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
                Posts &amp; PR
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

          {/* Right Column (5 cols) - Guest Posts & PR Poster Artwork */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Poster Card */}
            <div className="w-full max-w-md lg:max-w-lg bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] overflow-hidden relative group">
              <div className="relative w-full aspect-square">
                <Image
                  src="/assets/guest-post-hero-poster.jpg"
                  alt="Guest Posts & PR - Build Website Authority, Increase Brand Visibility & Boost Google Rankings"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 750px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
