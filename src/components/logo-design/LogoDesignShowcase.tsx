import React from "react";

export default function LogoDesignShowcase() {
  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#005F4C] text-[#FEF9ED] border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 relative">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-[#FFA800]">
              <span className="w-2.5 h-2.5 bg-[#FFA800]" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-[#FEF9ED] leading-tight">
              Premium Custom Logos We&apos;ve Designed
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#FEF9ED]/80 max-w-sm leading-relaxed">
            Every mark is uniquely tailored to anchor company authority, survive trends, and build enduring recognition.
          </p>

          {/* Gold circular badge */}
          <div className="hidden lg:flex w-16 h-16 rounded-full bg-[#FFA800] text-[#0E1153] border-2 border-[#0E1153] shadow-[3px_3px_0px_#0E1153] flex-col items-center justify-center text-center font-mono text-[8px] font-black uppercase rotate-12">
            <span>LIVE</span>
            <span>MARKS</span>
          </div>
        </div>

        {/* Top Row: 2 Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Card 1 */}
          <div className="p-8 sm:p-10 bg-[#FEF9ED] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] flex flex-col justify-between min-h-[300px]">
            <div className="flex items-center justify-between text-xs font-mono text-[#3E4945]">
              <span>ID: BGL-MK-01</span>
              <span>HEALTH &amp; MEDICAL</span>
            </div>

            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full border-2 border-[#0E1153] bg-[#FFFFFF] flex items-center justify-center mb-4 shadow-[3px_3px_0px_#0E1153]">
                <span className="font-heading text-3xl font-black text-[#005F4C]">⚜</span>
              </div>
              <h3 className="font-heading text-2xl font-bold tracking-widest uppercase">
                Vanguard Health Labs
              </h3>
              <span className="text-xs font-mono text-[#3E4945] tracking-widest mt-1">
                CLINICAL DIAGNOSTICS GROUP
              </span>
            </div>

            <div className="pt-4 border-t border-[#0E1153]/15 flex items-center justify-between text-xs font-mono font-bold text-[#005F4C]">
              <span>VECTOR MONOGRAM</span>
              <span>VIEW IDENTITY →</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 sm:p-10 bg-[#FEF9ED] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] flex flex-col justify-between min-h-[300px]">
            <div className="flex items-center justify-between text-xs font-mono text-[#3E4945]">
              <span>ID: BGL-MK-02</span>
              <span>LIFESTYLE &amp; CRAFT</span>
            </div>

            <div className="py-12 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-2xl border-2 border-[#0E1153] bg-[#FFFFFF] flex items-center justify-center mb-4 shadow-[3px_3px_0px_#0E1153]">
                <span className="font-heading text-3xl font-black text-[#FFA800]">⚔</span>
              </div>
              <h3 className="font-heading text-2xl font-bold tracking-widest uppercase">
                Nordic Clay Works
              </h3>
              <span className="text-xs font-mono text-[#3E4945] tracking-widest mt-1">
                ARTISAN STONEWARE STUDIO
              </span>
            </div>

            <div className="pt-4 border-t border-[#0E1153]/15 flex items-center justify-between text-xs font-mono font-bold text-[#005F4C]">
              <span>BESPOKE EMBLEM</span>
              <span>VIEW IDENTITY →</span>
            </div>
          </div>
        </div>

        {/* Bottom Row: 3 Medium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 3 */}
          <div className="p-6 bg-[#FEF9ED] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between min-h-[220px]">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#3E4945]">
              <span>ID: BGL-MK-03</span>
              <span>CYBERSECURITY</span>
            </div>

            <div className="py-6 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-xl bg-[#FFFFFF] border-2 border-[#0E1153] flex items-center justify-center mb-2 shadow-[2px_2px_0px_#0E1153] text-xl">
                🛡
              </div>
              <h4 className="font-heading text-lg font-bold">AeroShield</h4>
              <span className="text-[10px] font-mono text-[#3E4945] tracking-wider">DEFENSE PROTOCOL</span>
            </div>

            <div className="pt-3 border-t border-[#0E1153]/15 text-[11px] font-mono font-bold text-[#005F4C] text-right">
              VIEW →
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-6 bg-[#FEF9ED] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between min-h-[220px]">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#3E4945]">
              <span>ID: BGL-MK-04</span>
              <span>ENTERPRISE SAAS</span>
            </div>

            <div className="py-6 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-xl bg-[#FFFFFF] border-2 border-[#0E1153] flex items-center justify-center mb-2 shadow-[2px_2px_0px_#0E1153] text-xl">
                ⚡
              </div>
              <h4 className="font-heading text-lg font-bold">Lumina Software</h4>
              <span className="text-[10px] font-mono text-[#3E4945] tracking-wider">CLOUD PLATFORM</span>
            </div>

            <div className="pt-3 border-t border-[#0E1153]/15 text-[11px] font-mono font-bold text-[#005F4C] text-right">
              VIEW →
            </div>
          </div>

          {/* Card 5 */}
          <div className="p-6 bg-[#FEF9ED] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between min-h-[220px]">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#3E4945]">
              <span>ID: BGL-MK-05</span>
              <span>CLEANTECH ENERGY</span>
            </div>

            <div className="py-6 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-xl bg-[#FFFFFF] border-2 border-[#0E1153] flex items-center justify-center mb-2 shadow-[2px_2px_0px_#0E1153] text-xl">
                ☼
              </div>
              <h4 className="font-heading text-lg font-bold">Solaria Energy</h4>
              <span className="text-[10px] font-mono text-[#3E4945] tracking-wider">SOLAR INFRASTRUCTURE</span>
            </div>

            <div className="pt-3 border-t border-[#0E1153]/15 text-[11px] font-mono font-bold text-[#005F4C] text-right">
              VIEW →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

