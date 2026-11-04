import React from "react";
import Link from "next/link";

interface ServiceCard {
  number: string;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
  iconBg: string;
  iconText: string;
}

const cards: ServiceCard[] = [
  {
    number: "01",
    title: "Custom Theme Development",
    description: "Bespoke, lightweight WordPress themes hand-coded with modern PHP, clean HTML5 semantics, and native Gutenberg block patterns.",
    bgColor: "bg-[#005F4C]",
    textColor: "text-[#FEF9ED]",
    iconBg: "bg-[#FFFFFF]",
    iconText: "text-[#005F4C]",
  },
  {
    number: "02",
    title: "Speed & Core Web Vitals",
    description: "Rigorous performance engineering ensuring sub-second Largest Contentful Paint (LCP), minimal Cumulative Layout Shift, and fast interaction.",
    bgColor: "bg-[#FFA800]",
    textColor: "text-[#0E1153]",
    iconBg: "bg-[#0E1153]",
    iconText: "text-[#FEF9ED]",
  },
  {
    number: "03",
    title: "WooCommerce & E-Commerce",
    description: "Custom digital storefronts, friction-free checkout flows, subscription engines, and automated order fulfillment pipelines.",
    bgColor: "bg-[#CFE8DC]",
    textColor: "text-[#0E1153]",
    iconBg: "bg-[#FFFFFF]",
    iconText: "text-[#005F4C]",
  },
  {
    number: "04",
    title: "API & Headless Integrations",
    description: "Decoupled headless architectures pairing WordPress backend content management with high-speed Next.js frontend presentation layers.",
    bgColor: "bg-[#FFFFFF]",
    textColor: "text-[#0E1153]",
    iconBg: "bg-[#EDE8DC]",
    iconText: "text-[#0E1153]",
  },
];

export default function WordPressServicesGrid() {
  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#FEF9ED] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-[#005F4C]">
              <span className="w-2.5 h-2.5 bg-[#FFA800]" />
              <span>CAPABILITIES // 04 MODULES</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-[#0E1153]">
              Our Services
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#3E4945] max-w-sm leading-relaxed">
            From custom full-site editing themes to headless API architectures, we craft digital platforms built to convert and scale.
          </p>
        </div>

        {/* 2x2 Grid matching the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div
              key={card.number}
              className={`p-8 sm:p-10 rounded-2xl border-2 border-[#0E1153] ${card.bgColor} ${card.textColor} shadow-[8px_8px_0px_#0E1153] flex flex-col justify-between min-h-[300px] transition-transform hover:-translate-y-1`}
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-10 h-10 rounded-xl ${card.iconBg} ${card.iconText} border-2 border-[#0E1153] flex items-center justify-center font-bold text-lg shadow-[2px_2px_0px_#0E1153]`}>
                    ⚙
                  </div>
                  <span className="font-heading text-5xl font-black opacity-20">
                    {card.number}
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-4 leading-snug">
                  {card.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm opacity-90 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-current/20 flex items-center justify-between font-mono text-[11px] font-bold uppercase">
                <span>SERVICE REF: 0{card.number}</span>
                <Link href="/contact" className="hover:underline flex items-center gap-1">
                  <span>DISCUSS PROJECT</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

