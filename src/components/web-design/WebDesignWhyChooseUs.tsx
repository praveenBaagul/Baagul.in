import React from "react";

export default function WebDesignWhyChooseUs() {
  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#FEF9ED] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (5 cols) - Yellow Callout Card */}
          <div className="lg:col-span-5 p-8 sm:p-10 bg-[#FFA800] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153]">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0E1153]/70 mb-3 block">
              AGENCY PROMISE // BENGALURU
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E1153] leading-tight mb-4">
              <span>Your Business Deserves a Website That </span>
              <span className="inline-block bg-[#0E1153] text-[#FEF9ED] px-3 py-0.5 rounded shadow-[3px_3px_0px_#FFFFFF] mt-1">
                —Converts—
              </span>
            </h2>

            <p className="font-sans text-xs sm:text-sm text-[#0E1153]/90 leading-relaxed">
              We design websites engineered to communicate clearly, rank organically on Google, and convert commercial search intent into revenue.
            </p>
          </div>

          {/* Right Column (7 cols) - Framed Editorial Story Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] flex flex-col justify-between">
            <p className="font-sans text-base text-[#3E4945] leading-relaxed mb-6">
              <span className="font-heading text-6xl font-black text-[#0E1153] float-left mr-3 leading-none">
                A
              </span>
              t Baagul, we combine exceptional visual aesthetics with modular Next.js software engineering to build websites that look stunning, load instantly, and perform reliably over time. Whether you need a corporate web presence, an editorial publication, or a high-converting marketing engine, our architectures are engineered without code bloat, guaranteeing speed, effortless content management, and lasting brand equity.
            </p>

            {/* 3 Tag Pills */}
            <div className="pt-4 border-t border-[#0E1153]/15 flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#CFE8DC] border border-[#0E1153] text-xs font-mono font-bold text-[#005F4C]">
                ✓ MODERN TECH STACK
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FFA800]/30 border border-[#0E1153] text-xs font-mono font-bold text-[#0E1153]">
                ✓ SEO OPTIMIZED
              </span>
              <span className="px-3 py-1 rounded-full bg-[#E1E3F7] border border-[#0E1153] text-xs font-mono font-bold text-[#0E1153]">
                ✓ CLEAN CODE GUARANTEE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

