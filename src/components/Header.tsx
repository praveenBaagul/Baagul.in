"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  onNavClick?: (target: string) => void;
}

const SERVICES_MENU = [
  {
    num: "01",
    title: "Website Design & Development",
    href: "/services/web-design",
    tag: "Core",
  },
  {
    num: "02",
    title: "SEO Optimization",
    href: "/services/seo-optimizations",
    tag: "Growth",
  },
  {
    num: "03",
    title: "Logo Design",
    href: "/services/logo-design",
    tag: "Identity",
  },
  {
    num: "04",
    title: "Guest Posts & PR",
    href: "/services/guest-post",
    tag: "Media",
  },
  {
    num: "05",
    title: "Graphic Designing",
    href: "/services/graphics-design",
    tag: "Visual",
  },
  {
    num: "06",
    title: "E-Commerce Solutions",
    href: "/services/e-commerce-solutions",
    tag: "Shop",
  },
  {
    num: "07",
    title: "WordPress & CMS Development",
    href: "/services/wordpress-development",
    tag: "CMS",
  },
  {
    num: "08",
    title: "Paid Promotions & Media Buying",
    href: "/services/paid-promotions",
    tag: "Ads",
  },
  {
    num: "09",
    title: "Video Editing",
    href: "/services/video-editing",
    tag: "Motion",
  },
  {
    num: "10",
    title: "App Development",
    href: "/services/app-development",
    tag: "Mobile",
  },
];

