"use client";

import React, { useState } from "react";
import Link from "next/link";
import { newsletterSchema } from "@/lib/validations/enquiry";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const validate = (val: string) => {
    const res = newsletterSchema.safeParse({ email: val });
    if (!res.success) {
      setEmailError(res.error.issues[0]?.message || "Invalid email address");
      return false;
    }
    setEmailError(null);
    return true;
  };

  const handleBlur = () => {
    setTouched(true);
    validate(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    if (touched || emailError) {
      validate(val);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    setServerError(null);

    const isValid = validate(email);
    if (!isValid) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Subscription failed. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error("Footer newsletter error:", err);
      if (err instanceof Error) {
        setServerError(err.message);
      } else {
        setServerError("Subscription failed. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="w-full bg-[#1b1f5e] border-t-2 border-[#1b1f5e] text-[#fbf6ea] pt-16 pb-12 px-6 sm:px-12 lg:px-16" data-name="Footer">
      <div className="max-w-[1200px] mx-auto">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">

          {/* Column 1: Brand Info & Contact Details (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Logo / Brand Name with 3x2 Matrix */}
            <Link href="/" className="flex items-center gap-2.5 mb-4 group" aria-label="Baagul LLP Home">
              <div className="grid grid-cols-3 grid-rows-2 gap-1 w-6 shrink-0" aria-hidden="true">
                <span className="w-2 h-2 bg-[#0e7a63]" />
                <span className="w-2 h-2 bg-[#f5a800]" />
                <span className="w-2 h-2 bg-[#cfe8dc]" />
                <span className="w-2 h-2 bg-[#cfe8dc]" />
                <span className="w-2 h-2 bg-[#0e7a63]" />
                <span className="w-2 h-2 bg-[#f5a800]" />
              </div>
              <span className="font-heading text-xl font-bold tracking-tight text-[#fbf6ea] transition-colors group-hover:text-[#f5a800]">
                Baagul LLP
              </span>
            </Link>

            {/* Description */}
            <p className="font-sans text-sm text-[#fbf6ea]/80 leading-[22.75px] max-w-sm mb-6">
              Architectural precision meets high-performance digital marketing, full-funnel search engine optimization, and bespoke web engineering.
            </p>

            {/* Contact details with Figma SVGs */}
            <div className="flex flex-col gap-3 text-sm text-[#fbf6ea]/90 font-sans">
              <div className="flex items-start gap-2.5">
                <svg className="w-[15px] h-[15.5px] mt-0.5 shrink-0" viewBox="0 0 15 15.5" fill="none" aria-hidden="true">
                  <path d="M0 15.5V2H7.5V5H15V15.5H0V15.5M1.5 14H3V12.5H1.5V14V14M1.5 11H3V9.5H1.5V11V11M1.5 8H3V6.5H1.5V8V8M1.5 5H3V3.5H1.5V5V5M4.5 14H6V12.5H4.5V14V14M4.5 11H6V9.5H4.5V11V11M4.5 8H6V6.5H4.5V8V8M4.5 5H6V3.5H4.5V5V5M7.5 14H13.5V6.5H7.5V8H9V9.5H7.5V11H9V12.5H7.5V14V14M10.5 9.5V8H12V9.5H10.5V9.5M10.5 12.5V11H12V12.5H10.5V12.5" fill="#F5A800" />
                </svg>
                <span className="leading-snug">
                  2nd Floor Hustlehub Tech Park, HSR Layout, Bengaluru, Karnataka 560102
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-[15px] h-[12px] shrink-0" viewBox="0 0 15 12" fill="none" aria-hidden="true">
                  <path d="M1.5 12C1.0875 12 0.734375 11.8531 0.440625 11.5594C0.146875 11.2656 0 10.9125 0 10.5V1.5C0 1.0875 0.146875 0.734375 0.440625 0.440625C0.734375 0.146875 1.0875 0 1.5 0H13.5C13.9125 0 14.2656 0.146875 14.5594 0.440625C14.8531 0.734375 15 1.0875 15 1.5V10.5C15 10.9125 14.8531 11.2656 14.5594 11.5594C14.2656 11.8531 13.9125 12 13.5 12H1.5V12M7.5 6.75L1.5 3V10.5V10.5V10.5H13.5V10.5V10.5V3L7.5 6.75V6.75M7.5 5.25L13.5 1.5H1.5L7.5 5.25V5.25M1.5 3V1.5V1.5V3V10.5V10.5V10.5V10.5V10.5V10.5V3V3" fill="#F5A800" />
                </svg>
                <a href="mailto:support@baagul.in" className="hover:text-[#f5a800] transition-colors leading-[20px]">
                  support@baagul.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-[13.5px] h-[13.5px] shrink-0" viewBox="0 0 13.5 13.5" fill="none" aria-hidden="true">
                  <path d="M12.7125 13.5C11.15 13.5 9.60625 13.1594 8.08125 12.4781C6.55625 11.7969 5.16875 10.8313 3.91875 9.58125C2.66875 8.33125 1.70312 6.94375 1.02188 5.41875C0.340625 3.89375 0 2.35 0 0.7875C0 0.5625 0.075 0.375 0.225 0.225C0.375 0.075 0.5625 0 0.7875 0H3.825C4 0 4.15625 0.059375 4.29375 0.178125C4.43125 0.296875 4.5125 0.4375 4.5375 0.6L5.025 3.225C5.05 3.425 5.04375 3.59375 5.00625 3.73125C4.96875 3.86875 4.9 3.9875 4.8 4.0875L2.98125 5.925C3.23125 6.3875 3.52813 6.83437 3.87188 7.26562C4.21562 7.69688 4.59375 8.1125 5.00625 8.5125C5.39375 8.9 5.8 9.25937 6.225 9.59062C6.65 9.92188 7.1 10.225 7.575 10.5L9.3375 8.7375C9.45 8.625 9.59688 8.54062 9.77812 8.48438C9.95937 8.42813 10.1375 8.4125 10.3125 8.4375L12.9 8.9625C13.075 9.0125 13.2188 9.10312 13.3313 9.23438C13.4438 9.36563 13.5 9.5125 13.5 9.675V12.7125C13.5 12.9375 13.425 13.125 13.275 13.275C13.125 13.425 12.9375 13.5 12.7125 13.5V13.5M2.26875 4.5L3.50625 3.2625V3.2625V3.2625L3.1875 1.5V1.5V1.5H1.51875V1.5V1.5C1.58125 2.0125 1.66875 2.51875 1.78125 3.01875C1.89375 3.51875 2.05625 4.0125 2.26875 4.5V4.5M8.98125 11.2125C9.46875 11.425 9.96562 11.5938 10.4719 11.7188C10.9781 11.8438 11.4875 11.925 12 11.9625V11.9625V11.9625V10.3125V10.3125V10.3125L10.2375 9.95625V9.95625V9.95625L8.98125 11.2125V11.2125M2.26875 4.5V4.5V4.5V4.5V4.5V4.5V4.5V4.5V4.5V4.5V4.5V4.5M8.98125 11.2125V11.2125V11.2125V11.2125V11.2125V11.2125V11.2125V11.2125V11.2125V11.2125V11.2125V11.2125" fill="#F5A800" />
                </svg>
                <a href="tel:+917483737014" className="hover:text-[#f5a800] transition-colors leading-[20px]">
                  +91 7483737014
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex flex-col items-start">
              <span className="text-[11px] font-bold uppercase tracking-[1.1px] text-[#f5a800] mb-2.5">
                Follow Us
              </span>
              <div className="flex items-center gap-2.5">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/baagulmarketing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Baagul Marketing on LinkedIn"
                  className="w-9 h-9 rounded-lg bg-[#0A66C2] flex items-center justify-center hover:scale-105 hover:shadow-md transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
                    <path fill="#FFFFFF" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/baagul_marketing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Baagul Marketing on Instagram"
                  className="w-9 h-9 rounded-lg bg-[#1C1C1E] border border-white/10 flex items-center justify-center hover:scale-105 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com/baagul_in"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Baagul Marketing on X"
                  className="w-9 h-9 rounded-lg bg-[#000000] border border-white/15 flex items-center justify-center hover:scale-105 hover:border-white/30 transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
                    <path fill="#FFFFFF" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Services Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="font-bold text-[11px] tracking-[1.1px] uppercase text-[#f5a800] mb-4">
              SERVICES
            </span>
            <ul className="flex flex-col gap-2 text-sm text-[#fbf6ea]/80 font-sans">
              <li>
                <Link href="/services/web-design" className="hover:text-[#f5a800] transition-colors">
                  Website Design &amp; Development
                </Link>
              </li>
              <li>
                <Link href="/services/seo-optimizations" className="hover:text-[#f5a800] transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/logo-design" className="hover:text-[#f5a800] transition-colors">
                  Logo Design
                </Link>
              </li>
              <li>
                <Link href="/services/guest-post" className="hover:text-[#f5a800] transition-colors">
                  Guest Posts &amp; PR
                </Link>
              </li>
              <li>
                <Link href="/services/graphics-design" className="hover:text-[#f5a800] transition-colors">
                  Graphic Designing
                </Link>
              </li>
              <li>
                <Link href="/services/e-commerce-solutions" className="hover:text-[#f5a800] transition-colors">
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/wordpress-development" className="hover:text-[#f5a800] transition-colors">
                  WordPress &amp; CMS Development
                </Link>
              </li>
              <li>
                <Link href="/services/paid-promotions" className="hover:text-[#f5a800] transition-colors">
                  Paid Promotions &amp; Media Buying
                </Link>
              </li>
              <li>
                <Link href="/services/video-editing" className="hover:text-[#f5a800] transition-colors">
                  Video Editing
                </Link>
              </li>
              <li>
                <Link href="/services/app-development" className="hover:text-[#f5a800] transition-colors">
                  App Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Resources Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <span className="font-bold text-[11px] tracking-[1.1px] uppercase text-[#f5a800] mb-3 block">
                COMPANY
              </span>
              <ul className="flex flex-col gap-2 text-sm text-[#fbf6ea]/80 font-sans">
                <li>
                  <Link href="/team" className="hover:text-[#f5a800] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services/seo-optimizations/client-success-stories" className="hover:text-[#f5a800] transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="hover:text-[#f5a800] transition-colors">
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#f5a800] transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-[#f5a800] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-bold text-[11px] tracking-[1.1px] uppercase text-[#f5a800] mb-3 block">
                RESOURCES
              </span>
              <ul className="flex flex-col gap-2 text-sm text-[#fbf6ea]/80 font-sans">
                <li>
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#f5a800] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Sitemap</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/llms.txt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#f5a800] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>LLMs</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/llms-full.txt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#f5a800] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>LLMs Full</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/ai.txt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#f5a800] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>AI</span>
                  </a>
                </li>
                <li>
                  <Link
                    href="/mcp"
                    className="hover:text-[#f5a800] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>MCP Server</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Newsletter / Updates (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <span className="font-bold text-[11px] tracking-[1.1px] uppercase text-[#f5a800] mb-4">
              NEWSLETTER / UPDATES
            </span>
            <p className="font-sans text-sm text-[#fbf6ea]/80 leading-[20px] mb-4">
              Stay ahead in digital marketing. Read our weekly technical dispatches on algorithm shifts and growth mechanics.
            </p>

            {submitted ? (
              <div className="p-4 bg-[#0e7a63]/25 border border-[#0e7a63] rounded-lg text-left mb-2">
                <span className="font-heading text-base text-[#f5a800] block mb-1 font-bold">
                  ✓ Subscribed!
                </span>
                <span className="text-xs text-[#fbf6ea] block mb-2 leading-relaxed">
                  Thank you! You have been subscribed to our weekly technical dispatch.
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setEmail("");
                    setSubmitted(false);
                    setTouched(false);
                  }}
                  className="text-[11px] font-mono uppercase underline text-[#f5a800] hover:text-[#fbf6ea] transition-colors cursor-pointer"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2 mb-2">
                <label htmlFor="footer-subscribe-email" className="sr-only">Company email</label>

                {serverError && (
                  <p className="text-xs text-red-300 font-mono bg-red-950/60 p-2 rounded-lg border border-red-500/50">
                    ⚠ {serverError}
                  </p>
                )}

                <div className="flex items-stretch gap-2">
                  <input
                    id="footer-subscribe-email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter company email..."
                    className={`flex-1 px-4 py-3 rounded-lg bg-white text-[#1b1f5e] placeholder:text-[#1b1f5e]/60 text-sm border-2 border-[#1b1f5e] focus:outline-none transition-all ${emailError
                      ? "border-red-500 ring-2 ring-red-400/50"
                      : "focus:ring-2 focus:ring-[#f5a800]"
                      }`}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-5 py-3 rounded-lg bg-[#f5a800] text-[#1b1f5e] font-sans font-bold text-sm tracking-[0.56px] border-2 border-[#1b1f5e] shadow-[4px_4px_0px_#121a4a] transition-all shrink-0 flex items-center justify-center gap-2 ${isSubmitting
                      ? "opacity-75 cursor-not-allowed"
                      : "hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#121a4a] cursor-pointer"
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-[#1b1f5e] border-t-transparent rounded-full animate-spin" />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <span>Subscribe</span>
                    )}
                  </button>
                </div>

                {emailError && (
                  <p className="text-xs text-red-300 font-mono font-medium">
                    ⚠ {emailError}
                  </p>
                )}
              </form>
            )}

            <span className="text-[11px] font-bold text-[#fbf6ea]/60 tracking-[0.88px] mt-1">
              Strictly value. No spam. Unsubscribe anytime.
            </span>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Location Pill */}
        <div className="border-t border-dashed border-[#fbf6ea]/25 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#fbf6ea]/75">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#0e7a63] shrink-0" aria-hidden="true" />
            <span className="text-[11px] font-bold tracking-[0.88px] text-[#fbf6ea]/75">
              &copy; 2025 Baagul LLP. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] font-bold tracking-[0.88px] text-[#fbf6ea]/75">
              Crafted with precision in Bengaluru.
            </span>
            <span className="border border-[#fbf6ea]/40 rounded-full px-3 py-1 text-[#f5a800] text-[11px] font-bold tracking-[0.88px]">
              HSR Layout
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
