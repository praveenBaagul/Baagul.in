import React from "react";

interface ProcessStep {
  number: string;
  name: string;
  kannadaTitle: string;
  duration: string;
  description: string;
  deliverables: string[];
}

const steps: ProcessStep[] = [
  {
    number: "01",
    name: "Discovery & Blueprint",
    kannadaTitle: "ಶೋಧನೆ",
    duration: "Week 1",
    description: "Deep audit of existing organic footprint, technical debt, competitor positioning, and direct stakeholder interviews.",
    deliverables: ["Full Technical Audit", "Keyword Gap Model", "Campaign Unit Economics Matrix"],
  },
  {
    number: "02",
    name: "The First Stitch",
    kannadaTitle: "ರಚನೆ",
    duration: "Weeks 2-3",
    description: "Configuring the core infrastructure: tracking pipelines, headless CMS scaffolds, conversion landing funnels, and pilot ad sets.",
    deliverables: ["Tracking & Attribution Setup", "Landing Page Sprint", "Creative Ad Batches"],
  },
  {
    number: "03",
    name: "Execution & Calibrate",
    kannadaTitle: "ಪ್ರಯೋಗ",
    duration: "Weeks 4-8",
    description: "Aggressive live deployment of search architectures, continuous negative keyword pruning, and weekly split-testing.",
    deliverables: ["Live Spend Management", "Heatmap & CRO Iterations", "Weekly Executive Pulse"],
  },
  {
    number: "04",
    name: "Compounding Growth",
    kannadaTitle: "ಬೆಳವಣಿಗೆ",
    duration: "Ongoing",
    description: "Scaling budget into validated revenue loops, turning initial wins into defensive, long-term category leadership.",
    deliverables: ["Programmatic Content Scaling", "Omnichannel Remarketing", "Quarterly Strategy Review"],
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="w-full py-20 px-4 sm:px-12 bg-muted-border/30 border-y border-indigo-main/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-peacock" />
              <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-indigo-main">
                OUR METHODOLOGY
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-indigo-main">
              The Baagul Thread
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-slate-text max-w-md">
            How we weave strategy, code, and paid media into an unbreakable, compounding growth engine.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative p-6 bg-canvas-card border-2 border-indigo-main rounded-xl shadow-[5px_5px_0px_#121a4a] flex flex-col justify-between"
            >
              <div>
                {/* Step top header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-heading text-3xl font-bold text-indigo-mid">
                      {step.number}
                    </span>
                    <span className="font-kannada text-xs font-bold text-terracotta px-2 py-0.5 bg-canvas rounded border border-terracotta/30">
                      {step.kannadaTitle}
                    </span>
                  </div>
                  <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-slate-text bg-canvas px-2 py-1 rounded">
                    {step.duration}
                  </span>
                </div>

                <h3 className="font-heading text-xl text-indigo-main font-semibold mb-3">
                  {step.name}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-slate-text leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables pill list */}
              <div className="pt-4 border-t border-indigo-main/15">
                <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-main/60 block mb-2">
                  Key Deliverables:
                </span>
                <ul className="flex flex-col gap-1.5 text-xs text-indigo-main/90 font-medium">
                  {step.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-peacock rounded-full shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

