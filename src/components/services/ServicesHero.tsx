import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export default function ServicesHero() {
  return (
    <section className="relative w-full pt-10 pb-16 px-4 sm:px-12 max-w-7xl mx-auto">
      {/* Top Running Stitch Strip */}
      {/* <div className="w-full border-t-2 border-dashed border-terracotta/40 mb-10" aria-hidden="true" /> */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Column: Typography & Badges */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">

          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-marigold shadow-[1px_1px_0px_#121a4a]" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-indigo-main">
              OUR SERVICES
            </span>
          </div>

          {/* Heading 1 */}
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-[76px] leading-[1.05] tracking-tight text-indigo-main mb-6">
            <span>Empowering Your</span>
            <br />
            <span>Brand&apos;s</span>
            <br />
            <span className="relative inline-block my-1">
              <span className="bg-marigold text-indigo-dark px-3 py-0.5 rounded-[2px] border border-indigo-main drop-shadow-[4px_4px_0px_#121a4a] inline-block">
                Digital Success
              </span>
            </span>
            <br />
            <span className="font-serif italic font-normal text-peacock tracking-normal">
              Traffic and Conversions
            </span>
            {" "}
            <span className="block mt-5 font-sans text-base sm:text-lg font-bold tracking-normal leading-snug text-indigo-main/80">
              Digital Marketing, Web Development &amp; Creative Services in Bangalore
            </span>
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="font-sans text-base sm:text-lg text-slate-text max-w-xl leading-relaxed mb-8">
            We architect conversion engines, full-funnel digital campaigns, search dominant organic infrastructures, and memorable brand identities designed to out-compete and out-convert.
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-main text-canvas font-semibold text-sm shadow-[4px_4px_0px_#121a4a] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#121a4a] transition-all"
            >
              <span>Audit your brand</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>

            {/* Action button: Explore All Services with shine sweep & sparkle */}
            <a
              href="#service-cards"
              className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-marigold border-2 border-indigo-main text-indigo-dark font-sans font-bold text-sm shadow-[4px_4px_0px_#121a4a] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#121a4a] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-200 overflow-hidden select-none cursor-pointer"
            >
              {/* Diagonal Glossy Shine Sweep Beam */}
              <div
                className="absolute inset-0 w-3/4 h-[250%] -top-[75%] bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none animate-shine-sweep"
                aria-hidden="true"
              />

              {/* Sparkle Star */}
              <svg
                className="w-4 h-4 text-indigo-dark fill-current animate-sparkle-1 pointer-events-none relative z-10 shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>

              <span className="relative z-10 tracking-tight font-bold">
                Explore All Services
              </span>

              <span className="relative z-10 font-bold text-sm group-hover:translate-y-0.5 transition-transform duration-150">
                ↓
              </span>
            </a>
          </div>

          {/* Trust & Service Capability Strip */}
          <div className="pt-6 border-t border-indigo-main/20 flex flex-wrap items-center gap-5 sm:gap-6 w-full text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-peacock animate-pulse" />
              <span className="font-bold text-indigo-main">10 PRIMARY MODULES</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-marigold" />
              <span className="font-bold text-indigo-main">150+ BRANDS SCALED</span>
            </div>
            <div className="text-slate-text hidden sm:inline text-[11px]">
              HSR Layout · Bengaluru Hub
            </div>
          </div>

        </div>

        {/* Right Column: Lalbagh Glasshouse Arch + Stepped Tower */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-6">

          {/* Kasuti Pixel Tower behind arch */}
          <div className="absolute -top-3 right-2 sm:right-4 opacity-90 z-0 hidden sm:block" aria-hidden="true">
            <div className="grid grid-cols-5 gap-1.5 w-36">
              <div className="col-start-3 w-6 h-6 bg-peacock border border-indigo-main" />
              <div className="col-start-2 w-6 h-6 bg-peacock border border-indigo-main" />
              <div className="col-start-3 w-6 h-6 bg-marigold border border-indigo-main" />
              <div className="col-start-4 w-6 h-6 bg-peacock border border-indigo-main" />
              <div className="col-start-1 w-6 h-6 bg-peacock border border-indigo-main" />
              <div className="col-start-2 w-6 h-6 bg-peacock border border-indigo-main" />
              <div className="col-start-3 w-6 h-6 bg-terracotta border border-indigo-main" />
              <div className="col-start-4 w-6 h-6 bg-peacock border border-indigo-main" />
              <div className="col-start-5 w-6 h-6 bg-peacock border border-indigo-main" />
            </div>
          </div>

          {/* The Glasshouse Arch Container */}
          <div className="relative max-w-[340px] sm:max-w-[370px] w-full z-10">

            {/* The Glasshouse Frame with Dark Indigo Shadow */}
            <div className="relative bg-indigo-mid border-2 border-indigo-main p-3 rounded-t-[185px] rounded-b-xl shadow-[8px_8px_0px_#121a4a] overflow-hidden">
              <div className="relative w-full h-[400px] sm:h-[420px] rounded-t-[175px] rounded-b-lg bg-canvas-card border border-indigo-main overflow-hidden">
                <Image
                  src="/assets/7ad54.png"
                  alt="Baagul team collaborating in workspace under natural light"
                  title="Baagul team collaborating in workspace under natural light"
                  fill
                  priority
                  className="object-cover object-[center_30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-main/70 via-transparent to-transparent pointer-events-none" />

                {/* Glasshouse architectural rib lines */}
                <div className="absolute inset-0 flex justify-between px-8 pointer-events-none opacity-25">
                  <div className="w-[1.5px] h-full bg-canvas" />
                  <div className="w-[1.5px] h-full bg-canvas" />
                  <div className="w-[1.5px] h-full bg-canvas" />
                </div>
              </div>
            </div>

            {/* Overlapping Marigold Badge with Sparkle Shine Animation */}
            <div className="absolute -top-4 -left-4 sm:-left-6 -rotate-6 z-20 group cursor-default">
              <div className="relative w-26 h-26 sm:w-28 sm:h-28 rounded-2xl bg-marigold border-2 border-indigo-main shadow-[4px_4px_0px_#121a4a] flex flex-col items-center justify-center p-3 text-indigo-dark text-center select-none overflow-hidden transition-transform duration-200 group-hover:scale-105">
                {/* Diagonal Glossy Shine Sweep Beam */}
                <div
                  className="absolute inset-0 w-3/4 h-[250%] -top-[75%] bg-gradient-to-r from-transparent via-white/55 to-transparent pointer-events-none animate-shine-sweep"
                  aria-hidden="true"
                />

                {/* Content */}
                <span className="font-heading text-2xl sm:text-3xl font-extrabold leading-none tracking-tight relative z-10">
                  6+
                </span>
                <span className="font-mono font-bold text-[10px] sm:text-[11px] leading-tight tracking-wider uppercase mt-1 text-indigo-dark/95 relative z-10">
                  YEARS · EST.
                </span>
                <span className="font-mono font-bold text-[9px] sm:text-[10px] leading-tight tracking-widest uppercase text-indigo-dark/85 relative z-10">
                  BENGALURU
                </span>
              </div>

              {/* Sparkle Star 1 (Top-Right) */}
              <svg
                className="absolute -top-2.5 -right-2.5 w-5 h-5 text-canvas-card fill-current animate-sparkle-1 pointer-events-none z-30 drop-shadow-[1px_1px_0px_#121a4a]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>

              {/* Sparkle Star 2 (Bottom-Left) */}
              <svg
                className="absolute -bottom-1 -left-2 w-4 h-4 text-canvas-card fill-current animate-sparkle-2 pointer-events-none z-30 drop-shadow-[1px_1px_0px_#121a4a]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>

            {/* Hanging Metric Swatch Card */}
            <div className="absolute -bottom-3 -right-3 sm:-right-5 rotate-1 z-20">
              <div className="bg-canvas-card border-2 border-indigo-main px-4 py-3 rounded-xl shadow-[5px_5px_0px_#121a4a] flex items-center gap-3.5">
                <div className="border-r-2 border-dashed border-terracotta h-10 pr-2" />
                <div className="flex flex-col">
                  <span className="font-heading text-3xl text-indigo-main font-bold leading-tight tracking-tight">
                    +312%
                  </span>
                  <span className="text-xs font-semibold text-indigo-main/80 whitespace-nowrap">
                    Organic traffic · 6 months
                  </span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-peacock ml-1 shadow-sm animate-pulse" />
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom section transition label */}
      {/* <div className="mt-8 flex items-center justify-between text-[11px] font-mono text-slate-text opacity-70">
        <span>// 01 / 06 GRID INDEX</span>
        <span>BANGALORE DIGITAL COHORT</span>
        <span>SEC END // 01</span>
      </div> */}
    </section>
  );
}
