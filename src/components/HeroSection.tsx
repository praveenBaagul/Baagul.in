import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "./Icons";

export default function HeroSection() {
  return (
    <section className="relative w-full pt-12 pb-20 px-4 sm:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column (7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          
          {/* Label + Running Stitch Tag */}
          <div className="flex flex-col gap-1.5 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-terracotta inline-block" aria-hidden="true" />
              <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-indigo-main">
                DIGITAL MARKETING + WEB STUDIO · BENGALURU
              </span>
            </div>
            <div className="w-48 border-t-2 border-dashed border-terracotta" aria-hidden="true" />
          </div>

          {/* Heading 1 */}
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-[72px] leading-[1.05] tracking-tight text-indigo-main mb-6">
            <span>Digital growth,</span>
            <br />
            <span className="inline-flex flex-wrap items-baseline gap-3 mt-1 sm:mt-2">
              <span>made in</span>
              <span className="relative inline-block rotate-[1.5deg] mt-1">
                <span className="bg-marigold text-indigo-dark px-4 py-0.5 rounded-[2px] border border-indigo-main drop-shadow-[4px_4px_0px_#121a4a] inline-block">
                  Bengaluru.
                </span>
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="font-sans text-lg sm:text-xl text-slate-text max-w-xl leading-relaxed mb-8">
            SEO, websites, Google and Meta ads and branding for high-growth startups, 
            local businesses, and modern enterprises. Six years of craftsmanship, 
            strictly measured in qualified leads and bottom-line revenue.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-indigo-mid text-canvas font-semibold text-sm border border-indigo-main drop-shadow-[5px_5px_0px_#dadff4] hover:translate-x-0.5 hover:translate-y-0.5 hover:drop-shadow-[2px_2px_0px_#dadff4] transition-all duration-150 group"
            >
              <span>Get a free consultation</span>
              <div className="w-6 h-6 rounded bg-indigo-deep border border-indigo-main/40 flex items-center justify-center p-1 group-hover:translate-x-0.5 transition-transform">
                <Image
                  src="/assets/e2143.svg"
                  alt=""
                  width={14}
                  height={14}
                  className="object-contain"
                />
              </div>
            </a>

            <a
              href="#case-studies"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-canvas text-indigo-main font-semibold text-sm border border-indigo-main drop-shadow-[5px_5px_0px_#dadff4] hover:bg-canvas-card hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
            >
              See our work
            </a>
          </div>

          {/* Trust Strip */}
          <div className="pt-6 border-t border-indigo-main/20 flex flex-wrap items-center gap-6 w-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-canvas-card border border-indigo-main flex items-center justify-center font-heading text-sm text-indigo-mid drop-shadow-[2px_2px_0px_#dadff4]">
                K·9
              </div>
              <div className="w-10 h-10 rounded bg-canvas-card border border-indigo-main flex items-center justify-center font-heading text-sm text-peacock drop-shadow-[2px_2px_0px_#dadff4]">
                BLR
              </div>
              <div className="w-10 h-10 rounded bg-canvas-card border border-indigo-main flex items-center justify-center font-heading text-sm text-terracotta drop-shadow-[2px_2px_0px_#dadff4]">
                STX
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-sans font-semibold text-xs uppercase tracking-wider text-indigo-main">
                  TRUSTED BY 150+ BUSINESSES
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-peacock" aria-hidden="true" />
              </div>
              <span className="text-xs text-slate-text">
                From Indiranagar innovators to global enterprises
              </span>
            </div>
          </div>

        </div>

        {/* Right Column: Lalbagh Glasshouse Arch + Stepped Tower */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-6">
          
          {/* Kasuti Pixel Tower behind arch */}
          <div className="absolute top-2 right-4 sm:right-8 opacity-90 z-0 hidden sm:block" aria-hidden="true">
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
          <div className="relative max-w-[360px] sm:max-w-[380px] w-full z-10">
            
            {/* The Glasshouse Frame */}
            <div className="relative bg-indigo-mid border-2 border-indigo-main p-3.5 rounded-t-[190px] rounded-b-lg shadow-[8px_8px_0px_#dadff4] overflow-hidden">
              <div className="relative w-full h-[440px] sm:h-[460px] rounded-t-[180px] rounded-b bg-canvas-card border border-indigo-main overflow-hidden">
                <Image
                  src="/assets/7ad54.png"
                  alt="Baagul team collaborating in workspace under natural light"
                  fill
                  priority
                  className="object-cover"
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

            {/* Overlapping Marigold Badge */}
            <div className="absolute -top-6 -left-6 sm:-left-8 -rotate-12 z-20">
              <div className="w-28 h-28 rounded-2xl bg-marigold border-2 border-indigo-main shadow-[4px_4px_0px_#121a4a] flex flex-col items-center justify-center p-3 text-indigo-dark text-center select-none">
                <span className="font-heading text-3xl font-extrabold leading-none tracking-tight">
                  6+
                </span>
                <span className="font-mono font-bold text-[11px] leading-tight tracking-wider uppercase mt-1.5 text-indigo-dark/95">
                  YEARS · EST.
                </span>
                <span className="font-mono font-bold text-[10px] leading-tight tracking-widest uppercase text-indigo-dark/85">
                  BENGALURU
                </span>
              </div>
            </div>

            {/* Hanging Metric Swatch Card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 rotate-2 z-20">
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
                <div className="w-2.5 h-2.5 rounded-full bg-peacock ml-1 shadow-sm" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

