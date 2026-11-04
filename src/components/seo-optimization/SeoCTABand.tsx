import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export default function SeoCTABand() {
  return (
    <section className="w-full bg-[#0E1153] text-[#FEF9ED] py-20 px-4 sm:px-12 border-b-2 border-[#0E1153]">
      <div className="max-w-5xl mx-auto text-center">
        {/* Kannada accent kicker */}
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#FFBA45]/15 border border-[#FFBA45]/30 rounded-full">
          <span className="font-kannada font-bold text-sm text-[#FFBA45]">ಬಾಗುಲ್</span>
          <span className="text-[#FFBA45]/60">·</span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#FFBA45] font-bold">
            SEARCH AUDIT AVAILABLE
          </span>
        </div>

        <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight mb-6">
          Ready to turn search intent into your most profitable revenue channel?
        </h2>

        <p className="font-sans text-base sm:text-lg text-[#FEF9ED]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Book a 30-minute technical discovery session. We will examine your indexation health, review your backlink topology, and uncover high-impact keyword opportunities.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFBA45] text-[#0E1153] font-sans font-bold text-base rounded-lg border-2 border-[#0E1153] shadow-[4px_4px_0px_#FEF9ED] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#FEF9ED] active:translate-y-0 transition-all"
          >
            <span>Book Your SEO Audit</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-4 bg-transparent text-[#FEF9ED] font-sans font-semibold text-sm border-2 border-[#FEF9ED]/30 rounded-lg hover:border-[#FFBA45] hover:text-[#FFBA45] transition-colors"
          >
            <span>Explore Other Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
