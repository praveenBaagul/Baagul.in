import { z } from "zod";

export const serviceOptions = [
  "Digital Marketing",
  "SEO Optimization",
  "Web Design & Dev",
  "E-Commerce",
  "Cloud Hosting",
  "Logo & Brand",
] as const;

export const budgetOptions = [
  "< ₹50K",
  "₹50K - ₹1.5L",
  "₹1.5L - ₹5L",
  "₹5L+",
] as const;

export const enquirySchema = z.object({
  selectedServices: z
    .array(z.string())
    .min(1, { message: "Please select at least one service required." }),
  fullName: z
    .string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters." })
    .max(80, { message: "Full name cannot exceed 80 characters." }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Work email is required." })
    .email({ message: "Please enter a valid work email address (e.g. name@company.com)." }),
  phone: z
    .string()
    .trim()
    .refine(
      (val) => {
        const digitsOnly = val.replace(/\D/g, "");
        if (!digitsOnly || digitsOnly === "91") return true; // Optional if blank or just +91
        return digitsOnly.length >= 8 && digitsOnly.length <= 15;
      },
      {
        message: "Please enter a valid phone number (8–15 digits).",
      }
    ),
  company: z
    .string()
    .trim()
    .max(120, { message: "Company / Website cannot exceed 120 characters." })
    .optional(),
  selectedBudget: z.enum(budgetOptions, {
    message: "Please select an estimated budget range.",
  }),
  details: z
    .string()
    .trim()
    .min(10, { message: "Please provide at least 10 characters describing your project scope." })
    .max(2000, { message: "Scope description cannot exceed 2000 characters." }),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;

export const newsletterSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email address is required." })
    .email({ message: "Please enter a valid email address (e.g. name@company.com)." }),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
