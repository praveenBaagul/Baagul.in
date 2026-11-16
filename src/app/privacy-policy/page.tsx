import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy · Baagul Marketing LLP",
  description:
    "Privacy policy and data governance practices of Baagul Marketing LLP, HSR Layout, Bengaluru. Learn how we handle, process, and protect your information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f2e4] text-[#121a4a] antialiased selection:bg-[#f4a300] selection:text-[#121a4a]">
      <Header />

      <main className="flex-1 flex flex-col py-16 px-4 sm:px-12 max-w-5xl mx-auto w-full">
        {/* Breadcrumb & Badge */}
        <div className="flex items-center gap-2 mb-6 text-xs font-mono font-bold uppercase tracking-wider text-[#0e7c6b]">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-[#121a4a]">Privacy Policy</span>
        </div>

        {/* Title */}
        <div className="border-b-2 border-[#121a4a] pb-8 mb-10">
          <span className="inline-block px-3 py-1 rounded bg-[#f4a300] text-[#121a4a] border border-[#121a4a] font-mono text-xs font-bold uppercase tracking-wider mb-4 shadow-[2px_2px_0px_#121a4a]">
            LEGAL &amp; COMPLIANCE
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#121a4a] tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="font-mono text-xs text-[#5f6485]">
            Last Updated: November 2026 · Baagul Marketing LLP, HSR Layout, Bengaluru, Karnataka, India
          </p>
        </div>

        {/* Content Body */}
        <article className="prose prose-lg max-w-none space-y-8 font-sans text-sm sm:text-base leading-relaxed text-[#121a4a]/90">
          <section className="bg-white border-2 border-[#121a4a] rounded-xl p-6 sm:p-8 shadow-[4px_4px_0px_#121a4a]">
            <h2 className="font-heading text-2xl font-bold text-[#121a4a] mb-3">
              1. Introduction
            </h2>
            <p>
              Baagul Marketing LLP (&quot;Baagul&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to respecting your privacy and protecting any personal data collected through our website (<strong>baagul.in</strong>) and client intake systems. This Privacy Policy details the types of information we collect, how it is processed, and your rights concerning your personal data.
            </p>
          </section>

          <section className="bg-white border-2 border-[#121a4a] rounded-xl p-6 sm:p-8 shadow-[4px_4px_0px_#121a4a]">
            <h2 className="font-heading text-2xl font-bold text-[#121a4a] mb-3">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We collect information that you voluntarily provide to us when submitting an inquiry, subscribing to our insights newsletter, or scheduling a consultation:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-mono text-xs sm:text-sm text-[#121a4a]/85">
              <li><strong>Contact Information:</strong> Full name, corporate email address, verified phone number, and company name.</li>
              <li><strong>Project Requirements:</strong> Selected marketing services, budget brackets, timeline constraints, and creative briefs.</li>
              <li><strong>Technical Metadata:</strong> IP address, browser user-agent, diagnostic logs, and referrers collected for rate limiting and spam prevention.</li>
            </ul>
          </section>

          <section className="bg-white border-2 border-[#121a4a] rounded-xl p-6 sm:p-8 shadow-[4px_4px_0px_#121a4a]">
            <h2 className="font-heading text-2xl font-bold text-[#121a4a] mb-3">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">
              Your data is processed strictly for legitimate business operations:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Evaluating and responding to your commercial project inquiries.</li>
              <li>Preparing customized proposals, service scopes, and sprint roadmaps.</li>
              <li>Delivering automated lead response emails and operational notifications via verified SMTP relays.</li>
              <li>Preventing automated bot abuse, spam submissions, and distributed denial-of-service attempts.</li>
            </ul>
          </section>

          <section className="bg-white border-2 border-[#121a4a] rounded-xl p-6 sm:p-8 shadow-[4px_4px_0px_#121a4a]">
            <h2 className="font-heading text-2xl font-bold text-[#121a4a] mb-3">
              4. Data Retention &amp; Security
            </h2>
            <p>
              We enforce strict encryption and access governance protocols. Client inquiries are stored in access-controlled MySQL database tables and transmitted via TLS 1.3 encryption. We never sell, rent, monetize, or barter your personal information to third-party data brokers or marketing networks.
            </p>
          </section>

          <section className="bg-white border-2 border-[#121a4a] rounded-xl p-6 sm:p-8 shadow-[4px_4px_0px_#121a4a]">
            <h2 className="font-heading text-2xl font-bold text-[#121a4a] mb-3">
              5. Cookies and Anonymous Telemetry
            </h2>
            <p>
              Our website uses essential technical cookies required for navigation state and security token validation. We do not deploy invasive third-party cross-site behavioral tracking cookies.
            </p>
          </section>

          <section className="bg-white border-2 border-[#121a4a] rounded-xl p-6 sm:p-8 shadow-[4px_4px_0px_#121a4a]">
            <h2 className="font-heading text-2xl font-bold text-[#121a4a] mb-3">
              6. Contact Us &amp; Data Rights
            </h2>
            <p className="mb-4">
              You have the right to request access to, modification of, or permanent deletion of your inquiry records. To exercise your rights, contact our privacy officer:
            </p>
            <div className="bg-[#f8f2e4] p-4 rounded-lg border border-[#121a4a] font-mono text-xs space-y-1">
              <p><strong>Entity:</strong> Baagul Marketing LLP</p>
              <p><strong>Address:</strong> Sector 4, HSR Layout, Bengaluru, Karnataka 560102, India</p>
              <p><strong>Email:</strong> <a href="mailto:support@baagul.in" className="text-[#0e7c6b] underline">support@baagul.in</a></p>
              <p><strong>Direct Inquiries:</strong> <a href="mailto:praveen@baagul.com" className="text-[#0e7c6b] underline">praveen@baagul.com</a></p>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
}

