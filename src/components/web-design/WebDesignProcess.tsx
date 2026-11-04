import React from "react";

interface Step {
  title: string;
  desc: string;
  tag: string;
}

const steps: Step[] = [
  {
    title: "DEFINE",
    desc: "Business model discovery, competitive analysis, information architecture, and technical scope formulation.",
    tag: "PHASE 01",
  },
  {
    title: "DESIGN",
    desc: "High-fidelity Figma wireframes, distinctive design tokens, interactive prototypes, and typography validation.",
    tag: "PHASE 02",
  },
  {
    title: "DEVELOP",
    desc: "Clean Next.js & React architecture, semantic Tailwind CSS styling, responsive layout checks, and API wiring.",
    tag: "PHASE 03",
  },
  {
    title: "TEST",
    desc: "Rigorous Core Web Vitals profiling, sub-second LCP optimization, accessibility checks, and production launch.",
    tag: "PHASE 04",
  },
];

export default function WebDesignProcess() {
  return (
    <section id="process" className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#1A1F5E] text-[#FEF9ED] border-b-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-[#FFA800]">
              <span className="w-2.5 h-2.5 bg-[#FFA800]" />
              <span>ENGINEERING PROTOCOL</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-[#FEF9ED] leading-tight">
              Our 4-Step Website Development Process
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#FEF9ED]/80 max-w-sm leading-relaxed">
            From initial strategy to high-performance launch: a proven, structured methodology for robust web delivery.
          </p>
        </div>

        {/* Process Flow Cards */}
        <div className="flex flex-col gap-4">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="p-6 bg-[#0E1153] border-2 border-[#FEF9ED]/20 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[4px_4px_0px_#FFA800] transition-transform hover:-translate-x-1"
            >
              <div className="flex items-center gap-4">
                <span className="w-3 h-3 rounded-full bg-[#FFA800]" />
                <h3 className="font-heading text-3xl font-black tracking-wide text-[#FEF9ED]">
                  • {step.title}
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-sm text-[#FEF9ED]/80 max-w-lg leading-relaxed">
                {step.desc}
              </p>

              <span className="px-3 py-1 rounded bg-[#1A1F5E] border border-[#FEF9ED]/30 text-[10px] font-mono font-bold text-[#FFA800]">
                {step.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

