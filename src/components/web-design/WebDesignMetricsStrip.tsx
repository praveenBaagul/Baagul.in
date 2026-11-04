import React from "react";

export default function WebDesignMetricsStrip() {
  return (
    <section className="w-full py-16 px-6 sm:px-12 lg:px-16 bg-[#005F4C] text-[#FEF9ED] border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-8 text-xs font-mono font-bold uppercase tracking-wider text-[#FFA800]">
          <span className="w-2.5 h-2.5 bg-[#FFA800]" />
          <span>ELEVATE YOUR BRAND IDENTITY</span>
        </div>

        {/* 3 Metric Columns matching Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Index 01 */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase text-[#FEF9ED]/70 tracking-widest block mb-2">
                INDEX 01 / VISUALS
              </span>
              <span className="font-heading text-6xl sm:text-7xl font-black text-[#FEF9ED] leading-none block mb-4">
                87<span className="text-4xl sm:text-5xl font-bold text-[#FFA800]">%</span>
              </span>
              <p className="font-mono text-xs font-bold text-[#FEF9ED]/90 uppercase tracking-wide leading-relaxed">
                STRATEGIC VISUALS THAT CONVERT VISITORS INTO RECURRING BUYERS
              </p>
            </div>

            <div className="w-full h-2 bg-[#0E1153]/40 rounded-full overflow-hidden mt-6">
              <div className="h-full bg-[#FFA800] rounded-full" style={{ width: "87%" }} />
            </div>
          </div>

          {/* Index 02 */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase text-[#FEF9ED]/70 tracking-widest block mb-2">
                INDEX 02 / SEARCH
              </span>
              <span className="font-heading text-6xl sm:text-7xl font-black text-[#FEF9ED] leading-none block mb-4">
                76<span className="text-4xl sm:text-5xl font-bold text-[#FFA800]">%</span>
              </span>
              <p className="font-mono text-xs font-bold text-[#FEF9ED]/90 uppercase tracking-wide leading-relaxed">
                PRECISION KEYWORD RESEARCH MAPPED DIRECTLY TO CODE HIERARCHY
              </p>
            </div>

            <div className="w-full h-2 bg-[#0E1153]/40 rounded-full overflow-hidden mt-6">
              <div className="h-full bg-[#FFA800] rounded-full" style={{ width: "76%" }} />
            </div>
          </div>

          {/* Index 03 */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase text-[#FEF9ED]/70 tracking-widest block mb-2">
                INDEX 03 / VELOCITY
              </span>
              <span className="font-heading text-6xl sm:text-7xl font-black text-[#FEF9ED] leading-none block mb-4">
                60<span className="text-4xl sm:text-5xl font-bold text-[#FFA800]">%</span>
              </span>
              <p className="font-mono text-xs font-bold text-[#FEF9ED]/90 uppercase tracking-wide leading-relaxed">
                FAST DELIVERY WITH DEDICATED POST-LAUNCH REVISION SUPPORT
              </p>
            </div>

            <div className="w-full h-2 bg-[#0E1153]/40 rounded-full overflow-hidden mt-6">
              <div className="h-full bg-[#FFA800] rounded-full" style={{ width: "60%" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
