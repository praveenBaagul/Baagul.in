import React from "react";

interface StepItem {
  number: string;
  title: string;
  description: string;
  badge: string;
  offsetClass: string;
}

const steps: StepItem[] = [
  {
    number: "01",
    title: "Discovery & Blueprint",
    description: "We map user journeys, define API contracts, select the optimal platform architecture, and prototype edge-case scenarios.",
    badge: "PHASE 01 // SCOPE",
    offsetClass: "lg:translate-y-0",
  },
  {
    number: "02",
    title: "Native UI/UX Prototyping",
    description: "High-fidelity Figma design systems built to Apple Human Interface Guidelines and Google Material You specifications with fluid interactions.",
    badge: "PHASE 02 // DESIGN",
    offsetClass: "lg:translate-y-6",
  },
  {
    number: "03",
    title: "Agile Engineering & QA",
    description: "Bi-weekly sprint builds delivered via TestFlight. Exhaustive unit testing, memory profiling, and edge-to-edge device compatibility checks.",
    badge: "PHASE 03 // BUILD",
    offsetClass: "lg:translate-y-0",
  },
  {
    number: "04",
    title: "Store Launch & Scale",
    description: "App Store and Google Play compliance review, submission handling, production launch, telemetry setup, and live bug monitoring.",
    badge: "PHASE 04 // RELEASE",
    offsetClass: "lg:translate-y-6",
  },
];

export default function AppDevelopmentProcess() {
  return (
    <section className="relative w-full bg-[#0E7A63] text-[#FEF9ED] border-b-2 border-[#0E1153] py-24 px-4 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0E1153] border border-[#FEF9ED]/30 rounded shadow-[2px_2px_0px_#FFBA45] mb-4">
            <span className="w-2 h-2 bg-[#FFBA45] rounded-full" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#FEF9ED]">
              ■ OUR PROCESS
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] text-[#FEF9ED] mb-4">
            Our 4-Step Mobile App
            <br />
            <span className="font-serif italic font-normal text-[#FFBA45]">
              Lifecycle
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#FEF9ED]/85 leading-relaxed max-w-xl mx-auto">
            A transparent, milestone-driven engineering methodology taking your product from napkin sketch to verified app store deployment.
          </p>
        </div>

        {/* 4 Cards Connected by Horizontal Guideline */}
        <div className="relative">
          {/* Desktop Horizontal Guideline */}
          <div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#0E1153]/30 -translate-y-1/2 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`bg-[#FEF9ED] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl p-6 sm:p-7 shadow-[6px_6px_0px_#0E1153] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#0E1153] transition-all flex flex-col justify-between ${step.offsetClass}`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#0E1153]/20">
                    <span className="font-mono text-xs font-bold text-[#0E7A63] uppercase tracking-wider">
                      {step.badge}
                    </span>
                    <span className="font-heading text-2xl font-bold text-[#0E1153]/40">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0E1153] mb-3">
                    {step.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#121A4A]/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#0E1153]/15 flex items-center justify-between font-mono text-[10px] text-[#0E1153]/70 font-bold uppercase">
                  <span>MILESTONE VERIFIED</span>
                  <span className="w-2 h-2 rounded-full bg-[#0E7A63]" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

