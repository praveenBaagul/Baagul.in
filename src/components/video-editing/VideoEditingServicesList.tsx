import React from "react";
import Link from "next/link";

interface ServiceRow {
  number: string;
  title: string;
  description: string;
  bgFill: string;
  badgeBg: string;
  iconBg: string;
  desktopOffsetClass: string;
}

const serviceRows: ServiceRow[] = [
  {
    number: "01",
    title: "Social Media Video Editing",
    description: "Engaging reels, shorts, and stories edited for Instagram, YouTube, Facebook, and LinkedIn with trending formats and captions.",
    bgFill: "bg-[#CFE8DC]",
    badgeBg: "bg-[#0E1153] text-[#FEF9ED]",
    iconBg: "bg-[#0E7A63] text-[#FEF9ED]",
    desktopOffsetClass: "lg:ml-0",
  },
  {
    number: "02",
    title: "YouTube Video Editing",
    description: "Long-form edits with strong hooks, tight pacing, B-roll, and thumbnail-ready frames that grow watch time and subscribers.",
    bgFill: "bg-white",
    badgeBg: "bg-[#0E7A63] text-[#FEF9ED]",
    iconBg: "bg-[#CFE8DC] text-[#0E1153]",
    desktopOffsetClass: "lg:ml-5",
  },
  {
    number: "03",
    title: "Corporate & Brand Videos",
    description: "Polished brand films, product demos, testimonials, and event highlights that build trust and tell your story.",
    bgFill: "bg-[#FFBA45]",
    badgeBg: "bg-[#0E1153] text-[#FEF9ED]",
    iconBg: "bg-[#E1E3F7] text-[#0E1153]",
    desktopOffsetClass: "lg:ml-0",
  },
  {
    number: "04",
    title: "Motion Graphics & Post-Production",
    description: "Animated titles, color grading, sound design, and subtitles that give every video a professional, finished look.",
    bgFill: "bg-[#E1E3F7]",
    badgeBg: "bg-[#0E7A63] text-[#FEF9ED]",
    iconBg: "bg-[#FFBA45] text-[#0E1153]",
    desktopOffsetClass: "lg:ml-5",
  },
];

export default function VideoEditingServicesList() {
  return (
    <section className="relative w-full bg-[#FEF9ED] border-b-2 border-[#0E1153] py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-dashed border-[#0E1153]/20 pb-8 mb-14 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#FFBA45] border border-[#0E1153] shadow-[1px_1px_0px_#0E1153]" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#0E1153]">
                ■ OUR SERVICES
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-[#0E1153] tracking-tight">
              Our Services
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#121A4A]/75 max-w-md leading-relaxed">
            From quick social clips to full brand films, we handle every stage of post-production using industry-standard editing tools.
          </p>
        </div>

        {/* 4 Stacked Rows with Staggered Offsets */}
        <div className="space-y-6">
          {serviceRows.map((row) => (
            <div
              key={row.number}
              className={`w-full max-w-[1240px] ${row.desktopOffsetClass} ${row.bgFill} border-2 border-[#0E1153] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#0E1153] hover:shadow-[8px_8px_0px_#0E1153] hover:-translate-y-0.5 transition-all duration-200`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Number & Icon Tile (3 cols) */}
                <div className="md:col-span-3 flex items-center gap-4">
                  <span className={`w-12 h-12 rounded-xl flex items-center justify-center font-heading text-xl font-bold border-2 border-[#0E1153] shadow-[2px_2px_0px_#0E1153] ${row.badgeBg}`}>
                    {row.number}
                  </span>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono text-sm font-bold border-2 border-[#0E1153] shadow-[2px_2px_0px_#0E1153] ${row.iconBg}`}>
                    ✦
                  </div>
                  <span className="hidden sm:inline font-mono text-[10px] text-[#0E1153]/50 uppercase tracking-widest font-bold">
                    SPEC // ROW
                  </span>
                </div>

                {/* Title & Description (7 cols) */}
                <div className="md:col-span-7">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0E1153] mb-2">
                    {row.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#0E1153]/80 leading-relaxed max-w-2xl">
                    {row.description}
                  </p>
                </div>

                {/* Right Action Link (2 cols) */}
                <div className="md:col-span-2 flex justify-start md:justify-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#0E1153] rounded-xl border border-[#0E1153] font-mono text-xs font-bold shadow-[2px_2px_0px_#0E1153] hover:bg-[#0E1153] hover:text-[#FEF9ED] transition-colors"
                  >
                    <span>INTAKE</span>
                    <span>→</span>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

