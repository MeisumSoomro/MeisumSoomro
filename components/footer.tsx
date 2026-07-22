import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  const quote = site.quotes[Math.floor(Math.random() * site.quotes.length)];

  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto grid max-w-page gap-10 px-5 py-12 md:grid-cols-[1.2fr_1fr] md:px-8">
        <div>
          <p className="font-display text-2xl text-paper">{quote}</p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400">
            A living archive for essays, research, case studies, and deliberate digital work.
          </p>
        </div>
        <div className="grid gap-4 text-sm text-zinc-400 md:justify-end md:text-right">
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href="/essays" className="transition hover:text-paper">Essays</Link>
            <Link href="/research" className="transition hover:text-paper">Research</Link>
            <Link href="/projects" className="transition hover:text-paper">Projects</Link>
            <Link href="/contact" className="transition hover:text-paper">Contact</Link>
          </div>
          <p>Built with Next.js</p>
          <p>Hosted on Vercel</p>
          <p>Designed with intention</p>
        </div>
      </div>
    </footer>
  );
}
