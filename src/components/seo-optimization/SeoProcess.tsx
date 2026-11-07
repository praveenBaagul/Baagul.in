import React from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  phaseLabel: string;
  phaseColor: string;
  numberColor: string;
  isHighlighted?: boolean;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Audit & Baseline",
    description:
      "Full technical crawl, site architecture mapping, indexing diagnostics, and historical penalty identification.",
    phaseLabel: "PHASE 01 • DIAGNOSTIC",
    phaseColor: "text-[#005F4C]",
    numberColor: "text-[#BDD1C5]",
  },
  {
    number: "02",
    title: "Keyword Clusters",
    description:
      "Topic modeling, buyer journey intent mapping, and high-conversion SERP opportunity scoring.",
    phaseLabel: "PHASE 02 • TARGETING",
    phaseColor: "text-[#8C6D1F]",
    numberColor: "text-[#BDD1C5]",
  },
  {
    number: "03",
    title: "On-Page SEO",
    description:
      "Code cleanup, schema markup injection, meta tag engineering, and Core Web Vitals optimization.",
    phaseLabel: "PHASE 03 • CODE HARDENING",
    phaseColor: "text-[#005F4C]",
    numberColor: "text-[#BDD1C5]",
  },
  {
    number: "04",
    title: "Link Building",
    description:
      "High-authority guest posts, digital PR mentions, outreach acquisition, and continuous index growth.",
    phaseLabel: "PHASE 04 • ASCENSION PEAK",
    phaseColor: "text-[#0E1153]",
    numberColor: "text-[#0E1153]",
    isHighlighted: true,
  },
];

export default function SeoProcess() {
  return (
    <section id="process" className="relative w-full py-20 lg:py-28 px-4 sm:px-8 lg:px-12 bg-[#E1E4FC] text-[#0E1153] border-b-2 border-[#0E1153] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-[#0E1153]" />
            <span className="font-mono font-bold text-xs uppercase tracking-widest text-[#0E1153]">
              OUR PROCESS
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#0E1153] tracking-tight leading-tight mb-4">
            Our 4-Step SEO Optimization Process
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#3E4945] max-w-2xl mx-auto leading-relaxed">
            We optimize your website with a proven SEO strategy that improves visibility, traffic, and rankings.
          </p>
        </div>

        {/* 4 Cards Staircase Row */}
        <div className="relative">
          {/* Horizontal connecting dashed line behind cards */}
          <div className="absolute top-1/2 left-4 right-4 border-t-2 border-dashed border-[#0E1153]/30 hidden lg:block -translate-y-4 pointer-events-none z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative z-10">
            {steps.map((step, idx) => {
              // Staircase progression vertical translation on desktop
              const staggerClass =
                idx === 0
                  ? "lg:translate-y-12"
                  : idx === 1
                  ? "lg:translate-y-6"
                  : idx === 2
                  ? "lg:translate-y-0"
                  : "lg:-translate-y-6";

              if (step.isHighlighted) {
                return (
                  <div
                    key={step.number}
                    className={`p-6 sm:p-7 bg-[#FBB936] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between transition-all duration-200 hover:-translate-y-2 hover:shadow-[8px_8px_0px_#0E1153] cursor-pointer min-h-[340px] ${staggerClass}`}
                  >
                    <div>
                      {/* Top Row: Icon + Number */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-9 h-9 rounded-lg bg-[#FFFFFF] border-2 border-[#0E1153] flex items-center justify-center shadow-sm">
                          {/* Rocket Icon */}
                          <svg
                            className="w-4 h-4 text-[#0E1153]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                          </svg>
                        </div>
                        <span className={`font-heading text-5xl font-black ${step.numberColor}`}>
                          {step.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-xl sm:text-2xl font-bold mb-3 leading-snug text-[#0E1153]">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-xs sm:text-sm text-[#0E1153]/90 leading-relaxed mb-6">
                        {step.description}
                      </p>
                    </div>

                    {/* Footer Phase Tag */}
                    <div className="pt-3 border-t border-dashed border-[#0E1153]/25 font-mono text-[11px] font-bold uppercase tracking-wider text-[#0E1153]">
                      {step.phaseLabel}
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={step.number}
                  className={`p-6 sm:p-7 bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between transition-all duration-200 hover:-translate-y-2 hover:shadow-[8px_8px_0px_#0E1153] cursor-pointer min-h-[340px] ${staggerClass}`}
                >
                  <div>
                    {/* Top Row: Icon + Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-9 h-9 rounded-lg bg-[#FFFFFF] border-2 border-[#0E1153] flex items-center justify-center shadow-sm">
                        {idx === 0 && (
                          /* Microscope Icon */
                          <svg
                            className="w-4 h-4 text-[#005F4C]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M6 18h8" />
                            <path d="M3 22h18" />
                            <path d="m14 22 3-3" />
                            <circle cx="12" cy="6" r="2" />
                            <path d="m18 13-1.5-7.5L12 6" />
                            <path d="M9 13a4.5 4.5 0 0 0 3 4.24V22" />
                            <path d="M7 13h5" />
                          </svg>
                        )}
                        {idx === 1 && (
                          /* Keyword Search / Magnifying Glass Icon */
                          <svg
                            className="w-4 h-4 text-[#8C6D1F]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <circle cx="11" cy="11" r="7" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          </svg>
                        )}
                        {idx === 2 && (
                          /* On-Page Code Window Icon */
                          <svg
                            className="w-4 h-4 text-[#005F4C]"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                            <path d="m7 8 2 2-2 2" />
                            <line x1="11" y1="12" x2="15" y2="12" />
                          </svg>
                        )}
                      </div>
                      <span className={`font-heading text-5xl font-bold ${step.numberColor}`}>
                        {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl sm:text-2xl font-bold mb-3 leading-snug text-[#0E1153]">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Footer Phase Tag */}
                  <div className={`pt-3 border-t border-dashed border-[#0E1153]/25 font-mono text-[11px] font-bold uppercase tracking-wider ${step.phaseColor}`}>
                    {step.phaseLabel}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

