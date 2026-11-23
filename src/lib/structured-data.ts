import { SITE_URL } from "@/lib/site";

// Schema.org JSON-LD builders. Validate output with
// https://search.google.com/test/rich-results or https://validator.schema.org/

/** The one Organization node. Other pages reference it by @id instead of repeating it. */
export const ORG_ID = `${SITE_URL}/#organization`;

export const BUSINESS = {
  // BAAGUL is the public brand; Baagul LLP is the registered company name.
  name: "BAAGUL",
  legalName: "Baagul LLP",
  email: "support@baagul.in",
  telephone: "+91-62056-97634",
  logo: `${SITE_URL}/assets/baagul-brand-logo.png`,
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
    legalName: BUSINESS.legalName,
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

const orgRef = { "@id": ORG_ID };

/** Home, then each given page. The last item is the current page. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "" }, ...trail].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** A page that lists other pages, e.g. the services hub or the job openings. */
function collectionPageSchema(page: { name: string; path: string }, items: { name: string; url: string }[]) {
  const url = `${SITE_URL}${page.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: page.name,
        about: orgRef,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            url: item.url,
          })),
        },
      },
      breadcrumbSchema([page]),
    ],
  };
}

/** The services hub. Each service page carries its own Service schema. */
export function servicesHubSchema(services: { name: string; url: string }[]) {
  return collectionPageSchema({ name: "Services", path: "/services" }, services);
}

/** The careers page. Each opening's page carries its own JobPosting schema. */
export function careersPageSchema(openings: { title: string; url: string }[]) {
  return collectionPageSchema(
    { name: "Careers", path: "/career" },
    openings.map((opening) => ({ name: opening.title, url: opening.url }))
  );
}

/** The team page: an About page for the organisation, which is referenced, not repeated. */
export function aboutPageSchema() {
  const url = `${SITE_URL}/team`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "AboutPage", "@id": `${url}#webpage`, url, name: "About Us & Team", about: orgRef },
      breadcrumbSchema([{ name: "Team", path: "/team" }]),
    ],
  };
}
