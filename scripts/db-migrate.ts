import { getDb } from "../src/lib/enquiries/db";
import { applyMigrations } from "../src/lib/enquiries/migrate";

async function main() {
  const applied = await applyMigrations(getDb());
  console.log(applied.length > 0 ? `Applied: ${applied.join(", ")}` : "Database is up to date.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  });
