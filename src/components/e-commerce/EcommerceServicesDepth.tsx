import React from "react";
import Link from "next/link";

export default function EcommerceServicesDepth() {
  return (
    <section className="w-full py-24 px-4 sm:px-12 bg-[#005F4C] text-[#FEF9ED] border-t-2 border-[#0E1153] relative">
      {/* Dashed Top Edge */}
      <div className="max-w-7xl mx-auto border-t-2 border-dashed border-[#FEF9ED]/30 mb-8" />

      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-[#FEF9ED]/80">
              <span className="w-2 h-2 rounded-full bg-[#FFBA45]" />
              <span>TECHNICAL ARCHITECTURE STACK // MODULE: 03/SERVICES</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl text-[#FEF9ED]">
              Shopify, WooCommerce &amp; Custom E-Commerce Development
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#E7E2D6] max-w-md leading-relaxed">
            Storefronts, payments, inventory and automation, built and connected by one team.
          </p>
        </div>

        {/* 4 Cards Grid - Vertically Staggered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          
          {/* Card 1: Cream fill */}
          <div className="p-7 bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EDE8DC] border border-[#0E1153]/30 flex items-center justify-center text-xl mb-6">
                🏪
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3 leading-snug">
                Shopify &amp; WooCommerce Store Development
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed">
                Shopify development services and WooCommerce stores on WordPress, with custom themes and a smooth shopping experience on every device. For WordPress and CMS work beyond the store, see our{" "}
                <Link href="/services/wordpress-development" className="font-bold text-[#005F4C] underline underline-offset-2 hover:text-[#0E1153]">
                  WordPress development services
                </Link>
                .
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#0E1153]/15 text-[10px] font-mono font-bold text-[#005F4C]">
              01 // SHOPIFY &amp; WOOCOMMERCE
            </div>
          </div>

          {/* Card 2: Mustard fill, staggered down */}
          <div className="p-7 bg-[#FFBA45] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between min-h-[300px] lg:mt-8">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0E1153] text-[#FFBA45] border border-[#0E1153] flex items-center justify-center text-xl mb-6">
                💳
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3 leading-snug">
                Checkout &amp; Payment Gateway Integration
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#0E1153] leading-relaxed font-medium">
                Checkout optimization and secure payment gateways such as Razorpay, Stripe, PayU and Cashfree, supporting the payment methods your customers use.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#0E1153]/20 text-[10px] font-mono font-bold text-[#0E1153]">
              02 // GATEWAYS
            </div>
          </div>

          {/* Card 3: Mint fill */}
          <div className="p-7 bg-[#7CD7BC] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FFFFFF] border border-[#0E1153]/30 flex items-center justify-center text-xl mb-6">
                📦
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3 leading-snug">
                Inventory Management &amp; E-Commerce Automation
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed">
                Inventory synchronization with your ERP or warehouse systems, shipping integrations, and post-purchase automation such as order emails and abandoned cart recovery.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#0E1153]/15 text-[10px] font-mono font-bold text-[#005F4C]">
              03 // INVENTORY &amp; AUTOMATION
            </div>
          </div>

          {/* Card 4: Lavender fill, staggered down */}
          <div className="p-7 bg-[#E0E0FF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[6px_6px_0px_#0E1153] flex flex-col justify-between min-h-[300px] lg:mt-8">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#0E1153] text-[#E0E0FF] border border-[#0E1153] flex items-center justify-center text-xl mb-6">
                🎯
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3 leading-snug">
                Headless E-Commerce Development with Next.js
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#3E4945] leading-relaxed">
                Fast, custom storefronts built with Next.js on top of Shopify or Medusa, for brands that need full design freedom and performance.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#0E1153]/15 text-[10px] font-mono font-bold text-[#005F4C]">
              04 // HEADLESS
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

