import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SifeProfileCard from "@/components/team/SifeProfileCard";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sife Domnic Fernandes - UGC Creator & SEO Analyst | Baagul LLP",
  description:
    "Official practitioner profile, technical bio, and verified credentials for Sife Domnic Fernandes, UGC Creator & SEO Analyst at Baagul LLP in Bengaluru.",
  alternates: { canonical: "/team/sife-domnic-fernandes" },
  openGraph: {
    title: "Sife Domnic Fernandes - UGC Creator & SEO Analyst | Baagul LLP",
    description:
      "Official practitioner profile, technical bio, and verified credentials for Sife Domnic Fernandes, UGC Creator & SEO Analyst at Baagul LLP in Bengaluru.",
    url: `${SITE_URL}/team/sife-domnic-fernandes`,
    images: [
      {
        url: `${SITE_URL}/assets/sife-domnic-fernandes.png`,
        width: 1200,
        height: 630,
        alt: "Sife Domnic Fernandes - UGC Creator & SEO Analyst at Baagul LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sife Domnic Fernandes - UGC Creator & SEO Analyst | Baagul LLP",
    description:
      "Official practitioner profile, technical bio, and verified credentials for Sife Domnic Fernandes, UGC Creator & SEO Analyst at Baagul LLP in Bengaluru.",
    images: [`${SITE_URL}/assets/sife-domnic-fernandes.png`],
  },
};

export default function SifeProfilePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Sife Domnic Fernandes",
      jobTitle: "UGC Creator & SEO Analyst",
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
      image: `${SITE_URL}/assets/sife-domnic-fernandes.png`,
      identifier: "BG008",
      email: "support@baagul.in",
      telephone: "+91-62056-97634",
      url: `${SITE_URL}/team/sife-domnic-fernandes`,
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
        <SifeProfileCard />
      </main>

      <Footer />
    </div>
  );
}
