import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesCardsGrid from "@/components/services/ServicesCardsGrid";
import ServicesCTABand from "@/components/services/ServicesCTABand";

export const metadata: Metadata = {
  title: "Digital Marketing & Web Services in Bengaluru | Baagul",
  description: "Explore Baagul Studio's digital marketing, web design, SEO optimization, and e-commerce growth architectures in Bengaluru.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Digital Marketing & Web Services in Bengaluru | Baagul",
    description: "Explore Baagul Studio's digital marketing, web design, SEO optimization, and e-commerce growth architectures in Bengaluru.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & Web Services in Bengaluru | Baagul",
    description: "Explore Baagul Studio's digital marketing, web design, SEO optimization, and e-commerce growth architectures in Bengaluru.",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-indigo-main antialiased selection:bg-marigold selection:text-indigo-main">
      <Header />
      <main className="flex-1 flex flex-col">
        <ServicesHero />
        <ServicesCardsGrid />
        <ServicesCTABand />
      </main>
      <Footer />
    </div>
  );
}
