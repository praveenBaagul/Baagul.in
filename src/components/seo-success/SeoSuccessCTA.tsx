import React from "react";
import Link from "next/link";

export default function SeoSuccessCTA() {
  return (
    <section className="relative w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#1A1F5E] text-[#FEF9ED] border-b-2 border-[#0E1153] overflow-hidden">
      {/* Decorative ambient radial background accents */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#FFA800]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#00A86B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1 rounded-full bg-[#0E1153] border border-[#FEF9ED]/25 text-xs font-mono font-bold uppercase tracking-widest text-[#FFA800] shadow-[2px_2px_0px_#FFA800]">
          <span className="w-2 h-2 rounded-full bg-[#00A86B]" />
          <span>START YOUR GOOGLE GROWTH ENGINE</span>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#FEF9ED] tracking-tight leading-tight mb-6">
          Your Business Could Be Our Next SEO Success Story!
        </h2>

        {/* Description */}
        <p className="font-sans text-base sm:text-lg text-[#FEF9ED]/85 max-w-2xl leading-relaxed mb-10">
          Stop missing opportunities on Google. Work with our expert SEO team to build stronger search visibility, outrank competitors, and attract more potential customers.
        </p>

        {/* Dual CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFA800] text-[#0E1153] font-heading font-bold text-base border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#0E1153] transition-all cursor-pointer"
          >
            <span>Talk With Our SEO Experts</span>
            <span>→</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#1A1F5E] text-[#FEF9ED] font-heading font-bold text-base border-2 border-[#FEF9ED]/40 shadow-[4px_4px_0px_#0E1153] hover:bg-[#252C7C] hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
          >
            <span>Get a Free SEO Consultation</span>
            <span>📋</span>
          </Link>
        </div>

        {/* Studio Guarantee Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#FEF9ED]/15 w-full text-xs font-mono text-[#FEF9ED]/75">
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#FFA800]">✓</span>
            <span>Initial Audit within 48 Hours</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#FFA800]">✓</span>
            <span>Strict White-Hat Practices</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[#FFA800]">✓</span>
            <span>100% Transparent Reporting</span>
          </div>
        </div>

      </div>
    </section>
  );
}

