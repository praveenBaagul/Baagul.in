import React from "react";
import Image from "next/image";

const works = [
  {
    url: "baagul.com",
    badge1: "BAAGUL",
    badge2: "FLAGSHIP",
    title: "Baagul Ecosystem",
    description: "Agency growth portal with editorial CMS, interactive funnel simulations & case ledger.",
    highlight: "98 PageSpeed Score",
    tag: "GLOBAL AGENCY SITE",
    imgSrc: "/assets/642a3.png",
    tint: "bg-[#cfe8dc]",
    rotation: "-rotate-1",
  },
  {
    url: "bestinranchi.com",
    badge1: "BEST IN RANCHI",
    badge2: "DIRECTORY",
    title: "Best In Ranchi",
    description: "Hyper-local commerce & discovery platform with integrated lead monetisation engines.",
    highlight: "+210% Organic Traffic",
    tag: "MARKETPLACE HUB",
    imgSrc: "/assets/11282.png",
    tint: "bg-[#f5a800]/30",
    rotation: "rotate-0",
  },
  {
    url: "bestcriminallawyerinmumbai.com",
    badge1: "MUMBAI DEFENSE",
    badge2: "RETAINER",
    title: "Counsel Chamber Portal",
    description: "High-stakes legal retainer bookings with encrypted intake & automated consultation deposits.",
    highlight: "3.8x Client Retainers",
    tag: "CONSULTING RETAINERS",
    imgSrc: "/assets/03160.png",
    tint: "bg-[#e1e3f7]",
    rotation: "rotate-1",
  },
];

export default function EcommerceWorks() {
  return (
    <section id="works" className="w-full py-24 px-4 sm:px-12 bg-[#FEF9ED] text-[#0E1153] border-t-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-[#C8553D]" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#0E1153]">
              OUR WORKS
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl text-[#0E1153] mb-2">
            Some of Our Works
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#3E4945] max-w-md">
            Your Business Deserves a Website That Converts
          </p>
        </div>

        {/* 3 Work Cards with -1°, 0°, +1° tilts matching the Figma design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {works.map((w, idx) => (
            <div
              key={idx}
              className={`p-6 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] hover:-translate-y-1 hover:shadow-[10px_10px_0px_#0E1153] hover:rotate-0 transition-all duration-200 flex flex-col justify-between ${w.rotation}`}
            >
              <div>
                {/* Window top bar */}
                <div className={`p-3 rounded-xl border border-[#0E1153]/20 flex items-center justify-between text-xs font-mono mb-4 ${w.tint}`}>
                  <span className="font-bold text-[#0E1153]">{w.url}</span>
                  <div className="flex items-center gap-1 text-[9px] font-bold">
                    <span className="px-1.5 py-0.5 rounded bg-[#0E1153] text-[#FEF9ED]">{w.badge1}</span>
                    <span className="px-1.5 py-0.5 rounded bg-[#FEF9ED] text-[#0E1153]">{w.badge2}</span>
                  </div>
                </div>

                {/* Photo */}
                <div className="relative h-48 w-full rounded-xl overflow-hidden border border-[#0E1153]/30 mb-4 bg-canvas">
                  <Image
                    src={w.imgSrc}
                    alt={w.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-[#005F4C] uppercase tracking-wider">
                    {w.tag}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#C8553D] px-2 py-0.5 rounded bg-[#FEF9ED] border border-[#C8553D]/20">
                    {w.highlight}
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-[#0E1153] mb-2">
                  {w.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed">
                  {w.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#0E1153]/15 flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-[#0E1153] hover:text-[#C8553D] flex items-center gap-1 cursor-pointer">
                  Visit site →
                </span>
                <span className="text-[#3E4945]/60">LIVE // V2</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

