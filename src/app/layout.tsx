import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Hanken_Grotesk, Gloock, Noto_Serif_Kannada } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import WhatsAppChatWidget from "@/components/WhatsAppChatWidget";

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

export const viewport: Viewport = {
  themeColor: "#0E1153",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icons/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  title: "Digital Marketing, SEO & Web Studio in Bengaluru | Baagul",
  description: "Digital marketing, SEO, web design & growth marketing in Bengaluru. Measurable leads and revenue for startups and growing enterprises.",
  openGraph: {
    type: "website",
    siteName: "Baagul",
    locale: "en_IN",
    title: "Digital Marketing, SEO & Web Studio in Bengaluru | Baagul",
    description: "Digital marketing, SEO, web design & growth marketing in Bengaluru. Measurable leads and revenue for startups and growing enterprises.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing, SEO & Web Studio in Bengaluru | Baagul",
    description: "Digital marketing, SEO, web design & growth marketing in Bengaluru. Measurable leads and revenue for startups and growing enterprises.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={`${hanken.variable} ${gloock.variable} ${notoKannada.variable}`}>
      <body className="antialiased selection:bg-marigold selection:text-indigo-main">
        {gaId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        )}
        {children}
        <WhatsAppChatWidget />
      </body>
    </html>
  );
}
