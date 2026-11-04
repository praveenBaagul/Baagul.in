"use client";

import React, { useState, useEffect } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { ArrowRightIcon } from "@/components/Icons";
import {
  serviceOptions,
  budgetOptions,
  enquirySchema,
  type EnquiryFormData,
} from "@/lib/validations/enquiry";

type FormErrors = Partial<Record<keyof EnquiryFormData, string>>;

export default function EnquiryFormSection() {
  const [formData, setFormData] = useState<EnquiryFormData>({
    selectedServices: ["Digital Marketing"],
    fullName: "",
    email: "",
    phone: "+91",
    company: "",
    selectedBudget: "₹50K - ₹1.5L",
    details: "",
  });

  const [mounted, setMounted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof EnquiryFormData, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Validate single field on blur or change
  const validateField = <K extends keyof EnquiryFormData>(
    field: K,
    value: EnquiryFormData[K]
  ) => {
    const singleFieldSchema = enquirySchema.shape[field];
    const result = singleFieldSchema.safeParse(value);
    if (!result.success) {
      const issue = result.error.issues?.[0];
      setErrors((prev) => ({
        ...prev,
        [field]: issue?.message || "Invalid value",
      }));
    } else {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleBlur = (field: keyof EnquiryFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateField(field, formData[field]);
  };

  const handleChange = <K extends keyof EnquiryFormData>(
    field: K,
    value: EnquiryFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field] || errors[field]) {
      validateField(field, value);
    }
  };

  const toggleService = (srv: string) => {
    let nextServices: string[];
    if (formData.selectedServices.includes(srv)) {
      nextServices = formData.selectedServices.filter((s) => s !== srv);
    } else {
      nextServices = [...formData.selectedServices, srv];
    }
    handleChange("selectedServices", nextServices);
    setTouched((prev) => ({ ...prev, selectedServices: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // Mark all fields as touched
    setTouched({
      selectedServices: true,
      fullName: true,
      email: true,
      phone: true,
      company: true,
      selectedBudget: true,
      details: true,
    });

    const result = enquirySchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof EnquiryFormData;
        if (!fieldErrors[path]) {
          fieldErrors[path] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error("Submission error:", err);
      if (err instanceof Error) {
        setServerError(err.message);
      } else {
        setServerError("An unexpected error occurred. Please contact us via phone or email directly.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      selectedServices: ["Digital Marketing"],
      fullName: "",
      email: "",
      phone: "+91",
      company: "",
      selectedBudget: "₹50K - ₹1.5L",
      details: "",
    });
    setErrors({});
    setTouched({});
    setServerError(null);
    setSubmitted(false);
  };

  return (
    <section className="w-full py-20 px-4 sm:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Context, Direct Reach & Capability Chips */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-marigold" />
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-terracotta">
              ENQUIRY FORM
            </span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl text-indigo-main leading-tight mb-4">
            Tell us what you need.
          </h2>

          <p className="font-sans text-sm sm:text-base text-slate-text leading-relaxed mb-8">
            Choose a service and share a few details. We&apos;ll get back to you soon with
            a concrete proposal and sprint roadmap.
          </p>

          {/* Mint Contact Accent Card */}
          <div className="w-full p-6 bg-[#ebf5f1] border-2 border-indigo-main rounded-xl shadow-[5px_5px_0px_#121a4a] mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-peacock font-bold">
                DIRECT REACH
              </span>
              <span className="text-base text-peacock">📞</span>
            </div>
            <a
              href="tel:+917483737014"
              className="font-heading text-2xl sm:text-3xl text-indigo-main font-bold hover:text-peacock transition-colors block mb-1"
            >
              +91 7483737014
            </a>
            <a
              href="mailto:support@baagul.in"
              className="text-xs font-mono text-slate-text hover:text-indigo-main transition-colors block mb-4"
            >
              support@baagul.in
            </a>

            <div className="pt-3 border-t border-indigo-main/15 text-xs text-indigo-main/80 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-peacock" />
              <span>Mon - Fri: 9:30 AM - 6:30 PM IST</span>
            </div>
          </div>

          {/* Lavender Capabilities Digest Card */}
          <div className="w-full p-6 bg-[#e9ecfa] border-2 border-indigo-main rounded-xl shadow-[5px_5px_0px_#121a4a]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-mid font-bold">
                AGENCY CAPABILITIES
              </span>
              <span className="text-sm">🛡</span>
            </div>

            <ul className="flex flex-col gap-2.5 text-xs text-indigo-main font-medium">
              <li className="flex items-center gap-2">
                <span className="text-indigo-mid">✦</span>
                <span>Full-funnel digital marketing &amp; paid promotion</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-mid">✦</span>
                <span>Data-driven SEO optimization &amp; guest posting</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-mid">✦</span>
                <span>Custom WordPress &amp; high-performance e-commerce</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-indigo-mid">✦</span>
                <span>Brand identity &amp; bespoke logo craft</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Interactive Form Card */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-10 bg-canvas-card border-2 border-indigo-main rounded-2xl shadow-[8px_8px_0px_#121a4a]">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-peacock text-canvas flex items-center justify-center text-2xl mb-4 shadow-[4px_4px_0px_#121a4a]">
                  ✓
                </div>
                <h3 className="font-heading text-3xl text-indigo-main mb-2">
                  Enquiry Received!
                </h3>
                <p className="font-sans text-sm text-slate-text max-w-md mb-6 leading-relaxed">
                  Thank you, <span className="font-bold text-indigo-main">{formData.fullName || "Partner"}</span>.
                  A confirmation email has been dispatched. Our technical strategy desk at Hustlehub Tech Park will review your scope and respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-marigold border border-indigo-main text-xs font-bold uppercase tracking-wider text-indigo-dark shadow-[3px_3px_0px_#121a4a] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                {serverError && (
                  <div className="p-4 rounded-xl bg-red-100/80 border-2 border-red-500 text-red-800 text-xs font-medium flex items-start gap-2 shadow-[2px_2px_0px_#b91c1c]">
                    <span>⚠</span>
                    <span>{serverError}</span>
                  </div>
                )}

                {/* Service Selector Group */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-main">
                      SELECT SERVICES REQUIRED *
                    </label>
                    <span className="text-[10px] text-slate-text uppercase">
                      CHOOSE ONE OR MORE
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {serviceOptions.map((srv) => {
                      const isSelected = formData.selectedServices.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`px-3 py-2.5 rounded-lg border text-xs font-semibold text-center transition-all duration-150 cursor-pointer ${
                            isSelected
                              ? "bg-peacock text-canvas border-indigo-main shadow-[2px_2px_0px_#121a4a]"
                              : "bg-canvas text-indigo-main border-indigo-main/30 hover:border-indigo-main"
                          }`}
                        >
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                  {errors.selectedServices && (
                    <p className="mt-2 text-xs text-red-600 font-mono font-medium">
                      ⚠ {errors.selectedServices}
                    </p>
                  )}
                </div>

                {/* Name & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-indigo-main mb-2"
                    >
                      FULL NAME *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      onBlur={() => handleBlur("fullName")}
                      placeholder="e.g. Vikramaditya Rao"
                      className={`w-full px-4 py-3 rounded-lg bg-[#f8f5ee] border text-indigo-main text-sm focus:outline-none transition-colors ${
                        errors.fullName
                          ? "border-red-500 focus:ring-2 focus:ring-red-400 bg-red-50/20"
                          : "border-indigo-main/30 focus:ring-2 focus:ring-marigold"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600 font-mono font-medium">
                        ⚠ {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-indigo-main mb-2"
                    >
                      WORK EMAIL *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-3 rounded-lg bg-[#f8f5ee] border text-indigo-main text-sm focus:outline-none transition-colors ${
                        errors.email
                          ? "border-red-500 focus:ring-2 focus:ring-red-400 bg-red-50/20"
                          : "border-indigo-main/30 focus:ring-2 focus:ring-marigold"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600 font-mono font-medium">
                        ⚠ {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Company / Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-indigo-main mb-2"
                    >
                      PHONE NUMBER <span className="text-[10px] text-slate-text font-normal font-sans">(OPTIONAL)</span>
                    </label>
                    
                    <div className="custom-phone-wrapper w-full">
                      {mounted ? (
                        <PhoneInput
                          defaultCountry="in"
                          value={formData.phone}
                          onChange={(phone) => handleChange("phone", phone)}
                          onBlur={() => handleBlur("phone")}
                          inputProps={{
                            id: "phone",
                            name: "phone",
                            placeholder: "Enter phone number",
                          }}
                          className="w-full flex items-center"
                          style={{
                            "--react-international-phone-border-color": errors.phone ? "#ef4444" : "rgba(18, 26, 74, 0.3)",
                            "--react-international-phone-background-color": errors.phone ? "rgba(254, 242, 242, 0.5)" : "#f8f5ee",
                            "--react-international-phone-text-color": "#121a4a",
                            "--react-international-phone-selected-dropdown-item-background-color": "#ebe7dc",
                            "--react-international-phone-country-selector-background-color": "#ebe7dc",
                          } as React.CSSProperties}
                          countrySelectorStyleProps={{
                            buttonClassName: "!h-[46px] !rounded-l-lg !bg-[#ebe7dc] !border !border-r-0 !border-indigo-main/30 !px-3 hover:!bg-[#e0dbc9] !transition-colors",
                            dropdownStyleProps: {
                              className: "!bg-[#f8f5ee] !border-2 !border-indigo-main !rounded-xl !shadow-[4px_4px_0px_#121a4a] !text-indigo-main !text-xs !z-50 !max-h-64",
                            },
                          }}
                          inputClassName={`!w-full !h-[46px] !px-4 !rounded-r-lg !bg-[#f8f5ee] !border !text-indigo-main !text-sm focus:!outline-none transition-colors ${
                            errors.phone
                              ? "!border-red-500 !bg-red-50/20"
                              : "!border-indigo-main/30"
                          }`}
                        />
                      ) : (
                        <div className="flex gap-2 w-full">
                          <span className="px-3 py-3 rounded-lg bg-[#ebe7dc] border border-indigo-main/30 text-xs font-mono text-indigo-main flex items-center">
                            +91
                          </span>
                          <input
                            type="tel"
                            disabled
                            placeholder="Enter phone number"
                            className="w-full px-4 py-3 rounded-lg bg-[#f8f5ee] border border-indigo-main/30 text-indigo-main text-sm opacity-70"
                          />
                        </div>
                      )}
                    </div>

                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600 font-mono font-medium">
                        ⚠ {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-indigo-main mb-2"
                    >
                      COMPANY / WEBSITE URL <span className="text-[10px] text-slate-text font-normal font-sans">(OPTIONAL)</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      onBlur={() => handleBlur("company")}
                      placeholder="https://yourbrand.com"
                      className={`w-full px-4 py-3 rounded-lg bg-[#f8f5ee] border text-indigo-main text-sm focus:outline-none transition-colors ${
                        errors.company
                          ? "border-red-500 focus:ring-2 focus:ring-red-400 bg-red-50/20"
                          : "border-indigo-main/30 focus:ring-2 focus:ring-marigold"
                      }`}
                    />
                    {errors.company && (
                      <p className="mt-1 text-xs text-red-600 font-mono font-medium">
                        ⚠ {errors.company}
                      </p>
                    )}
                  </div>
                </div>

                {/* Estimated Budget Range */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-indigo-main mb-2">
                    ESTIMATED PROJECT BUDGET *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {budgetOptions.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => {
                          handleChange("selectedBudget", b);
                          setTouched((prev) => ({ ...prev, selectedBudget: true }));
                        }}
                        className={`py-2 rounded-lg border text-xs font-bold text-center transition-all cursor-pointer ${
                          formData.selectedBudget === b
                            ? "bg-marigold text-indigo-dark border-indigo-main shadow-[2px_2px_0px_#121a4a]"
                            : "bg-[#f8f5ee] text-slate-text border-indigo-main/30 hover:border-indigo-main"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                  {errors.selectedBudget && (
                    <p className="mt-2 text-xs text-red-600 font-mono font-medium">
                      ⚠ {errors.selectedBudget}
                    </p>
                  )}
                </div>

                {/* Project Details Textarea */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="details"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-indigo-main"
                    >
                      PROJECT DETAILS / SCOPE MESSAGE *
                    </label>
                    <span className="text-[10px] text-slate-text font-mono">
                      {formData.details.length} / 2000 chars
                    </span>
                  </div>
                  <textarea
                    id="details"
                    rows={4}
                    value={formData.details}
                    onChange={(e) => handleChange("details", e.target.value)}
                    onBlur={() => handleBlur("details")}
                    placeholder="Brief us on goals, timeline, current organic footprint, or technical stack..."
                    className={`w-full p-4 rounded-lg bg-[#f8f5ee] border text-indigo-main text-sm focus:outline-none transition-colors ${
                      errors.details
                        ? "border-red-500 focus:ring-2 focus:ring-red-400 bg-red-50/20"
                        : "border-indigo-main/30 focus:ring-2 focus:ring-marigold"
                    }`}
                  />
                  {errors.details && (
                    <p className="mt-1 text-xs text-red-600 font-mono font-medium">
                      ⚠ {errors.details}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl bg-indigo-main text-canvas font-bold text-sm border-2 border-indigo-main shadow-[4px_4px_0px_#c8553d] transition-all flex items-center justify-center gap-3 ${
                    isSubmitting
                      ? "opacity-75 cursor-not-allowed"
                      : "hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#c8553d] cursor-pointer"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-canvas border-t-transparent rounded-full animate-spin" />
                      <span>Sending Enquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Enquiry &amp; Schedule Call</span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Reassurance Footnote */}
                <p className="text-[11px] text-center text-slate-text">
                  🔒 24-hr NDA by default. No unsolicited sales calls. Typical response under 24h.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
