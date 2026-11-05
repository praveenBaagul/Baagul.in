import React from "react";
import Link from "next/link";

export default function VideoEditingHero() {
  return (
    <section className="relative w-full bg-[#FEF9ED] border-b-2 border-[#0E1153] pt-6 pb-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Running Stitch Strip */}
        <div className="w-full border-t-2 border-dashed border-[#C8553D]/40 mb-4" aria-hidden="true" />

        {/* Top Breadcrumb Navigation */}
        <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0E1153]/60 mb-10">
          <Link href="/" className="hover:text-[#0E7A63] transition-colors">
            HOME
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[#0E7A63] transition-colors">
            OUR SERVICES
          </Link>
          <span>/</span>
          <span className="text-[#0E1153]">VIDEO EDITING</span>
        </div>

        {/* Hero Split Grid (6 Cols Copy / 6 Cols Mockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          
          {/* Left Column: Copy */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            
            {/* Pill Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FEF9ED] border-2 border-[#0E1153] shadow-[2px_2px_0px_#0E1153] rounded-full mb-6">
              <span className="w-2.5 h-2.5 bg-[#0E1153]" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0E1153]">
                OUR SERVICE
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-[70px] leading-[1.08] text-[#0E1153] mb-6">
              <span>Video / </span>
              <span className="relative inline-block ml-1">
                <span className="bg-[#FFBA45] text-[#0E1153] px-4 py-1 rounded-md border-2 border-[#0E1153] shadow-[5px_5px_0px_#0E1153] inline-block font-normal">
                  Editing
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="font-sans text-sm sm:text-base text-[#121A4A]/80 leading-relaxed max-w-xl mb-8">
              At Baagul.in, we turn raw footage into scroll-stopping stories. From short-form reels and YouTube videos to brand films and ad creatives, our editors craft clean cuts, motion graphics, color grades, and sound that hold attention and reflect your brand&apos;s voice.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0E1153] text-[#FEF9ED] font-mono text-xs uppercase tracking-wider font-bold border-2 border-[#0E1153] shadow-[4px_4px_0px_#FFBA45] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FFBA45] transition-all"
              >
                <span>Enroll our Service</span>
                <span className="text-sm">→</span>
              </Link>

              <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#0E1153] uppercase tracking-wider">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>AVAILABLE FOR Q2 PROJECTS</span>
              </div>
            </div>

          </div>

          {/* Right Column: Browser Window Card with Pixel-Accurate Figma Alignment */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            
            {/* Browser Card Frame: Tilted -rotate-[1.5deg] with Emerald Shadow */}
            <div className="w-full max-w-[560px] bg-white border-2 border-[#0E1153] rounded-xl shadow-[8px_8px_0px_#0E7A63] overflow-hidden -rotate-[1.2deg] hover:rotate-0 transition-transform duration-300">
              
              {/* Window Header Bar */}
              <div className="bg-white px-4 py-2.5 border-b-2 border-[#0E1153] flex items-center justify-between">
                {/* 3 Window Control Dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#BA1A1A] border border-[#0E1153]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBA45] border border-[#0E1153]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0E7A63] border border-[#0E1153]" />
                </div>

                {/* Center Search / URL Bar */}
                <div className="bg-[#FEF9ED] px-3.5 py-1 rounded-md border border-[#0E1153] shadow-[1px_1px_0px_#0E1153] flex items-center gap-2 text-[11px] font-mono text-[#0E1153] font-medium">
                  {/* Small Lock SVG */}
                  <svg className="w-3 h-3 text-[#0E1153]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>studio.baagul.in/edit-suite</span>
                </div>

                {/* Right 2 Dots */}
                <div className="flex items-center gap-1 opacity-40">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E1153]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E1153]" />
                </div>
              </div>

              {/* Window Body: Edit Suite UI */}
              <div className="p-6 bg-white space-y-5">
                
                {/* Top Row: Brand Reel — Final Cut & Live Feed Pill */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#0E1153]/60 font-bold block">
                      ACTIVE PROJECT
                    </span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0E1153]">
                      Brand Reel — Final Cut
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1 bg-[#0E7A63] text-[#FEF9ED] rounded-full border border-[#0E1153] font-mono text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFBA45]" />
                    <span>RENDERING</span>
                  </div>
                </div>

                {/* Middle Row: 2 Quick Metric Cards */}
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* Watch Time Card */}
                  <div className="bg-[#FEF9ED] border-2 border-[#0E1153] rounded-xl p-4 shadow-[2px_2px_0px_#0E1153]">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#0E1153]/70 block mb-1">
                      AVG. WATCH TIME
                    </span>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-heading text-3xl font-bold text-[#0E7A63]">
                        +184%
                      </span>
                      {/* Squiggle wave icon */}
                      <svg className="w-5 h-3 text-[#0E7A63]" viewBox="0 0 24 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M1 5 Q 6 1, 11 5 T 21 5" />
                      </svg>
                    </div>
                    <span className="text-[10px] font-mono text-[#0E1153]/60 block">
                      vs. raw cut
                    </span>
                  </div>

                  {/* Turnaround Card */}
                  <div className="bg-[#FEF9ED] border-2 border-[#0E1153] rounded-xl p-4 shadow-[2px_2px_0px_#0E1153]">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#0E1153]/70 block mb-1">
                      TURNAROUND
                    </span>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-heading text-3xl font-bold text-[#0E1153]">
                        48 hrs
                      </span>
                      <span className="font-mono text-base font-bold text-[#0E7A63]">↘</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#0E1153]/60 block">
                      First draft delivery
                    </span>
                  </div>

                </div>

                {/* Bottom Row: Retention by Segment with Vertical Bar Chart & Dotted Curve */}
                <div className="bg-[#FEF9ED] border-2 border-[#0E1153] rounded-xl p-4 shadow-[2px_2px_0px_#0E1153]">
                  
                  {/* Header inside Retention box */}
                  <div className="flex items-center justify-between mb-4 text-[10px] font-mono">
                    <span className="font-bold text-[#0E1153] uppercase tracking-wider">
                      RETENTION BY SEGMENT
                    </span>
                    <span className="text-[#0E1153]/70 font-semibold">
                      Timeline 00:60
                    </span>
                  </div>

                  {/* Vertical Bar Chart + Dotted Connecting Trendline */}
                  <div className="relative pt-6 pb-2">
                    
                    {/* SVG Dotted Trendline connecting across the tops */}
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none z-10"
                      viewBox="0 0 380 90"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M 32 46 Q 80 58, 128 22 T 224 48 T 272 56 T 320 28 T 355 76"
                        fill="none"
                        stroke="#0E1153"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                    </svg>

                    {/* Columns Grid */}
                    <div className="grid grid-cols-6 items-end gap-3 h-24 px-2">
                      
                      {/* Col 1: HOOK */}
                      <div className="flex flex-col items-center justify-end h-full">
                        <div className="w-full max-w-[36px] h-12 bg-[#0E7A63] border-2 border-[#0E1153] rounded-t-sm" />
                      </div>

                      {/* Col 2: B-ROLL */}
                      <div className="flex flex-col items-center justify-end h-full">
                        <div className="w-full max-w-[36px] h-9 bg-[#FFBA45] border-2 border-[#0E1153] rounded-t-sm" />
                      </div>

                      {/* Col 3: MOTION */}
                      <div className="flex flex-col items-center justify-end h-full">
                        <div className="w-full max-w-[36px] h-[72px] bg-[#5459AC] border-2 border-[#0E1153] rounded-t-sm" />
                      </div>

                      {/* Col 4: COLOR */}
                      <div className="flex flex-col items-center justify-end h-full">
                        <div className="w-full max-w-[36px] h-11 bg-[#0E7A63] border-2 border-[#0E1153] rounded-t-sm" />
                      </div>

                      {/* Col 5: AUDIO */}
                      <div className="flex flex-col items-center justify-end h-full">
                        <div className="w-full max-w-[36px] h-8 bg-[#E1E3F7] border-2 border-[#0E1153] rounded-t-sm" />
                      </div>

                      {/* Col 6: CTA */}
                      <div className="flex flex-col items-center justify-end h-full">
                        <div className="w-full max-w-[36px] h-14 bg-[#FFBA45] border-2 border-[#0E1153] rounded-t-sm" />
                      </div>

                    </div>

                    {/* Horizontal Divider Line */}
                    <div className="w-full border-t border-[#0E1153]/30 mt-2" />

                    {/* Labels Row */}
                    <div className="grid grid-cols-6 text-center text-[9px] font-mono font-bold text-[#0E1153]/70 pt-2 uppercase">
                      <span>HOOK</span>
                      <span>B-ROLL</span>
                      <span>MOTION</span>
                      <span>COLOR</span>
                      <span>AUDIO</span>
                      <span>CTA</span>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Skill Tiles Section: 3 Tiles with Filled Capsule Progress Bars */}
        <div className="pt-8 border-t-2 border-[#0E1153]/20">
          
          <div className="flex items-center justify-between gap-4 mb-6">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0E1153]">
              Elevate Your Brand Story
            </h3>
            <div className="hidden sm:block flex-1 border-t-2 border-[#0E1153]/20 mx-4" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#0E1153]/70 font-bold whitespace-nowrap">
              EDIT PERFORMANCE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Mint Skill Tile */}
            <div className="bg-[#CFE8DC] border-2 border-[#0E1153] rounded-2xl p-6 shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading text-4xl sm:text-5xl font-bold text-[#0E1153]">
                  92%
                </span>
                <span className="px-2.5 py-1 bg-white border border-[#0E1153] rounded font-mono text-[10px] font-bold text-[#0E1153]">
                  Q1 PEAK
                </span>
              </div>
              <div>
                <span className="font-mono text-xs uppercase font-bold text-[#0E1153] tracking-wider block mb-3">
                  STORY-DRIVEN CUTS
                </span>
                {/* Horizontal Capsule Progress Bar (92%) */}
                <div className="h-3 w-full bg-[#FEF9ED] border-2 border-[#0E1153] rounded-full overflow-hidden p-0.5">
                  <div className="h-full bg-[#0E1153] rounded-full w-[92%]" />
                </div>
              </div>
            </div>

            {/* Mustard Skill Tile */}
            <div className="bg-[#FFBA45] border-2 border-[#0E1153] rounded-2xl p-6 shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading text-4xl sm:text-5xl font-bold text-[#0E1153]">
                  85%
                </span>
                <span className="px-2.5 py-1 bg-white border border-[#0E1153] rounded font-mono text-[10px] font-bold text-[#0E1153]">
                  ACTIVE
                </span>
              </div>
              <div>
                <span className="font-mono text-xs uppercase font-bold text-[#0E1153] tracking-wider block mb-3">
                  MOTION GRAPHICS & VFX
                </span>
                {/* Horizontal Capsule Progress Bar (85%) */}
                <div className="h-3 w-full bg-[#FEF9ED] border-2 border-[#0E1153] rounded-full overflow-hidden p-0.5">
                  <div className="h-full bg-[#0E1153] rounded-full w-[85%]" />
                </div>
              </div>
            </div>

            {/* Lavender Skill Tile */}
            <div className="bg-[#E1E3F7] border-2 border-[#0E1153] rounded-2xl p-6 shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading text-4xl sm:text-5xl font-bold text-[#0E1153]">
                  60%
                </span>
                <span className="px-2.5 py-1 bg-white border border-[#0E1153] rounded font-mono text-[10px] font-bold text-[#0E1153]">
                  SPRINT SPEED
                </span>
              </div>
              <div>
                <span className="font-mono text-xs uppercase font-bold text-[#0E1153] tracking-wider block mb-3">
                  FAST DELIVERY WITH REVISION SUPPORT
                </span>
                {/* Horizontal Capsule Progress Bar (60%) */}
                <div className="h-3 w-full bg-[#FEF9ED] border-2 border-[#0E1153] rounded-full overflow-hidden p-0.5">
                  <div className="h-full bg-[#0E1153] rounded-full w-[60%]" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
