import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function GraphicsDesignHero() {
  return (
    <section className="relative w-full bg-[#FEF9ED] text-[#0E1153] pt-10 pb-16 px-6 sm:px-12 lg:px-16 border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
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

          {/* Right Column (7 cols) - Creative Design Process Artwork */}
          <div className="lg:col-span-7 flex justify-center relative">
            <div className="w-full max-w-2xl bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] overflow-hidden relative group">
              <div className="relative w-full aspect-[1024/576]">
                <Image
                  src="/assets/creative-design-process-hero.jpg"
                  alt="Creative Design Process - From the first idea to the final masterpiece"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 750px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
