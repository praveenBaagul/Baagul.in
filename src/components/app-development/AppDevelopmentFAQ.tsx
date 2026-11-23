"use client";

import React, { useState } from "react";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/structured-data";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "01",
    question: "Should I build a native (Swift/Kotlin) app or cross-platform (Flutter/React Native)?",
    answer: "It depends on your requirements. If your app needs heavy hardware access, custom AR or on-device machine learning, or the most platform-specific feel, native Swift and Kotlin are the better fit. For most business, marketplace, SaaS and content apps, Flutter or React Native delivers smooth performance from a single codebase, which usually reduces development and maintenance effort compared with building two separate native apps.",
  },
  {
    id: "02",
    question: "How long does it take to design, develop, and launch an app?",
    answer: "A focused MVP generally takes 6 to 10 weeks from discovery to store submission. Larger enterprise applications with custom backend integrations, third-party payment gateways, and intricate workflows typically span 12 to 18 weeks broken into bi-weekly sprint deliverables.",
  },
  {
    id: "03",
    question: "Do you handle the Apple App Store and Google Play Store approvals?",
    answer: "Yes. We manage certificates, provisioning profiles, privacy manifests, store listing details, screenshots and compliance checks, and guide you through developer account registration. Final approval is always Apple's and Google's decision, but reviewing every release against their policies before submission reduces the risk of rejection, and we handle any reviewer feedback.",
  },
  {
    id: "04",
    question: "Can you build the backend APIs and cloud infrastructure as well?",
    answer: "Yes. Our team architects complete backend systems using Node.js, Next.js, Python, PostgreSQL, and serverless cloud architectures (AWS, Google Cloud, Supabase). We build secure REST, GraphQL, or gRPC endpoints equipped with caching and automated data backups.",
  },
  {
    id: "05",
    question: "Can our mobile application function offline?",
    answer: "Yes. We engineer offline-first data architectures using local SQLite databases, Room, and WatermelonDB. Users can browse content, edit data, and perform core actions without internet; changes automatically synchronize seamlessly once a connection is re-established.",
  },
  {
    id: "06",
    question: "What maintenance and post-launch support do you offer?",
    answer: "We offer ongoing maintenance packages covering annual iOS and Android OS updates, dependency upgrades, bug fixes, performance monitoring via Sentry and new feature releases, so your app stays fast and up to date.",
  },
  {
    id: "07",
    question: "How much does mobile app development cost in Bangalore?",
    answer: "The cost depends on the platforms, the number of screens and features, design complexity, backend and integrations such as payments, and whether you start with an MVP. We share a fixed-scope proposal with clear milestones and deliverables before development begins.",
  },
  {
    id: "08",
    question: "Do you develop both Android and iOS applications?",
    answer: "Yes. We build native Android apps in Kotlin, native iOS apps in Swift, and cross-platform apps with React Native or Flutter that run on both from one codebase. We recommend the approach that suits your features, budget and timeline.",
  },
  {
    id: "09",
    question: "Can you develop an MVP app for my startup?",
    answer: "Yes. We help you choose the core features, design a clickable prototype and build a focused MVP you can launch, test with real users and grow. A focused MVP generally takes 6 to 10 weeks from discovery to store submission.",
  },
  {
    id: "10",
    question: "What technologies do you use for mobile app development?",
    answer: "Swift and SwiftUI for iOS, Kotlin and Jetpack Compose for Android, React Native with TypeScript and Flutter for cross-platform apps, and Node.js, Python, PostgreSQL and cloud platforms such as AWS, Google Cloud and Supabase for backends.",
  },
  {
    id: "11",
    question: "Can you redesign or upgrade an existing mobile app?",
    answer: "Yes. We start with a review of your current app's code, design and analytics, then plan a redesign, performance improvements, new features or a move to a newer technology stack. Whether we improve the existing code or rebuild depends on its condition, and we explain the trade-offs first.",
  },
];

export default function AppDevelopmentFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="relative w-full bg-[#FEF9ED] border-b-2 border-[#0E1153] py-20 px-4 sm:px-8 lg:px-12">
      <JsonLd data={faqSchema(faqs.map((f) => ({ q: f.question, a: f.answer })))} />
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (4 cols): Sticky Info & Consultation Box */}
          <div className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-28">
            
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#FFBA45] border border-[#0E1153] shadow-[1px_1px_0px_#0E1153]" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold text-[#0E1153]">
                ■ FREQUENTLY ASKED QUESTIONS
              </span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl leading-[1.1] text-[#0E1153] mb-4">
              Frequently Asked Questions About Mobile App Development
            </h2>

            <p className="font-sans text-sm text-[#121A4A]/80 leading-relaxed mb-8">
              Straight answers about our app engineering process, timelines, technology stacks, and store policies.
            </p>

            {/* Need More Answers Card */}
            <div className="w-full bg-[#CFE8DC] border-2 border-[#0E1153] rounded-2xl p-6 shadow-[6px_6px_0px_#0E1153]">
              <span className="font-mono text-xs uppercase font-bold text-[#005F4C] tracking-wider block mb-2">
                HAVE A UNIQUE APP SPEC?
              </span>
              <h4 className="font-heading text-xl font-bold text-[#0E1153] mb-2">
                Talk with our Mobile Lead
              </h4>
              <p className="font-sans text-xs text-[#0E1153]/80 leading-relaxed mb-4">
                Schedule an engineering discovery call to discuss technical feasibility, budget, and platform architecture.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0E1153] hover:text-[#005F4C] transition-colors"
              >
                <span>Book Consultation</span>
                <span>→</span>
              </Link>
            </div>

          </div>

          {/* Right Column (8 cols): Accordion Items */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={faq.id}
                  className="bg-white border-2 border-[#0E1153] rounded-2xl shadow-[4px_4px_0px_#0E1153] overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-bold text-[#0E1153]/40">
                        {faq.id}
                      </span>
                      <span className="font-heading text-lg sm:text-xl font-bold text-[#0E1153] group-hover:text-[#0E7A63] transition-colors">
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`w-8 h-8 rounded-full border-2 border-[#0E1153] flex items-center justify-center font-mono text-base font-bold shrink-0 transition-transform duration-200 ${
                        isOpen ? "bg-[#FFBA45] rotate-45 text-[#0E1153]" : "bg-[#FEF9ED] text-[#0E1153]"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-[#0E1153]/10">
                      <p className="font-sans text-sm sm:text-base text-[#121A4A]/80 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
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

