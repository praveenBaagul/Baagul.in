import React from "react";
import Link from "next/link";

export default function SeoServicePager() {
  return (
    <section className="w-full py-16 px-4 sm:px-8 lg:px-12 bg-[#FEF9ED] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Previous Service: Content Writing & Editorial */}
        <Link
          href="/services"
          className="p-8 bg-[#CFE8DC] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#0E1153] transition-all flex flex-col justify-between group"
        >
          <div>
            <span className="text-xs font-mono font-bold text-[#005F4C] uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <span>←</span>
              <span>PREVIOUS SERVICE</span>
            </span>
            <h4 className="font-heading text-3xl font-bold text-[#0E1153] mb-2 leading-snug group-hover:text-[#005F4C] transition-colors">
              Content Writing &amp; Editorial
            </h4>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#3E4945] mt-4">
            Search-optimized editorial content, long-form thought leadership, and high-converting copy.
          </p>
        </Link>

        {/* Next Service: Digital Marketing Agency */}
        <Link
          href="/services/digital-marketing"
          className="p-8 bg-[#FFBA45] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#0E1153] transition-all flex flex-col justify-between md:items-end md:text-right group"
        >
          <div>
            <span className="text-xs font-mono font-bold text-[#0E1153] uppercase tracking-wider mb-3 flex items-center md:justify-end gap-1.5">
              <span>NEXT SERVICE</span>
              <span>→</span>
            </span>
            <h4 className="font-heading text-3xl font-bold text-[#0E1153] mb-2 leading-snug group-hover:text-[#005F4C] transition-colors">
              Digital Marketing Agency
            </h4>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#0E1153]/85 mt-4">
            High-converting performance marketing, paid search acquisition, and multi-channel revenue funnels.
          </p>
        </Link>
      </div>
    </section>
  );
}
