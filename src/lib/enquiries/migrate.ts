import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import type { Db } from "./db";

/** Applies pending files from db/migrations in name order, each in a transaction. */
export async function applyMigrations(
  db: Db,
  directory = path.join(process.cwd(), "db", "migrations")
): Promise<string[]> {
  await db.query(`CREATE TABLE IF NOT EXISTS schema_migrations (
    name text PRIMARY KEY,
    applied_at timestamptz NOT NULL DEFAULT now()
  )`);

  const files = readdirSync(directory)
    .filter((file) => file.endsWith(".sql"))
    .sort();
  const { rows } = await db.query<{ name: string }>(`SELECT name FROM schema_migrations`);
  const applied = new Set(rows.map(({ name }) => name));
  const newlyApplied: string[] = [];

  for (const file of files) {
    if (applied.has(file)) continue;
    const sql = readFileSync(path.join(directory, file), "utf8");
    await db.transaction(async (tx) => {
      await tx.query(sql);
      await tx.query(`INSERT INTO schema_migrations (name) VALUES ($1)`, [file]);
    });
    newlyApplied.push(file);
  }

  return newlyApplied;
}
