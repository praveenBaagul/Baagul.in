import React from "react";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EcommerceHero from "@/components/e-commerce/EcommerceHero";
import EcommerceMainFeatures from "@/components/e-commerce/EcommerceMainFeatures";
import EcommerceServicesDepth from "@/components/e-commerce/EcommerceServicesDepth";
import EcommerceWhyChooseUs from "@/components/e-commerce/EcommerceWhyChooseUs";
import EcommerceProcess from "@/components/e-commerce/EcommerceProcess";
import EcommerceWorks from "@/components/e-commerce/EcommerceWorks";
import EcommerceFAQ from "@/components/e-commerce/EcommerceFAQ";
import EcommerceServicePager from "@/components/e-commerce/EcommerceServicePager";
import EcommerceSpecMatrix from "@/components/e-commerce/EcommerceSpecMatrix";

export const metadata: Metadata = {
  title: "E-Commerce Solutions & Store Development | Baagul Studio",
  description:
    "High-converting online store engineering, custom checkout flows, payment gateway integrations, and headless commerce architectures.",
  alternates: { canonical: "/services/e-commerce-solutions" },
  openGraph: {
    title: "E-Commerce Solutions & Store Development | Baagul Studio",
    description:
      "High-converting online store engineering, custom checkout flows, payment gateway integrations, and headless commerce architectures.",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Solutions & Store Development | Baagul Studio",
    description:
      "High-converting online store engineering, custom checkout flows, payment gateway integrations, and headless commerce architectures.",
  },
};

export default function EcommerceSolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-indigo-main antialiased selection:bg-marigold selection:text-indigo-main">
      <JsonLd data={serviceSchema({ name: "E-Commerce Solutions", path: "/services/e-commerce-solutions", description: metadata.description })} />
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero */}
        <EcommerceHero />

        {/* Section 2: Main Features */}
        <EcommerceMainFeatures />

        {/* Section 3: Our Services in Depth */}
        <EcommerceServicesDepth />

        {/* Section 4: Why Choose Us */}
        <EcommerceWhyChooseUs />

        {/* Section 5: 4-Step Process */}
        <EcommerceProcess />

        {/* Section 6: Some of Our Works */}
        <EcommerceWorks />

        {/* Section 7: FAQs */}
        <EcommerceFAQ />

        {/* Section 8: Service Pager */}
        <EcommerceServicePager />

        {/* Section 9: Interactive Component State Sheet */}
        {/* <EcommerceSpecMatrix /> */}
      </main>
      <Footer />
    </div>
  );
}
