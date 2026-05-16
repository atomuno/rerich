/**
 * Global fund-conferences: PDF + доклады на одной странице админки.
 * Создаёт таблицы, переносит доклады из коллекции conferences (если есть).
 *
 * npm run payload:migrate-fund-conferences
 * npm run payload:migrate-fund-conferences -- --force
 */

import "./env-bootstrap";

import { createClient } from "@libsql/client";
import { getPayload } from "payload";

import config from "../payload.config";
import { conferenciesData } from "../src/data/conferenciesData";
import { getOrCreateMediaFromWebPath } from "./lib/payload-media";

type TalkRow = {
  sortOrder: number;
  title: string;
  speaker: string;
  date: string;
  url: string;
  tag: string;
};

async function ensureFundConferencesTables(client: ReturnType<typeof createClient>) {
  await client.execute(`
    CREATE TABLE IF NOT EXISTS fund_conferences (
      id integer PRIMARY KEY NOT NULL,
      section_title text NOT NULL,
      proceedings_pdf_id integer,
      updated_at text,
      created_at text,
      FOREIGN KEY (proceedings_pdf_id) REFERENCES media(id) ON UPDATE no action ON DELETE set null
    )
  `);
  await client.execute(`
    CREATE INDEX IF NOT EXISTS fund_conferences_proceedings_pdf_idx
    ON fund_conferences (proceedings_pdf_id)
  `);
  await client.execute(`
    INSERT OR IGNORE INTO fund_conferences (id, section_title, created_at, updated_at)
    VALUES (1, 'Сборник материалов конференции', datetime('now'), datetime('now'))
  `);
  await client.execute(`
    CREATE TABLE IF NOT EXISTS fund_conferences_talks (
      _order integer NOT NULL,
      _parent_id integer NOT NULL,
      id text PRIMARY KEY NOT NULL,
      sort_order numeric DEFAULT 0 NOT NULL,
      title text NOT NULL,
      speaker text NOT NULL,
      date text NOT NULL,
      url text NOT NULL,
      tag text NOT NULL,
      FOREIGN KEY (_parent_id) REFERENCES fund_conferences(id) ON DELETE cascade
    )
  `);
  await client.execute(`
    CREATE INDEX IF NOT EXISTS fund_conferences_talks_order_idx
    ON fund_conferences_talks (_order)
  `);
  await client.execute(`
    CREATE INDEX IF NOT EXISTS fund_conferences_talks_parent_id_idx
    ON fund_conferences_talks (_parent_id)
  `);
}

async function loadTalksFromLegacyCollection(
  client: ReturnType<typeof createClient>,
): Promise<TalkRow[]> {
  try {
    const result = await client.execute(
      "SELECT sort_order, title, speaker, date, url, tag FROM conferences ORDER BY sort_order ASC",
    );
    if (result.rows.length > 0) {
      return result.rows.map((row) => ({
        sortOrder: Number(row.sort_order ?? 0),
        title: String(row.title ?? ""),
        speaker: String(row.speaker ?? ""),
        date: String(row.date ?? ""),
        url: String(row.url ?? ""),
        tag: String(row.tag ?? ""),
      }));
    }
  } catch {
    // таблица conferences отсутствует
  }

  return conferenciesData.map((row) => {
    const r = row as {
      id: number;
      title: string;
      speaker: string;
      date: string;
      url: string;
      tag: string;
    };
    return {
      sortOrder: r.id * 10,
      title: r.title,
      speaker: r.speaker,
      date: r.date,
      url: r.url,
      tag: r.tag,
    };
  });
}

function mapGlobalTalks(talks: unknown): TalkRow[] {
  if (!Array.isArray(talks)) return [];
  return talks
    .map((row) => {
      if (!row || typeof row !== "object") return null;
      const r = row as Record<string, unknown>;
      return {
        sortOrder: Number(r.sortOrder ?? 0),
        title: String(r.title ?? ""),
        speaker: String(r.speaker ?? ""),
        date: String(r.date ?? ""),
        url: String(r.url ?? ""),
        tag: String(r.tag ?? ""),
      };
    })
    .filter(Boolean) as TalkRow[];
}

async function main() {
  const force = process.argv.includes("--force");
  const dbUrl = process.env.DATABASE_URL || "file:./payload.sqlite";
  const client = createClient({ url: dbUrl });

  await ensureFundConferencesTables(client);

  const payload = await getPayload({ config });

  const proceedingsPdfId = await getOrCreateMediaFromWebPath(
    payload,
    "/conferences/proceedings-placeholder.pdf",
    "Сборник материалов конференции — заглушка",
  );

  const existing = await payload.findGlobal({ slug: "fund-conferences", depth: 0 });
  const existingTalks = mapGlobalTalks(existing?.talks);

  let talks = existingTalks;
  if (force || existingTalks.length === 0) {
    talks = await loadTalksFromLegacyCollection(client);
    console.log(`fund-conferences: докладов для записи — ${talks.length}`);
  }

  const hasPdf = Boolean(existing?.sectionTitle && existing?.proceedingsPdf);
  const hasTalks = existingTalks.length > 0;

  if (!force && hasPdf && hasTalks) {
    console.log("fund-conferences: уже заполнен, пропуск.");
    return;
  }

  await payload.updateGlobal({
    slug: "fund-conferences",
    data: {
      sectionTitle:
        String(existing?.sectionTitle ?? "") ||
        "Сборник материалов конференции",
      ...(proceedingsPdfId ? { proceedingsPdf: proceedingsPdfId } : {}),
      talks,
    },
    overrideAccess: true,
  });

  console.log("fund-conferences: ✓ (PDF + видеоматериалы)");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
