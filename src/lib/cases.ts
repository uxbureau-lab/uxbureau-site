import { cacheLife, cacheTag } from "next/cache";
import { defineQuery } from "next-sanity";
import { seedCases, type CaseStudy } from "@/content/cases";
import { client } from "@/sanity/client";
import { isSanityConfigured } from "@/sanity/env";

export const CASES_TAG = "caseStudy";

const CASES_QUERY =
  defineQuery(`*[_type == "caseStudy" && defined(slug.current)] | order(order asc){
  "slug": slug.current, order, featured, sector, meta, title, hook, summary,
  "metrics": coalesce(metrics[]{value, label}, []),
  "sections": coalesce(sections[]{heading, body}, []),
  outcome, liveUrl
}`);

const bySeedOrder = [...seedCases].sort((a, b) => a.order - b.order);

// Single read path for case content. Sanity when configured, typed seed
// content otherwise — and as a fallback if the CMS is unreachable, so a
// CMS outage never takes the site down.
export async function getCases(): Promise<CaseStudy[]> {
  "use cache";
  cacheTag(CASES_TAG);
  cacheLife("hours");

  if (!isSanityConfigured) return bySeedOrder;

  try {
    const cases = await client.fetch<CaseStudy[]>(CASES_QUERY);
    return cases.length > 0 ? cases : bySeedOrder;
  } catch (error) {
    console.error("[cases] Sanity fetch failed, serving seed content", error);
    return bySeedOrder;
  }
}

export async function getFeaturedCases() {
  return (await getCases()).filter((c) => c.featured);
}

export async function getCase(slug: string) {
  return (await getCases()).find((c) => c.slug === slug) ?? null;
}
