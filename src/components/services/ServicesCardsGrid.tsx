"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardData {
  number: string;
  tag: string;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  headerBg: string;
  accentBadge: string;
  href: string;
}

const allServiceCards: ServiceCardData[] = [
  {
    number: "01",
    tag: "DEV // WEB",
    title: "Website Design & Development",
    description:
      "Modern, fast, responsive websites built to turn visitors into customers through speed, semantic brand architecture, and seamless scrollability.",
    imgSrc: "/assets/642a3.png",
    imgAlt: "Website design mockups and code IDE on screen",
    headerBg: "bg-indigo-mid text-canvas",
    accentBadge: "bg-marigold text-indigo-dark",
    href: "/services/web-design",
  },
  {
    number: "02",
    tag: "SERP // RANK",
    title: "SEO Optimization",
    description:
      "Boosting your online visibility with proven strategies for higher search rankings, technical site health, semantic indexing, and search intent.",
    imgSrc: "/assets/69bac.png",
    imgAlt: "SEO audit charts and search engine metrics dashboard",
    headerBg: "bg-peacock text-canvas",
    accentBadge: "bg-canvas text-peacock-dark",
    href: "/services/seo-optimizations",
  },
  {
    number: "03",
    tag: "ID // BRAND",
    title: "Logo Design",
    description:
      "Crafting unique, memorable logos that define and elevate your brand identity, with editorial type standards, vector assets, and brand books.",
    imgSrc: "/assets/0d7e5.png",
    imgAlt: "Logo sketches and visual identity brand stationery",
    headerBg: "bg-canvas-card text-indigo-main",
    accentBadge: "bg-indigo-mid text-canvas",
    href: "/services/logo-design",
  },
  {
    number: "04",
    tag: "PR // MEDIA",
    title: "Guest Posts & PR",
    description:
      "Publishing high-quality content on top websites to build authority, earn natural high-DA backlinks, and capture qualified affiliate-grade traffic.",
    imgSrc: "/assets/cacf1.png",
    imgAlt: "Guest posts & PR editorial publications and outreach metrics",
    headerBg: "bg-marigold text-indigo-main",
    accentBadge: "bg-indigo-main text-canvas",
    href: "/services/guest-post",
  },
  {
    number: "05",
    tag: "ART // ASSET",
    title: "Graphic Designing",
    description:
      "Designing creative visuals that capture attention and strengthen your brand identity across paid banners, collateral, and marketing funnels.",
    imgSrc: "/assets/03160.png",
    imgAlt: "Brand design posters and digital marketing campaign banners",
    headerBg: "bg-canvas-card text-indigo-main",
    accentBadge: "bg-peacock text-canvas",
    href: "/services/graphics-design",
  },
  {
    number: "06",
    tag: "D2C // B2B",
    title: "E-Commerce Solutions",
    description:
      "Building friction-less, scalable, and high-performing online stores that convert via Shopify Plus/WooCommerce, custom checkout blocks, and speed optimization.",
    imgSrc: "/assets/11282.png",
    imgAlt: "Mobile e-commerce product cart checkout interface",
    headerBg: "bg-canvas-card text-indigo-main",
    accentBadge: "bg-terracotta text-canvas",
    href: "/services/e-commerce-solutions",
  },
  {
    number: "07",
    tag: "CMS // CMS",
    title: "WordPress & CMS Development",
    description:
      "Bespoke headless WordPress architectures and native Gutenberg block patterns that pass Core Web Vitals with 99+ PageSpeed scores.",
    imgSrc: "/assets/69bac.png",
    imgAlt: "WordPress CMS performance dashboard and Gutenberg blocks",
    headerBg: "bg-indigo-mid text-canvas",
    accentBadge: "bg-marigold text-indigo-dark",
    href: "/services/wordpress-development",
  },
  {
    number: "08",
    tag: "ADS // ROI",
    title: "Paid Promotions & Media Buying",
    description:
      "High-ROI influencer collaborations, targeted video sponsorships, and performance media buys on YouTube, Instagram, TikTok, and Meta Ads.",
    imgSrc: "/assets/642a3.png",
    imgAlt: "Paid promotion campaign metrics and ROAS tracking",
    headerBg: "bg-peacock text-canvas",
    accentBadge: "bg-canvas text-peacock-dark",
    href: "/services/paid-promotions",
  },
  {
    number: "09",
    tag: "MOTION // STORY",
    title: "Video Editing",
    description:
      "Scroll-stopping reels, YouTube videos, brand films, and ad creatives with clean cuts, motion graphics, color grading, sound design, and subtitles.",
    imgSrc: "/assets/cacf1.png",
    imgAlt: "Video editing timeline with motion graphics and color grading",
    headerBg: "bg-marigold text-indigo-main",
    accentBadge: "bg-indigo-main text-canvas",
    href: "/services/video-editing",
  },
  {
    number: "10",
    tag: "APP // NATIVE & HYBRID",
    title: "Mobile & Web App Development",
    description:
      "High-performance iOS, Android, and cross-platform apps built with React Native and Flutter. 60fps animations, offline-first sync, and enterprise scale.",
    imgSrc: "/assets/11282.png",
    imgAlt: "Mobile app interfaces on smartphone screens with clean dashboard analytics",
    headerBg: "bg-peacock text-canvas",
    accentBadge: "bg-canvas text-peacock-dark",
    href: "/services/app-development",
  },
];

