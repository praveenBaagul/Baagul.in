import React from "react";

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
              <span>Build Authority,</span>
              <br />
              <span>Earn Backlinks.</span>
            </h2>

            <div className="inline-block mb-8">
              <span className="bg-[#FFA800] text-[#0E1153] font-heading font-bold text-2xl sm:text-3xl px-5 py-1.5 rounded-xl border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153]">
                Rank Higher
              </span>
            </div>

            {/* Metric pill box */}
            <div className="w-full p-5 bg-[#CFE8DC] border-2 border-[#0E1153] rounded-2xl shadow-[4px_4px_0px_#0E1153] text-[#0E1153]">
              <span className="font-heading font-bold text-base block mb-1">
                98% Indexation Rate
              </span>
              <p className="font-sans text-xs text-[#3E4945] leading-relaxed">
                Over 1,200+ editorial placements secured across Forbes, TechRadar, HubSpot, and leading niche trade publications.
              </p>
              <div className="mt-3 pt-3 border-t border-[#0E1153]/20 flex items-center justify-between text-[11px] font-mono font-bold text-[#005F4C]">
                <span>VERIFIED BACKLINK HEALTH</span>
                <span>100% DO-FOLLOW</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols) - Editorial Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-[#3E4945] font-sans text-base leading-relaxed">
            <p>
              <span className="font-heading text-5xl font-bold text-[#0E1153] float-left mr-3 leading-none">
                A
              </span>
              t Baagul, we provide high-quality guest posts &amp; PR services designed to boost your online presence and build long-term search engine authority. Publishing quality content on reputable, niche-relevant websites is essential for sustainable growth. Our guest posts &amp; PR strategy focuses on earning authoritative contextual backlinks that drive real referral traffic and establish your brand as a recognized leader in your industry.
            </p>

            <p>
              We handle the entire process — from research and content creation to placement and outreach. We connect you with verified, high-DA websites that match your target audience, ensuring every link carries legitimate editorial power. Whether you are aiming to dominate competitive keywords, expand your digital footprint, or enhance domain trust, our strategic outreach delivers compounding credibility.
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
