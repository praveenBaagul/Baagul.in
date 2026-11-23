import React from "react";
import Link from "next/link";

interface Benefit {
  number: string;
  title: string;
  desc: string;
  bgColor: string;
}

const benefits: Benefit[] = [
  {
    number: "01",
    title: "Pages That Load Instantly",
    desc: "Server rendering, automatic image optimization, and smart caching keep pages fast on mobile data, so fewer visitors leave before your offer appears.",
    bgColor: "bg-[#FFFFFF]",
  },
  {
    number: "02",
    title: "Built for Search From Day One",
    desc: "Every page ships as clean HTML with metadata, sitemaps, and structured data, so Google can crawl, understand, and rank it.",
    bgColor: "bg-[#FFA800]",
  },
  {
    number: "03",
    title: "Grows Without a Rebuild",
    desc: "Reusable React components, TypeScript, and a headless CMS let you add pages, features, and integrations as your business grows.",
    bgColor: "bg-[#FFFFFF]",
  },
];

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Headless CMS"];

export default function WebDesignTechStack() {
  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#EAF5EF] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-[#005F4C]">
              <span className="w-2.5 h-2.5 bg-[#FFA800]" />
              <span>TECH STACK // WHY IT MATTERS</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-[#0E1153] leading-tight">
              Next.js &amp; React Website Development
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#3E4945] max-w-sm leading-relaxed">
            We build every website on Next.js and React instead of heavy themes and page builders. Here is what that means for your business.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className={`p-6 ${benefit.bgColor} border-2 border-[#0E1153] rounded-2xl shadow-[5px_5px_0px_#0E1153] flex flex-col`}
            >
              <span className="text-[10px] font-mono font-bold uppercase mb-4">
                BENEFIT {benefit.number}
              </span>
              <h3 className="font-heading text-xl font-bold mb-2 leading-snug">
                {benefit.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm opacity-90 leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stack Pills + CTA */}
        <div className="pt-6 border-t-2 border-dashed border-[#0E1153]/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <ul className="flex flex-wrap items-center gap-3" aria-label="Technologies we use">
            {stack.map((tech) => (
              <li
                key={tech}
                className="px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#0E1153] text-xs font-mono font-bold text-[#0E1153] shadow-[2px_2px_0px_#0E1153]"
              >
                {tech}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="self-start md:self-auto inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FFA800] transition-all"
          >
            <span>Discuss your project</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
