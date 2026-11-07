import { SITE_URL } from "@/lib/site";

// Schema.org JSON-LD builders. Validate output with
// https://search.google.com/test/rich-results or https://validator.schema.org/

const ORG_ID = `${SITE_URL}/#organization`;

export const BUSINESS = {
  name: "Baagul",
  email: "support@baagul.in",
  telephone: "+91-7483737014",
  logo: `${SITE_URL}/assets/favicon.png`,
  address: {
    streetAddress: "2nd Floor, Hustlehub Tech Park, HSR Layout",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560102",
    addressCountry: "IN",
  },
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: BUSINESS.logo,
    image: BUSINESS.logo,
    email: BUSINESS.email,
    telephone: BUSINESS.telephone,
    address: { "@type": "PostalAddress", ...BUSINESS.address },
    sameAs: [
      "https://www.linkedin.com/company/baagulmarketing/",
      "https://www.instagram.com/baagul_marketing/",
      "https://x.com/baagul_in",
    ],
    areaServed: ["IN", "Worldwide"],
  };
}

export function serviceSchema({
  name,
  path,
  description,
}: {
  name: string;
  path: string;
  description?: string | null;
}) {
  const url = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name,
        serviceType: name,
        url,
        ...(description ? { description } : {}),
        provider: { "@type": "ProfessionalService", "@id": ORG_ID, name: BUSINESS.name, url: SITE_URL },
        areaServed: ["IN", "Worldwide"],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
          { "@type": "ListItem", position: 3, name, item: url },
        ],
      },
    ],
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      // Strip list numbering like "1. " that some FAQ data includes.
      name: q.replace(/^\d+\.\s*/, ""),
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
