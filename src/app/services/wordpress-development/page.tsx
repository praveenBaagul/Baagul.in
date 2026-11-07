import React from "react";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WordPressHero from "@/components/wordpress-development/WordPressHero";
import WordPressDeliverables from "@/components/wordpress-development/WordPressDeliverables";
import WordPressServicesGrid from "@/components/wordpress-development/WordPressServicesGrid";
import WordPressProcess from "@/components/wordpress-development/WordPressProcess";
import WordPressWhyChooseUs from "@/components/wordpress-development/WordPressWhyChooseUs";
import WordPressWorks from "@/components/wordpress-development/WordPressWorks";
import WordPressFAQ from "@/components/wordpress-development/WordPressFAQ";
import WordPressServicePager from "@/components/wordpress-development/WordPressServicePager";
import WordPressSpecMatrix from "@/components/wordpress-development/WordPressSpecMatrix";

export const metadata: Metadata = {
  title: "WordPress Development · Baagul Studio Bengaluru",
  description:
    "Enterprise headless WordPress architectures, bespoke Gutenberg block themes, and high-performance WooCommerce storefronts that pass Core Web Vitals with 99+ PageSpeed scores.",
  alternates: { canonical: "/services/wordpress-development" },
};

export default function WordPressDevelopmentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF9ED] text-[#0E1153] antialiased selection:bg-[#FFA800] selection:text-[#0E1153]">
      <JsonLd data={serviceSchema({ name: "WordPress & CMS Development", path: "/services/wordpress-development", description: metadata.description })} />
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero */}
        <WordPressHero />

        {/* Section 2: Overview & Deliverables Accordion (Midnight Navy #1A1F5E) */}
        <WordPressDeliverables />

        {/* Section 3: Our Services 4-Card Grid */}
        <WordPressServicesGrid />

        {/* Section 4: 4-Step Process (Deep Green #005F4C) */}
        <WordPressProcess />

        {/* Section 5: Why Choose Us (Powerful, Flexible & Scalable WordPress Websites) */}
        <WordPressWhyChooseUs />

        {/* Section 6: Some of Our Works Case Studies */}
        <WordPressWorks />

        {/* Section 7: FAQs (Soft Lavender #E1E3F7) */}
        <WordPressFAQ />

        {/* Section 8: Service Pager */}
        <WordPressServicePager />

        {/* Section 9: Specification Matrix */}
        {/* <WordPressSpecMatrix /> */}
      </main>
      <Footer />
    </div>
  );
}

