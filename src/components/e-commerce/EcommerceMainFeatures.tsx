import React from "react";
import Link from "next/link";

interface FeatureCard {
  number: string;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  textColor: string;
  descColor: string;
  iconBg: string;
  iconColor: string;
  numColor: string;
}

const mainFeatures: FeatureCard[] = [
  {
    number: "01",
    title: "Custom Online Store Design",
    description: "Online store design built around your products, your brand and how your customers shop.",
    icon: "✏️",
    bgColor: "bg-[#FFFFFF]",
    textColor: "text-[#0E1153]",
    descColor: "text-[#3E4945]",
    iconBg: "bg-[#EDE8DC]",
    iconColor: "text-[#005F4C]",
    numColor: "text-[#005F4C]",
  },
  {
    number: "02",
    title: "Mobile Responsiveness",
    description: "Mobile-first layouts with easy thumb navigation and fast-loading pages on phones.",
    icon: "📱",
    bgColor: "bg-[#CFE8DC]",
    textColor: "text-[#0E1153]",
    descColor: "text-[#3E4945]",
    iconBg: "bg-[#FFFFFF]",
    iconColor: "text-[#005F4C]",
    numColor: "text-[#005F4C]",
  },
  {
    number: "03",
    title: "Shopping Cart & Checkout",
    description: "Streamlined checkout with upsells, order bumps and the payment methods your customers prefer.",
    icon: "🛒",
    bgColor: "bg-[#F5A800]",
    textColor: "text-[#0E1153]",
    descColor: "text-[#0E1153]/85",
    iconBg: "bg-[#FFFFFF]",
    iconColor: "text-[#0E1153]",
    numColor: "text-[#0E1153]",
  },
  {
    number: "04",
    title: "Order & Shipping Management",
    description: "Shipping and courier integrations, order tracking and automated order notifications for customers.",
    icon: "📦",
    bgColor: "bg-[#CFE8DC]",
    textColor: "text-[#0E1153]",
    descColor: "text-[#3E4945]",
    iconBg: "bg-[#FFFFFF]",
    iconColor: "text-[#005F4C]",
    numColor: "text-[#005F4C]",
  },
  {
    number: "05",
    title: "Analytics & Reporting",
    description: "Sales, traffic and conversion reporting with e-commerce tracking, so you can see what sells.",
    icon: "📈",
    bgColor: "bg-[#F5A800]",
    textColor: "text-[#0E1153]",
    descColor: "text-[#0E1153]/85",
    iconBg: "bg-[#FFFFFF]",
    iconColor: "text-[#0E1153]",
    numColor: "text-[#0E1153]",
  },
  {
    number: "06",
    title: "Scalability",
    description: "Store architecture that grows with your catalogue and traffic, from a first store to headless commerce.",
    icon: "🚀",
    bgColor: "bg-[#FFFFFF]",
    textColor: "text-[#0E1153]",
    descColor: "text-[#3E4945]",
    iconBg: "bg-[#EDE8DC]",
    iconColor: "text-[#005F4C]",
    numColor: "text-[#005F4C]",
  },
];

export default function EcommerceMainFeatures() {
  return (
    <section className="w-full py-20 px-4 sm:px-12 bg-[#FEF9ED] text-[#0E1153] border-t-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (5 Cols): Typography & CTA Button */}
          <div className="lg:col-span-5 flex flex-col items-start">
            
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 bg-[#005F4C]" />
              <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#005F4C]">
                MAIN FEATURES
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-[46px] text-[#0E1153] leading-[1.12] mb-6 tracking-tight">
              Custom E-Commerce
              <br />
              Website Development
              <br />
              Solutions
            </h2>

            {/* Subtext */}
            <p className="font-sans text-sm sm:text-base text-[#3E4945] leading-relaxed mb-8 max-w-md">
              A user-friendly, branded online store built around your products and customers, with a smooth path from product page to checkout. Need a business website without a store? See our{" "}
              <Link href="/services/web-design" className="font-bold text-[#005F4C] underline underline-offset-2 hover:text-[#0E1153]">
                website design and development services
              </Link>
              .
            </p>

            {/* Navy CTA Button with Yellow Shadow */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#0E1153] text-[#FEF9ED] font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#FFBA45] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FFBA45] transition-all"
            >
              <span>Enroll our Service</span>
              <span className="text-sm">→</span>
            </Link>

          </div>

          {/* Right Column (7 Cols): 2x3 Grid of Feature Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {mainFeatures.map((f) => (
                <div
                  key={f.number}
                  className={`p-6 rounded-2xl border-2 border-[#0E1153] shadow-[5px_5px_0px_#0E1153] hover:-translate-y-1 hover:shadow-[7px_7px_0px_#0E1153] transition-all flex flex-col justify-between ${f.bgColor}`}
                >
                  <div>
                    {/* Card Top: Icon Box + Top-Right Number */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl border border-[#0E1153]/30 flex items-center justify-center text-base ${f.iconBg}`}>
                        <span>{f.icon}</span>
                      </div>
                      <span className={`font-mono text-xs font-bold ${f.numColor}`}>
                        {f.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className={`font-heading text-lg sm:text-xl font-bold mb-2 leading-snug ${f.textColor}`}>
                      {f.title}
                    </h3>

                    {/* Description */}
                    <p className={`font-sans text-xs leading-relaxed ${f.descColor}`}>
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
