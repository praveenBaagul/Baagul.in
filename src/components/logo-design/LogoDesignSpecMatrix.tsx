import React from "react";

export default function LogoDesignSpecMatrix() {
  return (
    <section className="w-full py-12 px-6 sm:px-12 bg-[#F2EEE2] border-t-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6 text-xs font-mono text-[#3E4945]">
          <div className="flex items-center gap-2 text-[#0E1153] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#FFA800]" />
            <span>DESIGN SYSTEM COMPONENT TOKEN MATRIX</span>
          </div>
          <span className="text-[11px] opacity-70">
            FRAUNCES + DM SANS / 2PX INK / #0E1153
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs font-mono">
          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153]">
            <span className="font-bold text-[#0E1153] block mb-2">1. VECTOR ANCHORS</span>
            <p className="text-[#3E4945] leading-relaxed">
              [GRID]: 24px micro-grid alignment.<br />
              [BEZIER]: Minimal anchor tangents.<br />
              [WEIGHT]: Optical optical balance.
            </p>
          </div>

          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153]">
            <span className="font-bold text-[#0E1153] block mb-2">2. COLOR PROFILES</span>
            <p className="text-[#3E4945] leading-relaxed">
              [RGB / HEX]: Web &amp; digital UI.<br />
              [CMYK / PANTONE]: Offset print.<br />
              [MONOCHROME]: Inverted ink states.
            </p>
          </div>

          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153]">
            <span className="font-bold text-[#0E1153] block mb-2">3. FILE MASTER SUITE</span>
            <p className="text-[#3E4945] leading-relaxed">
              [VECTOR]: .SVG, .EPS, .AI source.<br />
              [RASTER]: .PNG transparent (300dpi).<br />
              [WEB]: Optimized WebP &amp; SVG.
            </p>
          </div>

          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153]">
            <span className="font-bold text-[#0E1153] block mb-2">4. IP OWNERSHIP</span>
            <p className="text-[#3E4945] leading-relaxed">
              [LEGAL]: 100% full copyright transfer.<br />
              [USAGE]: Worldwide commercial license.<br />
              [TRADEMARK]: Registration ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

