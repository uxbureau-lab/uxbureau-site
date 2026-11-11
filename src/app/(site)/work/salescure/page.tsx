import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { Reveal } from "@/components/motion/reveal";
import { AssistantMock } from "@/components/salescure/assistant-mock";
import { launch, presets, queries } from "@/components/salescure/content";
import { DataPath } from "@/components/salescure/data-path";
import { LayerStack } from "@/components/salescure/layer-stack";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "SalesCure — an operating system for medical referral networks",
  description:
    "Referral CRM, ERP operations, an AI analytics layer and a field app in one product. The AI reads, never writes, and never sees a patient name.",
};

function Label({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export default function SalesCurePage() {
  return (
    <>
      <SiteNav />
      <main>
        {/* 1 — Hero */}
        <header className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 70% 0%, rgba(4,85,255,0.22) 0%, rgba(10,10,10,0) 70%)",
            }}
          />
          <div className="shell relative pt-[clamp(96px,12vw,180px)] pb-[clamp(64px,8vw,120px)]">
            <Link href="/work" className="eyebrow hover:text-accent transition-colors">
              ← Engagements
            </Link>
            <p className="eyebrow mt-12">Product · Healthcare · Web ERP + AI layer + mobile</p>
            <h1 className="font-display mt-8 max-w-[14ch] text-[clamp(52px,7vw,120px)] leading-[0.98] tracking-[-0.03em]">
              One contour instead of ten spreadsheets.
            </h1>

            <Reveal delay={0.15}>
              <p className="text-fg-secondary mt-8 max-w-[56ch] text-lg leading-relaxed md:text-xl">
                SalesCure is an operating system for medical referral networks: a CRM for referring
                doctors, ERP operations, AI analytics on Claude and a field app for medical
                representatives — one product, one database, one audit trail.
              </p>
            </Reveal>
          </div>
        </header>

        {/* 2 — Before / after */}
        <section className="section" aria-labelledby="sc-before-after">
          <div className="shell grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Label>The problem</Label>
              <h2
                id="sc-before-after"
                className="font-display mt-6 text-[clamp(36px,4vw,60px)] leading-[1.02] tracking-[-0.02em]"
              >
                Analytics that no longer depend on one person.
              </h2>
            </div>
            <Reveal className="border-line bg-line grid gap-px overflow-hidden rounded-md border md:col-span-7 md:col-start-6 md:grid-cols-2">
              <div className="bg-bg p-8">
                <p className="text-fg-faint font-mono text-xs tracking-[0.14em] uppercase">
                  Before
                </p>
                <p className="font-display mt-6 text-5xl">3–4 h</p>
                <p className="text-fg-secondary mt-4 leading-relaxed">
                  of spreadsheet work every day, by one specialist who holds the whole picture.
                </p>
              </div>
              <div className="bg-[#0a0e1f] p-8">
                <p className="font-mono text-xs tracking-[0.14em] text-[#80a4ff] uppercase">
                  After
                </p>
                <p className="font-display mt-6 text-5xl">30 s</p>
                <p className="text-fg-secondary mt-4 leading-relaxed">
                  to open a dashboard available to everyone whose role needs it.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3 — Four layers */}
        <section className="section" aria-labelledby="sc-layers">
          <div className="shell">
            <Label>Architecture</Label>
            <h2
              id="sc-layers"
              className="font-display mt-6 max-w-[18ch] text-[clamp(36px,4vw,60px)] leading-[1.02] tracking-[-0.02em]"
            >
              One product. Four layers.
            </h2>
            <div className="mt-16">
              <LayerStack />
            </div>
          </div>
        </section>

        {/* 4 — Anonymisation boundary */}
        <section className="section" aria-labelledby="sc-boundary">
          <div className="shell grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Label>The boundary</Label>
              <h2
                id="sc-boundary"
                className="font-display mt-6 text-[clamp(36px,4vw,60px)] leading-[1.02] tracking-[-0.02em]"
              >
                The model never sees a patient.
              </h2>
              <p className="text-fg-secondary mt-6 leading-relaxed">
                Patient names never reach the model. Only aggregates, IDs and de-identified metrics
                leave the anonymiser — for presets and for the assistant alike. Step through the
                pipeline.
              </p>
            </div>
            <Reveal className="lg:col-span-7 lg:col-start-6">
              <DataPath />
            </Reveal>
          </div>
        </section>

        {/* 5 — Read-only + assistant */}
        <section className="section" aria-labelledby="sc-readonly">
          <div className="shell grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Label>Read-only by architecture</Label>
              <h2
                id="sc-readonly"
                className="font-display mt-6 text-[clamp(36px,4vw,60px)] leading-[1.02] tracking-[-0.02em]"
              >
                It reads. It never writes.
              </h2>
              <p className="text-fg-secondary mt-6 leading-relaxed">
                The AI layer cannot create, edit or delete data. It reads within the scope of the
                user&apos;s role — a constraint at the query level, not a policy someone can bypass.
              </p>
              <ul className="mt-10 grid grid-cols-2 gap-3 font-mono text-sm">
                {queries.map((q) => (
                  <li
                    key={q.op}
                    className={cn(
                      "flex items-center justify-between rounded-sm border px-4 py-3",
                      q.allowed
                        ? "border-[#10b981]/40 text-[#10b981]"
                        : "border-line text-fg-faint line-through",
                    )}
                  >
                    {q.op}
                    <span aria-label={q.allowed ? "allowed" : "blocked"}>
                      {q.allowed ? "✓" : "✕"}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Reveal className="lg:col-span-6 lg:col-start-7">
              <AssistantMock />
            </Reveal>
          </div>
        </section>

        {/* 6 — Presets */}
        <section className="section" aria-labelledby="sc-presets">
          <div className="shell">
            <Label>Preset catalogue</Label>
            <h2
              id="sc-presets"
              className="font-display mt-6 max-w-[20ch] text-[clamp(36px,4vw,60px)] leading-[1.02] tracking-[-0.02em]"
            >
              Eleven presets. No code.
            </h2>
            <p className="text-fg-secondary mt-6 max-w-[56ch] leading-relaxed">
              The team picks a preset and gets an answer. New presets are added through the
              assistant, not through development.
            </p>
            <Reveal>
              <ul className="border-line bg-line mt-14 grid gap-px overflow-hidden rounded-md border sm:grid-cols-2 lg:grid-cols-4">
                {presets.map((p) => (
                  <li key={p.name} className="bg-bg flex flex-col gap-3 p-6">
                    <span className="font-mono text-[11px] tracking-[0.12em] text-[#80a4ff] uppercase">
                      {p.tag}
                    </span>
                    <span className="text-lg">{p.name}</span>
                  </li>
                ))}
                <li className="bg-surface text-fg-muted flex items-end p-6 text-sm">
                  + presets added in conversation
                </li>
              </ul>
            </Reveal>
          </div>
        </section>

        {/* 7 — Integration + outcome */}
        <section className="section" aria-labelledby="sc-launch">
          <div className="shell">
            <Label>Integration</Label>
            <h2
              id="sc-launch"
              className="font-display mt-6 max-w-[22ch] text-[clamp(36px,4vw,60px)] leading-[1.02] tracking-[-0.02em]"
            >
              It does not replace the clinic&apos;s system. It works around it.
            </h2>
            <Reveal>
              <dl className="border-line mt-14 grid border-t md:grid-cols-3">
                {launch.map((x) => (
                  <div key={x.label} className="border-line border-b py-8 pr-6">
                    <dt className="font-display text-[clamp(40px,4.4vw,64px)] leading-none">
                      {x.value}
                    </dt>
                    <dd className="text-fg-muted mt-3 max-w-[30ch] text-sm leading-relaxed">
                      {x.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <div className="mt-16 flex flex-wrap items-center gap-8">
              <a
                href="https://salescure.uxbureau.pro"
                rel="noopener"
                className="text-fg hover:text-accent font-display text-2xl underline-offset-8 transition-colors hover:underline"
              >
                salescure.uxbureau.pro ↗
              </a>
              <Link href="/work" className="text-fg-secondary hover:text-accent transition-colors">
                All engagements →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
