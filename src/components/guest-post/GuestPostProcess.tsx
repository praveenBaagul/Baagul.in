import React from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  footerLeft: string;
  footerRight: string;
  isHighlighted?: boolean;
  icon: React.ReactNode;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Topic Research",
    description:
      "Identifying high-impact search queries and editorial angles matched with host publisher audiences.",
    footerLeft: "GAP ANALYSIS",
    footerRight: "PHASE I",
    icon: (
      <svg
        className="w-6 h-6 text-[#005F4C]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.5" y2="16.5" />
        <path d="M8 11l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Content Creation",
    description:
      "Drafting authoritative 1,200+ word copy with contextual anchor text, proprietary assets, and references.",
    footerLeft: "EDITORIAL QUALITY",
    footerRight: "PHASE II",
    icon: (
      <svg
        className="w-6 h-6 text-[#005F4C]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 18h8" />
        <path d="M3 22h18" />
        <path d="M14 22a7 7 0 1 0 0-14h-1" />
        <path d="M9 14h2" />
        <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2z" />
        <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Outreach & Placement",
    description:
      "Pitching vetted webmasters with genuine domain authority to secure confirmed editorial publication spots.",
    footerLeft: "RELATIONSHIP FIRST",
    footerRight: "PHASE III",
    icon: (
      <svg
        className="w-6 h-6 text-[#005F4C]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Review & Publishing",
    description:
      "Live link verification, indexing tracking, and transparent reporting with permanent follow guarantees.",
    footerLeft: "LIVE INDEX",
    footerRight: "FINAL",
    isHighlighted: true,
    icon: (
      <div className="w-7 h-7 rounded-md bg-[#0E1153] flex items-center justify-center text-[#FEF9ED] font-bold text-sm shadow-[1px_1px_0px_#0E1153]">
        ✓
      </div>
    ),
  },
];

export default function GuestPostProcess() {
  return (
    <section
      id="process"
      className="w-full py-20 lg:py-24 px-6 sm:px-12 lg:px-16 bg-[#1A1F5E] text-[#FEF9ED] border-b-2 border-[#0E1153] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Top-Left Decorative 2x3 Grid */}
        <div
          className="hidden sm:grid grid-cols-3 gap-1.5 w-12 h-8 absolute -top-10 left-0 opacity-80 pointer-events-none"
          aria-hidden="true"
        >
          <span className="w-3.5 h-3.5 rounded-[3px] bg-[#FFA800]" />
          <span className="w-3.5 h-3.5 rounded-[3px] bg-[#0E1153]" />
          <span className="w-3.5 h-3.5 rounded-[3px] bg-[#4E8D7C]" />
          <span className="w-3.5 h-3.5 rounded-[3px] bg-[#005F4C]" />
          <span className="w-3.5 h-3.5 rounded-[3px] bg-[#FFA800]" />
          <span className="w-3.5 h-3.5 rounded-[3px] bg-[#2E6F68]" />
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          {/* Centered Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded bg-[#0E1153] border border-[#FEF9ED]/25 mb-4 text-[11px] font-mono font-bold uppercase tracking-widest text-[#FEF9ED] shadow-[2px_2px_0px_#FFA800]">
            <span className="w-2 h-2 bg-[#FFA800] rounded-[1px]" />
            <span>OUR PROCESS</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[52px] text-[#FEF9ED] font-bold leading-tight mb-4">
            Our 4-Step Guest Post Process
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#FEF9ED]/80 max-w-xl mx-auto leading-relaxed">
            We follow a strategic approach to create and publish high-quality guest posts that boost your brand visibility and SEO.
          </p>
        </div>

        {/* 4 Process Cards with Horizontal Connectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative">
          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;

            if (step.isHighlighted) {
              return (
                <div key={step.number} className="relative flex flex-col">
                  <div className="p-6 sm:p-7 bg-[#FFA800] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#CFE8DC] flex flex-col justify-between h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#CFE8DC]">
                    <div>
                      {/* Top Row: Icon & Large Number */}
                      <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#0E1153]/25">
                        <div className="flex items-center">{step.icon}</div>
                        <span className="font-heading text-4xl sm:text-[44px] font-black text-[#0E1153] leading-none">
                          {step.number}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-heading text-xl sm:text-[22px] font-bold text-[#0E1153] leading-snug mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-xs sm:text-[13px] text-[#0E1153]/90 leading-relaxed mb-6">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Row */}
                    <div className="pt-3.5 flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-wider text-[#0E1153]">
                      <span>{step.footerLeft}</span>
                      <span className="px-2.5 py-0.5 rounded bg-[#0E1153] text-[#FEF9ED] font-mono text-[10px] font-bold uppercase tracking-wider shadow-[1px_1px_0px_#0E1153]">
                        {step.footerRight}
                      </span>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div key={step.number} className="relative flex flex-col">
                <div className="p-6 sm:p-7 bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#FFA800] flex flex-col justify-between h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0px_#FFA800]">
                  <div>
                    {/* Top Row: Icon & Large Number */}
                    <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#0E1153]/15">
                      <div className="flex items-center">{step.icon}</div>
                      <span className="font-heading text-4xl sm:text-[44px] font-black text-[#0E1153] leading-none">
                        {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-xl sm:text-[22px] font-bold text-[#0E1153] leading-snug mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-xs sm:text-[13px] text-[#3E4945] leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Row */}
                  <div className="pt-3.5 flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-wider">
                    <span className="text-[#005F4C]">{step.footerLeft}</span>
                    <span className="text-[#3E4945]">{step.footerRight}</span>
                  </div>
                </div>

                {/* Connecting Pill Link between adjacent cards (Desktop) */}
                {!isLast && (
                  <div
                    className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none"
                    aria-hidden="true"
                  >
                    <div className="w-7 h-4 rounded-full bg-[#0E1153] border-2 border-[#FFA800] flex items-center justify-center shadow-[1px_1px_0px_#FFA800]">
                      <div className="w-2 h-1 rounded-full bg-[#FFA800]" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
