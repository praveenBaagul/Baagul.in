import React from "react";
import Image from "next/image";
import Link from "next/link";

interface WorkProject {
  id: string;
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
}

const projects: WorkProject[] = [
  {
    id: "01",
    tag: "LEGAL & CORPORATE",
    title: "Vanguard Law Group",
    description: "Enterprise headless WordPress portal built for a top-tier commercial litigation firm with custom practice area taxonomy and sub-second page performance.",
    imageSrc: "/assets/69bac.png",
    reverse: false,
  },
  {
    id: "02",
    tag: "DIRECTORY & TRAVEL",
    title: "Destination Discovery",
    description: "High-volume destination portal featuring bespoke WooCommerce booking funnels, multi-currency checkout, and real-time availability filters.",
    imageSrc: "/assets/642a3.png",
    reverse: true,
  },
  {
    id: "03",
    tag: "FINTECH & ADVISORY",
    title: "Apex Capital Advisory",
    description: "Bespoke corporate website engineered with custom Gutenberg blocks, dynamic interactive deal matrices, and hardened enterprise security standards.",
    imageSrc: "/assets/11282.png",
    reverse: false,
  },
];

export default function WordPressWorks() {
  return (
    <section id="works" className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#FAF8F5] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-[#005F4C]">
              <span className="w-2.5 h-2.5 bg-[#FFA800]" />
              <span>PORTFOLIO &amp; SHOWCASE</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-[#0E1153]">
              Some of Our Works
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#3E4945] max-w-sm leading-relaxed">
            Real client deployments built with bespoke code, passing Core Web Vitals with zero bloat.
          </p>
        </div>

        {/* 3 Showcase Items */}
        <div className="flex flex-col gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`p-6 sm:p-8 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                project.reverse ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Frame */}
              <div
                className={`w-full aspect-[16/10] bg-[#EDE8DC] border-2 border-[#0E1153] rounded-xl overflow-hidden relative shadow-[4px_4px_0px_#0E1153] ${
                  project.reverse ? "lg:col-span-7 lg:order-2" : "lg:col-span-7"
                }`}
              >
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Description */}
              <div
                className={`flex flex-col items-start ${
                  project.reverse ? "lg:col-span-5 lg:order-1" : "lg:col-span-5"
                }`}
              >
                <span className="px-2.5 py-1 rounded bg-[#FFA800] text-[#0E1153] text-[10px] font-mono font-bold uppercase border border-[#0E1153] mb-3">
                  {project.tag}
                </span>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0E1153] mb-3 leading-snug">
                  {project.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed mb-6">
                  {project.description}
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-xs border border-[#0E1153] shadow-[2px_2px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                  <span>View Case Study</span>
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

