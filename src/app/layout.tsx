import type { Metadata } from "next";
import { Hanken_Grotesk, Gloock, Noto_Serif_Kannada } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

const gloock = Gloock({
  variable: "--font-gloock",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const notoKannada = Noto_Serif_Kannada({
  variable: "--font-noto-kannada",
  weight: ["400", "700"],
  subsets: ["kannada"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  openGraph: { type: "website", siteName: "Baagul", locale: "en_IN" },
  twitter: { card: "summary_large_image" },
  title:"Baagul · Digital growth, made in Bengaluru",
  description: "SEO, websites, Google and Meta ads and branding for high-growth startups, local businesses, and modern enterprises. Six years of craftsmanship, strictly measured in qualified leads and bottom-line revenue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hanken.variable} ${gloock.variable} ${notoKannada.variable}`}>
      <body className="antialiased selection:bg-marigold selection:text-indigo-main">
        {children}
      </body>
    </html>
  );
}
