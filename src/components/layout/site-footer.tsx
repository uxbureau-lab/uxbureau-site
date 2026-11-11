import { Wordmark } from "@/components/brand/wordmark";

const repoUrl = "https://github.com/uxbureau-lab/uxbureau-site";

export function SiteFooter() {
  return (
    <footer className="border-line bg-surface relative border-t">
      <div className="shell py-[clamp(80px,10vw,160px)]">
        <a
          href="mailto:hello@uxbureau.pro"
          className="group font-display block text-[clamp(44px,6vw,96px)] leading-[1.02] tracking-[-0.02em]"
        >
          Have a complex system in mind?
          <br />
          <span className="text-fg-secondary group-hover:text-accent transition-colors duration-200">
            Write directly →
          </span>
        </a>

        <div className="border-line mt-20 grid gap-10 border-t pt-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <Wordmark size="mid" />
          </div>
          <div className="text-fg-secondary space-y-2 md:col-span-3">
            <a className="hover:text-accent block" href="mailto:hello@uxbureau.pro">
              hello@uxbureau.pro
            </a>
            <a className="hover:text-accent block" href="https://uxbureau.pro">
              uxbureau.pro
            </a>
          </div>
          <div className="text-fg-muted space-y-2 text-sm md:col-span-3">
            <p>UX Bureau © 2026</p>
            <p>Based in Ukraine</p>
            <p>
              Next.js rebuild ·{" "}
              <a className="hover:text-accent underline underline-offset-4" href={repoUrl}>
                source
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
