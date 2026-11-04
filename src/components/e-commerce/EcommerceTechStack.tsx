import React from "react";

const stacks = [
  { name: "Shopify Plus", category: "Commerce Engine", tag: "HEADLESS GRAPHQL" },
  { name: "Next.js 16", category: "Frontend Framework", tag: "APP ROUTER & RSC" },
  { name: "TypeScript", category: "Type Safety", tag: "END-TO-END STRICT" },
  { name: "Tailwind CSS", category: "Design Tokens", tag: "PIXEL-ACCURATE UI" },
  { name: "Stripe & Razorpay", category: "Payments & UPI", tag: "1-CLICK CHECKOUT" },
  { name: "Algolia Search", category: "Instant Discovery", tag: "< 15MS QUERY" },
  { name: "Unicommerce / ERP", category: "Warehouse Sync", tag: "REAL-TIME SYNC" },
  { name: "Klaviyo", category: "Lifecycle CRM", tag: "DYNAMIC RECOVERY" },
];

export default function EcommerceTechStack() {
  return (
    <section className="w-full py-16 px-4 sm:px-12 max-w-7xl mx-auto border-t border-indigo-main/20">
      <div className="flex items-center justify-between mb-8 text-xs font-mono text-slate-text">
        <div className="flex items-center gap-2 text-indigo-main font-bold">
          <span className="w-2 h-2 rounded bg-peacock" />
          <span>Validated Commerce Technology Stack &amp; Partner APIs</span>
        </div>
        <span className="text-[11px] opacity-70">SPEC 04.2 // STOREFRONT ENGINE</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stacks.map((item, idx) => (
          <div
            key={idx}
            className="p-4 bg-canvas-card border-2 border-indigo-main rounded-xl shadow-[3px_3px_0px_#121a4a] flex flex-col justify-between"
          >
            <div>
              <span className="text-[9px] font-mono text-slate-text uppercase block mb-1">
                {item.category}
              </span>
              <h4 className="font-heading text-lg font-bold text-indigo-main">
                {item.name}
              </h4>
            </div>
            <div className="mt-3 pt-2 border-t border-indigo-main/10 text-[9px] font-mono text-peacock font-bold">
              {item.tag}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

