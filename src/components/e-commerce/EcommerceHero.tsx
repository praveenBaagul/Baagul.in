import React from "react";
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
          <span className="text-[#FEF9ED]/50 uppercase">
            SERVICE REF: BGL-ECOM-04
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: 6 Columns */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            
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

          {/* Right: 6 Columns - Browser Window Mockup */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="w-full max-w-lg bg-[#FEF9ED] border-2 border-[#0E1153] rounded-xl shadow-[8px_8px_0px_#FFBA45] overflow-hidden flex flex-col text-[#0E1153]">
              
              {/* Window top bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#EDE8DC] border-b-2 border-[#0E1153] text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C8553D] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBA45] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#005F4C] inline-block" />
                </div>
                <span className="text-[11px] text-[#3E4945] font-bold">
                  store.baagul-clients.com/live
                </span>
                <span className="w-3" />
              </div>

              {/* Mockup content */}
              <div className="p-6 bg-[#FFFFFF] flex flex-col gap-5">
                
                {/* Product Card */}
                <div className="p-4 bg-[#F8F3E7] border-2 border-[#0E1153] rounded-xl shadow-[4px_4px_0px_#0E1153] flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-6 h-6 rounded-full bg-[#005F4C] text-[#FEF9ED] flex items-center justify-center text-xs font-bold font-serif">
                        B
                      </span>
                      <span className="font-heading font-bold text-sm text-[#0E1153]">
                        Nordic Clay Works
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#3E4945] uppercase tracking-wider">
                      SPRING RUN V2 · Artisan Stoneware Flagon
                    </span>
                    <span className="font-heading text-xl font-bold text-[#0E1153] block mt-1">
                      ₹3,450
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#99F4D7] text-[#005140] font-bold">
                      Checkout: +34.2%
                    </span>
                    <button className="px-3.5 py-1.5 rounded-lg bg-[#0E1153] text-[#FEF9ED] text-xs font-bold border border-[#0E1153] shadow-[2px_2px_0px_#C8553D]">
                      1-Click Buy
                    </button>
                  </div>
                </div>

                {/* Cart Telemetry Badges */}
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 bg-[#E7E2D6] border border-[#0E1153]/30 rounded-lg">
                    <span className="text-[9px] text-[#3E4945] uppercase font-bold block">CART FLOW</span>
                    <span className="font-heading text-xl font-bold text-[#005F4C] block">99.4%</span>
                    <span className="text-[10px] text-[#3E4945]">Uptime SLA · Zero Drops</span>
                  </div>

                  <div className="p-3 bg-[#FEF9ED] border border-[#0E1153]/30 rounded-lg">
                    <span className="text-[9px] text-[#3E4945] uppercase font-bold block">SPEED GRADE 99</span>
                    <span className="font-heading text-xl font-bold text-[#FFBA45] block">&lt; 0.8s</span>
                    <span className="text-[10px] text-[#3E4945]">Under 0.8s TTI</span>
                  </div>
                </div>

                {/* Security Pill */}
                <div className="p-3 bg-[#E0E0FF] border border-[#0E1153]/30 rounded-lg flex items-center justify-between text-xs font-mono text-[#0E1153]">
                  <span className="font-bold">🔒 PCI-DSS Compliant</span>
                  <span className="text-[#3E4945]">Multi-Rail Gateways</span>
                </div>

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
