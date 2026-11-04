import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Team & Practitioners · Baagul Marketing LLP",
  description:
    "Meet the senior practitioners behind Baagul Marketing LLP in HSR Layout, Bengaluru. High-performance SEO specialists, growth engineers, media buyers, and brand craft directors.",
};

const workingPrinciples = [
  {
    number: "01",
    title: "Direct Access to Practitioners",
    description:
      "You work directly with the strategists, engineers, and creatives executing your project. Zero junior intermediaries or account management telephone games.",
  },
  {
    number: "02",
    title: "Architectural & Technical Rigor",
    description:
      "We treat SEO, funnel design, and code architecture with the discipline of structural engineering. Everything is backed by crawl diagnostics and live metrics.",
  },
  {
    number: "03",
    title: "HSR Layout Studio Collective",
    description:
      "Our team operates under one roof in Sector 4, HSR Layout, Bengaluru, ensuring tight cross-functional synergy between organic search, paid media, and design.",
  },
  {
    number: "04",
    title: "Skin in the Game",
    description:
      "We partner selectively with brands where our technical interventions drive direct compounding revenue, backed by transparent sprint roadmaps.",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-indigo-main antialiased selection:bg-marigold selection:text-indigo-main">
      <Header />

      <main className="flex-1 flex flex-col">
        {/* Page Hero Section */}
        <section className="w-full pt-16 pb-12 px-4 sm:px-12 max-w-7xl mx-auto border-b border-indigo-main/15">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-marigold shadow-[1px_1px_0px_#121a4a]" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-terracotta">
              STUDIO COLLECTIVE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-indigo-main leading-tight mb-6">
                Engineers, strategists &amp; craft directors.
              </h1>
              <p className="font-sans text-base sm:text-lg text-slate-text max-w-2xl leading-relaxed">
                We are a senior-heavy studio based in HSR Layout, Bengaluru. No account managers,
                no agency bureaucracy. Just specialists who build, optimize, and scale market leaders.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <div className="p-5 bg-canvas-card border-2 border-indigo-main rounded-xl shadow-[4px_4px_0px_#121a4a]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-peacock font-bold block mb-1">
                  STUDIO MODEL
                </span>
                <span className="font-heading text-2xl text-indigo-main font-bold block">
                  100% Senior Hands
                </span>
                <span className="text-xs text-slate-text mt-1 block">
                  Average 8+ years hands-on production experience per lead.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Team Roster Component */}
        <TeamSection />

        {/* Studio Operating Principles */}
        <section className="w-full py-20 px-4 sm:px-12 max-w-7xl mx-auto border-t border-indigo-main/15">
          <div className="mb-14">
            <span className="font-mono font-bold text-xs uppercase tracking-widest text-peacock block mb-2">
              HOW WE OPERATE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-indigo-main">
              Our Working Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workingPrinciples.map((item) => (
              <div
                key={item.number}
                className="p-8 bg-canvas-card border-2 border-indigo-main rounded-2xl shadow-[5px_5px_0px_#121a4a] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-terracotta block mb-3">
                    {item.number}
                  </span>
                  <h3 className="font-heading text-xl text-indigo-main mb-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-slate-text leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Careers & Collaboration Band */}
        <section className="w-full py-16 px-4 sm:px-12 bg-indigo-main text-canvas border-t-2 border-indigo-main">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-marigold font-bold block mb-2">
                JOIN THE COLLECTIVE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-canvas mb-2">
                Want to build with us in Bengaluru?
              </h2>
              <p className="font-sans text-sm text-canvas/80 max-w-xl">
                We are always looking for exceptional engineers, freelance video editors, and technical writers.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/career"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-marigold text-indigo-dark font-bold text-xs uppercase tracking-wider border border-canvas shadow-[3px_3px_0px_#f8f2e4] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#f8f2e4] transition-all"
              >
                <span>View Open Roles</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-canvas text-indigo-main font-bold text-xs uppercase tracking-wider border border-canvas hover:bg-canvas-card transition-colors"
              >
                <span>Schedule a Call</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

