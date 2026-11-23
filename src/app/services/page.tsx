import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { SERVICES } from "@/lib/mcp/content/services";
import { servicesHubSchema } from "@/lib/structured-data";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesCardsGrid from "@/components/services/ServicesCardsGrid";
import ServicesCTABand from "@/components/services/ServicesCTABand";

export const metadata: Metadata = {
  title: "Digital Marketing & Web Services in Bangalore | Baagul",
  description: "Explore Baagul's digital marketing services in Bangalore: SEO, website and app development, performance marketing, branding, design and video editing.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Digital Marketing & Web Services in Bangalore | Baagul",
    description: "Explore Baagul's digital marketing services in Bangalore: SEO, website and app development, performance marketing, branding, design and video editing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & Web Services in Bangalore | Baagul",
    description: "Explore Baagul's digital marketing services in Bangalore: SEO, website and app development, performance marketing, branding, design and video editing.",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-indigo-main antialiased selection:bg-marigold selection:text-indigo-main">
      <JsonLd data={servicesHubSchema(SERVICES)} />
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
