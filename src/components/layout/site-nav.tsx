import Link from "next/link";
import { Wordmark } from "@/components/brand/wordmark";

const links = [
  { label: "work", href: "/work" },
  { label: "approach", href: "/#approach" },
  { label: "contact", href: "/#contact" },
];

export function SiteNav() {
  return (
    <header className="border-line bg-bg/80 sticky top-0 z-40 border-b backdrop-blur-md">
      <nav className="shell flex h-16 items-center justify-between" aria-label="Main">
        <Link href="/">
          <Wordmark size="nav" />
        </Link>
        <ul className="text-fg-secondary flex items-center gap-6 text-sm md:gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-accent transition-colors duration-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
