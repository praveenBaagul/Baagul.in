import React from "react";

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
          <span>Powerful, Flexible &amp; </span>
          <span className="inline-block bg-[#FFA800] text-[#0E1153] px-4 py-0.5 rounded-xl border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153]">
            Scalable
          </span>
          <br />
          <span>WordPress Websites</span>
        </h2>

        {/* Highlighted Framed Editorial Box */}
        <div className="w-full p-8 sm:p-10 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] text-left mb-10">
          <p className="font-sans text-base sm:text-lg text-[#3E4945] leading-relaxed">
            <span className="font-heading text-5xl font-bold text-[#0E1153] float-left mr-3 leading-none">
              A
            </span>
            t Baagul, we combine exceptional design aesthetics with high-performance engineering to build WordPress websites that look stunning and convert reliably. Whether you need a bespoke corporate portal, an editorial publication, or a high-converting WooCommerce storefront, our custom architectures are engineered without code bloat, guaranteeing longevity, effortless content management, and rapid page loads.
          </p>
        </div>

        {/* 2-Column Supporting Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-[#3E4945] font-sans text-xs sm:text-sm leading-relaxed">
          <p>
            We adhere strictly to WordPress core coding standards and modern PHP practices. Every theme is crafted from scratch with native Gutenberg blocks, ensuring your team has total editorial autonomy without reliance on fragile third-party page builders.
          </p>
          <p>
            Security, mobile responsiveness, and Core Web Vitals optimization are embedded directly into our deployment pipeline, protecting your brand equity and providing search engines with clean semantic signals.
          </p>
        </div>
      </div>
    </section>
  );
}

