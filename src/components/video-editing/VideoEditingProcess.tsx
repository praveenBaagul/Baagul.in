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
    title: "Brief & Footage",
    description: "We understand your goals, audience, platform, and style references, then collect your raw footage and brand assets.",
    badge: "PROJECT BRIEF",
    offsetClass: "lg:translate-y-0",
  },
  {
    number: "02",
    title: "Rough Cut",
    description: "We select the best takes, build the story structure, set the pacing, and lay down music for a first assembly.",
    badge: "STORY ASSEMBLY",
    offsetClass: "lg:translate-y-6",
  },
  {
    number: "03",
    title: "Polish",
    description: "Motion graphics, color grading, sound design, transitions, and subtitles are added to give the video a finished look.",
    badge: "POST-PRODUCTION",
    offsetClass: "lg:translate-y-0",
  },
  {
    number: "04",
    title: "Review & Delivery",
    description: "You review and request revisions, then we export final files in every format and aspect ratio you need.",
    badge: "FINAL EXPORT",
    offsetClass: "lg:translate-y-6",
  },
];

export default function VideoEditingProcess() {
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
            Our 4-Step Video Editing
            <br />
            <span className="font-serif italic font-normal text-[#FFBA45]">
              Process
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#FEF9ED]/85 leading-relaxed max-w-xl mx-auto">
            A clear, collaborative workflow that takes your raw footage to a polished, platform-ready video.
          </p>
        </div>

        {/* 4 Cards Connected by Horizontal Guideline */}
        <div className="relative">
          
          {/* Horizontal Dashed Connecting Line on Desktop */}
          <div
            className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 border-t-2 border-dashed border-[#FEF9ED]/40 -translate-y-6 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`bg-[#FEF9ED] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl p-6 shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 ${step.offsetClass}`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#0E1153]/15">
                    <span className="font-heading text-3xl font-bold text-[#0E7A63]">
                      {step.number}
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-[#E1E3F7] border border-[#0E1153] flex items-center justify-center font-mono text-xs font-bold text-[#0E1153]">
                      ✦
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl font-bold text-[#0E1153] mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-[#0E1153]/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Footer Badge */}
                <div className="pt-4 mt-6 border-t border-[#0E1153]/10 flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-[#FFBA45] border border-[#0E1153] rounded text-[9px] font-mono font-bold text-[#0E1153] uppercase tracking-wider">
                    {step.badge}
                  </span>
                  <span className="font-mono text-[10px] text-[#0E1153]/50">
                    STAGE // 2026
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-16 pt-8 border-t border-[#FEF9ED]/20 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#FEF9ED]/70 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#FFBA45] rounded-full" />
            <span>REVISION SUPPORT INCLUDED</span>
          </div>
          <span>FAST TURNAROUND // ALL ASPECT RATIOS</span>
        </div>

      </div>
    </section>
  );
}

