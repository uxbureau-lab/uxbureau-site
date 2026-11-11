import { cn } from "@/lib/utils";

// UX Bureau wordmark. Sizes follow wordmark-component.css:
// hero (160), mid (64), nav (24 — minimum allowed).
const sizes = {
  hero: { ux: 138, bureau: 66, rule: [18, 38], bar: [3, 100], tick: [13, 3] },
  mid: { ux: 56, bureau: 27, rule: [10, 22], bar: [2.5, 41], tick: [9, 2.5] },
  nav: { ux: 23, bureau: 11, rule: [5, 11], bar: [2, 17], tick: [6, 2] },
} as const;

type WordmarkProps = {
  size?: keyof typeof sizes;
  mono?: boolean;
  className?: string;
};

export function Wordmark({ size = "nav", mono = false, className }: WordmarkProps) {
  const s = sizes[size];
  const ruleColour = mono ? "var(--fg-primary)" : "var(--accent)";

  return (
    <span
      className={cn("text-fg inline-flex items-center leading-none whitespace-nowrap", className)}
      aria-label="UX Bureau"
      role="img"
    >
      <span
        aria-hidden
        className="font-display italic"
        style={{
          fontSize: s.ux,
          letterSpacing: "-0.02em",
          fontVariationSettings: "'opsz' 144",
          fontWeight: 400,
        }}
      >
        UX
      </span>
      <span
        aria-hidden
        className="relative inline-flex items-center justify-center self-center"
        style={{ marginLeft: s.rule[1], marginRight: s.rule[0] }}
      >
        <span
          className="absolute top-0 left-1/2 -translate-x-1/2"
          style={{ width: s.tick[0], height: s.tick[1], background: ruleColour }}
        />
        <span
          className="block"
          style={{ width: s.bar[0], height: s.bar[1], background: ruleColour }}
        />
        <span
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{ width: s.tick[0], height: s.tick[1], background: ruleColour }}
        />
      </span>
      <span
        aria-hidden
        className="font-wordmark uppercase"
        style={{ fontSize: s.bureau, letterSpacing: "0.14em", fontWeight: 500 }}
      >
        Bureau
      </span>
    </span>
  );
}
