import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { EditorialVisual } from "@/components/editorial-visual";
import { principles, projects, researchPapers } from "@/lib/data";
import { getEssays } from "@/lib/content";

export default function HomePage() {
  const essays = getEssays().slice(0, 3);

  return (
    <main>
      <section className="relative isolate min-h-[calc(100vh-4rem)] overflow-hidden">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-page items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.34em] text-zinc-500">Digital headquarters / research desk / public notebook</p>
            <h1 className="max-w-4xl font-display text-5xl leading-[1.02] text-paper md:text-7xl">
              Understanding complexity is easy. Explaining it isn't.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
              I help businesses, researchers, and ambitious professionals make sense of AI, search, software, digital strategy, and the systems shaping tomorrow.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/essays" className="inline-flex items-center gap-2 rounded bg-electric px-5 py-3 text-sm font-semibold text-ink transition hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2 focus:ring-offset-ink">
                Read Essays <ArrowRight size={16} />
              </Link>
              <Link href="/projects" className="inline-flex items-center gap-2 rounded border border-white/15 px-5 py-3 text-sm font-semibold text-paper transition hover:border-electric hover:text-electric focus:outline-none focus:ring-2 focus:ring-electric/70">
                Explore Projects
              </Link>
            </div>
            <div className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
              <ArrowDown size={14} className="animate-bounce text-electric" />
              <span>Scroll for the working philosophy</span>
            </div>
          </div>
          <EditorialVisual label="Workspace index" />
        </div>
      </section>

      <AnimatedSection className="border-y border-white/10 bg-zinc-950/40">
        <div className="mx-auto grid max-w-page gap-8 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-electric">Philosophy</p>
            <h2 className="mt-4 font-display text-3xl text-paper md:text-5xl">The mindset behind the work.</h2>
          </div>
          <div className="grid gap-5">
            <p className="text-xl leading-9 text-zinc-300">
              Meisum's work sits between research and implementation: the patient act of understanding a system, then the practical act of making it easier for someone else to use, trust, or act on.
            </p>
            <p className="leading-8 text-zinc-400">
              The point is not to sound technical. The point is to make complexity usable. That means asking better questions, building before the perfect moment arrives, and letting technology serve people instead of asking people to orbit technology.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <section className="mx-auto grid max-w-page gap-4 px-5 py-20 md:grid-cols-5 md:px-8">
        {principles.map((principle) => (
          <article key={principle.title} className="rounded border border-white/10 bg-zinc-950/60 p-5">
            <h3 className="font-display text-xl text-paper">{principle.title}</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-400">{principle.body}</p>
          </article>
        ))}
      </section>

      <AnimatedSection className="mx-auto max-w-page px-5 py-16 md:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-electric">Essays</p>
            <h2 className="mt-4 font-display text-4xl text-paper">The 2 A.M. Files</h2>
          </div>
          <Link href="/essays" className="hidden text-sm text-zinc-300 transition hover:text-electric md:inline-flex">View all essays</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {essays.map((essay) => (
            <Link key={essay.slug} href={`/essays/${essay.slug}`} className="group rounded border border-white/10 bg-zinc-950/60 p-5 transition hover:border-electric/60">
              <div className="mb-5 grid h-40 place-items-end rounded border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.16),transparent_35%),#111113] p-4">
                <span className="text-xs uppercase tracking-[0.24em] text-zinc-500">{essay.imageLabel}</span>
              </div>
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">{essay.date} / {essay.readingTime}</p>
              <h3 className="mt-3 font-display text-2xl text-paper group-hover:text-electric">{essay.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{essay.excerpt}</p>
            </Link>
          ))}
        </div>
      </AnimatedSection>

      <section className="mx-auto grid max-w-page gap-10 px-5 py-20 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-electric">Research</p>
          <h2 className="mt-4 font-display text-4xl text-paper">Questions before claims.</h2>
          <p className="mt-5 leading-8 text-zinc-400">A research library for ideas that need more than a post and less than a performance.</p>
        </div>
        <div className="grid gap-4">
          {researchPapers.slice(0, 2).map((paper) => (
            <article key={paper.question} className="rounded border border-white/10 bg-zinc-950/60 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">{paper.status} / {paper.date}</p>
              <h3 className="mt-3 font-display text-2xl text-paper">{paper.question}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">{paper.abstract}</p>
            </article>
          ))}
        </div>
      </section>

      <AnimatedSection className="mx-auto max-w-page px-5 py-20 md:px-8">
        <div className="rounded border border-white/10 bg-zinc-950/70 p-6 md:p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-electric">Featured project</p>
          <h2 className="mt-4 font-display text-4xl text-paper">{projects[0].title}</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">{projects[0].summary}</p>
          <Link href="/projects" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-electric">
            Read the case study <ArrowRight size={16} />
          </Link>
        </div>
      </AnimatedSection>
    </main>
  );
}
