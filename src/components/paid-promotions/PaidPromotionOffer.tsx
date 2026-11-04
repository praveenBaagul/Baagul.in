import React from "react";

export default function PaidPromotionOffer() {
  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#E1E3F7] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-[#005F4C]">
            <span className="w-2.5 h-2.5 bg-[#FFA800]" />
            <span>WHAT WE OFFER</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#0E1153]">
            What We Offer
          </h2>
        </div>

        {/* 3 Large Wide Feature Modules */}
        <div className="flex flex-col gap-8">
          {/* Module 01: Video Content Creation */}
          <div className="bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] overflow-hidden">
            {/* Module Top Bar */}
            <div className="px-6 sm:px-8 py-4 bg-[#EDE8DC] border-b-2 border-[#0E1153] flex flex-wrap items-center justify-between gap-4">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0E1153]">
                Video Content Creation for Brand Awareness
              </h3>
              <span className="px-3 py-1 rounded bg-[#CFE8DC] border border-[#0E1153] text-xs font-mono font-bold text-[#005F4C]">
                BRAND SPONSORSHIP
              </span>
            </div>

            {/* Module Content Grid */}
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Visual Card Left (4 cols) */}
              <div className="lg:col-span-4 p-5 bg-[#FFA800] border-2 border-[#0E1153] rounded-xl relative flex flex-col justify-between min-h-[170px] shadow-[4px_4px_0px_#0E1153]">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#0E1153]">
                  <span>4K PROMOTION</span>
                  <span>▶ PLAY</span>
                </div>
                <div className="py-4 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-[#FFFFFF] border-2 border-[#0E1153] flex items-center justify-center text-sm font-bold pl-0.5">
                    ▶
                  </div>
                </div>
                <div className="text-[10px] font-mono font-bold text-[#0E1153] flex justify-between">
                  <span>MODULE 01</span>
                  <span>ENGAGEMENT: 9.4%</span>
                </div>
              </div>

              {/* Text Column 1 (4 cols) */}
              <div className="lg:col-span-4 flex flex-col">
                <div className="flex items-center gap-2 mb-2 font-heading font-bold text-lg text-[#0E1153]">
                  <span className="w-2 h-2 rounded-full bg-[#FFA800]" />
                  <span>Build Trust and Loyalty</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed">
                  Video content helps establish emotional connection with your audience. We engineer engaging brand films, customer testimonials, and creative product unboxings that turn passive viewers into recurring clients.
                </p>
              </div>

              {/* Text Column 2 (4 cols) */}
              <div className="lg:col-span-4 flex flex-col">
                <div className="flex items-center gap-2 mb-2 font-heading font-bold text-lg text-[#0E1153]">
                  <span className="w-2 h-2 rounded-full bg-[#005F4C]" />
                  <span>Platform-Specific Strategy</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed">
                  Tailored video ratios and hooks formatted natively for YouTube horizontal sponsorships, Instagram Reels, and TikTok viral loops ensuring sub-second hook retention and algorithm reach.
                </p>
              </div>
            </div>
          </div>

          {/* Module 02: Product Promotion with Targeted Content */}
          <div className="bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] overflow-hidden">
            {/* Module Top Bar */}
            <div className="px-6 sm:px-8 py-4 bg-[#EDE8DC] border-b-2 border-[#0E1153] flex flex-wrap items-center justify-between gap-4">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0E1153]">
                Product Promotion with Targeted Content
              </h3>
              <span className="px-3 py-1 rounded bg-[#FFA800] border border-[#0E1153] text-xs font-mono font-bold text-[#0E1153]">
                PERFORMANCE ADS
              </span>
            </div>

            {/* Module Content Grid */}
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Text Column 1 (4 cols) */}
              <div className="lg:col-span-4 flex flex-col">
                <div className="flex items-center gap-2 mb-2 font-heading font-bold text-lg text-[#0E1153]">
                  <span className="w-2 h-2 rounded-full bg-[#FFA800]" />
                  <span>Maximum Exposure</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed">
                  Position your flagship products in front of qualified commercial shoppers through niche creator features, curated lifestyle lookbooks, and high-converting retargeting media buys.
                </p>
              </div>

              {/* Text Column 2 (4 cols) */}
              <div className="lg:col-span-4 flex flex-col">
                <div className="flex items-center gap-2 mb-2 font-heading font-bold text-lg text-[#0E1153]">
                  <span className="w-2 h-2 rounded-full bg-[#005F4C]" />
                  <span>Customizable Campaigns</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed">
                  Whether launching a brand-new SKU or running seasonal flash sales, our dynamic promotion pods adjust bid parameters and creative angles in real time to sustain profitable ROAS.
                </p>
              </div>

              {/* Visual Card Right (4 cols) */}
              <div className="lg:col-span-4 p-5 bg-[#CFE8DC] border-2 border-[#0E1153] rounded-xl relative flex flex-col justify-between min-h-[170px] shadow-[4px_4px_0px_#0E1153]">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#005F4C]">
                  <span>COMMERCE SPOTLIGHT</span>
                  <span>SKU #429</span>
                </div>
                <div className="py-3 flex items-center justify-center gap-3">
                  <div className="w-12 h-12 bg-[#FFA800] border-2 border-[#0E1153] rounded-lg flex items-center justify-center font-bold text-sm">
                    ★
                  </div>
                  <div className="w-8 h-8 bg-[#005F4C] border-2 border-[#0E1153] rounded-full rotate-45" />
                </div>
                <div className="text-[10px] font-mono font-bold text-[#005F4C] flex justify-between">
                  <span>MODULE 02</span>
                  <span>ROAS: 4.8X</span>
                </div>
              </div>
            </div>
          </div>

          {/* Module 03: Honest and Transparent Reviews */}
          <div className="bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] overflow-hidden">
            {/* Module Top Bar */}
            <div className="px-6 sm:px-8 py-4 bg-[#EDE8DC] border-b-2 border-[#0E1153] flex flex-wrap items-center justify-between gap-4">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0E1153]">
                Honest and Transparent Reviews
              </h3>
              <span className="px-3 py-1 rounded bg-[#005F4C] text-[#FEF9ED] border border-[#0E1153] text-xs font-mono font-bold">
                VERIFIED REVIEWS
              </span>
            </div>

            {/* Module Content Grid */}
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Visual Card Left (4 cols) */}
              <div className="lg:col-span-4 p-5 bg-[#005F4C] text-[#FEF9ED] border-2 border-[#0E1153] rounded-xl relative flex flex-col justify-between min-h-[170px] shadow-[4px_4px_0px_#0E1153]">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-[#FFA800]">
                  <span>VERIFIED TESTIMONIALS</span>
                  <span>★★★★★</span>
                </div>
                <div className="py-3 flex flex-col gap-2">
                  <div className="w-full h-2 bg-[#FFA800] rounded-full" />
                  <div className="w-3/4 h-2 bg-[#FEF9ED]/40 rounded-full" />
                  <div className="w-1/2 h-2 bg-[#FEF9ED]/20 rounded-full" />
                </div>
                <div className="text-[10px] font-mono font-bold text-[#FEF9ED] flex justify-between">
                  <span>MODULE 03</span>
                  <span>TRUST RATING: 99%</span>
                </div>
              </div>

              {/* Text Column 1 (4 cols) */}
              <div className="lg:col-span-4 flex flex-col">
                <div className="flex items-center gap-2 mb-2 font-heading font-bold text-lg text-[#0E1153]">
                  <span className="w-2 h-2 rounded-full bg-[#FFA800]" />
                  <span>Build Credibility</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed">
                  Real social proof moves modern consumers. We coordinate authentic, in-depth product breakdowns and candid evaluations from reputable niche figures that build lasting consumer confidence.
                </p>
              </div>

              {/* Text Column 2 (4 cols) */}
              <div className="lg:col-span-4 flex flex-col">
                <div className="flex items-center gap-2 mb-2 font-heading font-bold text-lg text-[#0E1153]">
                  <span className="w-2 h-2 rounded-full bg-[#005F4C]" />
                  <span>Unfiltered Insights</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed">
                  Actionable qualitative feedback helps sharpen product positioning. We provide transparent audience reception reports highlighting buyer sentiment and conversion triggers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

