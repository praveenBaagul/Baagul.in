import React from "react";

export default function WebDesignSpecMatrix() {
  return (
    <section className="w-full py-12 px-6 sm:px-12 bg-[#F2EEE2] border-t-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6 text-xs font-mono text-[#3E4945]">
          <div className="flex items-center gap-2 text-[#0E1153] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#005F4C]" />
            <span>WEB DESIGN SYSTEM COMPONENT TOKEN MATRIX</span>
          </div>
          <span className="text-[11px] opacity-70">
            FRAUNCES + DM SANS / 2PX INK / #0E1153
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153]">
            <span className="font-bold text-[#0E1153] block mb-2">1. NEXT.JS APPS</span>
            <p className="text-[#3E4945] leading-relaxed">
              [STACK]: App Router, Turbopack, React 19.<br />
              [SPEED]: Sub-second LCP &amp; 0 CLS.<br />
              [TYPESAFE]: 100% strict TypeScript.
            </p>
          </div>

          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153]">
            <span className="font-bold text-[#0E1153] block mb-2">2. RESPONSIVENESS</span>
            <p className="text-[#3E4945] leading-relaxed">
              [BREAKPOINTS]: sm (640), md (768), lg (1024).<br />
              [TOUCH]: 48px minimum hit target size.<br />
              [CONTRAST]: WCAG AAA accessibility.
            </p>
          </div>

          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153]">
            <span className="font-bold text-[#0E1153] block mb-2">3. SEO &amp; SCHEMA</span>
            <p className="text-[#3E4945] leading-relaxed">
              [METADATA]: Dynamic OpenGraph tags.<br />
              [JSON-LD]: Semantic entity schema graphs.<br />
              [SITEMAP]: Automated crawl indexation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

