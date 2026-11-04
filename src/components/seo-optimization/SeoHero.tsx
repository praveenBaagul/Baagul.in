import React from "react";
import Link from "next/link";

export default function SeoHero() {
  return (
    <section className="relative w-full bg-[#FEF9ED] text-[#0E1153] pt-12 pb-20 px-4 sm:px-8 lg:px-12 border-b-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#0E1153]/20 mb-6 text-xs font-mono font-bold uppercase tracking-widest text-[#0E1153] shadow-[2px_2px_0px_#0E1153]">
          <span className="w-2 h-2 rounded-full bg-[#005F4C]" />
          <span>SEARCH ENGINE ARCHITECTURE // MODULE: 01</span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#0E1153] mb-6 leading-none">
          <span>SEO / </span>
          <span className="inline-block bg-[#FFBA45] text-[#0E1153] px-4 py-1 rounded-lg border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153]">
            Optimization
          </span>
        </h1>

        {/* Subtitle / Paragraph */}
        <p className="font-sans text-base sm:text-lg text-[#3E4945] max-w-3xl leading-relaxed mb-8">
          All-in-one organic search architecture that converts impressions into high-margin paying clients. 
          Whether you are dominating local map packs or ranking #1 for high-commercial terms, 
          we build durable authority that survives search algorithm updates.
        </p>

        {/* CTA Button */}
        <div className="mb-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#005F4C] text-[#FEF9ED] font-heading font-bold text-base border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#0E1153] transition-all"
          >
            <span>Audit your website</span>
            <span className="text-lg">→</span>
          </Link>
        </div>

        {/* Interactive Dashboard Mockup Frame */}
        <div className="w-full max-w-5xl bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] overflow-hidden text-left relative">
          {/* Top Browser Bar */}
          <div className="px-4 py-3 bg-[#EDE8DC] border-b-2 border-[#0E1153] flex flex-wrap items-center justify-between gap-3">
            {/* Window controls */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#E57373] border border-[#0E1153]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBA45] border border-[#0E1153]" />
              <span className="w-3 h-3 rounded-full bg-[#81C784] border border-[#0E1153]" />
              <span className="ml-2 px-2.5 py-0.5 rounded bg-[#CFE8DC] border border-[#0E1153] text-[10px] font-mono font-bold text-[#005F4C]">
                SEO AUDIT // LIVE TELEMETRY
              </span>
            </div>

            {/* Address Bar */}
            <div className="hidden sm:flex flex-1 max-w-md mx-4 px-3 py-1 rounded-md bg-[#FFFFFF] border border-[#0E1153] text-[11px] font-mono text-[#3E4945] items-center justify-between">
              <span className="truncate">https://baagul.studio/search-audit/live-rankings</span>
              <span className="text-[#005F4C] text-xs font-bold">🔒</span>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-2 bg-[#FFBA45] px-2.5 py-1 rounded border border-[#0E1153] text-[10px] font-mono font-bold text-[#0E1153]">
              <span className="w-2 h-2 rounded-full bg-[#005F4C] animate-pulse" />
              <span>ACTIVE CRAWL // 100% HEALTH</span>
            </div>
          </div>

          {/* Browser Inner Content */}
          <div className="p-6 sm:p-8 bg-[#FAFAFA]">
            {/* Header row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#0E1153]/15">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0E1153]">
                  Search Performance &amp; Deliverables
                </h3>
                <p className="font-sans text-xs text-[#3E4945]">
                  Automated telemetry monitoring indexing, Core Web Vitals, and keyword position velocity.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono font-bold bg-[#EDE8DC] border border-[#0E1153] px-3 py-1.5 rounded-lg text-[#0E1153]">
                <span>VIEW SERP METRICS</span>
                <span>↗</span>
              </div>
            </div>

            {/* 4 Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {/* Card 1 */}
              <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153]">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#3E4945] block mb-1">
                  Organic Traffic
                </span>
                <span className="font-heading text-2xl sm:text-3xl font-bold text-[#005F4C] block">
                  +186%
                </span>
                <span className="text-[10px] font-sans text-[#3E4945] block mt-1">
                  vs 90-day previous baseline
                </span>
              </div>

              {/* Card 2 */}
              <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153]">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#3E4945] block mb-1">
                  Top 3 Keywords
                </span>
                <span className="font-heading text-2xl sm:text-3xl font-bold text-[#0E1153] block">
                  42 Terms
                </span>
                <span className="text-[10px] font-sans text-[#3E4945] block mt-1">
                  High commercial buying intent
                </span>
              </div>

              {/* Card 3 */}
              <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153]">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#3E4945] block mb-1">
                  Avg. Positioning
                </span>
                <span className="font-heading text-2xl sm:text-3xl font-bold text-[#0E1153] block">
                  3.8 / 100
                </span>
                <span className="text-[10px] font-sans text-[#3E4945] block mt-1">
                  Top 5 Google SERP bracket
                </span>
              </div>

              {/* Card 4 */}
              <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153]">
                <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#3E4945] block mb-1">
                  Technical Health
                </span>
                <span className="font-heading text-2xl sm:text-3xl font-bold text-[#005F4C] block">
                  98.4%
                </span>
                <span className="text-[10px] font-sans text-[#3E4945] block mt-1">
                  Zero critical crawl barriers
                </span>
              </div>
            </div>

            {/* Performance Graph Visual */}
            <div className="p-6 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[3px_3px_0px_#0E1153] mb-6">
              <div className="flex items-center justify-between mb-4 text-xs font-mono text-[#3E4945]">
                <span className="font-bold text-[#0E1153]">
                  ORGANIC CLICK VELOCITY &amp; IMPRESSION CURVE (LAST 12 MONTHS)
                </span>
                <span className="text-[#005F4C] font-bold">● COMPOUNDING REVENUE GROWTH</span>
              </div>

              <div className="relative w-full h-40 bg-[#F4F8F6] border border-[#0E1153]/20 rounded-lg p-4 flex flex-col justify-end overflow-hidden">
                {/* SVG Curve Line */}
                <svg
                  className="w-full h-28"
                  viewBox="0 0 500 120"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#005F4C" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#005F4C" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 100 Q 120 90, 200 65 T 380 30 T 500 12 L 500 120 L 0 120 Z"
                    fill="url(#curveGradient)"
                  />
                  <path
                    d="M 0 100 Q 120 90, 200 65 T 380 30 T 500 12"
                    stroke="#005F4C"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Milestones */}
                  <circle cx="200" cy="65" r="4" fill="#FFBA45" stroke="#0E1153" strokeWidth="2" />
                  <circle cx="380" cy="30" r="4" fill="#FFBA45" stroke="#0E1153" strokeWidth="2" />
                  <circle cx="500" cy="12" r="5" fill="#005F4C" stroke="#FFFFFF" strokeWidth="2" />
                </svg>

                <div className="flex justify-between text-[10px] font-mono text-[#3E4945]/70 pt-2 border-t border-[#0E1153]/10">
                  <span>MONTH 01: AUDIT &amp; TAXONOMY</span>
                  <span>MONTH 04: CORE CWV DEPLOYMENT</span>
                  <span>MONTH 08: TOPICAL CLUSTERS</span>
                  <span>MONTH 12: HIGH-INTENT #1 SERPS</span>
                </div>
              </div>
            </div>

            {/* Bottom Progress Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-3 bg-[#EDE8DC] border border-[#0E1153] rounded-lg text-xs font-mono font-bold text-[#0E1153]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#005F4C]" />
                <span>INDEXED PAGES MONITORED: 100% COVERAGE</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-32 h-2 bg-[#0E1153]/15 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-[#005F4C]" />
                </div>
                <span>100% HEALTH</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Strip */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 text-left">
          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#FFBA45] border border-[#0E1153]" />
            <span className="font-mono text-xs font-bold text-[#0E1153] uppercase tracking-wide">
              ZERO BLACK-HAT PENALTIES
            </span>
          </div>

          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#005F4C] border border-[#0E1153]" />
            <span className="font-mono text-xs font-bold text-[#0E1153] uppercase tracking-wide">
              SEMANTIC JSON-LD SCHEMA
            </span>
          </div>

          <div className="p-4 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#C8553D] border border-[#0E1153]" />
            <span className="font-mono text-xs font-bold text-[#0E1153] uppercase tracking-wide">
              SUB-SECOND CWV SPEED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
