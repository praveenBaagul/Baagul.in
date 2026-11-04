import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function WebDesignWorks() {
  return (
    <section id="works" className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#FAF8F5] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-[#005F4C]">
              <span className="w-2.5 h-2.5 bg-[#FFA800]" />
              <span>PORTFOLIO &amp; SHOWCASE</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-[#0E1153]">
              Some of Our Works
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#3E4945] max-w-sm leading-relaxed">
            Real client deployments engineered with Next.js, passing Core Web Vitals with zero code bloat.
          </p>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Large Left Project (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#0E1153]/15">
              <span className="px-2.5 py-0.5 rounded bg-[#FFA800] text-[#0E1153] text-[10px] font-mono font-bold uppercase border border-[#0E1153]">
                FLAGSHIP PORTAL
              </span>
              <span className="text-xs font-mono font-bold text-[#005F4C]">
                NEXT.JS + TAILWIND
              </span>
            </div>

            <div className="w-full aspect-[16/10] bg-[#FAF8F5] border-2 border-[#0E1153] rounded-xl overflow-hidden relative mb-6 shadow-[3px_3px_0px_#0E1153]">
              <Image
                src="/assets/69bac.png"
                alt="Baagul Growth Architecture Project"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0E1153] mb-2">
                Baagul Growth Architecture
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed mb-6">
                Comprehensive digital agency platform engineered with Next.js, dynamic service routing, and sub-second page rendering.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-xs border border-[#0E1153] shadow-[2px_2px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <span>View Case Study</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Column Stacked Projects (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 1 */}
            <div className="p-6 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153]">
              <span className="px-2 py-0.5 rounded bg-[#CFE8DC] text-[#005F4C] text-[10px] font-mono font-bold uppercase border border-[#0E1153] mb-3 inline-block">
                TRAVEL DIRECTORY
              </span>
              <h4 className="font-heading text-xl font-bold text-[#0E1153] mb-2">
                Regional Aggregate Portal
              </h4>
              <p className="font-sans text-xs text-[#3E4945] leading-relaxed mb-4">
                Hyper-local tourism and booking portal featuring dynamic search filtering and responsive map matrices.
              </p>
              <div className="pt-3 border-t border-[#0E1153]/15 text-xs font-mono font-bold text-[#005F4C]">
                PAGESPEED: 99/100 →
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153]">
              <span className="px-2 py-0.5 rounded bg-[#E1E3F7] text-[#0E1153] text-[10px] font-mono font-bold uppercase border border-[#0E1153] mb-3 inline-block">
                CORPORATE COUNSEL
              </span>
              <h4 className="font-heading text-xl font-bold text-[#0E1153] mb-2">
                High-Authority Legal Counsel
              </h4>
              <p className="font-sans text-xs text-[#3E4945] leading-relaxed mb-4">
                Enterprise legal portal with multi-location attorney profiles, secure appointment scheduling, and WCAG accessibility compliance.
              </p>
              <div className="pt-3 border-t border-[#0E1153]/15 text-xs font-mono font-bold text-[#005F4C]">
                ACCESSIBILITY: AAA →
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

