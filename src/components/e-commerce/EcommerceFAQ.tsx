"use client";

import React, { useState } from "react";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/structured-data";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "1. What e-commerce platforms do you work with?",
    a: "We build on Shopify, WooCommerce (WordPress) and custom headless e-commerce with Next.js on Medusa or the Shopify Storefront API. We recommend a platform based on your product catalogue, order volume and how your team works.",
  },
  {
    q: "2. Shopify or WooCommerce: which is better for my online store?",
    a: "Shopify is a hosted platform that is quick to launch and easy to run, with a monthly subscription. WooCommerce runs on WordPress, gives you more control over hosting, content and customisation, and suits businesses that already use WordPress. We explain the trade-offs for your business before you decide.",
  },
  {
    q: "3. How much does e-commerce website development cost?",
    a: "The cost depends on the platform, the number of products and pages, custom features, and integrations such as payment gateways, shipping or ERP systems. We share a fixed-price proposal with clear deliverables before we start, with no hidden costs.",
  },
  {
    q: "4. How long does it take to build an e-commerce website?",
    a: "A standard branded storefront typically takes 3 to 4 weeks. Complex headless builds with ERP and multi-location logistics integrations take 6 to 8 weeks.",
  },
  {
    q: "5. Can you migrate my existing online store to a new platform?",
    a: "Yes. We plan the migration with you, move your products and content, and set up redirects from old URLs so you keep your existing search rankings. What else can move, such as customer accounts and order history, depends on the platforms involved, and we confirm it before we start.",
  },
  {
    q: "6. Will my e-commerce store be mobile-friendly?",
    a: "Yes. Every storefront is designed mobile-first, with touch-friendly navigation, optimized images and a responsive checkout.",
  },
  {
    q: "7. Do you integrate payment gateways and shipping systems?",
    a: "Yes. We integrate payment gateways including Razorpay, Stripe, PayU and Cashfree, and shipping services such as Shiprocket and Delhivery, or your own warehouse system through its API.",
  },
  {
    q: "8. Can you help with e-commerce SEO and site speed?",
    a: "Yes. We build stores with a clean product and category structure, product schema markup and fast-loading pages, and can set up Google Merchant Center product feeds. For ongoing organic growth, our SEO optimization services cover keyword research, content and technical SEO.",
  },
  {
    q: "9. Do you provide e-commerce website maintenance and support?",
    a: "Yes. Our monthly support plans cover security updates, speed checks, conversion rate optimization and help with seasonal sales campaigns.",
  },
];

export default function EcommerceFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="w-full py-24 px-4 sm:px-12 bg-[#FEF9ED] text-[#0E1153] border-t-2 border-[#0E1153]">
      <JsonLd data={faqSchema(faqs)} />
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
              Frequently Asked Questions About E-Commerce Development
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

