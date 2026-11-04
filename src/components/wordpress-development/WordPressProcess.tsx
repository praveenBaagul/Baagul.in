import React from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description: "Detailed requirement gathering, architecture roadmap, technical stack selection, and plugin audit.",
  },
  {
    number: "02",
    title: "Design",
    description: "High-fidelity Figma wireframes, typography tokens, custom component systems, and responsive design layouts.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Clean semantic theme coding, native Gutenberg blocks, custom post types, and speed optimization.",
  },
  {
    number: "04",
    title: "Test",
    description: "Core Web Vitals validation, cross-browser compatibility checks, security hardening, and live deployment.",
  },
];

export default function WordPressProcess() {
  return (
    <section id="process" className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#005F4C] text-[#FEF9ED] border-b-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E1153] border border-[#FEF9ED]/20 mb-4 text-xs font-mono font-bold uppercase tracking-widest text-[#FFA800]">
            <span>ENGINEERING WORKFLOW</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#FEF9ED] leading-tight mb-4">
            Our 4-Step Website Development Process
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#FEF9ED]/75 leading-relaxed">
            From initial strategy to high-performance launch: a proven, structured methodology for robust web delivery.
          </p>
        </div>

        {/* 4 Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-6 bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between transition-transform hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-8 h-8 rounded-lg bg-[#FFA800] border border-[#0E1153] flex items-center justify-center font-mono font-bold text-xs text-[#0E1153]">
                    {step.number}
                  </span>
                  <span className="font-heading text-3xl font-bold text-[#0E1153]/30">
                    STAGE
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-bold mb-3 leading-snug">
                  {step.title}
                </h3>

                <p className="font-sans text-xs text-[#3E4945] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#0E1153]/15 font-mono text-[10px] font-bold text-[#005F4C] uppercase">
                PHASE 0{step.number} // COMPLETE
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

