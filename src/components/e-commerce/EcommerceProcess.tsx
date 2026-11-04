import React from "react";

interface ProcessStep {
  number: string;
  stage: string;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  textColor: string;
  descColor: string;
  badgeBg: string;
  numColor: string;
  stageColor: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    stage: "STAGE 1: DISCOVERY",
    title: "Research",
    description: "Auditing audience dynamics, competitors, unit economics, and tech dependencies.",
    icon: "🔍",
    bgColor: "bg-[#FFFFFF]",
    textColor: "text-[#0E1153]",
    descColor: "text-[#3E4945]",
    badgeBg: "bg-[#EDE8DC]",
    numColor: "text-[#0E1153]",
    stageColor: "text-[#005F4C]",
  },
  {
    number: "02",
    stage: "STAGE 2: WIREFRAMING",
    title: "Concept",
    description: "Wireframing customer journeys, information architecture, and micro-conversion funnels.",
    icon: "📐",
    bgColor: "bg-[#CFE8DC]",
    textColor: "text-[#0E1153]",
    descColor: "text-[#3E4945]",
    badgeBg: "bg-[#FFFFFF]",
    numColor: "text-[#0E1153]",
    stageColor: "text-[#005F4C]",
  },
  {
    number: "03",
    stage: "STAGE 3: CREATION",
    title: "Design",
    description: "High-fidelity UI creation, branded design system components, and interactive mockups.",
    icon: "🎨",
    bgColor: "bg-[#F5A800]",
    textColor: "text-[#0E1153]",
    descColor: "text-[#0E1153]/85",
    badgeBg: "bg-[#FFFFFF]",
    numColor: "text-[#0E1153]",
    stageColor: "text-[#0E1153]",
  },
  {
    number: "04",
    stage: "STAGE 4: OPTIMIZATION",
    title: "Refine",
    description: "Comprehensive QA testing, payment load tests, device matrix checks, and launch handoff.",
    icon: "⚙️",
    bgColor: "bg-[#FFFFFF]",
    textColor: "text-[#0E1153]",
    descColor: "text-[#3E4945]",
    badgeBg: "bg-[#EDE8DC]",
    numColor: "text-[#0E1153]",
    stageColor: "text-[#005F4C]",
  },
];

export default function EcommerceProcess() {
  return (
    <section className="w-full py-24 px-4 sm:px-12 bg-[#E9ECFA] text-[#0E1153] border-t-2 border-[#0E1153] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-[#005F4C]" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#005F4C]">
              OUR PROCESS
            </span>
          </div>

          <div className="flex flex-wrap items-baseline gap-3 mb-3">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-[46px] text-[#0E1153] tracking-tight">
              Our 4-Step Graphic Design Process
            </h2>
            <span className="text-sm font-serif italic text-slate-text">
              (Our 4-Step E-Commerce Process)
            </span>
            <span className="text-xl text-[#3B82F6] font-bold">✛</span>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#3E4945] max-w-xl leading-relaxed">
            We bring ideas to life through a creative process that blends strategy, design, and refinement.
          </p>
        </div>

        {/* 4 Process Cards Row with Connecting Dashed Line */}
        <div className="relative">
          {/* Dashed Connecting Line running horizontally behind cards */}
          <div 
            className="hidden lg:block absolute top-[45%] left-8 right-8 border-t-2 border-dashed border-[#0E1153]/30 z-0 pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((st) => (
              <div
                key={st.number}
                className={`p-6 rounded-2xl border-2 border-[#0E1153] shadow-[6px_6px_0px_#0E1153] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#0E1153] transition-all flex flex-col justify-between min-h-[290px] ${st.bgColor}`}
              >
                <div>
                  {/* Top Bar: Large Number 01 + Badge Icon Box */}
                  <div className="flex justify-between items-center mb-6">
                    <span className={`font-heading text-4xl font-bold ${st.numColor}`}>
                      {st.number}
                    </span>
                    <div className={`w-9 h-9 rounded-xl border border-[#0E1153]/30 flex items-center justify-center text-sm ${st.badgeBg}`}>
                      <span>{st.icon}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-heading text-2xl font-bold mb-3 leading-snug ${st.textColor}`}>
                    {st.title}
                  </h3>

                  {/* Description */}
                  <p className={`font-sans text-xs leading-relaxed ${st.descColor}`}>
                    {st.description}
                  </p>
                </div>

                {/* Bottom Stage Pill */}
                <div className="mt-8 pt-4 border-t border-[#0E1153]/15 flex items-center justify-between text-[10px] font-mono font-bold">
                  <span className={st.stageColor}>{st.stage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
