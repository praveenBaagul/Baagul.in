"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  onNavClick?: (target: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isServicesActive = pathname === "/services" || pathname.startsWith("/services/");
  const isTeamActive = pathname === "/team" || pathname.startsWith("/team");
  const isCareersActive = pathname === "/career" || pathname.startsWith("/career");
  const isContactActive = pathname === "/contact";

  // Neo-brutalist pill style when active or hovered
  const getNavLinkClass = (isActive: boolean) => {
    return `relative px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-150 ${
      isActive
        ? "bg-marigold text-indigo-dark border border-indigo-main shadow-[2px_2px_0px_#121a4a]"
        : "text-indigo-main/80 hover:text-indigo-main hover:bg-[#ebe7dc] hover:border hover:border-indigo-main/40 hover:shadow-[2px_2px_0px_#121a4a]/50"
    }`;
  };

  const getMobileLinkClass = (isActive: boolean) => {
    return `px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
      isActive
        ? "bg-marigold text-indigo-dark border border-indigo-main shadow-[2px_2px_0px_#121a4a]"
        : "text-indigo-main hover:bg-[#ebe7dc]"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-indigo-main/20 bg-canvas/95 backdrop-blur-md">
      {/* Top running strip */}
      <div className="bg-indigo-main text-canvas px-4 sm:px-12 py-1.5 w-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-2 font-medium">
            <span className="font-kannada font-bold text-sm tracking-wide text-marigold">
              ನಮಸ್ಕಾರ
            </span>
            <span className="opacity-40">·</span>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-12 h-20 sm:h-24 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group flex-shrink-0" aria-label="Baagul Home">
          <div className="relative w-14 h-14 sm:w-20 sm:h-20 transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/assets/favicon.png"
              alt="Baagul logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-2.5 font-semibold" aria-label="Main Navigation">
          <Link
            href="/services"
            className={getNavLinkClass(isServicesActive)}
          >
            Services
          </Link>
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
            className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-indigo-main font-semibold text-xs sm:text-sm text-indigo-main shadow-[3px_3px_0px_#121a4a] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#121a4a] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-150 ${
              isContactActive ? "bg-marigold ring-2 ring-indigo-main" : "bg-marigold"
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
        <div className="md:hidden border-t border-indigo-main/10 bg-canvas-alt px-6 py-4 flex flex-col gap-2 font-semibold text-indigo-main">
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className={getMobileLinkClass(isServicesActive)}
          >
            Services
          </Link>
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
