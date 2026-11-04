"use client";

import React, { useState } from "react";

export default function GraphicsDesignEnquiry() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full py-24 px-6 sm:px-12 lg:px-16 bg-[#1A1F5E] text-[#FEF9ED] border-b-2 border-[#0E1153]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded bg-[#0E1153] text-[#FFA800] text-xs font-mono font-bold uppercase tracking-widest border border-[#FEF9ED]/20">
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="font-heading text-5xl sm:text-6xl text-[#FEF9ED] leading-tight mb-6">
            <span>Enquiry </span>
            <span className="inline-block bg-[#FFA800] text-[#0E1153] px-4 py-0.5 rounded-xl border-2 border-[#0E1153] shadow-[4px_4px_0px_#0E1153]">
              Now
            </span>
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#FEF9ED]/80 leading-relaxed mb-8">
            Share your project details with us. Whether you need custom marketing graphics, brand guidelines, or ad creatives, our team is ready to assist.
          </p>

          {/* Contact Hotline Pill */}
          <div className="flex items-center gap-3 p-4 bg-[#0E1153] border-2 border-[#FEF9ED]/20 rounded-xl text-xs font-mono font-bold text-[#FEF9ED] shadow-[3px_3px_0px_#FFA800]">
            <span className="text-[#FFA800] text-base">📞</span>
            <span>DIRECT DESK: +91 7483737014</span>
          </div>
        </div>

        {/* Right Column (7 cols) - Interactive White Form Card */}
        <div className="lg:col-span-7 bg-[#FFFFFF] text-[#0E1153] border-2 border-[#0E1153] rounded-2xl shadow-[8px_8px_0px_#FFA800] p-8 sm:p-10">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#0E1153]/15">
            <h3 className="font-heading text-2xl font-bold text-[#0E1153]">
              Enquiry Now
            </h3>
            <span className="px-2.5 py-1 rounded bg-[#CFE8DC] border border-[#0E1153] text-[10px] font-mono font-bold text-[#005F4C]">
              FAST RESPONSE // 24H
            </span>
          </div>

          {submitted ? (
            <div className="p-8 bg-[#CFE8DC] border-2 border-[#0E1153] rounded-xl text-center flex flex-col items-center">
              <span className="w-12 h-12 rounded-full bg-[#005F4C] text-[#FEF9ED] flex items-center justify-center text-xl font-bold mb-3">
                ✓
              </span>
              <h4 className="font-heading text-xl font-bold text-[#0E1153] mb-1">
                Enquiry Received!
              </h4>
              <p className="font-sans text-xs text-[#3E4945]">
                Our senior design director will review your brief and contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Row 1: Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[#3E4945] mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul"
                    className="w-full px-4 py-2.5 rounded-lg border-2 border-[#0E1153] bg-[#FAF8F5] text-xs font-sans focus:outline-none focus:bg-[#FFFFFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[#3E4945] mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sharma"
                    className="w-full px-4 py-2.5 rounded-lg border-2 border-[#0E1153] bg-[#FAF8F5] text-xs font-sans focus:outline-none focus:bg-[#FFFFFF]"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[#3E4945] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-lg border-2 border-[#0E1153] bg-[#FAF8F5] text-xs font-sans focus:outline-none focus:bg-[#FFFFFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-[#3E4945] mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-lg border-2 border-[#0E1153] bg-[#FAF8F5] text-xs font-sans focus:outline-none focus:bg-[#FFFFFF]"
                  />
                </div>
              </div>

              {/* Row 3: Service Type Dropdown */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#3E4945] mb-1">
                  Service Type *
                </label>
                <select
                  defaultValue="Graphic Design"
                  className="w-full px-4 py-2.5 rounded-lg border-2 border-[#0E1153] bg-[#FAF8F5] text-xs font-sans focus:outline-none focus:bg-[#FFFFFF]"
                >
                  <option value="Graphic Design">Graphic Design &amp; Collateral</option>
                  <option value="Logo Design">Logo &amp; Brand Identity</option>
                  <option value="Social Media Creatives">Social Media Creatives</option>
                  <option value="Packaging & Print">Packaging &amp; Print Design</option>
                  <option value="Marketing Suite">Full-Funnel Marketing Suite</option>
                </select>
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-[#3E4945] mb-1">
                  Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your brand assets, deliverables, timeline, or requirements..."
                  className="w-full px-4 py-2.5 rounded-lg border-2 border-[#0E1153] bg-[#FAF8F5] text-xs font-sans focus:outline-none focus:bg-[#FFFFFF]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 w-full sm:w-auto px-8 py-3 rounded-full bg-[#0E1153] text-[#FEF9ED] font-heading font-bold text-xs uppercase tracking-wider border-2 border-[#0E1153] shadow-[3px_3px_0px_#FFA800] hover:translate-x-0.5 hover:translate-y-0.5 transition-all self-start"
              >
                Submit Now →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

