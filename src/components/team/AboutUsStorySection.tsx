import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

const studioPillars = [
  {
    number: "01",
    tag: "THE BENGALURU DNA",
    title: "Operating from HSR Layout",
    description:
      "Headquartered at Hustlehub Tech Park in Bengaluru's primary startup corridor. Our team works under one roof, ensuring immediate cross-functional collaboration between engineering, search, and design.",
    color: "bg-canvas-card",
    accent: "text-peacock",
  },
  {
    number: "02",
    tag: "SENIOR ARCHITECTURE",
    title: "Direct-to-Practitioner Model",
    description:
      "We eliminated account managers and agency middle layers. When you partner with Baagul, you collaborate directly with senior leads who have 8+ years hands-on production experience.",
    color: "bg-canvas-card",
    accent: "text-terracotta",
  },
  {
    number: "03",
    tag: "CODE MEETS CONVERSION",
    title: "Engineering-First Growth",
    description:
      "Digital growth is not guesswork. We treat SEO and web performance like structural engineering: clean Next.js server architectures, programmatic schema, and crawl budgets optimized for compounding returns.",
    color: "bg-canvas-card",
    accent: "text-indigo-main",
  },
  {
    number: "04",
    tag: "FULL-FUNNEL SYNERGY",
    title: "Search, Media & Brand Alignment",
    description:
      "From high-intent organic ranking to disciplined Google/Meta media buying and high-converting UI/UX design, every channel is engineered to reinforce the other rather than operate in silos.",
    color: "bg-canvas-card",
    accent: "text-peacock",
  },
];

const studioStats = [
  { label: "YEARS ESTABLISHED", value: "6+", highlight: "BENGALURU CORRIDOR" },
  { label: "DEPLOYED PLATFORMS", value: "40+", highlight: "ZERO TEMPLATE BLOAT" },
  { label: "PAID MEDIA MANAGED", value: "₹40Cr+", highlight: "ATTRIBUTED ROI" },
  { label: "AVG LIGHTHOUSE SCORE", value: "99+", highlight: "SUB-SECOND FCP" },
];

export default function AboutUsStorySection() {
  return (
    <section id="about" className="w-full py-16 sm:py-20 px-4 sm:px-12 max-w-7xl mx-auto scroll-mt-24">
      {/* Top Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 pb-8 border-b-2 border-indigo-main/15">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-marigold shadow-[1px_1px_0px_#121a4a]" />
            <span className="font-mono font-bold text-xs uppercase tracking-[0.25em] text-terracotta">
              01 // ABOUT BAAGUL STUDIO
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-indigo-main tracking-tight leading-tight">
            Architectural growth &amp; web engineering.
          </h2>
        </div>

        <div className="flex items-center gap-3 px-4 py-2 bg-indigo-navy text-canvas rounded-xl border border-indigo-main shadow-[3px_3px_0px_#f5a800] shrink-0 self-start md:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs font-bold tracking-wider text-canvas/90">
            HSR LAYOUT · BENGALURU STUDIO
          </span>
        </div>
      </div>

      {/* Main Narrative Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start">
        {/* Left Column: The Studio Thesis (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="p-6 sm:p-8 bg-[#121a4a] text-canvas border-2 border-indigo-main rounded-2xl shadow-[6px_6px_0px_#f5a800] relative overflow-hidden">
            {/* Subtle Kasuti corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-marigold/15 to-transparent pointer-events-none" />

            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-marigold block mb-3">
              THE STUDIO THESIS
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl text-canvas leading-snug mb-4">
              Why traditional agency models fail modern high-growth brands.
            </h3>
            <p className="font-sans text-sm sm:text-base text-canvas/80 leading-relaxed mb-4">
              Traditional marketing agencies sell retainers packed with junior staff and vanity metrics. On the other side, standard development shops build websites without understanding conversion funnels or algorithmic search crawlers.
            </p>
            <p className="font-sans text-sm sm:text-base text-canvas/80 leading-relaxed mb-6">
              Baagul was founded in Bengaluru to eliminate that divide. We treat growth marketing and web engineering as a single, unified discipline.
            </p>

            <div className="pt-4 border-t border-canvas/15 flex items-center justify-between text-xs font-mono text-marigold font-bold">
              <span>EST. 2020 · BENGALURU</span>
              <span>100% IN-HOUSE</span>
            </div>
          </div>

          {/* Quick Contact & Studio Coordinates Card */}
          <div className="p-6 bg-canvas-card border-2 border-indigo-main rounded-2xl shadow-[5px_5px_0px_#121a4a]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-peacock block mb-2">
              STUDIO LOCATION &amp; CONTACT
            </span>
            <p className="font-sans text-sm text-slate-text leading-relaxed mb-4">
              2nd Floor, Hustlehub Tech Park, 27th Main Rd, Sector 4, HSR Layout, Bengaluru, Karnataka 560102
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-indigo-main/15 text-xs font-mono font-bold">
              <a
                href="tel:+916205697634"
                className="text-indigo-main hover:text-terracotta transition-colors flex items-center gap-1.5"
              >
                <span>📞</span>
                <span>+91 62056 97634</span>
              </a>
              <span className="text-indigo-main/30">|</span>
              <a
                href="mailto:support@baagul.in"
                className="text-indigo-main hover:text-terracotta transition-colors flex items-center gap-1.5"
              >
                <span>✉</span>
                <span>support@baagul.in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Core Pillars Grid (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {studioPillars.map((pillar) => (
            <div
              key={pillar.number}
              className={`p-6 sm:p-7 ${pillar.color} border-2 border-indigo-main rounded-2xl shadow-[5px_5px_0px_#121a4a] hover:-translate-y-1 hover:shadow-[7px_7px_0px_#f5a800] transition-all duration-200 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-xs font-bold uppercase tracking-wider ${pillar.accent}`}>
                    {pillar.tag}
                  </span>
                  <span className="font-mono text-sm font-extrabold text-indigo-main/40">
                    {pillar.number}
                  </span>
                </div>
                <h4 className="font-heading text-xl text-indigo-main font-bold mb-2.5 leading-snug">
                  {pillar.title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-slate-text leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-indigo-main/10 flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase text-indigo-main/70">
                  VERIFIED STANDARD
                </span>
                <span className="w-2 h-2 rounded-full bg-marigold" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Metrics & Impact Strip */}
      <div className="w-full bg-canvas-card border-2 border-indigo-main rounded-2xl shadow-[6px_6px_0px_#121a4a] p-6 sm:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-indigo-main/15">
          {studioStats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col justify-center ${idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}
            >
              <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-indigo-main tracking-tight leading-none mb-2">
                {stat.value}
              </span>
              <span className="font-mono text-[11px] sm:text-xs font-bold text-indigo-main/90 uppercase tracking-wider mb-1">
                {stat.label}
              </span>
              <span className="text-[10px] font-mono font-semibold text-peacock uppercase tracking-widest">
                {stat.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Transition to Team Roster Banner */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-marigold/20 border-2 border-dashed border-indigo-main rounded-xl">
        <div className="flex items-center gap-3">
          <span className="text-xl">👥</span>
          <div>
            <span className="font-heading font-bold text-sm text-indigo-main block">
              Meet the specialists behind the work
            </span>
            <span className="text-xs text-slate-text">
              Senior engineers, search strategists, and brand craft directors.
            </span>
          </div>
        </div>

        <a
          href="#team"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-main text-canvas text-xs font-bold font-mono uppercase tracking-wider shadow-[3px_3px_0px_#f5a800] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#f5a800] transition-all shrink-0"
        >
          <span>View Team Roster</span>
          <ArrowRightIcon className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
