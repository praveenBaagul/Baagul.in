import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

// Consultation band for blog pages. Uses the homepage CTA section's styling
// (CTASection.tsx): indigo band, dotted backdrop, marigold primary button.
export default function BlogConsultationCTA() {
  return (
    <section className="w-full py-20 px-4 sm:px-12 bg-indigo-main text-canvas relative overflow-hidden border-t-2 border-indigo-main">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#dadff4_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-start">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-2.5 bg-marigold shadow-[1px_1px_0px_#f8f2e4]" />
          <span className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-marigold">
            FREE CONSULTATION
          </span>
        </div>

        <h2 className="font-heading text-4xl sm:text-6xl font-normal text-canvas tracking-tight mb-6">
          Have a project in mind?
          <br />
          <span className="text-marigold inline-block">Let&apos;s talk.</span>
        </h2>

        <p className="font-sans text-base sm:text-lg text-canvas/80 max-w-xl leading-relaxed mb-8">
          Tell us where your growth is stuck. Our studio team will review your website, search
          visibility and campaigns, and map out the next steps with you.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-marigold text-indigo-dark font-bold text-sm border border-canvas shadow-[4px_4px_0px_#f8f2e4] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#f8f2e4] transition-all duration-150"
          >
            <span>Book a Free Consultation</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-indigo-mid text-canvas font-semibold text-sm border border-canvas/40 hover:bg-indigo-mid/80 transition-colors"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
