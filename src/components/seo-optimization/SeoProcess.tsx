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
    title: "Audit & Baseline",
    description: "Deep crawl diagnosis, indexing audit, Core Web Vitals profiling, and competitor SERP gap extraction.",
  },
  {
    number: "02",
    title: "Keyword & Taxonomy",
    description: "High-commercial intent mapping, URL taxonomy architecture, and entity schema graph definition.",
  },
  {
    number: "03",
    title: "On-Page & CWV",
    description: "Sub-second LCP optimization, semantic schema markup injection, and conversion-focused content refinement.",
  },
  {
    number: "04",
    title: "Link Building & Scaling",
    description: "High-authority editorial backlinks, programmatic keyword expansion, and continuous ranking telemetry defense.",
    isHighlighted: true,
  },
];

export default function SeoProcess() {
  return (
    <section id="process" className="w-full py-24 px-4 sm:px-8 lg:px-12 bg-[#E9ECFA] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#0E1153]/20 mb-4 text-xs font-mono font-bold uppercase tracking-widest text-[#0E1153]">
            <span className="w-2 h-2 rounded-full bg-[#005F4C]" />
            <span>EXECUTION PLAYBOOK</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#0E1153] leading-tight mb-4">
            Our 4-Step SEO Optimization Process
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#3E4945] leading-relaxed">
            From technical discovery to compounding revenue results: a scientific, reproducible search engineering methodology.
          </p>
        </div>

        {/* 4 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {steps.map((step) => {
            if (step.isHighlighted) {
              return (
                <div
                  key={step.number}
                  className="p-8 bg-[#FFBA45] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] flex flex-col justify-between relative transform lg:-translate-y-2 transition-transform"
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <span className="w-10 h-10 rounded-xl bg-[#FFFFFF] border border-[#0E1153] flex items-center justify-center font-bold text-lg">
                        🚀
                      </span>
                      <span className="font-heading text-5xl font-black text-[#0E1153]">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl font-bold mb-3 leading-snug">
                      {step.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-[#0E1153]/90 leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#0E1153]/20 font-mono text-[11px] font-bold uppercase">
                    STAGE 04: SCALE &amp; DOMINATE
                  </div>
                </div>
              );
            }

            return (
              <div
                key={step.number}
                className="p-8 bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between transition-transform hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="w-10 h-10 rounded-xl bg-[#EDE8DC] border border-[#0E1153]/30 flex items-center justify-center font-mono font-bold text-xs text-[#005F4C]">
                      P-0{step.number}
                    </span>
                    <span className="font-heading text-4xl font-bold text-[#0E1153]/30">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0E1153]/15 font-mono text-[11px] font-bold text-[#005F4C] uppercase">
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
