import React from "react";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full pt-10 pb-16 px-4 sm:px-12 max-w-7xl mx-auto">
      {/* Top Running Stitch Strip */}
      <div className="w-full border-t-2 border-dashed border-terracotta/40 mb-10" aria-hidden="true" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Typography & Positioning */}
        <div className="lg:col-span-6 flex flex-col items-start z-10">
          
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-peacock" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-indigo-main">
              CONTACT US
            </span>
            <span className="text-slate-text text-xs opacity-60">
              // SPEC: 0862_DISPATCH
            </span>
          </div>

          {/* Heading 1 */}
          <h1 className="font-heading text-6xl sm:text-7xl lg:text-[76px] leading-[1.05] tracking-tight text-indigo-main mb-6">
            <span>Enquiry</span>
            <br />
            <span className="relative inline-block mt-1">
              <span className="bg-marigold text-indigo-dark px-3 py-0.5 rounded-[2px] border border-indigo-main drop-shadow-[4px_4px_0px_#121a4a] inline-block">
                Now.
              </span>
            </span>
          </h1>

          {/* Body Copy */}
          <p className="font-sans text-base sm:text-lg text-slate-text max-w-xl leading-relaxed mb-8">
            We&apos;re always here to help! Whether you have a question about our products, 
            need assistance with your order, or just want to share your feedback, feel free 
            to reach out to us. Our team will get back to you as soon as possible.
          </p>

          {/* Trust Badges Strip */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-indigo-main/15 w-full text-xs font-semibold text-indigo-main">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-canvas-card border border-indigo-main/20 shadow-[2px_2px_0px_#dadff4]">
              <span className="w-1.5 h-1.5 rounded-full bg-peacock" />
              <span>RESPONSE &lt; 24H</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-canvas-card border border-indigo-main/20 shadow-[2px_2px_0px_#dadff4]">
              <span className="w-1.5 h-1.5 rounded-full bg-marigold" />
              <span>HSR LAYOUT STUDIO</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-canvas-card border border-indigo-main/20 shadow-[2px_2px_0px_#dadff4]">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              <span>TAILORED PROPOSALS</span>
            </div>
          </div>

        </div>

        {/* Right Column: Visual Composition & Postal Architectural Card */}
        <div className="lg:col-span-6 flex justify-center items-center relative py-6">
          
          {/* Top Right 2x3 Pixel Grid Accent */}
          <div className="absolute top-0 right-4 sm:right-8 opacity-90 z-0 hidden sm:block" aria-hidden="true">
            <div className="grid grid-cols-3 gap-1.5 w-24">
              <div className="w-6 h-6 bg-peacock border border-indigo-main" />
              <div className="w-6 h-6 bg-marigold border border-indigo-main" />
              <div className="w-6 h-6 bg-indigo-mid border border-indigo-main" />
              <div className="w-6 h-6 bg-terracotta border border-indigo-main" />
              <div className="w-6 h-6 bg-peacock border border-indigo-main" />
              <div className="w-6 h-6 bg-marigold border border-indigo-main" />
            </div>
          </div>

          {/* Main Postal / Architectural Preview Card */}
          <div className="relative max-w-md w-full bg-[#f1ede2] border-2 border-indigo-main rounded-xl p-5 shadow-[8px_8px_0px_#121a4a] z-10">
            
            {/* Header bar of card */}
            <div className="flex items-center justify-between pb-3 border-b border-indigo-main/20 text-xs font-mono text-indigo-main">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-peacock" />
                <span className="font-bold tracking-wider">HQ_ROUTING // BLR:04</span>
              </div>
              <span className="text-[11px] text-slate-text">STATUS: READY</span>
            </div>

            {/* Architectural Grid Matrix Graphic */}
            <div className="relative my-4 p-4 bg-canvas-card border border-indigo-main/30 rounded-lg overflow-hidden">
              <div className="flex justify-between items-start mb-4 text-[10px] font-mono text-slate-text">
                <span className="font-bold uppercase tracking-wider text-indigo-main">HUSTLEHUB TECH PARK</span>
                <span>LAT 12.9130° N</span>
              </div>

              {/* Wireframe matrix graphic */}
              <div className="relative h-44 w-full border border-dashed border-peacock/40 rounded bg-peacock-light/30 flex items-center justify-center p-3">
                <div className="grid grid-cols-3 gap-2 w-full h-full text-center">
                  <div className="border border-indigo-main/20 bg-canvas/80 p-2 flex flex-col justify-center rounded">
                    <span className="text-[9px] font-mono text-indigo-main font-bold">CORE HUB</span>
                  </div>
                  <div className="col-span-2 border border-peacock/30 bg-peacock/10 p-2 flex flex-col justify-center rounded">
                    <span className="text-[9px] font-mono text-peacock font-bold">DISPATCH / PROPOSAL DESK</span>
                  </div>
                  <div className="col-span-2 border border-marigold/30 bg-marigold/10 p-2 flex flex-col justify-center rounded">
                    <span className="text-[9px] font-mono text-indigo-main font-bold">SECTOR 4, HSR LAYOUT</span>
                  </div>
                  <div className="border border-terracotta/30 bg-terracotta/10 p-2 flex flex-col justify-center rounded">
                    <span className="text-[9px] font-mono text-terracotta font-bold">VERIFIED VAULT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Bottom Bar */}
            <div className="flex items-center justify-between pt-2 text-[11px] font-mono text-indigo-main">
              <span className="text-slate-text">Incoming Technical Desk</span>
              <span className="font-bold text-peacock">24H TURNAROUND</span>
            </div>

            {/* Circular Floating Rotating Stamp Badge */}
            <div className="absolute -bottom-6 -left-6 rotate-[-8deg] z-20">
              <div className="w-24 h-24 rounded-full bg-marigold border-2 border-indigo-main shadow-[4px_4px_0px_#121a4a] flex flex-col items-center justify-center p-2 text-indigo-main">
                <span className="font-sans font-black text-[9px] uppercase tracking-wider text-center leading-tight">
                  DEPLOY IN
                  <br />
                  <span className="text-sm font-bold text-terracotta">5 DAYS</span>
                  <br />
                  &amp; SCALE
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom section transition label */}
      <div className="mt-8 flex items-center justify-between text-[11px] font-mono text-slate-text opacity-70">
        <span>SEC: 02 // CONTACT OVERVIEW</span>
        <span>HSR TECH PARK SERIES</span>
      </div>
    </section>
  );
}

