import React from "react";
import Image from "next/image";

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
          <div className="group cursor-pointer p-8 sm:p-10 bg-[#FEF9ED] hover:bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] hover:shadow-[12px_12px_0px_#FFA800] hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between min-h-[300px]">
            <div className="flex items-center justify-between text-xs font-mono text-[#3E4945]">
              <span>ID: BGL-MK-01</span>
              <span>FINTECH &amp; TRADING</span>
            </div>

            <div className="py-6 flex flex-col items-center justify-center text-center">
              <div className="relative w-full max-w-sm aspect-[2/1] rounded-2xl overflow-hidden border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] bg-[#FAF8F5]">
                <Image
                  src="/assets/propfirm-coupons.jpg"
                  alt="propfirm.coupons Logo Identity"
                  fill
                  sizes="(max-width: 640px) 100vw, 384px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[#0E1153]/15 flex items-center justify-between text-xs font-mono font-bold text-[#005F4C]">
              <span>BRAND &amp; DIGITAL IDENTITY</span>
              <span>VIEW IDENTITY →</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group cursor-pointer p-8 sm:p-10 bg-[#FEF9ED] hover:bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] hover:shadow-[12px_12px_0px_#FFA800] hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between min-h-[300px]">
            <div className="flex items-center justify-between text-xs font-mono text-[#3E4945]">
              <span>ID: BGL-MK-02</span>
              <span>CYBERSECURITY &amp; DEFENSE</span>
            </div>

            <div className="py-6 flex flex-col items-center justify-center text-center">
              <div className="relative w-full max-w-sm aspect-[1024/682] rounded-2xl overflow-hidden border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] bg-[#FAF8F5]">
                <Image
                  src="/assets/aeroshield-logo.jpg"
                  alt="AeroShield Cybersecurity Logo Identity"
                  fill
                  sizes="(max-width: 640px) 100vw, 384px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-[#0E1153]/15 flex items-center justify-between text-xs font-mono font-bold text-[#005F4C]">
              <span>ENTERPRISE EMBLEM</span>
              <span>VIEW IDENTITY →</span>
            </div>
          </div>
        </div>

        {/* Bottom Row: 3 Medium Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 3 */}
          <div className="group cursor-pointer p-6 bg-[#FEF9ED] hover:bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] hover:shadow-[9px_9px_0px_#FFA800] hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between min-h-[220px]">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#3E4945]">
              <span>ID: BGL-MK-03</span>
              <span>HEALTH &amp; MEDICAL</span>
            </div>

            <div className="py-4 flex flex-col items-center justify-center text-center">
              <div className="relative w-full max-w-[220px] aspect-[1024/682] rounded-xl overflow-hidden border-2 border-[#0E1153] shadow-[3px_3px_0px_#0E1153] bg-[#FAF8F5]">
                <Image
                  src="/assets/vanguard-health-logo.jpg"
                  alt="Vanguard Health Labs Logo Identity"
                  fill
                  sizes="(max-width: 640px) 100vw, 220px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-[#0E1153]/15 text-[11px] font-mono font-bold text-[#005F4C] text-right group-hover:translate-x-1 transition-transform duration-200">
              VIEW →
            </div>
          </div>

          {/* Card 4 */}
          <div className="group cursor-pointer p-6 bg-[#FEF9ED] hover:bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] hover:shadow-[9px_9px_0px_#FFA800] hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between min-h-[220px]">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#3E4945]">
              <span>ID: BGL-MK-04</span>
              <span>CLEANTECH &amp; SOLAR</span>
            </div>

            <div className="py-4 flex flex-col items-center justify-center text-center">
              <div className="relative w-full max-w-[220px] aspect-[1024/682] rounded-xl overflow-hidden border-2 border-[#0E1153] shadow-[3px_3px_0px_#0E1153] bg-[#FAF8F5]">
                <Image
                  src="/assets/solaria-energy-logo.jpg"
                  alt="Solaria Energy Logo Identity"
                  fill
                  sizes="(max-width: 640px) 100vw, 220px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-[#0E1153]/15 text-[11px] font-mono font-bold text-[#005F4C] text-right group-hover:translate-x-1 transition-transform duration-200">
              VIEW →
            </div>
          </div>

          {/* Card 5 */}
          <div className="group cursor-pointer p-6 bg-[#FEF9ED] hover:bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] hover:shadow-[9px_9px_0px_#FFA800] hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between min-h-[220px]">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#3E4945]">
              <span>ID: BGL-MK-05</span>
              <span>ENTERPRISE SAAS</span>
            </div>

            <div className="py-4 flex flex-col items-center justify-center text-center">
              <div className="relative w-full max-w-[220px] aspect-[1024/682] rounded-xl overflow-hidden border-2 border-[#0E1153] shadow-[3px_3px_0px_#0E1153] bg-[#FAF8F5]">
                <Image
                  src="/assets/lumina-software-logo.jpg"
                  alt="Lumina Software Logo Identity"
                  fill
                  sizes="(max-width: 640px) 100vw, 220px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-[#0E1153]/15 text-[11px] font-mono font-bold text-[#005F4C] text-right group-hover:translate-x-1 transition-transform duration-200">
              VIEW →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

