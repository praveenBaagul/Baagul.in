import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PraveenProfileCard from "@/components/team/PraveenProfileCard";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Praveen Kumar A - Full Stack AI Developer | Baagul LLP",
  description:
    "Official practitioner profile, technical bio, and verified credentials for Praveen Kumar A, Full Stack AI Developer at Baagul LLP in Bengaluru.",
  alternates: { canonical: "/team/praveen-kumara" },
  openGraph: {
    title: "Praveen Kumar A - Full Stack AI Developer | Baagul LLP",
    description:
      "Official practitioner profile, technical bio, and verified credentials for Praveen Kumar A, Full Stack AI Developer at Baagul LLP in Bengaluru.",
    url: `${SITE_URL}/team/praveen-kumara`,
    images: [
      {
        url: `${SITE_URL}/assets/praveen-kumar-a.png`,
        width: 1200,
        height: 630,
        alt: "Praveen Kumar A - Full Stack AI Developer at Baagul LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Praveen Kumar A - Full Stack AI Developer | Baagul LLP",
    description:
      "Official practitioner profile, technical bio, and verified credentials for Praveen Kumar A, Full Stack AI Developer at Baagul LLP in Bengaluru.",
    images: [`${SITE_URL}/assets/praveen-kumar-a.png`],
  },
};

export default function PraveenProfilePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Praveen Kumar A",
      jobTitle: "Full Stack AI Developer",
      worksFor: {
        "@type": "Organization",
        name: "Baagul LLP",
        url: SITE_URL,
        address: {
          "@type": "PostalAddress",
          streetAddress: "2nd Floor, H210, Hustlehub Tech Park, 36/5, Somasundarapalya, 27th Main Rd, Sector 2, HSR Layout",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560102",
          addressCountry: "IN",
        },
      },
      image: `${SITE_URL}/assets/praveen-kumar-a.png`,
      identifier: "BGL-2024-E14",
      email: "support@baagul.in",
      telephone: "+91-62056-97634",
      url: `${SITE_URL}/team/praveen-kumara`,
      sameAs: [
        "https://in.linkedin.com/in/praveen-kumar-311514297",
        "https://www.linkedin.com/company/baagul",
        SITE_URL,
      ],
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas text-indigo-main antialiased selection:bg-marigold selection:text-indigo-main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="flex-1 py-12 sm:py-16 px-4 sm:px-8">
        <PraveenProfileCard />
      </main>

      <Footer />
    </div>
  );
}
