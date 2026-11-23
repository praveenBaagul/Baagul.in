import React from "react";
import Link from "next/link";

export default function GuestPostWhyChooseUs() {
  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#FEF9ED] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase tracking-widest text-[#005F4C]">
              <span className="w-2 h-2 rounded-full bg-[#FFA800]" />
              <span>EDITORIAL PARTNERSHIP</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl text-[#0E1153] leading-tight mb-4">
              <span>Why Choose BAAGUL for</span>
              <br />
              <span>Guest Posting Services?</span>
            </h2>

            <div className="inline-block mb-8">
              <span className="bg-[#FFA800] text-[#0E1153] font-heading font-bold text-2xl sm:text-3xl px-5 py-1.5 rounded-xl border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153]">
                Earn Visibility
              </span>
            </div>

            {/* Reporting box */}
            <div className="w-full p-5 bg-[#CFE8DC] border-2 border-[#0E1153] rounded-2xl shadow-[4px_4px_0px_#0E1153] text-[#0E1153]">
              <span className="font-heading font-bold text-base block mb-1">
                Transparent Link Reporting
              </span>
              <p className="font-sans text-xs text-[#3E4945] leading-relaxed">
                Every placement is reported with the live URL, the publishing website and how the link is marked, so you always know exactly what was published.
              </p>
              <div className="mt-3 pt-3 border-t border-[#0E1153]/20 flex items-center justify-between text-[11px] font-mono font-bold text-[#005F4C]">
                <span>VERIFIED LIVE PLACEMENTS</span>
                <span>FULL REPORTS</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols) - Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-[#3E4945] font-sans text-base leading-relaxed">
            <p>
              <span className="font-heading text-5xl font-bold text-[#0E1153] float-left mr-3 leading-none">
                A
              </span>
              t BAAGUL, our guest posting services focus on what lasts: relevant websites with genuine audiences, original and professionally written content, and editorial outreach that earns your brand a place in front of the right readers. The result is referral traffic, brand visibility and trust in your industry.
            </p>

            <p>
              We handle the entire process, from research and content writing to blogger outreach, digital PR and publication. Each placement is checked once it goes live and reported transparently. We follow Google&apos;s guidelines, so paid placements are labelled correctly rather than disguised. Guest posting works best as part of a wider plan, and it pairs naturally with our{" "}
              <Link href="/services/seo-optimizations" className="font-bold text-[#005F4C] underline underline-offset-2 hover:text-[#0E1153]">
                SEO optimization services
              </Link>
              , which cover technical SEO, on-page content and overall search strategy.
            </p>

            {/* Quote callout box */}
            <div className="p-5 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[4px_4px_0px_#0E1153] border-l-4 border-l-[#FFA800]">
              <p className="font-heading text-sm sm:text-base font-bold text-[#0E1153] italic">
                “Quality backlinks are not built through shortcuts; they are earned through genuine editorial relationships.”
              </p>
              <span className="font-mono text-[11px] text-[#3E4945] block mt-2">
                — Baagul Outreach &amp; Digital PR Desk
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
