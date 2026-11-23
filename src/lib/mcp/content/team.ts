import { SITE_URL } from "@/lib/site";
import { TEAM_SOURCE } from "./generated";

export const TEAM_PAGE_URL = `${SITE_URL}/team`;

/** The team roster shown on /team, with full profile URLs. */
export const TEAM = TEAM_SOURCE.map(({ profilePath, linkedinUrl, ...member }) => ({
  ...member,
  ...(profilePath ? { profile_url: `${SITE_URL}${profilePath}` } : {}),
  ...(linkedinUrl ? { linkedin_url: linkedinUrl } : {}),
}));
