import { Prisma } from "@prisma/client";
import { prisma } from "../prisma";
import { getConfig } from "./config";

export interface QueryResult<Row> {
  rows: Row[];
}

export interface Db {
  query<Row = Record<string, unknown>>(
    text: string,
    params?: unknown[]
  ): Promise<QueryResult<Row>>;
  transaction<T>(work: (tx: Db) => Promise<T>): Promise<T>;
}

let override: Db | undefined;

/**
 * Normalizes query results so that BigInt values (e.g. COUNT in MySQL)
 * and JSON fields (e.g. services in MySQL) match domain types.
 */
function normalizeRow<Row>(row: Record<string, unknown>): Row {
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(row)) {
    if (typeof value === "bigint") {
      result[key] = Number(value);
    } else if (key === "services" && typeof value === "string") {
      try {
        result[key] = JSON.parse(value);
      } catch {
        result[key] = value;
      }
    } else {
      result[key] = value;
    }
  }
  return result as Row;
}

/**
 * Creates a Db interface backed by Prisma Client for MySQL.
 */
function createPrismaDb(client: typeof prisma): Db {
  return {
    async query<Row = Record<string, unknown>>(text: string, params: unknown[] = []): Promise<QueryResult<Row>> {
      const trimmed = text.trim();

      // Track reordered params as placeholders appear left-to-right
      const reorderedParams: unknown[] = [];
      let mysqlSql = trimmed.replace(/\$(\d+)/g, (_, numStr) => {
        const index = parseInt(numStr, 10) - 1;
        let val = params[index];
        if (Array.isArray(val)) {
          val = JSON.stringify(val);
        } else if (typeof val === "string" && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?Z?$/i.test(val)) {
          const parsed = new Date(val);
          if (!isNaN(parsed.getTime())) {
            val = parsed;
          }
        }
        reorderedParams.push(val);
        return "?";
      });

      // Strip PostgreSQL type-casting syntax (::int, ::text, etc.)
      mysqlSql = mysqlSql.replace(/::[a-zA-Z0-9_]+/g, "");

      // Handle PostgreSQL NULLS LAST in ORDER BY
      mysqlSql = mysqlSql.replace(/\s+NULLS\s+LAST\b/gi, "");

      // Escape MySQL reserved keyword `key` in rate_limit_counters queries
      mysqlSql = mysqlSql.replace(/\brate_limit_counters\s*\(\s*key\b/gi, "rate_limit_counters (`key`");
      mysqlSql = mysqlSql.replace(/\bWHERE\s+key\s*=/gi, "WHERE `key` =");
      mysqlSql = mysqlSql.replace(/\bSET\s+key\s*=/gi, "SET `key` =");

      // Handle ON CONFLICT ... DO NOTHING -> ON DUPLICATE KEY UPDATE col = col
      mysqlSql = mysqlSql.replace(/ON\s+CONFLICT\s*\(([\w`"]+)\)\s*DO\s*NOTHING/gi, "ON DUPLICATE KEY UPDATE $1 = $1");

      // Handle specific ON CONFLICT clauses for MySQL:
      // 1. rate_limit_counters upsert
      if (/INSERT\s+INTO\s+rate_limit_counters\b/i.test(mysqlSql) && /ON\s+CONFLICT/i.test(mysqlSql)) {
        await client.$executeRawUnsafe(
          "INSERT INTO rate_limit_counters (`key`, window_start, hits) VALUES (?, ?, 1) ON DUPLICATE KEY UPDATE hits = hits + 1",
          params[0],
          params[1]
        );
        const rows = await client.$queryRawUnsafe<Record<string, unknown>[]>(
          "SELECT hits FROM rate_limit_counters WHERE `key` = ? AND window_start = ? LIMIT 1",
          params[0],
          params[1]
        );
        return { rows: rows.map((r) => normalizeRow<Row>(r)) };
      }

      // 2. resend_webhook_events claim upsert
      if (/INSERT\s+INTO\s+resend_webhook_events\b/i.test(mysqlSql) && /ON\s+CONFLICT/i.test(mysqlSql)) {
        await client.$executeRawUnsafe(
          `INSERT INTO resend_webhook_events (id, type, payload, status, lease_until)
           VALUES (?, ?, ?, 'processing', ?)
           ON DUPLICATE KEY UPDATE
             attempts = attempts + 1,
             lease_until = IF(status = 'failed' OR (status = 'processing' AND lease_until < NOW()), VALUES(lease_until), lease_until),
             status = IF(status = 'failed' OR (status = 'processing' AND lease_until < NOW()), 'processing', status)`,
          params[0],
          params[1],
          params[2],
          params[3]
        );
        const rows = await client.$queryRawUnsafe<Record<string, unknown>[]>(
          "SELECT status FROM resend_webhook_events WHERE id = ? LIMIT 1",
          params[0]
        );
        if (rows[0]?.status === "processing") {
          return { rows: [{ id: params[0] } as unknown as Row] };
        }
        return { rows: [] };
      }

      // 3. email_suppressions conditional update
      if (/INSERT\s+INTO\s+email_suppressions\b/i.test(mysqlSql) && /ON\s+CONFLICT/i.test(mysqlSql)) {
        await client.$executeRawUnsafe(
          `INSERT INTO email_suppressions (email, reason, source) VALUES (?, ?, ?)
           ON DUPLICATE KEY UPDATE
             reason = IF(reason = 'unsubscribed' AND VALUES(reason) <> 'unsubscribed', VALUES(reason), reason),
             source = IF(reason = 'unsubscribed' AND VALUES(reason) <> 'unsubscribed', VALUES(source), source)`,
          params[0],
          params[1],
          params[2]
        );
        return { rows: [] };
      }

      // Handle INSERT/UPDATE with RETURNING clause (unsupported in standard MySQL)
      const returningMatch = mysqlSql.match(/\s+RETURNING\s+([\w*,\s]+)$/i);
      if (returningMatch) {
        const sqlWithoutReturning = mysqlSql.replace(/\s+RETURNING\s+[\w*,\s]+$/i, "");
        const affected = await client.$executeRawUnsafe(sqlWithoutReturning, ...reorderedParams);

        if (affected === 0) {
          return { rows: [] };
        }

        // If inserting into enquiries or updating enquiries returning *
        if (/enquiries\b/i.test(trimmed) && returningMatch[1].trim() === "*") {
          const id = params[0] as string;
          const rows = await client.$queryRawUnsafe<Record<string, unknown>[]>(
            "SELECT * FROM enquiries WHERE id = ? LIMIT 1",
            id
          );
          return { rows: rows.map((r) => normalizeRow<Row>(r)) };
        }

        // If returning id
        if (/enquiries\b/i.test(trimmed) && returningMatch[1].trim() === "id") {
          const id = params[0] as string;
          return { rows: [{ id } as unknown as Row] };
        }

        return { rows: [] };
      }

      const isSelect = /^SELECT\b/i.test(mysqlSql);
      if (isSelect) {
        const rows = await client.$queryRawUnsafe<Record<string, unknown>[]>(mysqlSql, ...reorderedParams);
        return { rows: rows.map((r) => normalizeRow<Row>(r)) };
      }

      await client.$executeRawUnsafe(mysqlSql, ...reorderedParams);
      return { rows: [] };
    },

    async transaction<T>(work: (tx: Db) => Promise<T>): Promise<T> {
      return client.$transaction(async (txClient) => {
        const txDb = createPrismaDb(txClient as unknown as typeof prisma);
        return work(txDb);
      });
    },
  };
}

const prismaDb: Db = createPrismaDb(prisma);

export function getDb(): Db {
  return override ?? prismaDb;
}

export function getPrisma() {
  return prisma;
}

export function isDatabaseConfigured(): boolean {
  return Boolean(override) || Boolean(getConfig().databaseUrl);
}

/** Test seam: replaces the Prisma database with an in-process database during tests. */
export function setDbForTests(db: Db | undefined): void {
  override = db;
}

/**
 * Recognizes unique constraint violations across Prisma (P2002),
 * MySQL (1062 / ER_DUP_ENTRY), and PostgreSQL (23505).
 */
export function isUniqueViolation(error: unknown, constraint?: string): boolean {
  if (typeof error !== "object" || error === null) return false;

  // Prisma unique constraint error
  if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
    if (!constraint) return true;
    const target = error.meta?.target;
    if (Array.isArray(target)) return target.some((t) => constraint.includes(String(t)));
    if (typeof target === "string") return constraint.includes(target);
    return true;
  }

  const anyErr = error as { code?: string; errno?: number; message?: string; constraint?: string };

  // MySQL unique violation error
  if (anyErr.code === "ER_DUP_ENTRY" || anyErr.errno === 1062) {
    if (!constraint) return true;
    return Boolean(anyErr.message && anyErr.message.toLowerCase().includes(constraint.toLowerCase()));
  }

  // PostgreSQL / PGlite unique violation error
  if (anyErr.code === "23505") {
    return constraint === undefined || anyErr.constraint === constraint;
  }

  return false;
}
