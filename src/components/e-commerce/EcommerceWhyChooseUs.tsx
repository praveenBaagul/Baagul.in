import React from "react";

export default function EcommerceWhyChooseUs() {
  return (
    <section className="w-full py-24 px-4 sm:px-12 bg-[#FEF9ED] text-[#0E1153] border-t-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto">
        
        {/* Eyebrow & Headline */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-[#C8553D]" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#0E1153]">
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#0E1153] leading-tight mb-4">
            Your Business Deserves an Ecommerce Solution That{" "}
            <span className="relative inline-block mt-1">
              <span className="bg-[#FFBA45] text-[#0E1153] px-3 py-0.5 rounded-[2px] border-2 border-[#0E1153] drop-shadow-[4px_4px_0px_#0E1153] inline-block font-heading">
                &lt;Drives Growth&gt;
              </span>
            </span>
          </h2>
        </div>

        {/* 2-column narrative layout with editorial drop-cap */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col gap-6 text-[#3E4945] leading-relaxed font-sans text-base sm:text-lg">
            <p>
              <span className="font-heading text-5xl font-bold text-[#0E1153] float-left mr-3 leading-none">
                A
              </span>
              t Baagul, we believe an ecommerce website is more than just an online store — it&apos;s the backbone of your digital business. As a trusted ecommerce solutions company in Bangalore, we create powerful, conversion-focused online stores that are designed to attract customers, increase sales, and scale with your business.
            </p>
            <p>
              Our approach blends strategy, user experience, and technology to build ecommerce platforms that are fast, secure, and optimized for performance.
            </p>
            <p>
              We work closely with you to understand your products, target audience, and growth goals before crafting a tailored ecommerce solution that fits your brand perfectly. From intuitive design and seamless checkout systems to mobile optimization and payment gateway integration, we ensure every element works together to maximize conversions.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="p-8 sm:p-10 bg-[#FFFFFF] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#0E1153] relative">
              <span className="text-4xl text-[#FFBA45] font-serif leading-none block mb-2">“</span>
              <blockquote className="font-heading text-2xl sm:text-3xl text-[#0E1153] leading-snug mb-4">
                a long-term technology partner committed to helping your online business succeed
              </blockquote>
              <div className="pt-4 border-t border-[#0E1153]/20 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#C8553D]">
                <span>BAAGUL PROMISE</span>
                <span>HSR // BENGALURU</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

