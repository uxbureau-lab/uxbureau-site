import Link from "next/link";
import { SiteNav } from "@/components/layout/site-nav";

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main className="shell flex min-h-[80dvh] flex-col justify-center">
        <p className="eyebrow">404</p>
        <h1 className="font-display mt-6 text-[clamp(48px,7vw,112px)] leading-none tracking-[-0.03em]">
          Nothing built here.
        </h1>
        <Link href="/" className="text-fg-secondary hover:text-accent mt-10 transition-colors">
          ← Back to the studio
        </Link>
      </main>
    </>
  );
}
