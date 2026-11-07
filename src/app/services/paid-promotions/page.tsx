import React from "react";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PaidPromotionHero from "@/components/paid-promotions/PaidPromotionHero";
import PaidPromotionOffer from "@/components/paid-promotions/PaidPromotionOffer";
import PaidPromotionWhyChooseUs from "@/components/paid-promotions/PaidPromotionWhyChooseUs";
import PaidPromotionProcess from "@/components/paid-promotions/PaidPromotionProcess";
import PaidPromotionCTABanner from "@/components/paid-promotions/PaidPromotionCTABanner";
import PaidPromotionSpecMatrix from "@/components/paid-promotions/PaidPromotionSpecMatrix";

export const metadata: Metadata = {
  title: "Paid Promotion Services · Baagul Studio Bengaluru",
  description:
    "Elevate your brand's visibility and impact. High-ROI video content sponsorships, product promotion, and transparent creator reviews that connect your business with recurring buyers.",
  alternates: { canonical: "/services/paid-promotions" },
};

export default function PaidPromotionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF9ED] text-[#0E1153] antialiased selection:bg-[#FFA800] selection:text-[#0E1153]">
      <JsonLd data={serviceSchema({ name: "Paid Promotions & Media Buying", path: "/services/paid-promotions", description: metadata.description })} />
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero */}
        <PaidPromotionHero />

        {/* Section 2: What We Offer (3 Wide Alternating Rows) */}
        <PaidPromotionOffer />

        {/* Section 3: Why Choose Baagul for Paid Promotions? (Midnight Navy #1A1F5E) */}
        <PaidPromotionWhyChooseUs />

        {/* Section 4: 5-Step Process (Consultation to Review & Feedback) */}
        <PaidPromotionProcess />

        {/* Section 5: CTA Banner (Amplify your brand's reach) */}
        <PaidPromotionCTABanner />

        {/* Section 6: Specification Matrix */}
        {/* <PaidPromotionSpecMatrix /> */}
      </main>
      <Footer />
    </div>
  );
}

