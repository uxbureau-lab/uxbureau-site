import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/layout/section-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteNav } from "@/components/layout/site-nav";
import { getCases } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Engagements",
  description:
    "Complex platforms in production for years: healthcare, telecom, travel, civic tech.",
};

export default async function WorkIndex() {
  const cases = await getCases();

  return (
    <>
      <SiteNav />
      <main className="pt-[clamp(96px,12vw,180px)]">
        <div className="shell">
          <SectionHeader
            id="engagements-title"
            index="—"
            label="Engagements"
            title="Engagements."
            intro="Each of these is still running, or ran long enough to outlast the team that commissioned it."
          />
          <ul className="border-line mt-20 border-t">
            {cases.map((item, i) => (
              <li key={item.slug} className="border-line border-b">
                <Link
                  href={`/work/${item.slug}`}
                  className="group grid gap-6 py-12 md:grid-cols-12 md:gap-8"
                >
                  <span className="text-fg-faint font-mono text-xs md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="eyebrow md:col-span-3">{item.meta}</p>
                  <div className="md:col-span-7">
                    <h2 className="font-display group-hover:text-accent text-[clamp(30px,3.2vw,48px)] leading-[1.05] tracking-[-0.02em] transition-colors duration-200">
                      {item.title}
                    </h2>
                    <p className="text-fg-secondary mt-4 max-w-[56ch] leading-relaxed">
                      {item.hook}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="text-fg-faint group-hover:text-accent self-start text-2xl transition-colors md:col-span-1 md:justify-self-end"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <div className="mt-[var(--section-pad)]">
        <SiteFooter />
      </div>
    </>
  );
}
