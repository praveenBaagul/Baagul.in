"use client";

import React, { useState } from "react";
import { ArrowRightIcon } from "./Icons";
import { newsletterSchema } from "@/lib/validations/enquiry";

export default function CTASection() {
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
      console.error("Newsletter submission error:", err);
      if (err instanceof Error) {
        setServerError(err.message);
      } else {
        setServerError("Failed to subscribe. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-24 px-4 sm:px-12 bg-indigo-main text-canvas relative overflow-hidden border-t-2 border-indigo-main">
      {/* Bidri decorative SVG backdrop overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#dadff4_1px,transparent_1px)] [background-size:24px_24px]" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 items-center">
        
        {/* Left Column: Action Prompt */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 bg-marigold shadow-[1px_1px_0px_#f8f2e4]" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.25em] text-marigold">
              SCHEDULE A WORK SESSION
            </span>
          </div>

          <h2 className="font-heading text-5xl sm:text-7xl font-normal text-canvas tracking-tight mb-6">
            Got a project?
            <br />
            <span className="text-marigold inline-block">Let&apos;s talk.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-canvas/80 max-w-xl leading-relaxed mb-8">
            Whether you need a ground-up technical SEO migration, paid acquisition scaling, or 
            a pixel-perfect web application that converts, our studio team is ready.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="mailto:support@baagul.in"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-marigold text-indigo-dark font-bold text-sm border border-canvas shadow-[4px_4px_0px_#f8f2e4] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#f8f2e4] transition-all duration-150"
            >
              <span>Book Strategy Call</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>

            <a
              href="tel:+917483737014"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-indigo-mid text-canvas font-semibold text-sm border border-canvas/40 hover:bg-indigo-mid/80 transition-colors"
            >
              +91 7483737014
            </a>
          </div>

          {/* Studio Office coordinates */}
          <div className="pt-6 border-t border-canvas/20 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-canvas/70">
            <div>
              <span className="font-bold text-canvas block mb-1">STUDIO LOCATION</span>
              Sector 4, HSR Layout,
              <br />
              Bengaluru, KA 560102
            </div>
            <div>
              <span className="font-bold text-canvas block mb-1">DIRECT INQUIRIES</span>
              support@baagul.in
              <br />
              Mon - Fri, 9:30 - 18:30 IST
            </div>
            <div>
              <span className="font-bold text-canvas block mb-1">TIMEZONE</span>
              UTC+05:30 (IST)
              <br />
              Active in Studio now
            </div>
          </div>
        </div>

        {/* Right Column: Newsletter Inlay Box "The Growth Letter" */}
        <div className="lg:col-span-5">
          <div className="p-8 bg-indigo-navy border-2 border-canvas/30 rounded-2xl shadow-[8px_8px_0px_#021064] relative">
            
            {/* Kannada Supra-title */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-canvas/15">
              <span className="font-kannada text-xs font-bold text-marigold">
                ಜ್ಞಾನ ವಿಕಾಸ · WEEKLY DISPATCH
              </span>
              <span className="text-[10px] font-sans uppercase font-bold text-canvas/60">
                ISSUE NO. 142
              </span>
            </div>

            <h3 className="font-heading text-3xl font-normal text-canvas mb-3">
              The Growth Letter
            </h3>

            <p className="font-sans text-xs sm:text-sm text-canvas/80 leading-relaxed mb-6">
              Deconstructions of Indian digital consumer behavior, paid search algorithm shifts, 
              and craft web design directly from our studio desks. Read by 12,000+ operators.
            </p>

            {submitted ? (
              <div className="p-5 bg-peacock/30 border border-peacock rounded-xl text-center">
                <span className="font-heading text-2xl text-marigold block mb-1">ಧನ್ಯವಾದಗಳು!</span>
                <span className="text-xs text-canvas block mb-3">
                  You are subscribed to the next Friday dispatch.
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setEmail("");
                    setSubmitted(false);
                    setTouched(false);
                  }}
                  className="text-[11px] font-mono uppercase underline text-marigold hover:text-canvas transition-colors cursor-pointer"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
                <label htmlFor="cta-email" className="sr-only">Company Email Address</label>
                
                {serverError && (
                  <p className="text-xs text-red-300 font-mono bg-red-950/60 p-2.5 rounded-lg border border-red-500/50">
                    ⚠ {serverError}
                  </p>
                )}

                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    id="cta-email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter company email..."
                    className={`flex-1 px-4 py-3 rounded-xl bg-canvas text-indigo-main font-sans text-sm focus:outline-none transition-all ${
                      emailError
                        ? "border-2 border-red-500 ring-2 ring-red-400/50"
                        : "border border-canvas/40 focus:ring-2 focus:ring-marigold"
                    }`}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-5 py-3 rounded-xl bg-marigold text-indigo-dark font-bold text-xs uppercase tracking-wider border border-indigo-main transition-all shrink-0 flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? "opacity-75 cursor-not-allowed"
                        : "hover:bg-marigold-light hover:translate-x-0.5 hover:translate-y-0.5 cursor-pointer shadow-[2px_2px_0px_#f8f2e4]"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-indigo-dark border-t-transparent rounded-full animate-spin" />
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

                <span className="text-[11px] text-canvas/50">
                  Strictly value. Zero spam. Unsubscribe anytime with 1 click.
                </span>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
