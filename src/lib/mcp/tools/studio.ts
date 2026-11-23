import {
  CAREERS_PAGE_URL,
  CASE_STUDIES,
  GENERAL_FAQS,
  JOB_OPENINGS,
  STUDIO_INFO,
  TEAM,
  TEAM_PAGE_URL,
} from "../content";
import { json, NO_INPUT, READ_ONLY, type Tool } from "./types";

export const studioTools: Tool[] = [
  {
    name: "get_case_studies",
    title: "Get case studies",
    description: "Retrieve documented case studies and client success stories from Baagul LLP.",
    inputSchema: NO_INPUT,
    annotations: READ_ONLY,
    run: () => json(CASE_STUDIES),
  },
  {
    name: "get_studio_info",
    title: "Get studio info",
    description:
      "Get Baagul LLP headquarters, contact details and operating hours, plus general questions and answers " +
      "about working with the studio (onboarding, who it works with, how to get in touch).",
    inputSchema: NO_INPUT,
    annotations: READ_ONLY,
    run: () => json({ ...STUDIO_INFO, faqs: GENERAL_FAQS }),
  },
  {
    name: "get_team",
    title: "Get team",
    description: "List the Baagul LLP team: each person's name, role, area of focus and profile links.",
    inputSchema: NO_INPUT,
    annotations: READ_ONLY,
    run: () => json({ team_page: TEAM_PAGE_URL, members: TEAM }),
  },
  {
    name: "get_open_roles",
    title: "Get open roles",
    description:
      "List the jobs Baagul LLP is currently hiring for, with responsibilities, required skills, location and " +
      "the link to apply. An empty list means there are no openings right now.",
    inputSchema: NO_INPUT,
    annotations: READ_ONLY,
    run: () => json({ careers_page: CAREERS_PAGE_URL, openings: JOB_OPENINGS }),
  },
];
