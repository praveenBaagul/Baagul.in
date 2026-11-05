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
    <footer className="w-full bg-[#1A1F5E] text-[#FEF9ED] pt-16 pb-8 px-6 sm:px-12 lg:px-16 border-t-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-dashed border-[#FEF9ED]/20">
          
          {/* Column 1: Brand Info & Contact Details (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Logo / Brand Name */}
            <Link href="/" className="flex items-center gap-2.5 mb-4 group" aria-label="Baagul Marketing LLP Home">
              <div className="grid grid-cols-2 gap-1 w-6 h-6">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#00A86B]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#FFA800]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#00A86B]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#FFA800]" />
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight text-[#FEF9ED]">
                Baagul Marketing LLP
              </span>
            </Link>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm text-[#FEF9ED]/80 max-w-sm leading-relaxed mb-6">
              Architectural precision meets high-performance digital marketing, full-funnel search engine optimization, and bespoke web engineering.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-2.5 text-xs text-[#FEF9ED]/85 font-sans">
              <div className="flex items-start gap-2.5">
                <span className="text-[#FFA800] text-sm mt-0.5">🏢</span>
                <span className="leading-snug">
                  2nd Floor Hustlehub Tech Park, HSR Layout, Bengaluru, Karnataka 560102
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#FFA800] text-sm">✉</span>
                <a href="mailto:support@baagul.in" className="hover:text-[#FFA800] transition-colors">
                  support@baagul.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-[#FFA800] text-sm">📞</span>
                <a href="tel:+917483737014" className="hover:text-[#FFA800] transition-colors">
                  +91 7483737014
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Services Links (2 cols) */}
          <div className="lg:col-span-2 lg:pl-4 flex flex-col">
            <span className="font-mono font-bold text-xs uppercase tracking-widest text-[#FFA800] mb-4">
              SERVICES
            </span>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-[#FEF9ED]/85 font-sans">
              <li>
                <Link href="/services/e-commerce-solutions" className="hover:text-[#FFA800] transition-colors">
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/video-editing" className="hover:text-[#FFA800] transition-colors">
                  Video Editing
                </Link>
              </li>
              <li>
                <Link href="/services/seo-optimizations" className="hover:text-[#FFA800] transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FFA800] transition-colors">
                  Web Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col">
            <span className="font-mono font-bold text-xs uppercase tracking-widest text-[#FFA800] mb-4">
              COMPANY
            </span>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-[#FEF9ED]/85 font-sans">
              <li>
                <Link href="/#story" className="hover:text-[#FFA800] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#FFA800] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/#case-studies" className="hover:text-[#FFA800] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-[#FFA800] transition-colors">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFA800] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / Updates (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <span className="font-mono font-bold text-xs uppercase tracking-widest text-[#FFA800] mb-4">
              NEWSLETTER / UPDATES
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#FEF9ED]/80 leading-relaxed mb-4">
              Stay ahead in digital marketing. Read our weekly technical dispatches on algorithm shifts and growth mechanics.
            </p>
            
            {submitted ? (
              <div className="p-4 bg-[#00A86B]/25 border border-[#00A86B] rounded-xl text-left mb-2">
                <span className="font-heading text-base text-[#FFA800] block mb-1 font-bold">
                  ✓ Subscribed!
                </span>
                <span className="text-xs text-[#FEF9ED] block mb-2 leading-relaxed">
                  Thank you! You have been subscribed to our weekly technical dispatch.
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setEmail("");
                    setSubmitted(false);
                    setTouched(false);
                  }}
                  className="text-[11px] font-mono uppercase underline text-[#FFA800] hover:text-[#FEF9ED] transition-colors cursor-pointer"
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

                <div className="flex items-center gap-2">
                  <input
                    id="footer-subscribe-email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter company email..."
                    className={`flex-1 px-4 py-2.5 rounded-lg bg-[#FFFFFF] text-[#0E1153] placeholder:text-gray-400 text-xs sm:text-sm focus:outline-none transition-all ${
                      emailError
                        ? "border-2 border-red-500 ring-2 ring-red-400/50"
                        : "focus:ring-2 focus:ring-[#FFA800]"
                    }`}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-5 py-2.5 rounded-lg bg-[#FFA800] text-[#0E1153] font-sans font-bold text-xs sm:text-sm transition-all shadow-sm shrink-0 flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? "opacity-75 cursor-not-allowed"
                        : "hover:bg-[#FFB82E] hover:translate-x-0.5 hover:translate-y-0.5 cursor-pointer shadow-[2px_2px_0px_#0E1153]"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-[#0E1153] border-t-transparent rounded-full animate-spin" />
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

            <span className="text-[11px] font-sans text-[#FEF9ED]/60">
              Strictly value. No spam. Unsubscribe anytime.
            </span>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Location Pill */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#FEF9ED]/75">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-[#00A86B]" />
            <span>&copy; 2025 Baagul Marketing LLP. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-3">
            <span>Crafted with precision in Bengaluru.</span>
            <span className="px-3 py-1 rounded-full border border-[#FEF9ED]/40 text-[#FFA800] text-xs font-mono font-bold">
              HSR Layout
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
