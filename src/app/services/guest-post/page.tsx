import React from "react";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { serviceSchema } from "@/lib/structured-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuestPostHero from "@/components/guest-post/GuestPostHero";
import GuestPostPillsStrip from "@/components/guest-post/GuestPostServicesDepth";
import GuestPostMainFeatures from "@/components/guest-post/GuestPostMainFeatures";
import GuestPostProcess from "@/components/guest-post/GuestPostProcess";
import GuestPostWhyChooseUs from "@/components/guest-post/GuestPostWhyChooseUs";
import GuestPostFAQ from "@/components/guest-post/GuestPostFAQ";
import GuestPostServicePager from "@/components/guest-post/GuestPostServicePager";
import GuestPostSpecMatrix from "@/components/guest-post/GuestPostSpecMatrix";

export const metadata: Metadata = {
  title: "Guest Post • Baagul Studio Bengaluru",
  description:
    "Publishing high-quality content on top websites to build authority, earn natural high-DA backlinks, and capture qualified affiliate-grade traffic. Bengaluru digital PR and outreach architecture.",
  alternates: { canonical: "/services/guest-post" },
};

export default function GuestPostPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FEF9ED] text-[#0E1153] antialiased selection:bg-[#FFA800] selection:text-[#0E1153]">
      <JsonLd data={serviceSchema({ name: "Guest Posting", path: "/services/guest-post", description: metadata.description })} />
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Section 1: Hero (Forest Green #005F4C background, Bar chart widget & Poster illustration) */}
        <GuestPostHero />

        {/* Section 2: Pills & Results Strip (Light cream background, 6 rounded badges) */}
        <GuestPostPillsStrip />

        {/* Section 3: Our Services 4 Cards (Soft lavender background #E1E3F7) */}
        <GuestPostMainFeatures />

        {/* Section 4: 4-Step Guest Post Process (Midnight navy #1A1F5E background) */}
        <GuestPostProcess />

        {/* Section 5: Why Choose Us (Build Authority, Earn Backlinks. Rank Higher + 98% indexation box) */}
        <GuestPostWhyChooseUs />

        {/* Section 6: 2-Column FAQ Accordion */}
        <GuestPostFAQ />

        {/* Section 7: Service Pager (Logo Design / Content Writing) */}
        <GuestPostServicePager />

        {/* Section 8: Specification Matrix */}
        <GuestPostSpecMatrix />
      </main>
      <Footer />
    </div>
  );
}
