import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

interface ServiceCard {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
  tagColor: string;
  href?: string;
  iconSrc?: string;
  highlight?: boolean;
}

const services: ServiceCard[] = [
  {
    id: "seo",
    number: "01",
    title: "SEO Optimization",
    category: "SEARCH ARCHITECTURE",
    description: "Deep crawl modeling, technical schema graph deployment, and programmatic SEO designed to dominate high-intent organic terms.",
    bgColor: "bg-indigo-mid",
    textColor: "text-canvas",
    borderColor: "border-indigo-main",
    tagColor: "bg-marigold text-indigo-dark",
    href: "/services/seo-optimizations",
  },
  {
    id: "performance-ads",
    number: "02",
    title: "Paid Search & Meta Ads",
    category: "PERFORMANCE MEDIA",
    description: "Hyper-calibrated Google Search, Shopping, and Meta retargeting campaigns monitored with algorithmic bidding and high creative turnover.",
    bgColor: "bg-peacock",
    textColor: "text-canvas",
    borderColor: "border-indigo-main",
    tagColor: "bg-canvas text-peacock-dark",
    href: "/services/paid-promotions",
  },
  {
    id: "wordpress",
    number: "03",
    title: "WordPress & CMS",
    category: "HIGH-SPEED EDITORIAL",
    description: "Enterprise headless WordPress architectures and bespoke themes that pass Core Web Vitals with 99+ PageSpeed scores.",
    bgColor: "bg-canvas-card",
    textColor: "text-indigo-main",
    borderColor: "border-indigo-main",
    tagColor: "bg-peacock-light text-peacock-dark",
    href: "/services/wordpress-development",
  },
  {
    id: "ecommerce",
    number: "04",
    title: "E-Commerce Solutions",
    category: "REVENUE ENGINES",
    description: "Shopify Plus and custom headless checkouts with frictionless user journeys, high average order values, and 1-click cart conversions.",
    bgColor: "bg-canvas-alt",
    textColor: "text-indigo-main",
    borderColor: "border-indigo-main",
    tagColor: "bg-marigold/30 text-indigo-main",
    href: "/services/e-commerce-solutions",
  },
  {
    id: "digital-marketing",
    number: "05",
    title: "Digital Marketing",
    category: "GROWTH LOOPS",
    description: "Lifecycle email journeys, omnichannel attribution modeling, and lead nurture automation that builds compounding brand equity.",
    bgColor: "bg-indigo-navy",
    textColor: "text-canvas",
    borderColor: "border-indigo-main",
    tagColor: "bg-terracotta text-canvas",
    href: "/services/digital-marketing",
  },
  {
    id: "cro",
    number: "06",
    title: "Conversion Rate (CRO)",
    category: "BEHAVIORAL OPTIMIZATION",
    description: "Rigorous split-testing, user session recordings, and heatmap analysis turning static bounce traffic into paying buyers.",
    bgColor: "bg-canvas-card",
    textColor: "text-indigo-main",
    borderColor: "border-indigo-main",
    tagColor: "bg-peacock text-canvas",
    href: "/services",
  },
  {
    id: "web-dev",
    number: "07",
    title: "Web & App Development",
    category: "ENGINEERED SOFTWARE",
    description: "Pixel-perfect Next.js, React, and TypeScript web applications engineered with fluid micro-interactions and accessible semantic structures.",
    bgColor: "bg-marigold",
    textColor: "text-indigo-main",
    borderColor: "border-indigo-main",
    tagColor: "bg-indigo-main text-canvas",
    highlight: true,
    href: "/services/web-design",
  },
  {
    id: "brand-identity",
    number: "08",
    title: "Brand & Identity Design",
    category: "CRAFT & DISTINCTIVENESS",
    description: "Memorable design systems, typography hierarchies, and visual guidelines that anchor your presence in a crowded market.",
    bgColor: "bg-indigo-main",
    textColor: "text-canvas",
    borderColor: "border-indigo-main",
    tagColor: "bg-canvas text-indigo-main",
    href: "/services/logo-design",
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="w-full py-20 px-4 sm:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-terracotta" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-indigo-main">
              CAPABILITIES & SERVICES
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl text-indigo-main tracking-tight">
            What we make for you
          </h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-slate-text max-w-md">
          Modular services configured precisely around your growth bottlenecks. We build the 
          threads; you scale the loom.
        </p>
      </div>

      {/* Indigo Rail Line */}
      <div className="relative w-full mb-8">
        <div className="h-2 bg-indigo-main rounded-full w-full" />
        <div className="absolute -top-1 left-8 w-4 h-4 bg-marigold border border-indigo-main rounded-full" />
        <div className="absolute -top-1 right-8 w-4 h-4 bg-terracotta border border-indigo-main rounded-full" />
      </div>

      {/* 8 Hanging Swatch Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((item, idx) => (
          <div
            key={item.id}
            className={`group relative p-6 rounded-xl border-2 ${item.borderColor} ${item.bgColor} ${item.textColor} shadow-[5px_5px_0px_#121a4a] hover:-translate-y-1 hover:shadow-[7px_7px_0px_#121a4a] transition-all duration-200 flex flex-col justify-between`}
          >
            {/* Top Swatch Hanger Knot */}
            <div className="flex items-center justify-between mb-6">
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded ${item.tagColor}`}>
                {item.category}
              </span>
              <span className="font-heading text-lg font-bold opacity-60">
                /{item.number}
              </span>
            </div>

            {/* Content */}
            <div className="mb-6">
              <h3 className="font-heading text-2xl font-normal mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm leading-relaxed opacity-85">
                {item.description}
              </p>
            </div>

            {/* Bottom Card Link */}
            <div className="pt-4 border-t border-current/20 flex items-center justify-between">
              {item.href ? (
                <Link
                  href={item.href}
                  className="w-full flex items-center justify-between group-hover:text-current"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Explore Scope
                  </span>
                  <span className="w-7 h-7 rounded-full border border-current flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ) : (
                <>
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Explore Scope
                  </span>
                  <span className="w-7 h-7 rounded-full border border-current flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

