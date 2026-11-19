import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavinProfileCard from "@/components/team/NavinProfileCard";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Navin Kumar Verma - Flutter & WordPress Developer | Baagul LLP",
  description:
    "Official practitioner profile, technical bio, and verified credentials for Navin Kumar Verma, Flutter Developer & WordPress CMS Specialist at Baagul LLP in Bengaluru.",
  alternates: { canonical: "/team/navin-kumar-verma" },
  openGraph: {
    title: "Navin Kumar Verma - Flutter & WordPress Developer | Baagul LLP",
    description:
      "Official practitioner profile, technical bio, and verified credentials for Navin Kumar Verma, Flutter Developer & WordPress CMS Specialist at Baagul LLP in Bengaluru.",
    url: `${SITE_URL}/team/navin-kumar-verma`,
    images: [
      {
        url: `${SITE_URL}/assets/navin-kumar-verma.png`,
        width: 1200,
        height: 630,
        alt: "Navin Kumar Verma - Flutter & WordPress Developer at Baagul LLP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navin Kumar Verma - Flutter & WordPress Developer | Baagul LLP",
    description:
      "Official practitioner profile, technical bio, and verified credentials for Navin Kumar Verma, Flutter Developer & WordPress CMS Specialist at Baagul LLP in Bengaluru.",
    images: [`${SITE_URL}/assets/navin-kumar-verma.png`],
  },
};

export default function NavinProfilePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Navin Kumar Verma",
      jobTitle: "Flutter Developer & WordPress & CMS Development",
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
      image: `${SITE_URL}/assets/navin-kumar-verma.png`,
      identifier: "BG006",
      email: "support@baagul.in",
      telephone: "+91-62056-97634",
      url: `${SITE_URL}/team/navin-kumar-verma`,
      sameAs: [
        "https://www.linkedin.com/in/navin-kumar-verma",
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
        <NavinProfileCard />
      </main>

      <Footer />
    </div>
  );
}
