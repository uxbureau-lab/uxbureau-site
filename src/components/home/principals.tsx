import { SectionHeader } from "@/components/layout/section-header";
import { principals } from "@/content/home";

export function Principals() {
  return (
    <section className="section" aria-labelledby="principals-title">
      <div className="shell">
        <SectionHeader
          id="principals-title"
          index={principals.index}
          label={principals.label}
          title={principals.title}
          intro={principals.intro}
        />
        <div className="border-line bg-line mt-20 grid gap-px overflow-hidden rounded-md border md:grid-cols-2">
          {principals.people.map((person) => (
            <article key={person.name} className="bg-bg p-8 md:p-12">
              <p className="eyebrow">{person.role}</p>
              <h3 className="font-display mt-6 text-4xl tracking-[-0.01em]">{person.name}</h3>
              <p className="text-fg-secondary mt-6 max-w-[44ch] leading-relaxed">{person.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
