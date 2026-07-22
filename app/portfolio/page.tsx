import type { Metadata } from "next";
import { portfolioGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A reflective portfolio from Meisum Soomro."
};

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-page px-5 py-16 md:px-8">
      <header className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-electric">Portfolio</p>
        <h1 className="mt-5 font-display text-5xl text-paper md:text-7xl">A reflection, not a résumé.</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400">
          Achievements grouped by the kinds of thinking they represent: professional judgment, writing practice, research discipline, technical growth, and experiments still becoming something.
        </p>
      </header>

      <section className="mt-14 grid gap-5 md:grid-cols-2">
        {portfolioGroups.map((group) => (
          <article key={group.title} className="rounded border border-white/10 bg-zinc-950/70 p-6">
            <h2 className="font-display text-3xl text-paper">{group.title}</h2>
            <div className="mt-5 grid gap-4">
              {group.items.map((item) => (
                <p key={item} className="border-l border-electric/50 pl-4 text-sm leading-7 text-zinc-400">{item}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
