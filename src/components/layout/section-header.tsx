import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: string;
  intro?: string;
  id?: string;
  className?: string;
};

// Mono index + serif title — the system's section pattern.
export function SectionHeader({ index, label, title, intro, id, className }: SectionHeaderProps) {
  return (
    <header className={cn("grid gap-6 md:grid-cols-12", className)}>
      <p className="eyebrow md:col-span-3">
        <span className="text-accent">{index}</span> — {label}
      </p>
      <div className="md:col-span-8 md:col-start-5">
        <h2
          id={id}
          className="font-display text-[clamp(40px,5vw,72px)] leading-[1.02] tracking-[-0.02em]"
        >
          {title}
        </h2>
        {intro ? (
          <p className="text-fg-secondary mt-6 max-w-[60ch] text-lg leading-relaxed md:text-xl">
            {intro}
          </p>
        ) : null}
      </div>
    </header>
  );
}
