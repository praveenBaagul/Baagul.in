"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "1. What ecommerce platforms do you work with?",
    a: "We specialize in Shopify, WooCommerce (WordPress), and fully bespoke headless e-commerce builds (Next.js with Medusa or Shopify Storefront API). We select the platform based purely on your SKU volume, transaction concurrency, and operational workflows.",
  },
  {
    q: "2. How long does it take to build an ecommerce website?",
    a: "A standard branded storefront sprint typically completes within 3 to 4 weeks. High-complexity headless builds with ERP pipelines and multi-location logistics integration take between 6 to 8 weeks.",
  },
  {
    q: "3. Will my ecommerce store be mobile-friendly?",
    a: "Yes. Every storefront is engineered mobile-first with touch-optimized 1-click cart flows, instant image compression, and responsive checkout sheets.",
  },
  {
    q: "4. Do you integrate payment gateways and shipping systems?",
    a: "Yes. We configure multi-rail checkout gateways including Razorpay, Stripe, PayU, and Cashfree, along with shipping automation via Shiprocket, Delhivery, and custom WMS APIs.",
  },
  {
    q: "5. Can you help with SEO and performance optimization?",
    a: "Every store includes semantic schema markup, optimized product taxonomy, automated Google Merchant Center feeds, and sub-second Core Web Vitals out of the box.",
  },
  {
    q: "6. Do you provide post-launch support and maintenance?",
    a: "Yes. We offer continuous monthly growth pods covering security patches, conversion rate optimization (CRO), speed audits, and seasonal sales campaign management.",
  },
];

export default function EcommerceFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="w-full py-24 px-4 sm:px-12 bg-[#FEF9ED] text-[#0E1153] border-t-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Heading & Inquiries */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#FFBA45] shadow-[1px_1px_0px_#0E1153]" />
              <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#0E1153]">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl text-[#0E1153] leading-tight mb-4">
              Everything You Need to Know About Our Ecommerce Solutions
            </h2>

            <div className="p-6 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[4px_4px_0px_#0E1153] mt-4 w-full">
              <span className="font-heading text-xl font-bold text-[#0E1153] block mb-1">
                Still curious?
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#3E4945] mb-4">
                Have architectural constraints or customized requirements not listed here?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFBA45] border border-[#0E1153] text-xs font-bold uppercase tracking-wider text-[#0E1153] shadow-[2px_2px_0px_#0E1153]"
              >
                <span>Connect Us</span>
                <span>↗</span>
              </Link>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {faqs.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`border-2 border-[#0E1153] rounded-xl transition-all ${
                    isOpen
                      ? "bg-[#FFFFFF] p-6 shadow-[4px_4px_0px_#FFBA45]"
                      : "bg-[#FEF9ED] p-5 hover:bg-[#FFFFFF] shadow-[2px_2px_0px_#0E1153]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left font-heading text-lg sm:text-xl text-[#0E1153] font-bold"
                  >
                    <span>{item.q}</span>
                    <span className="text-xl text-[#C8553D] shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="font-sans text-sm text-[#3E4945] leading-relaxed mt-4 pt-4 border-t border-[#0E1153]/15">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

