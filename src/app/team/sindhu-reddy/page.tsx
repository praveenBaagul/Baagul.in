import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SindhuProfileCard from "@/components/team/SindhuProfileCard";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sindhu Reddy - SEO Manager in Bengaluru | Baagul LLP",
  description:
    "Official practitioner profile, technical bio, and verified credentials for Sindhu Reddy, SEO Manager at Baagul LLP in Bengaluru.",
  alternates: { canonical: "/team/sindhu-reddy" },
  openGraph: {
    title: "Sindhu Reddy - SEO Manager in Bengaluru | Baagul LLP",
    description:
      "Official practitioner profile, technical bio, and verified credentials for Sindhu Reddy, SEO Manager at Baagul LLP in Bengaluru.",
    url: `${SITE_URL}/team/sindhu-reddy`,
    images: [
      {
        url: `${SITE_URL}/assets/sindhu-reddy.png`,
        width: 1200,
        height: 630,
        alt: "Sindhu Reddy - SEO Manager at Baagul LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sindhu Reddy - SEO Manager in Bengaluru | Baagul LLP",
    description:
      "Official practitioner profile, technical bio, and verified credentials for Sindhu Reddy, SEO Manager at Baagul LLP in Bengaluru.",
    images: [`${SITE_URL}/assets/sindhu-reddy.png`],
  },
};

export default function SindhuProfilePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Sindhu Reddy",
      jobTitle: "SEO Manager",
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
      image: `${SITE_URL}/assets/sindhu-reddy.png`,
      identifier: "BG03",
      email: "support@baagul.in",
      telephone: "+91-62056-97634",
      url: `${SITE_URL}/team/sindhu-reddy`,
      sameAs: [
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
        <SindhuProfileCard />
      </main>

      <Footer />
    </div>
  );
}
