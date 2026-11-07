import React from "react";
import Link from "next/link";

export default function LogoDesignWhyChooseUs() {
  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#1A1F5E] text-[#FEF9ED] border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-[#0E1153] text-[#FFA800] text-xs font-mono font-bold uppercase tracking-widest border border-[#FEF9ED]/20">
            <span>BRAND VALUE PROMISE</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#FEF9ED] leading-tight mb-6">
            <span>Your Brand Deserves a Logo That </span>
            <span className="inline-block bg-[#FFA800] text-[#0E1153] px-4 py-1 rounded-xl border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] mt-2">
              Speaks
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#FEF9ED]/80 leading-relaxed mb-8">
            A great logo doesn&apos;t just decorate a header — it establishes instant market credibility, builds emotional recall, and serves as the visual cornerstone of all future growth.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#FFA800] text-[#0E1153] font-heading font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#0E1153] transition-all"
          >
            <span>Start Your Logo Project</span>
            <span>→</span>
          </Link>
        </div>

        {/* Right Column (7 cols) - 2 Stacked Cream Cards */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Card 1 */}
          <div className="group cursor-pointer p-8 bg-[#FEF9ED] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#FFA800] hover:shadow-[10px_10px_0px_#FFA800] hover:-translate-y-1.5 transition-all duration-200">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#0E1153]/15">
              <span className="font-heading text-xl font-bold group-hover:text-[#005F4C] transition-colors duration-200">
                Instant Visual Authority
              </span>
              <span className="text-xs font-mono font-bold text-[#005F4C]">
                01 // FIRST IMPRESSIONS
              </span>
            </div>
            <p className="font-sans text-sm text-[#3E4945] leading-relaxed">
              In competitive industries, clients judge professionalism within milliseconds. A custom, meticulously balanced mark commands respect and positions your business as an established category leader from day one.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group cursor-pointer p-8 bg-[#FEF9ED] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#FFA800] hover:shadow-[10px_10px_0px_#FFA800] hover:-translate-y-1.5 transition-all duration-200">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#0E1153]/15">
              <span className="font-heading text-xl font-bold group-hover:text-[#005F4C] transition-colors duration-200">
                Cross-Platform Scalability
              </span>
              <span className="text-xs font-mono font-bold text-[#005F4C]">
                02 // REPRODUCIBILITY
              </span>
            </div>
            <p className="font-sans text-sm text-[#3E4945] leading-relaxed">
              We design marks with strict responsive variations — including horizontal lockups, compact favicons, inverted dark-mode states, and monochrome embroidery files ready for any physical or digital medium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

