import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export default function EcommerceHero() {
  return (
    <section className="relative w-full bg-[#0E1153] text-[#FEF9ED] pt-10 pb-20 px-4 sm:px-12 border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Top Running Stitch Strip */}
        <div className="w-full border-t-2 border-dashed border-[#FFBA45]/40 mb-10" aria-hidden="true" />

        {/* Breadcrumb row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-mono">
          <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[#FEF9ED]/70">
            <Link href="/" className="hover:text-[#FFBA45] transition-colors">
              HOME
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#FFBA45] transition-colors">
              OUR SERVICES
            </Link>
            <span>/</span>
            <span className="text-[#FFBA45]">E-COMMERCE SOLUTIONS</span>
          </div>
          {/* <span className="text-[#FEF9ED]/50 uppercase">
            SERVICE REF: BGL-ECOM-04
          </span> */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left: 5 Columns */}
          <div className="lg:col-span-5 flex flex-col items-start z-10">

            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#FFBA45] shadow-[1px_1px_0px_#0E1153]" />
              <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#FFBA45]">
                OUR SERVICE
              </span>
            </div>

            <h1 className="font-heading text-5xl sm:text-7xl lg:text-[76px] leading-[1.05] tracking-tight text-[#FEF9ED] mb-6">
              <span>E-Commerce</span>
              <br />
              <span className="relative inline-block mt-1">
                <span className="bg-[#FFBA45] text-[#0E1153] px-3 py-0.5 rounded-[2px] border-2 border-[#0E1153] drop-shadow-[4px_4px_0px_#FEF9ED] inline-block font-heading">
                  &lt;Solutions&gt;
                </span>
              </span>
            </h1>

            <p className="font-sans text-lg sm:text-xl text-[rgba(191,201,195,0.9)] max-w-xl leading-relaxed mb-8">
              Building secure, scalable, and high-performing online stores that convert.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FFBA45] text-[#0E1153] font-bold text-sm border-2 border-[#0E1153] shadow-[4px_4px_0px_#FEF9ED] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#FEF9ED] transition-all"
              >
                <span>Enroll our Service</span>
                <span className="text-sm">→</span>
              </Link>

              <a
                href="#works"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-transparent text-[#FEF9ED] font-bold text-sm border-2 border-[#FEF9ED] shadow-[4px_4px_0px_#FEF9ED] hover:bg-[#FEF9ED]/10 transition-colors"
              >
                <span>See our works</span>
                <span className="text-xs">↗</span>
              </a>
            </div>

            {/* Skill card widget */}
            <div className="w-full max-w-lg p-5 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-xl shadow-[6px_6px_0px_#FFBA45] flex flex-col gap-4 text-[#0E1153]">
              <div className="flex items-center justify-between pb-3 border-b border-[#0E1153]/15">
                <h3 className="font-serif text-lg font-bold text-[#0E1153]">
                  Elevate Your Brand Identity
                </h3>
                <span className="text-[#005F4C] text-lg font-bold">✦</span>
              </div>

              <div className="flex flex-col gap-3">
                {/* Progress 1 */}
                <div>
                  <div className="flex justify-between items-center text-[10px] font-mono font-bold uppercase tracking-wider text-[#3E4945] mb-1">
                    <span>STRATEGIC VISUALS</span>
                    <span className="text-[#0E1153]">87%</span>
                  </div>
                  <div className="w-full h-2 rounded bg-[#0E1153]/10 overflow-hidden">
                    <div className="h-full bg-[#005F4C] rounded" style={{ width: "87%" }} />
                  </div>
                </div>

                {/* Progress 2 */}
                <div>
                  <div className="flex justify-between items-center text-[10px] font-mono font-bold uppercase tracking-wider text-[#3E4945] mb-1">
                    <span>CUSTOM DESIGNS</span>
                    <span className="text-[#0E1153]">76%</span>
                  </div>
                  <div className="w-full h-2 rounded bg-[#0E1153]/10 overflow-hidden">
                    <div className="h-full bg-[#FFBA45] rounded" style={{ width: "76%" }} />
                  </div>
                </div>

                {/* Progress 3 */}
                <div>
                  <div className="flex justify-between items-center text-[10px] font-mono font-bold uppercase tracking-wider text-[#3E4945] mb-1">
                    <span>FAST DELIVERY WITH REVISION SUPPORT</span>
                    <span className="text-[#0E1153]">60%</span>
                  </div>
                  <div className="w-full h-2 rounded bg-[#0E1153]/10 overflow-hidden">
                    <div className="h-full bg-[#C8553D] rounded" style={{ width: "60%" }} />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right: 7 Columns - Multi-Device Interactive Dashboard (Expanded Scale) */}
          <div className="lg:col-span-7 flex flex-col justify-center items-center relative">
            {/* Subtle ambient backdrop glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFBA45]/15 via-transparent to-[#005F4C]/25 rounded-3xl blur-2xl pointer-events-none -z-0" />

            <div className="relative w-full max-w-2xl lg:max-w-[760px] xl:max-w-[820px] z-10 transition-transform duration-300 hover:scale-[1.01]">
              <div className="relative w-full aspect-[1170/885] drop-shadow-[0_25px_45px_rgba(0,0,0,0.7)]">
                <Image
                  src="/assets/ecommerce-animated-dashboard.svg"
                  alt="Baagul Studio E-Commerce Live Analytics Dashboard - Tablet & Mobile Interactive Experience"
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 820px"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Decorative Blueprint Strip */}
        <div className="mt-12 text-center text-[11px] font-mono text-[#FEF9ED] uppercase tracking-widest opacity-80">
          + + + DIGITAL COMMERCE BLUEPRINT + + +
        </div>
      </div>
    </section>
  );
}
