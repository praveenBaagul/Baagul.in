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
import PaidPromotionFAQ from "@/components/paid-promotions/PaidPromotionFAQ";
// import PaidPromotionSpecMatrix from "@/components/paid-promotions/PaidPromotionSpecMatrix";

export const metadata: Metadata = {
  title: "Performance Marketing Agency in Bangalore | BAAGUL",
  description:
    "Grow your business with BAAGUL's performance marketing services in Bangalore. Google Ads, Meta Ads, PPC management, lead generation and sales campaigns.",
  alternates: { canonical: "/services/paid-promotions" },
  openGraph: {
    title: "Performance Marketing Agency in Bangalore | BAAGUL",
    description:
      "Grow your business with BAAGUL's performance marketing services in Bangalore. Google Ads, Meta Ads, PPC management, lead generation and sales campaigns.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing Agency in Bangalore | BAAGUL",
    description:
      "Grow your business with BAAGUL's performance marketing services in Bangalore. Google Ads, Meta Ads, PPC management, lead generation and sales campaigns.",
  },
};

export default function PaidPromotionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF9ED] text-[#0E1153] antialiased selection:bg-[#FFA800] selection:text-[#0E1153]">
      <JsonLd data={serviceSchema({ name: "Performance Marketing & Paid Advertising", path: "/services/paid-promotions", description: metadata.description })} />
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero */}
        <PaidPromotionHero />

        {/* Section 2: What We Offer (3 Wide Alternating Rows) */}
        <PaidPromotionOffer />

        {/* Section 3: Why Choose BAAGUL for Performance Marketing (Midnight Navy #1A1F5E) */}
        <PaidPromotionWhyChooseUs />

        {/* Section 4: 5-Step Process (Consultation to Review & Feedback) */}
        <PaidPromotionProcess />

        {/* FAQs (with FAQPage schema) */}
        <PaidPromotionFAQ />

        {/* Section 5: CTA Banner (Amplify your brand's reach) */}
        <PaidPromotionCTABanner />

        {/* Section 6: Specification Matrix */}
        {/* <PaidPromotionSpecMatrix /> */}
      </main>
      <Footer />
    </div>
  );
}

