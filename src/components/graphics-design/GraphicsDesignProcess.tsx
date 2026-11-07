import React from "react";

interface Step {
  num: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Brief & Research",
    desc: "Define goals, study the audience, and gather the right insights.",
  },
  {
    num: "02",
    title: "Concept & Ideation",
    desc: "Explore ideas, sketch directions, and shape the visual approach.",
  },
  {
    num: "03",
    title: "Design & Development",
    desc: "Build layouts, refine details, and create the final visual system.",
  },
  {
    num: "04",
    title: "Review & Delivery",
    desc: "Present the work, finalize assets, and deliver polished results.",
  },
];

export default function GraphicsDesignProcess() {
  return (
    <section id="process" className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#005F4C] text-[#FEF9ED] border-b-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-[#FFA800]">
              <span className="w-2.5 h-2.5 bg-[#FFA800]" />
              <span>PRODUCTION PIPELINE</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-[#FEF9ED] leading-tight">
              Our 4-Step Graphic Design Process
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#FEF9ED]/80 max-w-sm leading-relaxed">
            From preliminary brief to final production assets: an iterative, client-centered design workflow.
          </p>
        </div>

        {/* Stepper Timeline Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="p-6 bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between min-h-[160px] relative"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 rounded-lg bg-[#FFA800] text-[#0E1153] border border-[#0E1153] font-mono font-bold text-xs flex items-center justify-center">
                  {step.num}
                </span>
                <span className="text-[10px] font-mono text-[#3E4945] font-bold uppercase">
                  STEP 0{idx + 1}
                </span>
              </div>

              <div className="mb-4">
                <h3 className="font-heading text-xl font-bold leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-[#3E4945] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#0E1153]/15 flex items-center justify-between text-[10px] font-mono font-bold text-[#005F4C]">
                <span>STATUS: READY</span>
                <span>✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

