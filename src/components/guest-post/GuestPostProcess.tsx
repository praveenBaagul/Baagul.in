import React from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Topic & Research",
    description: "Identifying niche-relevant opportunities and high-authority target websites with verified organic search traffic.",
  },
  {
    number: "02",
    title: "Content Creation",
    description: "Crafting search-first, high-value editorial articles that match publisher editorial guidelines and brand tone.",
  },
  {
    number: "03",
    title: "Outreach & Placement",
    description: "Direct outreach to editors and webmasters, negotiating natural anchor text placement and permanent do-follow links.",
  },
  {
    number: "04",
    title: "Review & Publishing",
    description: "Live URL verification, indexation checks, and post-publish performance monitoring in our telemetry suite.",
    isHighlighted: true,
  },
];

export default function GuestPostProcess() {
  return (
    <section id="process" className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#1A1F5E] text-[#FEF9ED] border-b-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E1153] border border-[#FEF9ED]/20 mb-4 text-xs font-mono font-bold uppercase tracking-widest text-[#FFA800]">
            <span>OUTREACH FRAMEWORK</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#FEF9ED] leading-tight mb-4">
            Our 4-Step Guest Post Process
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#FEF9ED]/75 leading-relaxed">
            From discovering authoritative websites to secured editorial live links: a transparent, predictable outreach methodology.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {steps.map((step) => {
            if (step.isHighlighted) {
              return (
                <div
                  key={step.number}
                  className="p-6 bg-[#FFA800] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="w-8 h-8 rounded-lg bg-[#FFFFFF] border border-[#0E1153] flex items-center justify-center font-bold text-xs">
                        🚀
                      </span>
                      <span className="font-heading text-4xl font-black text-[#0E1153]">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold mb-3 leading-snug">
                      {step.title}
                    </h3>

                    <p className="font-sans text-xs text-[#0E1153]/90 leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#0E1153]/20 font-mono text-[10px] font-bold uppercase">
                    STAGE 04: SCALE &amp; DOMINATE
                  </div>
                </div>
              );
            }

            return (
              <div
                key={step.number}
                className="p-6 bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="w-8 h-8 rounded-lg bg-[#CFE8DC] border border-[#0E1153] flex items-center justify-center font-mono font-bold text-xs text-[#005F4C]">
                      GP-{step.number}
                    </span>
                    <span className="font-heading text-3xl font-bold text-[#0E1153]/30">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="font-sans text-xs text-[#3E4945] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#0E1153]/15 font-mono text-[10px] font-bold text-[#005F4C] uppercase">
                  DELIVERABLE COMPLETED
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
