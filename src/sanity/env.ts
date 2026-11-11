export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-11-01";

// Without a project ID the site renders from the typed seed content in
// src/content/cases.ts. This keeps local builds and previews working
// before the CMS is connected.
export const isSanityConfigured = projectId.length > 0;
