import React from "react";
import Link from "next/link";

export default function GraphicsDesignHero() {
  return (
    <section className="relative w-full bg-[#FEF9ED] text-[#0E1153] pt-10 pb-16 px-6 sm:px-12 lg:px-16 border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase tracking-widest text-[#0E1153]">
              <span className="w-2.5 h-2.5 bg-[#0E1153]" />
              <span>OUR SERVICE</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-6xl sm:text-7xl lg:text-[78px] tracking-tight text-[#0E1153] leading-none mb-6">
              <span>Graphics / </span>
              <br />
              <span className="inline-block bg-[#FFBA45] text-[#0E1153] px-6 py-1 rounded-[4px] border-2 border-[#0E1153] shadow-[6px_6px_0px_#0E1153] mt-2">
                —Design—
              </span>
            </h1>

            {/* Paragraph with bold highlights */}
            <p className="font-sans text-base sm:text-lg text-[#3E4945] max-w-xl leading-relaxed mb-8">
              At <strong className="text-[#0E1153] font-bold">Baagul.in</strong>, we craft visuals that do more than look good — they <strong className="text-[#0E1153] font-bold">communicate</strong>, <strong className="text-[#0E1153] font-bold">convert</strong>, and <strong className="text-[#0E1153] font-bold">connect</strong>. Whether you&apos;re building a brand from scratch or refreshing your identity, our design solutions are tailored to reflect your vision and resonate with your audience.
            </p>

            {/* Button */}
            <div className="mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FFA800] transition-all"
              >
                <span>Enroll our Service</span>
                <span>→</span>
              </Link>
            </div>

            {/* Elevate Your Brand Identity Section */}
            <div className="w-full pt-6 border-t border-dashed border-[#0E1153]/30">
              <h3 className="font-heading text-xl font-bold text-[#0E1153] mb-5">
                Elevate Your Brand Identity
              </h3>

              <div className="flex flex-col gap-4">
                {/* Metric 1 */}
                <div>
                  <div className="flex justify-between items-center text-[11px] font-mono font-bold text-[#0E1153] mb-1">
                    <span>STRATEGIC VISUALS</span>
                    <span className="px-1.5 py-0.5 bg-[#0E1153] text-[#FEF9ED] rounded text-[10px]">
                      87%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-[#FAF8F5] border-2 border-[#0E1153] rounded-sm overflow-hidden">
                    <div className="h-full bg-[#FFBA45]" style={{ width: "87%" }} />
                  </div>
                </div>

                {/* Metric 2 */}
                <div>
                  <div className="flex justify-between items-center text-[11px] font-mono font-bold text-[#0E1153] mb-1">
                    <span>CUSTOM DESIGNS</span>
                    <span className="px-1.5 py-0.5 bg-[#0E1153] text-[#FEF9ED] rounded text-[10px]">
                      76%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-[#FAF8F5] border-2 border-[#0E1153] rounded-sm overflow-hidden">
                    <div className="h-full bg-[#FFBA45]" style={{ width: "76%" }} />
                  </div>
                </div>

                {/* Metric 3 */}
                <div>
                  <div className="flex justify-between items-center text-[11px] font-mono font-bold text-[#0E1153] mb-1">
                    <span>FAST DELIVERY WITH REVISION SUPPORT</span>
                    <span className="px-1.5 py-0.5 bg-[#0E1153] text-[#FEF9ED] rounded text-[10px]">
                      60%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-[#FAF8F5] border-2 border-[#0E1153] rounded-sm overflow-hidden">
                    <div className="h-full bg-[#FFBA45]" style={{ width: "60%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (6 cols) - Stacked Framed Artboard Posters */}
          <div className="lg:col-span-6 flex justify-center relative">
            {/* Top Quad Color Motif */}
            <div className="absolute -top-6 left-6 grid grid-cols-2 gap-1 w-6 h-6 z-30">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#005F4C]" />
              <span className="w-2.5 h-2.5 rounded-sm bg-[#FFA800]" />
              <span className="w-2.5 h-2.5 rounded-sm bg-[#0E1153]" />
              <span className="w-2.5 h-2.5 rounded-sm bg-[#E1E3F7]" />
            </div>

            {/* Back Stacked Sheet (Yellow/Lavender Underlay) */}
            <div className="absolute inset-0 bg-[#FFBA45] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] rotate-[-2.5deg] translate-y-3" />
            <div className="absolute inset-0 bg-[#E1E3F7] border-2 border-[#0E1153] rounded-2xl rotate-[1.5deg] translate-y-1" />

            {/* Front White Artboard Canvas */}
            <div className="relative z-10 w-full max-w-lg bg-[#FAF8F5] border-2 border-[#0E1153] rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[500px] shadow-[6px_6px_0px_#0E1153]">
              {/* Top Meta Header */}
              <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#0E1153] pb-3 border-b border-[#0E1153]/20">
                <span>PLATE #09 / BENGALURU</span>
                <span className="w-3 h-3 rotate-45 bg-[#FFA800] border border-[#0E1153]" />
                <span>5000 × 3200 PX</span>
              </div>

              {/* Canvas Center Layout */}
              <div className="py-6 flex flex-col justify-between flex-1">
                {/* Upper Sub-Header: Type Sample & Swatches */}
                <div className="flex items-start justify-between">
                  {/* Type Sample Box */}
                  <div className="p-3 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-lg shadow-[2px_2px_0px_#0E1153]">
                    <span className="font-heading text-3xl font-black text-[#0E1153] block leading-none">
                      Aa
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#3E4945] mt-1 block">
                      FRAUNCES DISPLAY
                    </span>
                  </div>

                  {/* Swatches strip */}
                  <div className="flex items-center gap-1.5 p-1 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-md shadow-[2px_2px_0px_#0E1153]">
                    <span className="w-4 h-6 rounded-sm bg-[#0E1153]" />
                    <span className="w-4 h-6 rounded-sm bg-[#005F4C]" />
                    <span className="w-4 h-6 rounded-sm bg-[#FFA800]" />
                    <span className="w-4 h-6 rounded-sm bg-[#E1E3F7]" />
                  </div>
                </div>

                {/* Central Dashed Compass Circle with Vector Element */}
                <div className="relative my-8 flex items-center justify-center">
                  {/* Dashed outer compass ring */}
                  <div className="relative w-44 h-44 rounded-full border-2 border-dashed border-[#005F4C]/40 flex items-center justify-center">
                    {/* Anchor square points */}
                    <span className="absolute -top-1.5 w-3 h-3 bg-[#FFA800] border border-[#0E1153]" />
                    <span className="absolute -bottom-1.5 w-3 h-3 bg-[#FFA800] border border-[#0E1153]" />
                    <span className="absolute -left-1.5 w-3 h-3 bg-[#FFA800] border border-[#0E1153]" />
                    <span className="absolute -right-1.5 w-3 h-3 bg-[#FFA800] border border-[#0E1153]" />

                    {/* Dark Green Brand Logo Mark */}
                    <div className="w-20 h-20 bg-[#005F4C] border-2 border-[#0E1153] rounded-2xl shadow-[4px_4px_0px_#0E1153] flex items-center justify-center relative rotate-3">
                      <div className="w-7 h-7 rounded-full bg-[#FFFFFF] shadow-sm flex items-center justify-center" />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#FFA800] rounded-md border border-[#0E1153]" />
                    </div>
                  </div>
                </div>

                {/* Technical Dimension Label */}
                <div className="flex items-center justify-between">
                  <div className="px-3 py-1 bg-[#FFFFFF] border border-[#0E1153] text-[9px] font-mono font-bold text-[#0E1153] rounded">
                    PRECISION BÉZIER PATHS
                  </div>

                  {/* Stamp Badge: PRINT READY 100% VECTOR */}
                  <div className="w-20 h-20 rounded-full bg-[#1A1F5E] text-[#FEF9ED] border-2 border-[#0E1153] shadow-[3px_3px_0px_#0E1153] flex flex-col items-center justify-center text-center p-1 font-mono text-[9px] font-bold uppercase rotate-[-8deg]">
                    <span>PRINT</span>
                    <span className="text-[#FFA800]">READY</span>
                    <span className="text-[7px] text-[#FEF9ED]/70">100% VECTOR</span>
                  </div>
                </div>
              </div>

              {/* Bottom Stamp Line */}
              <div className="pt-3 border-t border-[#0E1153]/20 flex items-center justify-center text-[10px] font-mono font-bold text-[#0E1153] tracking-widest uppercase">
                BAAGUL STUDIO DESIGN DESK &copy; 2026
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
