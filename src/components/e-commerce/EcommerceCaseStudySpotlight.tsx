import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export default function EcommerceCaseStudySpotlight() {
  return (
    <section id="case-spotlight" className="w-full py-20 px-4 sm:px-12 max-w-7xl mx-auto border-t border-indigo-main/20">
      
      {/* Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 bg-marigold" />
          <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-indigo-main">
            CASE STUDY SPOTLIGHT
          </span>
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl text-indigo-main">
          Mysore Silk Co. · Global Storefront Rebuild
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left: Image showcase with stamp */}
        <div className="lg:col-span-7">
          <div className="relative p-4 bg-canvas-card border-2 border-indigo-main rounded-2xl shadow-[8px_8px_0px_#121a4a] overflow-hidden group">
            <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden border border-indigo-main/30">
              <Image
                src="/assets/e49c5.png"
                alt="Mysore Silk Co editorial e-commerce website showcase"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Metric badge stamp */}
            <div className="absolute bottom-6 right-6 bg-marigold border border-indigo-main px-4 py-2.5 rounded-lg shadow-[3px_3px_0px_#121a4a]">
              <span className="font-heading text-2xl font-bold text-indigo-main block">
                ₹4.8 Cr
              </span>
              <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-indigo-main/80">
                International GMV Delivered
              </span>
            </div>
          </div>
        </div>

        {/* Right: Narrative & results */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-marigold/20 text-terracotta border border-terracotta/30">
              HERITAGE COMMERCE · D2C EXPORT
            </span>
          </div>

          <h3 className="font-heading text-3xl font-bold text-indigo-main mb-4 leading-tight">
            Taking 85 years of artisanal weave craftsmanship to global buyers with headless Shopify.
          </h3>

          <p className="font-sans text-sm sm:text-base text-slate-text leading-relaxed mb-6">
            We designed an editorial shopping journey preserving the tactile dignity of authentic mulberry silk, coupled with high-converting catalog ads across USA and GCC expat audiences.
          </p>

          {/* Key metrics grid */}
          <div className="grid grid-cols-2 gap-4 w-full mb-8 pt-4 border-t border-indigo-main/15 font-mono">
            <div className="p-3 bg-canvas-card border border-indigo-main/20 rounded-lg">
              <span className="text-xl font-bold text-peacock block">+310%</span>
              <span className="text-[10px] text-slate-text uppercase">Mobile Conversions</span>
            </div>
            <div className="p-3 bg-canvas-card border border-indigo-main/20 rounded-lg">
              <span className="text-xl font-bold text-indigo-mid block">0.7s</span>
              <span className="text-[10px] text-slate-text uppercase">PageSpeed LCP</span>
            </div>
          </div>

          <blockquote className="p-4 bg-[#f8f5ee] border-l-4 border-marigold rounded text-xs italic text-slate-text mb-6">
            &ldquo;Most agencies run away when you mention technical SEO for 50,000 SKU catalogs. The Baagul team tore apart our indexation issues, rebuilt the taxonomy, and helped us achieve our biggest festive quarter in 85 years.&rdquo;
            <br />
            <span className="font-bold text-indigo-main not-italic mt-2 block font-sans">
              — Gayatri Devi Narasimhan, Managing Director
            </span>
          </blockquote>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-indigo-mid hover:text-terracotta transition-colors"
          >
            <span>Discuss your catalog migration</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

    </section>
  );
}

