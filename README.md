# uxbureau-site

A Next.js rebuild of [uxbureau.pro](https://uxbureau.pro), the site of UX Bureau — a two-principal product studio that leads complex platforms from the first workshop to release. Live at **lab.uxbureau.pro**.

The production site is static HTML. This repository rebuilds it on a modern stack, puts case studies into a headless CMS, and adds an interactive promo case for SalesCure, a product of ours.

## Stack

| Layer      | Choice                                                                   | Why                                                                          |
| ---------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| Framework  | Next.js 16 (App Router, Cache Components), React 19, TypeScript          | Static by default, server components, tag-based revalidation                 |
| Styling    | Tailwind CSS v4 with tokens in `globals.css`                             | One source of truth for the brand palette; shadcn semantic names map onto it |
| Components | shadcn/ui conventions (`components.json`, `cn`, CVA)                     | Owned code, restyled to the system: no shadows, radius ≤ 8px                 |
| Motion     | Motion (`motion/react`)                                                  | One entrance pattern, counters, interactive tabs; all reduced-motion aware   |
| CMS        | Sanity, Studio embedded at `/studio`                                     | Case studies edited by the people who own them; signed webhook revalidates   |
| Fonts      | Fraunces, Inter Tight, JetBrains Mono, Big Shoulders (`next/font/local`) | Deterministic builds, no runtime dependency on Google Fonts                  |
| Hosting    | Vercel                                                                   | Preview deployment for every pull request                                    |

## Structure

```
src/
  app/
    (site)/                 public pages + their social metadata
      page.tsx              homepage
      work/page.tsx         engagements index
      work/[slug]/          generic case template (+ OG image)
      work/salescure/       dedicated promo case (+ OG image)
    studio/[[...tool]]/     embedded Sanity Studio
    api/revalidate/         Sanity webhook → revalidateTag
    sitemap.ts, robots.ts, icon.svg, not-found.tsx
  components/
    brand/                  wordmark, background layers
    home/ work/ salescure/  page sections
    motion/                 Reveal, CountUp
    ui/                     shadcn primitives
  content/                  typed copy and seed cases
  lib/cases.ts              the only read path for case content
  sanity/                   env, client, schema
scripts/seed-sanity.mts     idempotent import of seed cases
```

## Decisions worth reading

**One read path for content, with a fallback.** `getCases()` is the only function that reads case studies. With Sanity configured it queries the CMS inside a `"use cache"` scope tagged `caseStudy`. Without a project ID — or if the CMS is unreachable — it returns typed seed content from `src/content/cases.ts`. The site builds and renders identically either way, so a CMS outage never takes it down.

**Revalidation by tag, not by time.** Publishing in Studio fires a signed webhook to `/api/revalidate`, which calls `revalidateTag("caseStudy", "max")`. Pages serve stale content while the next request regenerates them. An hourly cache life remains as a safety net.

**The SalesCure page is not the template.** Most cases share `/work/[slug]`. SalesCure has its own route because its story is the architecture itself: a layer stack to explore, and a data pipeline you step through to see what the model can and cannot read. Its blue palette is confined to product surfaces; site chrome stays on the studio system.

**Motion has rules.** One entrance pattern (opacity + 20px, 600ms, ease-out, once). Counters only on the medical case. No springs, parallax or per-character reveals. The hero `h1` is deliberately not animated: it is the LCP element. Under `prefers-reduced-motion` everything renders static, and server output always shows final values.

**Accessibility is checked, not assumed.** Interactive pieces are proper tablists with `aria-selected`/`aria-controls`. Animated figures expose their final value to screen readers. Contrast fixes went into the tokens, not into one-off overrides.

## How this was built

Built with Claude Code as a pair: Claude wrote the implementation, and every change landed as a pull request that I reviewed, ran and merged. Each PR is one concern — foundation, homepage, CMS, case template, motion, SalesCure, quality, docs — so the history reads as the order of decisions.

What I reviewed by hand on every PR: copy against our positioning and vocabulary rules, factual claims against what is already public, visual output at desktop and 390px, and Lighthouse on the built site.

## Running locally

```bash
npm install
cp .env.example .env.local   # optional — the site runs on seed content without it
npm run dev
```

| Script                | Purpose                                     |
| --------------------- | ------------------------------------------- |
| `npm run build`       | Production build                            |
| `npm run lint`        | ESLint                                      |
| `npm run format`      | Prettier with Tailwind class sorting        |
| `npm run sanity:seed` | Import seed cases into Sanity (needs token) |

## Connecting Sanity

1. Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in Vercel and `.env.local`.
2. In sanity.io/manage → API → CORS origins, add `http://localhost:3000` and `https://lab.uxbureau.pro` with credentials allowed.
3. Create an Editor token, then run `SANITY_API_WRITE_TOKEN=… npm run sanity:seed` once locally. Never put this token on Vercel.
4. Add a webhook: `POST https://lab.uxbureau.pro/api/revalidate`, filter `_type == "caseStudy"`, projection `{_type}`, secret = `SANITY_REVALIDATE_SECRET` (also set in Vercel).

## Quality

Lighthouse, local production build, mobile emulation: accessibility, best practices and SEO 100 on every page; performance 86–89 before CDN compression. No horizontal overflow at 390px.

---

UX Bureau · Est. 2010 · Based in Ukraine · hello@uxbureau.pro
