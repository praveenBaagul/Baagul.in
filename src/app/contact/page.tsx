import React, { Suspense } from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactDetailsBand from "@/components/contact/ContactDetailsBand";
import EnquiryFormSection from "@/components/contact/EnquiryFormSection";
import FAQAndMapSection from "@/components/contact/FAQAndMapSection";

export const metadata: Metadata = {
  title: "Enquiry Now · Baagul Studio Bengaluru",
  description:
    "Schedule a technical strategy sprint or get a tailored proposal from Baagul Studio at Hustlehub Tech Park, HSR Layout, Bengaluru.",
  alternates: { canonical: "/contact" },
};

function EnquiryFormFallback() {
  return (
    <div className="w-full py-20 px-4 sm:px-12 max-w-7xl mx-auto flex items-center justify-center min-h-[400px]">
      <div className="flex items-center gap-3 text-indigo-main font-mono text-sm">
        <span className="w-4 h-4 border-2 border-indigo-main border-t-transparent rounded-full animate-spin" />
        <span>Loading enquiry form...</span>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-indigo-main antialiased selection:bg-marigold selection:text-indigo-main">
      <Header />
      <main className="flex-1 flex flex-col">
        <ContactHero />
        <ContactDetailsBand />
        <Suspense fallback={<EnquiryFormFallback />}>
          <EnquiryFormSection />
        </Suspense>
        <FAQAndMapSection />
      </main>
      <Footer />
    </div>
  );
}
