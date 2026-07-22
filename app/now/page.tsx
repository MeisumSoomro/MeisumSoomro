import type { Metadata } from "next";
import { nowItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Now",
  description: "What Meisum Soomro is working on now."
};

export default function NowPage() {
  return (
    <main className="mx-auto max-w-page px-5 py-16 md:px-8">
      <header className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-electric">Now</p>
        <h1 className="mt-5 font-display text-5xl text-paper md:text-7xl">The site should feel alive.</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400">
          A continuously updated view of current work, reading, research, experiments, goals, and challenges.
        </p>
        <p className="mt-4 text-sm text-zinc-500">Last updated: July 22, 2026</p>
      </header>

      <section className="mt-14 grid gap-5 md:grid-cols-2">
        {nowItems.map((item) => (
          <article key={item.title} className="rounded border border-white/10 bg-zinc-950/70 p-6">
            <h2 className="font-display text-3xl text-paper">{item.title}</h2>
            <p className="mt-4 leading-8 text-zinc-400">{item.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
