import { writeFileSync } from "node:fs";
import path from "node:path";
import { GENERATED_FILE, renderGeneratedFile } from "./mcp-content-extract";

writeFileSync(GENERATED_FILE, renderGeneratedFile());
console.log(`Wrote ${path.relative(process.cwd(), GENERATED_FILE)}`);
