import React from "react";
import Link from "next/link";

export default function CareerHero() {
  return (
    <section className="relative w-full bg-[#FEF9ED] text-[#0E1153] pt-6 pb-16 px-6 sm:px-12 lg:px-16 border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb row */}
        <div className="flex items-center gap-2 mb-8 text-xs font-mono font-medium text-[#0E1153]/70">
          <Link href="/" className="hover:text-[#005F4C] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#0E1153] font-bold">Career : OPEN POSITIONS</span>
        </div>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-widest text-[#0E1153]">
              <span className="w-2.5 h-2.5 bg-[#005F4C]" />
              <span>CAREER</span>
            </div>

            <h1 className="font-heading text-6xl sm:text-7xl lg:text-[76px] tracking-tight text-[#0E1153] leading-none mb-6">
              <span>Current</span>
              <br />
              <span className="inline-block bg-[#FFBA45] text-[#0E1153] px-5 py-1 rounded-[4px] border-2 border-[#0E1153] shadow-[5px_5px_0px_#0E1153] mt-2">
                Opening
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#3E4945] max-w-xl leading-relaxed mb-8">
              Baagul Marketing LLC is hiring UI/UX Designers, freelance Video Editors, and Content Writers. Build your career with our Bengaluru design and digital marketing studio.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#openings"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <span>See openings</span>
                <span>↓</span>
              </a>

              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#0E1153]">
                <span className="w-2 h-2 rounded-full bg-[#005F4C] animate-pulse" />
                <span>1 ACTIVE OPENINGS</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols) - Golden Headcount Calendar / Role Card */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Quad color motif top left */}
            <div className="absolute -top-6 -left-6 hidden sm:grid grid-cols-2 gap-1 w-6 h-6 z-10">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#005F4C]" />
              <span className="w-2.5 h-2.5 rounded-sm bg-[#FFA800]" />
              <span className="w-2.5 h-2.5 rounded-sm bg-[#0E1153]" />
              <span className="w-2.5 h-2.5 rounded-sm bg-[#E1E3F7]" />
            </div>

            {/* Stamp Badge: REMOTE WELCOME */}
            {/* <div className="absolute -bottom-3 -right-3 sm:-right-4 z-20 w-20 h-20 rounded-full bg-[#005F4C] text-[#FEF9ED] border-2 border-[#0E1153] shadow-[3px_3px_0px_#0E1153] flex flex-col items-center justify-center text-center p-1 font-mono text-[9px] font-bold uppercase rotate-12">
              <span>★ 100% ★</span>
              <span className="text-[#FFA800]">REMOTE</span>
              <span className="text-[7px]">WELCOME</span>
            </div> */}

            {/* Headcount Card Frame */}
            <div className="w-full max-w-sm bg-[#FFA800] border-2 border-[#0E1153] rounded-2xl p-8 shadow-[8px_8px_0px_#0E1153] flex flex-col justify-between min-h-[220px]">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#0E1153] pb-3 border-b border-[#0E1153]/20">
                <span>HEADCOUNT 2026</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#0E1153]" />
              </div>

              <div className="py-4">
                <span className="font-heading text-8xl font-black text-[#0E1153] leading-none block">
                  01
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0E1153]/80 mt-2 block">
                  OPEN ROLES
                </span>
              </div>

              <div className="pt-3 border-t border-[#0E1153]/20 text-[10px] font-mono font-bold text-[#0E1153] flex items-center justify-between">
                <span>DIGITAL MARKETING PODS</span>
                <span>GLOBAL REACH</span>
              </div>
            </div>
          </div>
        </div>

        {/* Running Stitch Divider */}
        <div className="w-full flex items-center justify-between text-xs font-mono text-[#0E1153]/50 pt-4 border-t-2 border-dashed border-[#0E1153]/30">
          <span>◆ CRAFT + TECH VACANCIES ◆</span>
          <span className="w-2.5 h-2.5 rotate-45 bg-[#FFA800] border border-[#0E1153]" />
        </div>
      </div>
    </section>
  );
}

