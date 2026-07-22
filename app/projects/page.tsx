import type { Metadata } from "next";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Detailed case studies by Meisum Soomro."
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-page px-5 py-16 md:px-8">
      <header className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-electric">Projects</p>
        <h1 className="mt-5 font-display text-5xl text-paper md:text-7xl">Case studies, not cards.</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-400">
          Each project is documented as a chain of decisions: problem, thinking, process, technology, outcome, and lessons.
        </p>
      </header>

      <section className="mt-14 grid gap-10">
        {projects.map((project) => (
          <article key={project.title} className="rounded border border-white/10 bg-zinc-950/70 p-6 md:p-10">
            <p className="text-sm uppercase tracking-[0.28em] text-electric">Case study</p>
            <h2 className="mt-4 font-display text-5xl text-paper">{project.title}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-400">{project.summary}</p>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                ["The Problem", project.problem],
                ["The Thinking", project.thinking],
                ["The Process", project.process],
                ["The Outcome", project.outcome],
                ["Lessons Learned", project.lessons]
              ].map(([title, body]) => (
                <section key={title} className="rounded border border-white/10 p-5">
                  <h3 className="font-display text-2xl text-paper">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">{body}</p>
                </section>
              ))}
              <section className="rounded border border-white/10 p-5">
                <h3 className="font-display text-2xl text-paper">The Technologies</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded border border-white/10 px-2 py-1 text-xs text-zinc-400">{technology}</span>
                  ))}
                </div>
              </section>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
