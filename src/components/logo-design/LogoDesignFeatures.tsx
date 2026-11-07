import React from "react";
import Link from "next/link";

interface Deliverable {
  number: string;
  title: string;
  desc: string;
  iconBg: string;
}

const deliverables: Deliverable[] = [
  {
    number: "01",
    title: "Typography & Color Palettes",
    desc: "Curated typography pairings, primary & secondary palettes, contrast ratios, and complete hex/CMYK specifications.",
    iconBg: "bg-[#FFA800]",
  },
  {
    number: "02",
    title: "Custom Vector Design",
    desc: "100% bespoke, scalable vector geometry built on precision grid systems. Zero stock icons or generic templates.",
    iconBg: "bg-[#CFE8DC]",
  },
  {
    number: "03",
    title: "Unique & Distinct Badges",
    desc: "Original visual marks, emblems, wordmarks, and sub-marks crafted to be memorable and immediately recognizable.",
    iconBg: "bg-[#E1E3F7]",
  },
  {
    number: "04",
    title: "High-Quality Deliverables",
    desc: "Complete master production kit provided in SVG, EPS, PDF, high-res PNG, and optimized WebP formats.",
    iconBg: "bg-[#FFA800]",
  },
  {
    number: "05",
    title: "Multiple Concepts & Revisions",
    desc: "Exploration across distinct creative directions, followed by collaborative iteration loops until perfection.",
    iconBg: "bg-[#CFE8DC]",
  },
  {
    number: "06",
    title: "Scalable Vector Files",
    desc: "Infinite scalability without quality loss — ready for tiny 16px favicons up to massive outdoor billboard printing.",
    iconBg: "bg-[#E1E3F7]",
  },
];

export default function LogoDesignFeatures() {
  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#E1E3F7] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-[#0E1153] text-[#FEF9ED] text-xs font-mono font-bold uppercase tracking-widest">
            <span>SERVICE OVERVIEW</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#0E1153] leading-tight mb-6">
            Unique logos, color palettes, and brand guidelines that define your business.
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#3E4945] leading-relaxed mb-8">
            Every visual asset is engineered to anchor your brand identity with precision, distinction, and enduring relevance across physical and digital touchpoints.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FFA800] transition-all"
          >
            <span>Learn more about us</span>
            <span>→</span>
          </Link>
        </div>

        {/* Right Column (7 cols) - 2x3 Grid of 6 White Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {deliverables.map((item) => (
            <div
              key={item.number}
              className="group cursor-pointer p-6 bg-[#FFFFFF] hover:bg-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[4px_4px_0px_#0E1153] hover:shadow-[7px_7px_0px_#FFA800] hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between min-h-[200px]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`w-8 h-8 rounded-lg ${item.iconBg} border border-[#0E1153] flex items-center justify-center font-mono font-bold text-xs text-[#0E1153] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-200`}>
                    ✦
                  </span>
                  <span className="font-mono text-xs font-bold text-[#0E1153]/30 group-hover:text-[#FFA800] transition-colors duration-200">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-[#0E1153] group-hover:text-[#FEF9ED] mb-2 leading-snug transition-colors duration-200">
                  {item.title}
                </h3>

                <p className="font-sans text-xs text-[#3E4945] group-hover:text-[#FEF9ED]/80 leading-relaxed transition-colors duration-200">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-[#0E1153]/10 group-hover:border-[#FEF9ED]/20 font-mono text-[10px] font-bold text-[#005F4C] group-hover:text-[#FFA800] uppercase transition-colors duration-200 flex items-center justify-between">
                <span>SPEC: {item.number} // APPROVED</span>
                <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 text-xs">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

