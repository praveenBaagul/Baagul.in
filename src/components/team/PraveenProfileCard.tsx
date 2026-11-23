"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PraveenProfileCard() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Top Controls Band */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <Link
          href="/team"
          className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-indigo-main hover:text-terracotta transition-colors"
        >
          <span>←</span>
          <span>Back to Team &amp; About</span>
        </Link>

        <button
          onClick={handleCopyLink}
          type="button"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-canvas-card border-2 border-indigo-main text-xs font-mono font-bold shadow-[2px_2px_0px_#121a4a] hover:bg-canvas transition-colors"
          title="Copy link"
        >
          <span>🔗</span>
          <span>{copied ? "Link Copied!" : "Copy Link"}</span>
        </button>
      </div>

      {/* The Master ID Card Container */}
      <div className="relative bg-canvas-card border-2 sm:border-[3px] border-indigo-main rounded-3xl shadow-[8px_8px_0px_#121a4a] overflow-hidden">
        {/* Lanyard Slot Notch Punch Hole */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-20 sm:w-24 h-3.5 sm:h-4 bg-indigo-main rounded-full shadow-inner flex items-center justify-center">
            <div className="w-16 h-1 bg-canvas/30 rounded-full" />
          </div>
        </div>

        {/* Card Header Strip: Brand Logo */}
        <div className="px-6 sm:px-10 py-5 border-b-2 border-indigo-main/20 flex items-center justify-between bg-canvas/60">
          <Link href="/" className="inline-block">
            <Image
              src="/assets/baagul-brand-logo.png"
              alt="Baagul LLP"
              title="Baagul LLP"
              width={140}
              height={40}
              className="h-8 sm:h-9 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Main Body: Photo + Primary Info Split */}
        <div className="p-6 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left: Portrait Frame + Contact Details (5 cols) */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-[280px] aspect-[4/5] rounded-2xl overflow-hidden border-2 border-indigo-main shadow-[5px_5px_0px_#121a4a] bg-canvas">
                <Image
                  src="/assets/praveen-kumar-a.png"
                  alt="Praveen Kumar A - Full Stack AI Developer at Baagul LLP"
                  title="Praveen Kumar A"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>

              {/* LinkedIn Action Button */}
              <a
                href="https://in.linkedin.com/in/praveen-kumar-311514297"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full max-w-[280px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0077B5] hover:bg-[#005f93] text-white font-mono font-bold text-xs uppercase tracking-wider border-2 border-indigo-main shadow-[3px_3px_0px_#121a4a] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#121a4a] transition-all"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>Connect on LinkedIn</span>
                <span className="text-xs">↗</span>
              </a>

              {/* Direct Contact Details Block */}
              <div className="mt-3 w-full max-w-[280px] p-3.5 bg-canvas border-2 border-indigo-main/20 rounded-xl flex flex-col gap-2 shadow-[3px_3px_0px_#121a4a]">
                <div className="flex flex-col text-xs font-mono">
                  <span className="font-bold text-[10px] text-indigo-main/60 uppercase">EMAIL:</span>
                  <a
                    href="mailto:support@baagul.in"
                    className="font-bold text-indigo-main hover:text-terracotta underline truncate transition-colors"
                  >
                    support@baagul.in
                  </a>
                </div>

                <div className="flex flex-col text-xs font-mono pt-1.5 border-t border-indigo-main/10">
                  <span className="font-bold text-[10px] text-indigo-main/60 uppercase">PHONE:</span>
                  <a
                    href="tel:+916205697634"
                    className="font-bold text-indigo-main hover:text-terracotta transition-colors"
                  >
                    +91 62056 97634
                  </a>
                </div>

                <div className="flex flex-col text-xs font-mono pt-1.5 border-t border-indigo-main/10">
                  <span className="font-bold text-[10px] text-indigo-main/60 uppercase">WEBSITE:</span>
                  <a
                    href="https://baagul.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-indigo-main hover:text-terracotta transition-colors"
                  >
                    https://baagul.in
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Practitioner Profile & Core Fields (7 cols) */}
            <div className="md:col-span-7 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-marigold shadow-[1px_1px_0px_#121a4a]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-peacock">
                    CORE ENGINEERING &amp; E-COMMERCE
                  </span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl text-indigo-main font-extrabold leading-tight tracking-tight mb-1">
                  Praveen Kumar A
                </h1>

                <span className="font-heading text-xl text-terracotta font-bold block mb-4">
                  Full Stack AI Developer
                </span>

                <div className="p-4 sm:p-5 bg-canvas border-2 border-indigo-main/20 rounded-xl mb-6">
                  <p className="font-sans text-xs sm:text-sm text-slate-text leading-relaxed">
                    Leads modern web development, headless e-commerce architectures, and intelligent AI systems at Baagul LLP. Specializes in building high-conversion Shopify/Next.js platforms, scalable full-stack web applications, and algorithmic checkout funnels that deliver resilient, sub-second digital experiences.
                  </p>
                </div>

                {/* Key Credentials Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                  <div className="p-3.5 bg-canvas border border-indigo-main/20 rounded-xl">
                    <span className="font-mono text-[10px] font-bold text-indigo-main/60 uppercase block mb-0.5">
                      EMPLOYEE ID
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-extrabold text-indigo-main">
                      BG07
                    </span>
                  </div>

                  <div className="p-3.5 bg-canvas border border-indigo-main/20 rounded-xl">
                    <span className="font-mono text-[10px] font-bold text-indigo-main/60 uppercase block mb-0.5">
                      COMPANY
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-extrabold text-indigo-main">
                      Baagul LLP
                    </span>
                  </div>

                  <div className="p-3.5 bg-canvas border border-indigo-main/20 rounded-xl">
                    <span className="font-mono text-[10px] font-bold text-indigo-main/60 uppercase block mb-0.5">
                      DEPARTMENT
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-extrabold text-indigo-main">
                      E-Commerce &amp; AI
                    </span>
                  </div>
                </div>

                {/* Full Location Address Card */}
                <div className="p-3.5 bg-canvas border border-indigo-main/20 rounded-xl">
                  <span className="font-mono text-[10px] font-bold text-indigo-main/60 uppercase block mb-1">
                    LOCATION
                  </span>
                  <span className="font-mono text-xs sm:text-[13px] font-bold text-indigo-main leading-relaxed block">
                    2nd Floor, H210, Hustlehub Tech Park, 36/5, Somasundarapalya, 27th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102
                  </span>
                </div>
              </div>

              {/* Status Note Badge */}
              <div className="mt-8 p-3.5 bg-canvas border border-indigo-main/15 rounded-xl flex items-center justify-between text-xs font-mono">
                <span className="text-indigo-main/70">PRACTITIONER STATUS:</span>
                <span className="font-bold text-peacock flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ACTIVE ON PROJECTS</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Barcode Strip */}
        <div className="px-6 sm:px-10 py-4 bg-indigo-navy text-canvas border-t-2 border-indigo-main flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Visual Barcode pattern */}
            <div className="flex items-center gap-1 h-7 px-2 bg-canvas/10 rounded border border-canvas/20">
              <span className="w-1 h-5 bg-marigold" />
              <span className="w-0.5 h-5 bg-canvas" />
              <span className="w-1.5 h-5 bg-canvas" />
              <span className="w-0.5 h-5 bg-marigold" />
              <span className="w-2 h-5 bg-canvas" />
              <span className="w-0.5 h-5 bg-marigold" />
              <span className="w-1 h-5 bg-canvas" />
              <span className="w-1.5 h-5 bg-canvas" />
              <span className="w-0.5 h-5 bg-marigold" />
            </div>

            <div className="flex flex-col text-[10px] font-mono leading-tight">
              <span className="text-marigold font-bold">DIGITALLY VERIFIED CREDENTIAL</span>
              <span className="text-canvas/70">AUTHENTICITY SIGNED BY BAAGUL LLP</span>
            </div>
          </div>

          <div className="text-right text-[10px] font-mono text-canvas/70">
            <span>ISSUED: 2024 · VALID THROUGH 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
