import type { Metadata } from "next";
import { researchPapers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Research",
  description: "A research library by Meisum Soomro."
};

export default function ResearchPage() {
  return (
    <main className="mx-auto max-w-page px-5 py-16 md:px-8">
      <header className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-electric">Research</p>
        <h1 className="mt-5 font-display text-5xl text-paper md:text-7xl">A library of questions.</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400">
          Papers, notes, and structured inquiries designed to make future publications feel natural instead of bolted on.
        </p>
      </header>

      <section className="mt-14 grid gap-5">
        {researchPapers.map((paper) => (
          <article key={paper.question} className="grid gap-6 rounded border border-white/10 bg-zinc-950/70 p-6 md:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">{paper.status} / {paper.date}</p>
              <h2 className="mt-4 font-display text-3xl text-paper">{paper.question}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {paper.tags.map((tag) => (
                  <span key={tag} className="rounded border border-white/10 px-2 py-1 text-xs text-zinc-400">{tag}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-electric">Abstract</p>
              <p className="mt-4 leading-8 text-zinc-400">{paper.abstract}</p>
              <p className="mt-6 text-sm text-zinc-500">Downloads: {paper.downloads}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
