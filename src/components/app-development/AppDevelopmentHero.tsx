import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AppDevelopmentHero() {
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
          <span className="text-[#0E1153]">APP DEVELOPMENT</span>
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
              <span>App / </span>
              <span className="relative inline-block ml-1">
                <span className="bg-[#FFBA45] text-[#0E1153] px-4 py-1 rounded-md border-2 border-[#0E1153] shadow-[5px_5px_0px_#0E1153] inline-block font-normal">
                  Development
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="font-sans text-sm sm:text-base text-[#121A4A]/80 leading-relaxed max-w-xl mb-8">
              At Baagul.in, we engineer high-performance mobile applications for iOS, Android, and cross-platform ecosystems. From intuitive UX and native Swift &amp; Kotlin architectures to fluid Flutter &amp; React Native codebases, we transform visionary ideas into flagship app store products built for scale.
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

          {/* Right Column (6 cols) - App Development Showcase Poster Artwork */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="w-full max-w-[500px] bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl overflow-hidden relative group">
              <div className="relative w-full aspect-[819/1024]">
                <Image
                  src="/assets/app-development-hero-poster.jpg"
                  alt="App Development - Build High-Performance, User-Friendly Mobile Apps for iOS & Android"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Skill Tiles Section: 3 Tiles with Filled Capsule Progress Bars */}
        <div className="pt-8 border-t-2 border-[#0E1153]/20">
          
          <div className="flex items-center justify-between gap-4 mb-6">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0E1153]">
              Engineering Benchmarks
            </h3>
            <div className="hidden sm:block flex-1 border-t-2 border-[#0E1153]/20 mx-4" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#0E1153]/70 font-bold whitespace-nowrap">
              APP PERFORMANCE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Mint Skill Tile */}
            <div className="bg-[#CFE8DC] border-2 border-[#0E1153] rounded-2xl p-6 shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading text-4xl sm:text-5xl font-bold text-[#0E1153]">
                  99.9%
                </span>
                <span className="px-2.5 py-1 bg-white border border-[#0E1153] rounded font-mono text-[10px] font-bold text-[#0E1153]">
                  CRASH FREE
                </span>
              </div>
              <div>
                <span className="font-mono text-xs uppercase font-bold text-[#0E1153] tracking-wider block mb-3">
                  STABLE PRODUCTION SESSIONS
                </span>
                {/* Horizontal Capsule Progress Bar */}
                <div className="h-3 w-full bg-[#FEF9ED] border-2 border-[#0E1153] rounded-full overflow-hidden p-0.5">
                  <div className="h-full bg-[#0E1153] rounded-full w-[99%]" />
                </div>
              </div>
            </div>

            {/* Mustard Skill Tile */}
            <div className="bg-[#FFBA45] border-2 border-[#0E1153] rounded-2xl p-6 shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading text-4xl sm:text-5xl font-bold text-[#0E1153]">
                  60 FPS
                </span>
                <span className="px-2.5 py-1 bg-white border border-[#0E1153] rounded font-mono text-[10px] font-bold text-[#0E1153]">
                  ZERO JANK
                </span>
              </div>
              <div>
                <span className="font-mono text-xs uppercase font-bold text-[#0E1153] tracking-wider block mb-3">
                  FLUID UI &amp; NATIVE GESTURES
                </span>
                {/* Horizontal Capsule Progress Bar */}
                <div className="h-3 w-full bg-[#FEF9ED] border-2 border-[#0E1153] rounded-full overflow-hidden p-0.5">
                  <div className="h-full bg-[#0E1153] rounded-full w-[95%]" />
                </div>
              </div>
            </div>

            {/* Lavender Skill Tile */}
            <div className="bg-[#E1E3F7] border-2 border-[#0E1153] rounded-2xl p-6 shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading text-4xl sm:text-5xl font-bold text-[#0E1153]">
                  &lt;1.2s
                </span>
                <span className="px-2.5 py-1 bg-white border border-[#0E1153] rounded font-mono text-[10px] font-bold text-[#0E1153]">
                  BOOT TIME
                </span>
              </div>
              <div>
                <span className="font-mono text-xs uppercase font-bold text-[#0E1153] tracking-wider block mb-3">
                  INSTANT COLD START &amp; CACHING
                </span>
                {/* Horizontal Capsule Progress Bar */}
                <div className="h-3 w-full bg-[#FEF9ED] border-2 border-[#0E1153] rounded-full overflow-hidden p-0.5">
                  <div className="h-full bg-[#0E1153] rounded-full w-[90%]" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