export default function Header({ onNavClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const isServicesActive = pathname === "/services" || pathname.startsWith("/services/");
  const isTeamActive = pathname === "/team" || pathname.startsWith("/team");
  const isCareersActive = pathname === "/career" || pathname.startsWith("/career");
  const isContactActive = pathname === "/contact";

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 220);
  };

  // Neo-brutalist pill style when active or hovered
  const getNavLinkClass = (isActive: boolean) => {
    return `relative px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-150 ${isActive
      ? "bg-marigold text-indigo-dark border border-indigo-main shadow-[2px_2px_0px_#121a4a]"
      : "text-indigo-main/80 hover:text-indigo-main hover:bg-[#ebe7dc] hover:border hover:border-indigo-main/40 hover:shadow-[2px_2px_0px_#121a4a]/50"
      }`;
  };

  const getMobileLinkClass = (isActive: boolean) => {
    return `px-3 py-2 rounded-lg text-sm font-semibold transition-all ${isActive
      ? "bg-marigold text-indigo-dark border border-indigo-main shadow-[2px_2px_0px_#121a4a]"
      : "text-indigo-main hover:bg-[#ebe7dc]"
      }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-indigo-main/20 bg-canvas/95 backdrop-blur-md">
      {/* Top running strip matching design */}
      <div className="bg-indigo-main text-canvas px-4 sm:px-12 py-1.5 w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-2 font-medium">
            <span className="font-kannada font-bold text-sm tracking-wide text-marigold">
              ನಮಸ್ಕಾರ
            </span>
            <span className="opacity-40">·</span>
            <span className="w-1.5 h-1.5 rounded-full bg-marigold shrink-0" aria-hidden="true" />
            <span className="tracking-wide text-canvas/90">
              Now booking projects for Q4 2026
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="tracking-wide text-canvas/90 hidden sm:inline">
              HSR Layout, Bengaluru
            </span>
            <span
              className="w-1.5 h-1.5 bg-marigold shadow-[1px_1px_0px_#121a4a]"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-12 h-20 sm:h-24 flex items-center justify-between relative">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group flex-shrink-0" aria-label="Baagul Home">
          <div className="relative w-[125px] h-[60px] sm:w-[150px] sm:h-[72px] md:w-[168px] md:h-[80px] lg:w-[180px] lg:h-[86px] transition-transform duration-200 group-hover:scale-105 origin-left">
            <Image
              src="/assets/baagul-brand-logo.png"
              alt="Baagul logo"
              title="Baagul logo"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-2.5 font-semibold" aria-label="Main Navigation">
          {/* Services with Neo-brutalist Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/services"
              className={`relative px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-150 inline-flex items-center gap-1.5 ${isServicesActive || servicesOpen
                ? "bg-marigold text-indigo-dark border-2 border-indigo-main shadow-[2px_2px_0px_#121a4a]"
                : "text-indigo-main/80 hover:text-indigo-main hover:bg-[#ebe7dc] hover:border hover:border-indigo-main/40 hover:shadow-[2px_2px_0px_#121a4a]/50"
                }`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              <span>Services</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""
                  }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            {/* SERVICES DROPDOWN PANEL (OPEN STATE) */}
            {servicesOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-[45%] sm:-translate-x-1/2 pt-3 z-50 w-[680px] sm:w-[720px] max-w-[92vw] pointer-events-auto transition-all duration-200 animate-in fade-in slide-in-from-top-2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                role="region"
                aria-label="Services Dropdown Panel"
              >
                {/* Green connector indicator matching screenshot */}
                <div className="flex justify-center -mb-2 relative z-10">
                  <span
                    className="w-4 h-4 rounded-full bg-[#0e7a63] border-2 border-indigo-main shadow-sm block"
                    aria-hidden="true"
                  />
                </div>

                {/* Dropdown Card */}
                <div className="bg-[#fcfaf5] border-2 border-indigo-main rounded-2xl shadow-[8px_8px_0px_#121a4a] overflow-hidden p-5 sm:p-6 text-indigo-main">
                  {/* Top Header Bar */}
                  {/* <div className="border border-indigo-main/20 rounded-xl px-4 py-2.5 flex items-center justify-between mb-5 bg-white/70">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-marigold border border-indigo-main shrink-0" />
                      <span className="font-mono text-xs font-bold tracking-wider text-indigo-main uppercase">
                        DIRECT SERVICE DESK
                      </span>
                    </div>
                    <div className="border border-indigo-main rounded-full px-3 py-0.5 text-[10px] font-mono font-bold tracking-wider text-indigo-main uppercase bg-white shadow-sm">
                      10 PRIMARY MODULES
                    </div>
                  </div> */}

                  {/* 2-Column Services Grid */}
                  <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-2.5 pb-5">
                    {/* Column 1: Services 01 - 05 */}
                    <div className="flex flex-col gap-2">
                      {SERVICES_MENU.slice(0, 5).map((service) => (
                        <Link
                          key={service.num}
                          href={service.href}
                          onClick={() => setServicesOpen(false)}
                          className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-white transition-all duration-150 border border-transparent hover:border-indigo-main/20 hover:shadow-sm"
                        >
                          <div className="flex items-center gap-2.5 min-w-0 pr-2">
                            <span className="font-mono font-bold text-sm text-[#e05a2b] shrink-0">
                              {service.num}
                            </span>
                            <span className="font-sans font-bold text-[13.5px] text-indigo-main leading-tight group-hover/item:text-[#0e7a63] transition-colors truncate">
                              {service.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="border border-indigo-main/30 rounded-md px-2 py-0.5 text-[10px] font-mono font-semibold text-indigo-main/80 bg-white/60 group-hover/item:border-indigo-main group-hover/item:text-indigo-main transition-colors">
                              {service.tag}
                            </span>
                            <span className="text-xs text-indigo-main/50 group-hover/item:text-[#0e7a63] group-hover/item:translate-x-1 transition-all">
                              →
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Column 2: Services 06 - 10 */}
                    <div className="flex flex-col gap-2">
                      {SERVICES_MENU.slice(5, 10).map((service) => (
                        <Link
                          key={service.num}
                          href={service.href}
                          onClick={() => setServicesOpen(false)}
                          className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-white transition-all duration-150 border border-transparent hover:border-indigo-main/20 hover:shadow-sm"
                        >
                          <div className="flex items-center gap-2.5 min-w-0 pr-2">
                            <span className="font-mono font-bold text-sm text-[#e05a2b] shrink-0">
                              {service.num}
                            </span>
                            <span className="font-sans font-bold text-[13.5px] text-indigo-main leading-tight group-hover/item:text-[#0e7a63] transition-colors truncate">
                              {service.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="border border-indigo-main/30 rounded-md px-2 py-0.5 text-[10px] font-mono font-semibold text-indigo-main/80 bg-white/60 group-hover/item:border-indigo-main group-hover/item:text-indigo-main transition-colors">
                              {service.tag}
                            </span>
                            <span className="text-xs text-indigo-main/50 group-hover/item:text-[#0e7a63] group-hover/item:translate-x-1 transition-all">
                              →
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Dispatch Footer Bar */}
                  {/* <div className="pt-4 border-t border-indigo-main/20 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-marigold border border-indigo-main shrink-0" />
                      <span className="font-mono text-[11px] font-bold tracking-wider text-indigo-main uppercase">
                        DISPATCH: IMMEDIATE INTAKE
                      </span>
                    </div>
                    <div className="border border-[#0e7a63] rounded px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-wide text-[#0e7a63] bg-[#0e7a63]/10">
                      1:1 // SPEC 2026
                    </div>
                  </div> */}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/#case-studies"
            className={getNavLinkClass(false)}
          >
            Case Studies
          </Link>
          <Link
            href="/#process"
            className={getNavLinkClass(false)}
          >
            Process
          </Link>
          <Link
            href="/team"
            className={getNavLinkClass(isTeamActive)}
          >
            Team
          </Link>
          <Link
            href="/career"
            className={getNavLinkClass(isCareersActive)}
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className={getNavLinkClass(isContactActive)}
          >
            Contact
          </Link>
        </nav>

        {/* CTA & Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-indigo-main font-semibold text-xs sm:text-sm text-indigo-main shadow-[3px_3px_0px_#121a4a] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#121a4a] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-150 ${isContactActive ? "bg-marigold ring-2 ring-indigo-main" : "bg-marigold"
              }`}
          >
            Start a project
          </Link>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-indigo-main border border-indigo-main/30 rounded-lg bg-canvas-card"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-indigo-main/10 bg-canvas-alt px-6 py-4 flex flex-col gap-2 font-semibold text-indigo-main max-h-[85vh] overflow-y-auto">
          {/* Mobile Services Accordion */}
          <div>
            <div className="flex items-center justify-between">
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex-1 ${getMobileLinkClass(isServicesActive)}`}
              >
                Services
              </Link>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="p-2 text-indigo-main hover:bg-[#ebe7dc] rounded-lg transition-colors ml-1"
                aria-label="Toggle services list"
                aria-expanded={mobileServicesOpen}
              >
                <svg
                  className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {mobileServicesOpen && (
              <div className="pl-3 pr-1 py-2 flex flex-col gap-1.5 border-l-2 border-indigo-main/20 ml-3 my-1">
                {SERVICES_MENU.map((service) => (
                  <Link
                    key={service.num}
                    href={service.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="flex items-center justify-between py-1 px-2 rounded text-xs hover:bg-canvas transition-colors"
                  >
                    <span className="flex items-center gap-2 truncate">
                      <span className="font-mono text-[11px] font-bold text-[#e05a2b]">
                        {service.num}
                      </span>
                      <span className="truncate">{service.title}</span>
                    </span>
                    <span className="text-[10px] font-mono text-indigo-main/60 shrink-0 border border-indigo-main/20 rounded px-1.5 py-0.2">
                      {service.tag}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/#case-studies"
            onClick={() => setMobileMenuOpen(false)}
            className={getMobileLinkClass(false)}
          >
            Case Studies
          </Link>
          <Link
            href="/#process"
            onClick={() => setMobileMenuOpen(false)}
            className={getMobileLinkClass(false)}
          >
            Process
          </Link>
          <Link
            href="/team"
            onClick={() => setMobileMenuOpen(false)}
            className={getMobileLinkClass(isTeamActive)}
          >
            Team
          </Link>
          <Link
            href="/career"
            onClick={() => setMobileMenuOpen(false)}
            className={getMobileLinkClass(isCareersActive)}
          >
            Careers
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={getMobileLinkClass(isContactActive)}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full text-center py-2.5 rounded-xl bg-marigold border border-indigo-main text-indigo-main shadow-[2px_2px_0px_#121a4a]"
          >
            Start a project
          </Link>
        </div>
      )}
    </header>
  );
}
