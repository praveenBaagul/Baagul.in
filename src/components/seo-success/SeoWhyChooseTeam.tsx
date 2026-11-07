import React from "react";

interface FeatureCard {
  number: string;
  title: string;
  headline: string;
  description: string;
  iconBg: string;
  iconColor: string;
  badge: string;
}

const features: FeatureCard[] = [
  {
    number: "01",
    title: "Get Found on Google",
    headline: "Improve your website's discoverability for relevant searches.",
    description:
      "We build robust technical crawl foundations, resolve indexing roadblocks, inject structured schema markup, and optimize Core Web Vitals so Google recognizes and prioritizes your content.",
    iconBg: "bg-[#FFBA45]",
    iconColor: "text-[#0E1153]",
    badge: "FOUNDATION // SERP",
  },
  {
    number: "02",
    title: "Attract Organic Customers",
    headline: "Reach people actively searching for your products or services.",
    description:
      "Target high-intent commercial keywords and question clusters mapped to actual buyer psychology. We attract real prospects with purchasing intent rather than empty vanity traffic.",
    iconBg: "bg-[#005F4C]",
    iconColor: "text-[#FEF9ED]",
    badge: "INTENT // TARGETING",
  },
  {
    number: "03",
    title: "Turn Searches Into Opportunities",
    headline: "Connect organic website visitors with your business.",
    description:
      "Organic visibility is only valuable when it converts. We optimize landing page hierarchy, trust signals, and direct call/WhatsApp touchpoints to turn clicks into booked consultations and revenue.",
    iconBg: "bg-[#C8553D]",
    iconColor: "text-[#FEF9ED]",
    badge: "CONVERSION // REVENUE",
  },
];

export default function SeoWhyChooseTeam() {
  return (
    <section className="w-full py-24 px-4 sm:px-8 lg:px-12 bg-[#E1E4FC] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#0E1153]/30 mb-4 text-xs font-mono font-bold uppercase tracking-widest text-[#0E1153]">
            <span className="w-2 h-2 rounded-full bg-[#005F4C]" />
            <span>DEDICATED SEARCH ARCHITECTURE</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#0E1153] tracking-tight leading-tight mb-4">
            No SEO Team? We&apos;ve Got You Covered.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#3E4945] leading-relaxed">
            From technical diagnostics to editorial backlinks and conversion architecture, our senior search engineers act as your full-stack growth department.
          </p>
        </div>

        {/* 3 Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {features.map((feat) => (
            <div
              key={feat.number}
              className="p-8 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[9px_9px_0px_#0E1153]"
            >
              <div>
                {/* Header: Number + Badge */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#0E1153]/15">
                  <span className={`w-10 h-10 rounded-xl ${feat.iconBg} ${feat.iconColor} border-2 border-[#0E1153] flex items-center justify-center font-heading font-black text-lg shadow-sm`}>
                    {feat.number}
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#3E4945] bg-[#EDE8DC] px-2.5 py-1 rounded">
                    {feat.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl font-bold text-[#0E1153] mb-3 leading-snug">
                  {feat.title}
                </h3>

                {/* Headline */}
                <p className="font-sans text-sm font-semibold text-[#005F4C] mb-4 leading-relaxed">
                  {feat.headline}
                </p>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed mb-6">
                  {feat.description}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-[#0E1153]/15 flex items-center justify-between text-xs font-mono font-bold text-[#0E1153]">
                <span>Stage Verified</span>
                <span className="text-[#005F4C]">✦ 100% Guaranteed Focus</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

