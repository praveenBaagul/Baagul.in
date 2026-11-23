import { SITE_URL } from "@/lib/site";
import { JOB_OPENINGS_SOURCE } from "./generated";

export const CAREERS_PAGE_URL = `${SITE_URL}/career`;

/** The openings listed on /career, with the detail lists from each job page. */
export const JOB_OPENINGS = JOB_OPENINGS_SOURCE.map((opening) => ({
  id: opening.id,
  title: opening.title,
  employment_type: opening.employmentType,
  location: opening.location,
  work_mode: opening.workMode,
  summary: opening.summary,
  url: opening.pagePath ? `${SITE_URL}${opening.pagePath}` : CAREERS_PAGE_URL,
  ...(opening.applyUrl ? { apply_url: opening.applyUrl } : {}),
  ...(opening.datePosted ? { date_posted: opening.datePosted } : {}),
  ...opening.details,
}));
