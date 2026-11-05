import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesCardsGrid from "@/components/services/ServicesCardsGrid";
import CraftsmanStandardsBand from "@/components/services/CraftsmanStandardsBand";
import ServicesCTABand from "@/components/services/ServicesCTABand";

export const metadata: Metadata = {
  title: "Our Services · Baagul Studio Bengaluru",
  description: "Explore Baagul Studio's comprehensive suite of digital marketing solutions, website design & development, SEO optimization, and e-commerce architectures.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-indigo-main antialiased selection:bg-marigold selection:text-indigo-main">
      <Header />
      <main className="flex-1 flex flex-col">
        <ServicesHero />
        <ServicesCardsGrid />
        <CraftsmanStandardsBand />
        <ServicesCTABand />
      </main>
      <Footer />
    </div>
  );
}
