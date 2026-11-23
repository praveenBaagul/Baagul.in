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
    q: "Why choose a custom WordPress website instead of a pre-made theme?",
    a: "Pre-made themes often bundle features you don't need, extra code and third-party dependencies that slow pages down and add security risk. A custom WordPress theme includes only what your site needs, which keeps it faster, easier to edit and simpler to maintain.",
  },
  {
    q: "How much does WordPress website development cost in Bangalore?",
    a: "The cost depends on the number of pages, the design, custom features and integrations such as forms, CRMs or WooCommerce. We share a fixed-price proposal with clear deliverables before we start, with no hidden costs.",
  },
  {
    q: "How long does it take to develop a WordPress website?",
    a: "A typical 5–10 page business website takes around 3 to 6 weeks from kickoff to launch, covering design, development, content setup and testing. Larger sites, custom integrations and migrations take longer, and we agree a timeline in your proposal.",
  },
  {
    q: "Can you redesign my existing WordPress website without losing SEO rankings?",
    a: "Yes. We keep your existing URLs wherever possible, set up 301 redirects for any that change, and carry over page titles, meta descriptions and content, so search engines can transfer your rankings to the new design. We also check the site in Google Search Console after launch.",
  },
  {
    q: "Do you provide WordPress website speed optimization?",
    a: "Yes. For new and existing sites we optimize images, caching, fonts and scripts, remove unnecessary plugins, and improve Core Web Vitals. We measure speed before and after so you can see the difference; results depend on your hosting and content.",
  },
  {
    q: "Will my website be secure?",
    a: "We harden every WordPress site: secure configuration, limited admin access, firewall protection, trusted plugins only, and regular core and plugin updates. No website can be guaranteed 100% secure, which is why we recommend an ongoing maintenance plan with monitoring and backups.",
  },
  {
    q: "Will my team be able to update content easily without coding?",
    a: "Yes. We build custom block patterns into the WordPress Gutenberg editor, so your team can create, edit and rearrange pages using your brand's design without breaking the layout.",
  },
  {
    q: "Can you migrate my website from another CMS to WordPress?",
    a: "Yes. We move your pages, blog posts, images and metadata, keep or redirect your existing URLs with 301 redirects, and plan the switchover to keep downtime to a minimum. What else can move, such as user accounts, depends on the platform you are moving from, and we confirm it before we start.",
  },
  {
    q: "Do you provide ongoing maintenance and security updates?",
    a: "Yes. Our monthly WordPress maintenance plans cover core, theme and plugin updates, off-site backups, uptime monitoring and security checks.",
  },
  {
    q: "Can you integrate CRM, ERP and payment systems?",
    a: "Yes. We connect WordPress with REST and GraphQL APIs and tools such as HubSpot, Salesforce, Stripe and Razorpay, as well as inventory and business systems.",
  },
];

export default function WordPressFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#E1E3F7] text-[#0E1153] border-b-2 border-[#0E1153]">
      <JsonLd data={faqSchema(faqs)} />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading & Contact Box (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-[#005F4C]">
            <span className="w-2.5 h-2.5 bg-[#FFA800]" />
            <span>KNOWLEDGE BASE // FREQUENT INQUIRIES</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl text-[#0E1153] leading-tight mb-6">
            Frequently Asked Questions About WordPress Development
          </h2>

          <div className="p-6 bg-[#FFA800] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] w-full">
            <h4 className="font-heading text-xl font-bold text-[#0E1153] mb-2">
              Need a custom quote?
            </h4>
            <p className="font-sans text-xs text-[#0E1153]/90 leading-relaxed mb-4">
              Have custom integrations or a large site to migrate? Talk with our WordPress team.
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

