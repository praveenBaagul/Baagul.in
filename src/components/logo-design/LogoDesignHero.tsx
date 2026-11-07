import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LogoDesignHero() {
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
            <span className="text-[#0E1153] font-black">LOGO DESIGN</span>
          </div>

          <span className="text-[#0E1153]/60 uppercase tracking-widest text-[11px] font-bold">
            SERVICE REF: BGL-LD-01
          </span>
        </div>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-[#FFFFFF] border border-[#0E1153]/20 text-xs font-mono font-bold uppercase tracking-widest text-[#0E1153] shadow-[2px_2px_0px_#0E1153]">
              <span className="w-2 h-2 rounded-full bg-[#FFA800]" />
              <span>VISUAL BRAND IDENTITY</span>
            </div>

            <h1 className="font-heading text-6xl sm:text-7xl lg:text-[80px] tracking-tight text-[#0E1153] leading-none mb-6">
              <span>Logo</span>
              <br />
              <span className="inline-block bg-[#FFA800] text-[#0E1153] px-5 py-1 rounded-xl border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] mt-2">
                Design
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#3E4945] max-w-xl leading-relaxed mb-8">
              At Baagul, we craft timeless and distinct visual identities. From memorable marks to cohesive brand guidelines, we design logos that convey authority and leave an indelible impression.
            </p>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FFA800] transition-all"
            >
              <span>Get Started</span>
              <span>→</span>
            </Link>
          </div>

          {/* Right Column (6 cols) - Vector Design Canvas Mockup */}
          <div className="lg:col-span-6 flex justify-center relative">
            {/* Tilted Stamp Badge */}
            <div className="absolute -top-3 -right-3 sm:-right-4 z-20 w-20 h-20 rounded-full bg-[#FFA800] text-[#0E1153] border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] flex flex-col items-center justify-center text-center p-1 font-mono text-[9px] font-black uppercase rotate-[12deg]">
              <span>★ 100% ★</span>
              <span>VECTOR</span>
              <span>PRECISION</span>
            </div>

            <div className="w-full max-w-lg bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] overflow-hidden text-[#0E1153]">
              {/* Studio Canvas Header */}
              <div className="px-4 py-3 bg-[#EDE8DC] border-b-2 border-[#0E1153] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E57373] border border-[#0E1153]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFA800] border border-[#0E1153]" />
                  <span className="w-3 h-3 rounded-full bg-[#81C784] border border-[#0E1153]" />
                </div>
                <span className="text-[11px] font-bold text-[#3E4945]">
                  baagul.canvas/logo-identity
                </span>
                <span className="text-[#005F4C] font-bold">IDENTITY ARCHIVE</span>
              </div>

              {/* Vector Logo Specification Artwork */}
              <div className="relative w-full aspect-[1024/682] bg-[#FAF8F5]">
                <Image
                  src="/assets/logodesignhero.jpg"
                  alt="Baagul Logo and Brand Identity Specification"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3 Metric Cards: Elevate Your Brand Identity */}
        <div>
          <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase tracking-wider text-[#0E1153]">
            <span className="w-2 h-2 rounded-full bg-[#FFA800]" />
            <span>1. Elevate Your Brand Identity</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Green */}
            <div className="group cursor-pointer p-6 bg-[#005F4C] text-[#FEF9ED] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] hover:shadow-[9px_9px_0px_#FFA800] hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between min-h-[160px]">
              <div className="flex items-center justify-between">
                <span className="font-heading text-4xl sm:text-5xl font-black text-[#FEF9ED]">
                  87%
                </span>
                <span className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">↗</span>
              </div>
              <div className="pt-4 border-t border-[#FEF9ED]/20">
                <span className="font-heading text-base font-bold block mb-1">
                  Brand Recognition Lift
                </span>
                <span className="text-xs text-[#FEF9ED]/80 font-sans">
                  Measured across customer focus studies after brand redesigns.
                </span>
              </div>
            </div>

            {/* Card 2: Mustard Yellow */}
            <div className="group cursor-pointer p-6 bg-[#FFA800] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] hover:shadow-[9px_9px_0px_#0E1153] hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between min-h-[160px]">
              <div className="flex items-center justify-between">
                <span className="font-heading text-4xl sm:text-5xl font-black text-[#0E1153]">
                  76%
                </span>
                <span className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">↗</span>
              </div>
              <div className="pt-4 border-t border-[#0E1153]/20">
                <span className="font-heading text-base font-bold block mb-1">
                  Audience Trust Velocity
                </span>
                <span className="text-xs text-[#0E1153]/85 font-sans">
                  Immediate perception increase for premium-priced services.
                </span>
              </div>
            </div>

            {/* Card 3: Deep Navy */}
            <div className="group cursor-pointer p-6 bg-[#1A1F5E] text-[#FEF9ED] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] hover:shadow-[9px_9px_0px_#FFA800] hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between min-h-[160px]">
              <div className="flex items-center justify-between">
                <span className="font-heading text-4xl sm:text-5xl font-black text-[#FEF9ED]">
                  60%
                </span>
                <span className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">↗</span>
              </div>
              <div className="pt-4 border-t border-[#FEF9ED]/20">
                <span className="font-heading text-base font-bold block mb-1">
                  Customer Recall Retention
                </span>
                <span className="text-xs text-[#FEF9ED]/80 font-sans">
                  Higher brand recall across competitive digital advertising campaigns.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

