import React from "react";
import type { Metadata } from "next";
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
  title: "E-Commerce Solutions · Baagul Studio Bengaluru",
  description: "Building secure, scalable, and high-performing online stores that convert. Custom online store development, secure payment integration, and conversion-focused design.",
};

export default function EcommerceSolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-canvas text-indigo-main antialiased selection:bg-marigold selection:text-indigo-main">
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
        <EcommerceSpecMatrix />
      </main>
      <Footer />
    </div>
  );
}
