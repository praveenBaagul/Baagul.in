import { writeFileSync } from "node:fs";
import path from "node:path";
import { buildDates, DATES_FILE, readDatesFile } from "./sitemap-dates-lib";

// Usage: npm run sitemap:dates             (changed pages get today's date)
//        npm run sitemap:dates -- --from-git (changed pages get their last commit date)
const fromGit = process.argv.includes("--from-git");
const previous = readDatesFile();
const next = buildDates({ fromGit });

for (const [route, entry] of Object.entries(next)) {
  if (previous[route]?.lastModified !== entry.lastModified) {
    console.log(`${route}: ${previous[route]?.lastModified ?? "(new)"} -> ${entry.lastModified}`);
  }
}

writeFileSync(DATES_FILE, JSON.stringify(next, null, 2) + "\n");
console.log(`Wrote ${path.relative(process.cwd(), DATES_FILE)}`);
