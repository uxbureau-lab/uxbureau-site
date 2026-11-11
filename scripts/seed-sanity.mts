// One-off import of the typed seed cases into Sanity.
// Usage: SANITY_API_WRITE_TOKEN=… npx tsx scripts/seed-sanity.mts
// Idempotent: documents get stable IDs (case-<slug>) and are replaced.

import { createClient } from "@sanity/client";
import { seedCases } from "../src/content/cases.ts";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN first.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2026-11-01",
  token,
  useCdn: false,
});

const key = (prefix: string, i: number) => `${prefix}-${i}`;

const tx = client.transaction();
for (const c of seedCases) {
  tx.createOrReplace({
    _id: `case-${c.slug}`,
    _type: "caseStudy",
    title: c.title,
    slug: { _type: "slug", current: c.slug },
    order: c.order,
    featured: c.featured,
    sector: c.sector,
    meta: c.meta,
    hook: c.hook,
    summary: c.summary,
    metrics: c.metrics.map((m, i) => ({ _key: key("m", i), _type: "metric", ...m })),
    sections: c.sections.map((s, i) => ({ _key: key("s", i), _type: "caseSection", ...s })),
    outcome: c.outcome,
    ...(c.liveUrl ? { liveUrl: c.liveUrl } : {}),
  });
}

const result = await tx.commit();
console.log(`Seeded ${result.results.length} case studies.`);
