import React from "react";
import Link from "next/link";

export default function WordPressWhyChooseUs() {
  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#FEF9ED] text-[#0E1153] border-b-2 border-[#0E1153]">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase tracking-widest text-[#005F4C]">
          <span className="w-2 h-2 rounded-full bg-[#FFA800]" />
          <span>DEVELOPMENT EXCELLENCE</span>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#0E1153] leading-tight mb-8">
          <span>Why Choose BAAGUL for </span>
          <span className="inline-block bg-[#FFA800] text-[#0E1153] px-4 py-0.5 rounded-xl border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153]">
            WordPress
          </span>
          <br />
          <span>Development?</span>
        </h2>

        {/* Highlighted Framed Editorial Box */}
        <div className="w-full p-8 sm:p-10 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] text-left mb-10">
          <p className="font-sans text-base sm:text-lg text-[#3E4945] leading-relaxed">
            <span className="font-heading text-5xl font-bold text-[#0E1153] float-left mr-3 leading-none">
              A
            </span>
            t BAAGUL, we combine strong design with careful engineering to build WordPress websites that look great and are easy to run. Whether you need a corporate website, an editorial publication or a redesign of your current site, we build lean custom themes for fast pages and simple content management. Selling online? Our{" "}
            <Link href="/services/e-commerce-solutions" className="font-bold text-[#005F4C] underline underline-offset-2 hover:text-[#0E1153]">
              e-commerce development team
            </Link>{" "}
            builds WooCommerce and Shopify stores.
          </p>
        </div>

        {/* 2-Column Supporting Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-[#3E4945] font-sans text-xs sm:text-sm leading-relaxed">
          <p>
            We adhere strictly to WordPress core coding standards and modern PHP practices. Every theme is crafted from scratch with native Gutenberg blocks, ensuring your team has total editorial autonomy without reliance on fragile third-party page builders.
          </p>
          <p>
            Security, mobile responsiveness and Core Web Vitals optimization are part of every build, giving search engines clean, well-structured pages. To grow organic traffic after launch, pair your site with our{" "}
            <Link href="/services/seo-optimizations" className="font-bold text-[#005F4C] underline underline-offset-2 hover:text-[#0E1153]">
              SEO optimization services
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

