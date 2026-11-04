"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Why should I choose a custom WordPress website instead of a pre-made theme?",
    a: "Pre-made themes are overloaded with unnecessary features, slow code, and third-party dependencies that destroy Core Web Vitals and expose security vulnerabilities. Our custom-coded WordPress sites include only the exact features you require, ensuring sub-second load times and effortless editing.",
  },
  {
    q: "Will my website be fast and secure against hacking attempts?",
    a: "Yes. Every WordPress website we build is hardened with enterprise security directives, XML-RPC disablement, secure database table prefixes, and zero vulnerability plugins. Combined with proper caching and clean PHP code, your site easily scores 90+ on Google PageSpeed Insights.",
  },
  {
    q: "Will my team be able to update content easily without coding?",
    a: "Absolutely. We build custom block patterns directly into the WordPress Gutenberg editor. Your marketing team can visually craft, edit, and reorganize landing pages using your exact design tokens without breaking layout integrity.",
  },
  {
    q: "Can you migrate our existing store or blog to modern WordPress?",
    a: "Yes. We handle complete zero-downtime database migrations, preserving all historical blog posts, URLs, 301 redirects, customer accounts, and metadata.",
  },
  {
    q: "Do you provide ongoing maintenance and security updates?",
    a: "Yes. We offer continuous monthly growth and security pods covering managed WordPress core and plugin updates, automated off-site backups, and uptime monitoring.",
  },
  {
    q: "Can you integrate custom CRM, ERP, and payment APIs?",
    a: "Yes. We regularly connect WordPress with custom REST APIs, GraphQL endpoints, HubSpot, Salesforce, Stripe, Razorpay, and enterprise inventory management backends.",
  },
];

export default function WordPressFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#E1E3F7] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading & Contact Box (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-[#005F4C]">
            <span className="w-2.5 h-2.5 bg-[#FFA800]" />
            <span>KNOWLEDGE BASE // FREQUENT INQUIRIES</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl text-[#0E1153] leading-tight mb-6">
            Everything You Need to Know About Our WordPress Website Development Services
          </h2>

          <div className="p-6 bg-[#FFA800] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] w-full">
            <h4 className="font-heading text-xl font-bold text-[#0E1153] mb-2">
              Need a custom quote?
            </h4>
            <p className="font-sans text-xs text-[#0E1153]/90 leading-relaxed mb-4">
              Have unique API requirements or a high-traffic WooCommerce store? Talk with our WordPress architect.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-xs border border-[#0E1153] shadow-[2px_2px_0px_#FFFFFF] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <span>Schedule Strategy Call</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Accordion (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-xl shadow-[4px_4px_0px_#0E1153] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 flex items-center justify-between text-left gap-4 font-heading text-base sm:text-lg font-bold hover:bg-[#FAF8F5] transition-colors"
                >
                  <span className="leading-snug">{item.q}</span>
                  <span className="w-7 h-7 rounded-lg bg-[#EDE8DC] border border-[#0E1153] flex items-center justify-center text-xs font-mono flex-shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed border-t border-[#0E1153]/15">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

