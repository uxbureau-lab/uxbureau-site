import { Wordmark } from "@/components/brand/wordmark";

// Scaffold placeholder — replaced by the homepage sections in PR 2.
export default function Home() {
  return (
    <main className="shell flex min-h-dvh flex-col justify-center gap-10">
      <Wordmark size="mid" />
      <p className="eyebrow">Foundation · tokens · type · background layers</p>
    </main>
  );
}
