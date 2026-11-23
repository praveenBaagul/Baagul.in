export interface Faq {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface ServiceDetails {
  process: ProcessStep[];
  faqs: Faq[];
}

/** As extracted from the components: site-relative paths, not full URLs. */
export interface TeamMemberSource {
  name: string;
  role: string;
  focus: string;
  profilePath: string | null;
  linkedinUrl: string | null;
}

export interface JobOpeningSource {
  id: string;
  title: string;
  employmentType: string;
  location: string;
  workMode: string;
  summary: string;
  pagePath: string | null;
  applyUrl: string | null;
  datePosted: string | null;
  /** Lists from the job page, e.g. required_skills. */
  details: Record<string, string[]>;
}
