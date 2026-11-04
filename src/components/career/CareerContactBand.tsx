import React from "react";
import Link from "next/link";

export default function CareerContactBand() {
  return (
    <section className="w-full py-20 px-6 sm:px-12 lg:px-16 bg-[#E1E3F7] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold uppercase tracking-widest text-[#005F4C]">
            <span className="w-2 h-2 rounded-full bg-[#FFA800]" />
            <span>INTERESTED?</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl text-[#0E1153] leading-tight">
            <span>Want to work with </span>
            <span className="inline-block bg-[#FFA800] text-[#0E1153] px-3.5 py-0.5 rounded-[4px] border-2 border-[#0E1153] shadow-[3px_3px_0px_#0E1153]">
              us?
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-xs uppercase tracking-wider border-2 border-[#0E1153] shadow-[3px_3px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
          >
            <span>Connect Us</span>
            <span>→</span>
          </Link>

          <a
            href="mailto:support@baagul.in"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FFFFFF] text-[#0E1153] font-mono font-bold text-xs border-2 border-[#0E1153] shadow-[3px_3px_0px_#0E1153] hover:bg-[#FAF8F5] transition-all"
          >
            <span>✉ support@baagul.in</span>
          </a>
        </div>
      </div>
    </section>
  );
}

