import React from "react";
import Link from "next/link";

export default function WebDesignHero() {
  return (
    <section className="relative w-full bg-[#EAF5EF] text-[#0E1153] pt-6 pb-16 px-6 sm:px-12 lg:px-16 border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Top Breadcrumb row */}
        <div className="flex items-center gap-2 mb-8 text-xs font-mono font-medium text-[#0E1153]/70">
          <Link href="/" className="hover:text-[#005F4C] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/services" className="hover:text-[#005F4C] transition-colors">
            Our Services
          </Link>
          <span>/</span>
          <span className="text-[#0E1153] font-bold">Web Design &amp; Development</span>
        </div>

        {/* 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-10">
          {/* Left Column (5.5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase tracking-wider text-[#0E1153]">
              <span className="w-2.5 h-2.5 bg-[#005F4C]" />
              <span>OUR SERVICE // CODE 01-WEB</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-6xl sm:text-7xl lg:text-[76px] tracking-tight text-[#0E1153] leading-none mb-6">
              <span>Web / </span>
              <br />
              <span className="inline-block bg-[#FFBA45] text-[#0E1153] px-6 py-1 rounded-[4px] border-2 border-[#0E1153] shadow-[5px_5px_0px_#0E1153] mt-2 font-heading">
                —Design—
              </span>
            </h1>

            {/* Paragraph with highlighted bold text */}
            <p className="font-sans text-sm sm:text-base text-[#3E4945] max-w-lg leading-relaxed mb-6">
              At <strong className="text-[#0E1153] font-bold">Baagul.in</strong>, we craft visuals that do more than look good — they <strong className="text-[#0E1153] font-bold">communicate</strong>, <strong className="text-[#0E1153] font-bold">convert</strong>, and <strong className="text-[#0E1153] font-bold">connect</strong>. Whether you&apos;re building a brand from scratch or refreshing your identity, our design solutions are tailored to reflect your vision and resonate with your audience.
            </p>

            {/* Client Note Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border-2 border-[#0E1153] text-[11px] font-mono font-bold text-[#0E1153] shadow-[2px_2px_0px_#0E1153] mb-8">
              <span>🎯 CLIENT NOTE: 100% Bespoke Code · Zero Stock Page-Builders</span>
            </div>

            {/* Enroll our Service Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FFA800] transition-all"
            >
              <span>Enroll our Service</span>
              <span>→</span>
            </Link>
          </div>

          {/* Right Column (6.5 cols) - Interactive Browser Frame with Callout Pins */}
          <div className="lg:col-span-7 flex justify-center relative">
            {/* Top Badge: "Great UI / UX concept" */}
            <div className="absolute -top-3 left-4 z-20 px-3 py-1 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-full text-[10px] font-mono font-bold text-[#0E1153] shadow-[2px_2px_0px_#0E1153] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFA800]" />
              <span>Great UI / UX concept</span>
            </div>

            {/* Top Right Stamp Badge: "BUILT TO CONVERT" */}
            <div className="absolute -top-4 right-4 z-20 px-4 py-1.5 bg-[#FFA800] border-2 border-[#0E1153] rounded-full text-[11px] font-mono font-black uppercase text-[#0E1153] shadow-[3px_3px_0px_#0E1153] rotate-[4deg]">
              <span>★ BUILT TO CONVERT</span>
            </div>

            {/* Browser Window Mockup */}
            <div className="w-full max-w-xl bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] overflow-hidden text-[#0E1153] relative">
              {/* Browser Address Bar */}
              <div className="px-4 py-3 bg-[#EDE8DC] border-b-2 border-[#0E1153] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E57373] border border-[#0E1153]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFA800] border border-[#0E1153]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#81C784] border border-[#0E1153]" />
                </div>

                <div className="px-4 py-0.5 rounded-full bg-[#FFFFFF] border border-[#0E1153] text-[11px] text-[#3E4945] font-mono flex items-center gap-1.5">
                  <span className="text-[#005F4C]">🔒</span>
                  <span>baagul.in/web-design</span>
                </div>

                <span className="w-6" />
              </div>

              {/* Mockup Canvas Interior */}
              <div className="p-6 bg-[#FAF8F5] flex flex-col gap-4">
                {/* Header Wireframe Row */}
                <div className="flex items-center justify-between pb-3 border-b border-[#0E1153]/15">
                  <div className="w-20 h-4 bg-[#0E1153] rounded-sm" />
                  <div className="flex items-center gap-2">
                    <span className="w-12 h-2.5 bg-[#EDE8DC] rounded-sm" />
                    <span className="w-12 h-2.5 bg-[#EDE8DC] rounded-sm" />
                    <span className="w-16 h-5 bg-[#005F4C] rounded-md border border-[#0E1153]" />
                  </div>
                </div>

                {/* Hero Wireframe Box with Split Graphic & Typography Tag */}
                <div className="grid grid-cols-12 gap-4 p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl relative">
                  {/* Left sub-column */}
                  <div className="col-span-7 flex flex-col gap-2.5">
                    <div className="w-16 h-2 bg-[#FFA800] rounded-sm" />
                    <div className="w-4/5 h-6 bg-[#0E1153] rounded-sm" />
                    <div className="w-full h-2.5 bg-[#EDE8DC] rounded-sm" />
                    <div className="w-3/4 h-2.5 bg-[#EDE8DC] rounded-sm" />
                    <div className="w-24 h-6 bg-[#0E1153] rounded-full mt-2" />
                  </div>

                  {/* Right sub-column with "Clear Typography" callout pin */}
                  <div className="col-span-5 bg-[#CFE8DC] border-2 border-[#0E1153] rounded-lg p-3 relative flex flex-col justify-between">
                    <div className="w-6 h-6 rounded bg-[#005F4C] text-[#FEF9ED] flex items-center justify-center text-xs font-bold">
                      ⊞
                    </div>
                    {/* Clear Typography Pin */}
                    <div className="absolute -bottom-2 -right-2 px-2.5 py-1 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-md shadow-[2px_2px_0px_#0E1153] flex items-center gap-1.5 text-[9px] font-mono font-bold text-[#0E1153]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFA800]" />
                      <span>Clear Typography</span>
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                      <span className="w-10 h-3 bg-[#E1E3F7] rounded-sm border border-[#0E1153]/30" />
                      <span className="w-12 h-3 bg-[#FFA800] rounded-sm border border-[#0E1153]" />
                    </div>
                  </div>
                </div>

                {/* Bottom 3 Status Metric Boxes */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-2.5 bg-[#FFFFFF] border border-[#0E1153] rounded-lg text-center">
                    <span className="text-[10px] font-mono font-bold text-[#0E1153] block">
                      99.9% SLA
                    </span>
                  </div>
                  <div className="p-2.5 bg-[#FFFFFF] border border-[#0E1153] rounded-lg text-center">
                    <span className="text-[10px] font-mono font-bold text-[#005F4C] block">
                      &lt; 0.8s LCP
                    </span>
                  </div>
                  <div className="p-2.5 bg-[#FFFFFF] border border-[#0E1153] rounded-lg text-center">
                    <span className="text-[10px] font-mono font-bold text-[#0E1153] block">
                      SEO READY
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Left Badge & Quad Motif: "Responsive / Mobile Friendly" */}
            <div className="absolute -bottom-4 left-6 z-20 flex items-center gap-2">
              {/* Quad Color Motif */}
              <div className="grid grid-cols-2 gap-0.5 p-1 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-md shadow-[2px_2px_0px_#0E1153]">
                <span className="w-2 h-2 rounded-sm bg-[#005F4C]" />
                <span className="w-2 h-2 rounded-sm bg-[#FFA800]" />
                <span className="w-2 h-2 rounded-sm bg-[#0E1153]" />
                <span className="w-2 h-2 rounded-sm bg-[#E1E3F7]" />
              </div>

              {/* Pin */}
              <div className="px-3.5 py-1 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-full text-[10px] font-mono font-bold text-[#0E1153] shadow-[2px_2px_0px_#0E1153] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFA800]" />
                <span>Responsive / Mobile Friendly</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashed Separator Line */}
        <div className="w-full border-t-2 border-dashed border-[#0E1153]/30 mt-6" aria-hidden="true" />
      </div>
    </section>
  );
}
