import React from "react";

interface Step {
  num: string;
  title: string;
  desc: string;
  isFinal?: boolean;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Consultation",
    desc: "We discuss your brand values, target audience, budget, and campaign goals to define the best promotion strategy.",
  },
  {
    num: "02",
    title: "Content Development",
    desc: "We formulate campaign concepts, creator partnerships, video scripts, and custom trackable offer links.",
  },
  {
    num: "03",
    title: "Production",
    desc: "Creators record, edit, and produce high-resolution assets aligning with your brand tone and regulatory guidelines.",
  },
  {
    num: "04",
    title: "Promotion & Distribution",
    desc: "Scheduled rollout across targeted channels with algorithmic boost budgets to maximize early momentum.",
  },
  {
    num: "05",
    title: "Review & Feedback",
    desc: "In-depth analytics review assessing impressions, click-through rates, ROAS, and customer sentiment for ongoing scaling.",
    isFinal: true,
  },
];

export default function PaidPromotionProcess() {
  return (
    <section id="process" className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#FEF9ED] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-[#005F4C]">
              <span className="w-2.5 h-2.5 bg-[#FFA800]" />
              <span>EXECUTION ROADMAP</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#0E1153]">
              Our Process
            </h2>
          </div>

          {/* Quad color motif */}
          <div className="grid grid-cols-2 gap-1 w-6 h-6">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#005F4C]" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#FFA800]" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#0E1153]" />
            <span className="w-2.5 h-2.5 rounded-sm bg-[#E1E3F7]" />
          </div>
        </div>

        {/* 5-Card Connected Horizontal Container */}
        <div className="p-6 bg-[#0E1153] border-2 border-[#0E1153] rounded-3xl shadow-[8px_8px_0px_#FFA800] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step) => {
            if (step.isFinal) {
              return (
                <div
                  key={step.num}
                  className="p-5 bg-[#FFA800] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl flex flex-col justify-between min-h-[280px] shadow-[4px_4px_0px_#FFFFFF]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-7 h-7 rounded-lg bg-[#0E1153] text-[#FEF9ED] flex items-center justify-center font-bold text-xs">
                        ★
                      </span>
                      <span className="font-mono text-[10px] font-bold uppercase">
                        STEP 0{step.num}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold mb-3 leading-snug">
                      {step.title}
                    </h3>

                    <p className="font-sans text-xs text-[#0E1153]/90 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#0E1153]/20 font-mono text-[10px] font-bold uppercase flex justify-between">
                    <span>STAGE COMPLETE</span>
                    <span>✓</span>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={step.num}
                className="p-5 bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl flex flex-col justify-between min-h-[280px] shadow-[3px_3px_0px_#0E1153]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-7 h-7 rounded-lg bg-[#CFE8DC] text-[#005F4C] border border-[#0E1153] flex items-center justify-center font-mono font-bold text-xs">
                      {step.num}
                    </span>
                    <span className="font-mono text-[10px] font-bold text-[#3E4945] uppercase">
                      PHASE 0{step.num}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="font-sans text-xs text-[#3E4945] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#0E1153]/15 font-mono text-[10px] font-bold text-[#005F4C] uppercase flex justify-between">
                  <span>SYSTEM READY</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