export default function ServicesCardsGrid() {
  const [showAll, setShowAll] = useState(false);

  const displayedCards = showAll ? allServiceCards : allServiceCards.slice(0, 6);

  return (
    <section id="service-cards" className="w-full py-20 px-4 sm:px-12 max-w-7xl mx-auto border-t border-indigo-main/20">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-marigold" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-indigo-main">
              SERVICES
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl text-indigo-main">
            Our Services
          </h2>
        </div>
        <p className="font-sans text-sm sm:text-base text-slate-text max-w-md">
          Transform your digital presence with our comprehensive suite of marketing solutions engineered for verified ROI.
        </p>
      </div>

      {/* Services Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedCards.map((card) => (
          <div
            key={card.number}
            className="group bg-canvas-card border-2 border-indigo-main rounded-2xl p-5 shadow-[6px_6px_0px_#121a4a] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#121a4a] transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Card Header Strip */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-indigo-main/15">
                <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded ${card.accentBadge}`}>
                  {card.number}
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-text tracking-wider">
                  {card.tag}
                </span>
              </div>

              {/* Photo Frame */}
              <Link href={card.href} className="block">
                <div className="relative h-52 w-full rounded-xl overflow-hidden border border-indigo-main/30 mb-5 bg-canvas cursor-pointer">
                  <Image
                    src={card.imgSrc}
                    alt={card.imgAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              {/* Text */}
              <h3 className="font-heading text-2xl font-bold text-indigo-main mb-3 leading-snug">
                <Link href={card.href} className="hover:text-peacock transition-colors">
                  {card.title}
                </Link>
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-text leading-relaxed mb-6">
                {card.description}
              </p>
            </div>

            {/* Bottom Card Action */}
            <div className="pt-4 border-t border-indigo-main/15 flex items-center justify-between">
              <Link
                href={card.href}
                className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-mid hover:text-terracotta flex items-center gap-1.5 transition-colors"
              >
                <span>EXPLORE</span>
                <span className="text-sm">→</span>
              </Link>
              <span className="text-[10px] font-mono text-slate-text/70 uppercase">
                SPEC // AUDIT 2026
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Load More / Show Less Toggle Button */}
      <div className="mt-14 flex flex-col items-center gap-3">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-3.5 rounded-xl bg-indigo-main text-canvas font-mono text-xs font-bold uppercase tracking-wider border border-indigo-main shadow-[4px_4px_0px_#121a4a] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#121a4a] transition-all flex items-center gap-2 cursor-pointer"
        >
          {showAll ? (
            <>
              <span>Show Less (Core 6 Services)</span>
              <span>↑</span>
            </>
          ) : (
            <>
              <span>Load More (Show All {allServiceCards.length} Services)</span>
              <span>↓</span>
            </>
          )}
        </button>

        <span className="text-xs font-mono text-slate-text">
          Showing {displayedCards.length} of {allServiceCards.length} services
        </span>
      </div>

    </section>
  );
}
