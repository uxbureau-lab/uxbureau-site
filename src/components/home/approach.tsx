import { Reveal } from "@/components/motion/reveal";
import { SectionHeader } from "@/components/layout/section-header";
import { approach } from "@/content/home";

export function Approach() {
  return (
    <section id="approach" className="section scroll-mt-16" aria-labelledby="approach-title">
      <div className="shell">
        <SectionHeader
          id="approach-title"
          index={approach.index}
          label={approach.label}
          title={approach.title}
          intro={approach.intro}
        />
        <Reveal delay={0.1}>
          <ol className="border-line bg-line mt-20 grid gap-px overflow-hidden rounded-md border md:grid-cols-5">
            {approach.stages.map((stage, i) => (
              <li key={stage.title} className="bg-bg flex flex-col gap-6 p-8">
                <span className="text-accent font-mono text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl">{stage.title}</h3>
                <p className="text-fg-secondary text-[15px] leading-relaxed">{stage.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
