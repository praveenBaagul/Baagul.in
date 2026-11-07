import React from "react";

export default function LogoDesignProcess() {
  return (
    <section
      id="process"
      className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#FEF9ED] text-[#0E1153] border-b-2 border-[#0E1153]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#FFFFFF] border-2 border-[#0E1153] shadow-[2px_2px_0px_#0E1153] mb-5 text-xs font-mono font-bold uppercase tracking-widest text-[#0E1153]">
            <span className="w-2.5 h-2.5 bg-[#FFA800] inline-block" />
            <span>OUR PROCESS</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#0E1153] leading-tight mb-4">
            Our 4-Step Logo Design Process
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#3E4945] leading-relaxed max-w-2xl mx-auto">
            From concept to final logo, we craft unique and professional visuals that define your brand identity.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* Card 1: Brand Discovery */}
          <div className="group cursor-pointer p-6 bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] hover:shadow-[9px_9px_0px_#FFA800] hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between">
            <div>
              {/* Card Header Strip */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs font-bold text-[#005F4C] tracking-wider uppercase">
                  STEP 01
                </span>
                <span className="w-5 h-5 rounded-full bg-[#0E1153] text-[#FEF9ED] flex items-center justify-center text-[11px] font-bold">
                  1
                </span>
              </div>

              {/* Artwork Box */}
              <div className="relative w-full h-36 rounded-xl bg-[#EDE8DC] border border-[#0E1153]/15 overflow-hidden flex items-center justify-center mb-6">
                <div className="grid grid-cols-3 gap-2 p-2">
                  {/* Top row */}
                  <div className="w-5 h-5 col-start-2 rounded bg-[#FFA800] border border-[#0E1153]/20 shadow-[1px_1px_0px_#0E1153]" />
                  <div className="w-5 h-5 rounded bg-[#EDE8DC] border border-[#0E1153]/20 shadow-[1px_1px_0px_#0E1153]" />
                  {/* Middle row */}
                  <div className="w-5 h-5 rounded bg-[#0E1153] shadow-[1px_1px_0px_#0E1153]" />
                  <div className="w-5 h-5 rounded bg-[#FFFFFF] border border-[#0E1153]/30 shadow-[1px_1px_0px_#0E1153]" />
                  <div className="w-5 h-5 rounded bg-[#0E1153] shadow-[1px_1px_0px_#0E1153]" />
                  {/* Bottom row */}
                  <div className="w-5 h-5 rounded bg-[#005F4C] shadow-[1px_1px_0px_#0E1153]" />
                  <div className="w-5 h-5 rounded bg-[#005F4C] shadow-[1px_1px_0px_#0E1153]" />
                </div>
              </div>

              {/* Text */}
              <h3 className="font-heading text-xl font-bold mb-2.5 leading-snug text-[#0E1153]">
                Brand Discovery
              </h3>

              <p className="font-sans text-xs text-[#3E4945] leading-relaxed mb-6">
                We unpack your industry positioning, target buyers, and brand ethos through an in-depth design questionnaire.
              </p>
            </div>

            {/* Footer Strip */}
            <div className="pt-3 border-t border-[#0E1153]/15 flex items-center justify-between text-xs font-sans text-[#0E1153] group-hover:text-[#005F4C] transition-colors">
              <span className="font-medium">Requirement Audit</span>
              <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Card 2: Concept Creation */}
          <div className="group cursor-pointer p-6 bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] hover:shadow-[9px_9px_0px_#FFA800] hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between">
            <div>
              {/* Card Header Strip */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs font-bold text-[#005F4C] tracking-wider uppercase">
                  STEP 02
                </span>
                <span className="w-5 h-5 rounded-full bg-[#0E1153] text-[#FEF9ED] flex items-center justify-center text-[11px] font-bold">
                  2
                </span>
              </div>

              {/* Artwork Box */}
              <div className="relative w-full h-36 rounded-xl bg-[#EDE8DC] border border-[#0E1153]/15 overflow-hidden flex items-center justify-center mb-6">
                {/* Dotted border frame */}
                <div className="absolute inset-3 border border-dashed border-[#0E1153]/25 rounded-lg" />

                {/* Drafting geometric circle & axes */}
                <svg
                  className="w-20 h-20 relative z-10"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer circle with dashed dots */}
                  <circle
                    cx="40"
                    cy="40"
                    r="24"
                    stroke="#005F4C"
                    strokeWidth="2"
                    strokeDasharray="3 3"
                  />
                  {/* Axes */}
                  <line
                    x1="12"
                    y1="40"
                    x2="68"
                    y2="40"
                    stroke="#0E1153"
                    strokeWidth="1.5"
                    strokeDasharray="2 2"
                  />
                  <line
                    x1="40"
                    y1="12"
                    x2="40"
                    y2="68"
                    stroke="#0E1153"
                    strokeWidth="1.5"
                    strokeDasharray="2 2"
                  />
                  {/* Inscribed Triangle */}
                  <polygon
                    points="40,18 61,56 19,56"
                    stroke="#005F4C"
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                    fill="none"
                  />
                  {/* Center Dot */}
                  <circle cx="40" cy="40" r="2.5" fill="#FFA800" />
                </svg>
              </div>

              {/* Text */}
              <h3 className="font-heading text-xl font-bold mb-2.5 leading-snug text-[#0E1153]">
                Concept Creation
              </h3>

              <p className="font-sans text-xs text-[#3E4945] leading-relaxed mb-6">
                Our graphic artists sketch multiple distinct visual directions focusing on shape geometry and typography hierarchy.
              </p>
            </div>

            {/* Footer Strip */}
            <div className="pt-3 border-t border-[#0E1153]/15 flex items-center justify-between text-xs font-sans text-[#0E1153] group-hover:text-[#005F4C] transition-colors">
              <span className="font-medium">Vector Exploration</span>
              <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Card 3: Design Refinement */}
          <div className="group cursor-pointer p-6 bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] hover:shadow-[9px_9px_0px_#FFA800] hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between">
            <div>
              {/* Card Header Strip */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs font-bold text-[#005F4C] tracking-wider uppercase">
                  STEP 03
                </span>
                <span className="w-5 h-5 rounded-full bg-[#0E1153] text-[#FEF9ED] flex items-center justify-center text-[11px] font-bold">
                  3
                </span>
              </div>

              {/* Artwork Box */}
              <div className="relative w-full h-36 rounded-xl bg-[#EDE8DC] border border-[#0E1153]/15 overflow-hidden flex items-center justify-center mb-6">
                <div className="relative w-14 h-14">
                  {/* Shadow tile */}
                  <div className="absolute inset-0 bg-[#0E1153] rounded-xl translate-x-1.5 translate-y-1.5" />
                  {/* Foreground green tile with brush */}
                  <div className="relative w-full h-full bg-[#1B7F5C] rounded-xl border border-[#0E1153] flex items-center justify-center shadow-sm">
                    <svg
                      className="w-7 h-7 text-[#FFFFFF]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 2 4 4-14 14H4v-4L18 2z" />
                      <path d="m14 6 4 4" />
                      <circle cx="6" cy="18" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Text */}
              <h3 className="font-heading text-xl font-bold mb-2.5 leading-snug text-[#0E1153]">
                Design Refinement
              </h3>

              <p className="font-sans text-xs text-[#3E4945] leading-relaxed mb-6">
                We apply bespoke color palettes, adjust letter spacing, and test the chosen directions across real-world mocks.
              </p>
            </div>

            {/* Footer Strip */}
            <div className="pt-3 border-t border-[#0E1153]/15 flex items-center justify-between text-xs font-sans text-[#0E1153] group-hover:text-[#005F4C] transition-colors">
              <span className="font-medium">Feedback Loops</span>
              <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          {/* Card 4: Finalization & Delivery */}
          <div className="group cursor-pointer p-6 bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] hover:shadow-[9px_9px_0px_#FFA800] hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between">
            <div>
              {/* Card Header Strip */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-xs font-bold text-[#005F4C] tracking-wider uppercase">
                  STEP 04
                </span>
                <span className="w-5 h-5 rounded-full bg-[#FFA800] text-[#0E1153] flex items-center justify-center text-[11px] font-black">
                  ✓
                </span>
              </div>

              {/* Artwork Box: Warm Golden/Amber container */}
              <div className="relative w-full h-36 rounded-xl bg-[#FFA800] border-2 border-[#0E1153] overflow-hidden flex items-center justify-center mb-6">
                <div className="relative w-14 h-14">
                  {/* Navy drop shadow */}
                  <div className="absolute inset-0 bg-[#0E1153] rounded-xl translate-x-1.5 translate-y-1.5" />
                  {/* White card with medal */}
                  <div className="relative w-full h-full bg-[#FFFFFF] rounded-xl border-2 border-[#0E1153] flex items-center justify-center">
                    <svg
                      className="w-7 h-7 text-[#005F4C]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="8" r="5" />
                      <path d="m9 12-2 9 5-3 5 3-2-9" />
                      <circle cx="12" cy="8" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                {/* Bottom right badge: PRO-FILES */}
                <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-[#0E1153] text-[#FEF9ED] font-mono text-[9px] font-black uppercase tracking-wider">
                  PRO-FILES
                </div>
              </div>

              {/* Text */}
              <h3 className="font-heading text-xl font-bold mb-2.5 leading-snug text-[#0E1153]">
                Finalization &amp; Delivery
              </h3>

              <p className="font-sans text-xs text-[#3E4945] leading-relaxed mb-6">
                Receive full high-resolution vector packages (AI, EPS, SVG, PNG), brand style sheet, and full commercial copyright.
              </p>
            </div>

            {/* Footer Strip */}
            <div className="pt-3 border-t border-[#0E1153]/15 flex items-center justify-between text-xs font-sans text-[#005F4C] font-semibold">
              <span>Ready for Production</span>
              <span className="w-4 h-4 rounded-full border border-[#005F4C] flex items-center justify-center text-[10px]">
                ✓
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
