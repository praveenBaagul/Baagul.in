import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Baagul · Digital Growth Studio",
    short_name: "Baagul",
    description:
      "Architectural SEO, bespoke web engineering, and brand systems made in Bengaluru.",
    start_url: "/",
    display: "standalone",
    background_color: "#FEF9ED",
    theme_color: "#0E1153",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}

