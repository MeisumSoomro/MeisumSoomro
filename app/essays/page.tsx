import type { Metadata } from "next";
import Link from "next/link";
import { getEssays } from "@/lib/content";

export const metadata: Metadata = {
  title: "Essays",
  description: "The 2 A.M. Files, an essay collection from Meisum Soomro."
};

const placeholders = [
  "The Lingering Thought",
  "The Cost of Curiosity",
  "Thinking in If-Else Statements",
  "The Resume Nobody Asked About",
  "The Validation Economy",
  "The Infinite Draft"
];

export default function EssaysPage() {
  const essays = getEssays();

  return (
    <main className="mx-auto max-w-page px-5 py-16 md:px-8">
      <header className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-electric">Essays</p>
        <h1 className="mt-5 font-display text-5xl text-paper md:text-7xl">The 2 A.M. Files</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400">
          Essays for the unresolved thought: AI, search, software, ambition, attention, and the strange little systems people build around meaning.
        </p>
      </header>

      <section className="mt-14 grid gap-6 md:grid-cols-2">
        {essays.map((essay, index) => (
          <Link
            key={essay.slug}
            href={`/essays/${essay.slug}`}
            className={index === 0 ? "group rounded border border-white/10 bg-zinc-950/70 p-5 transition hover:border-electric/70 md:col-span-2 md:grid md:grid-cols-[0.9fr_1.1fr] md:gap-8" : "group rounded border border-white/10 bg-zinc-950/70 p-5 transition hover:border-electric/70"}
          >
            <div className="min-h-64 rounded border border-white/10 bg-[linear-gradient(135deg,rgba(59,130,246,0.2),transparent_35%),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),#101012] bg-[size:auto,28px_28px] p-5">
              <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">{essay.imageLabel}</span>
            </div>
            <div className="pt-6 md:pt-0">
              <div className="flex flex-wrap gap-2">
                {essay.categories.map((category) => (
                  <span key={category} className="rounded border border-white/10 px-2 py-1 text-xs text-zinc-400">{category}</span>
                ))}
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.24em] text-zinc-500">{essay.date} / {essay.readingTime}</p>
              <h2 className="mt-3 font-display text-3xl text-paper group-hover:text-electric md:text-5xl">{essay.title}</h2>
              <p className="mt-4 leading-8 text-zinc-400">{essay.excerpt}</p>
            </div>
          </Link>
        ))}
      </section>

      <section className="mt-20">
        <h2 className="font-display text-3xl text-paper">Future files</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {placeholders.map((title) => (
            <article key={title} className="rounded border border-dashed border-white/10 p-5 text-zinc-500">
              <p className="font-display text-xl text-zinc-300">{title}</p>
              <p className="mt-3 text-sm">Draft space reserved.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
