import React from "react";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  tiltClass: string;
  stampText: string;
  stampColor: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Baagul didn't just rebuild our website; they rebuilt our inbound pipeline. In our first quarter working together, our qualified enterprise inbound deals surged by 310%. They operate more like embedded product engineers than an outside agency.",
    author: "Vikramaditya Shenoy",
    title: "Chief Executive Officer",
    company: "Neo Financial Cloud",
    tiltClass: "-rotate-1 sm:-rotate-2",
    stampText: "VERIFIED PARTNER · BLR",
    stampColor: "text-peacock border-peacock",
  },
  {
    quote: "Most agencies run away when you mention technical SEO for 50,000 SKU catalogs. The Baagul team tore apart our indexation issues, rebuilt the taxonomy, and helped us achieve our biggest festive quarter in 85 years.",
    author: "Gayatri Devi Narasimhan",
    title: "Managing Director",
    company: "Mysore Silk Co.",
    tiltClass: "rotate-1",
    stampText: "REVENUE RECORD · 2026",
    stampColor: "text-terracotta border-terracotta",
  },
  {
    quote: "Straightforward, rigorous, and deeply technical. We cut our customer acquisition costs on paid media by half while scaling monthly spend 4X. The weekly transparent reports alone are worth their weight in gold.",
    author: "Rohan Varghese",
    title: "VP of Growth & Strategy",
    company: "Astra Logistics OS",
    tiltClass: "-rotate-1",
    stampText: "4X SPEND SCALE",
    stampColor: "text-indigo-mid border-indigo-mid",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-24 px-4 sm:px-12 bg-marigold border-y-2 border-indigo-main relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-indigo-main" />
              <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-indigo-main">
                DIRECT TESTIMONY
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-indigo-main">
              Words from our partners
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-indigo-main/80 max-w-md font-medium">
            Letters and dispatches sent to our desk from founders and marketing executives we build alongside.
          </p>
        </div>

        {/* 3 Letter-Style Cards with slight tilts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`relative p-8 bg-canvas-card border-2 border-indigo-main rounded-xl shadow-[6px_6px_0px_#121a4a] flex flex-col justify-between transition-transform duration-200 hover:rotate-0 hover:scale-102 ${item.tiltClass}`}
            >
              {/* Top stamp */}
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-indigo-main/15">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 border rounded ${item.stampColor}`}>
                  {item.stampText}
                </span>
                <span className="font-heading text-sm text-indigo-main/40 font-bold">
                  № 0{idx + 1}
                </span>
              </div>

              {/* Letter Quote */}
              <blockquote className="font-heading text-lg sm:text-xl text-indigo-main leading-relaxed mb-8">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              {/* Author & Signature */}
              <div className="pt-4 border-t border-indigo-main/15 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-bold text-sm text-indigo-main">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-text">
                    {item.title}, <span className="font-semibold text-indigo-main">{item.company}</span>
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full border border-indigo-main/40 flex items-center justify-center font-heading text-xs text-terracotta">
                  ಬಾ
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

