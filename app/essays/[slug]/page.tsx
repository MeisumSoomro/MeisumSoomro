import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import { getEssay, getEssays } from "@/lib/content";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getEssays().map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssay(slug);
  if (!essay) return {};

  return {
    title: essay.title,
    description: essay.excerpt,
    openGraph: {
      title: essay.title,
      description: essay.excerpt,
      type: "article",
      publishedTime: essay.date
    }
  };
}

export default async function EssayPage({ params }: Props) {
  const { slug } = await params;
  const essay = getEssay(slug);
  if (!essay) notFound();

  const related = getEssays().filter((item) => item.slug !== essay.slug).slice(0, 2);

  return (
    <main className="mx-auto max-w-page px-5 py-14 md:px-8">
      <Link href="/essays" className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-electric">
        <ArrowLeft size={16} /> Back to essays
      </Link>
      <article className="mx-auto mt-10 max-w-article">
        <div className="mb-8 flex flex-wrap gap-2">
          {essay.categories.map((category) => (
            <span key={category} className="rounded border border-white/10 px-2 py-1 text-xs text-zinc-400">{category}</span>
          ))}
        </div>
        <p className="text-xs uppercase tracking-[0.28em] text-electric">{essay.collection}</p>
        <h1 className="mt-5 font-display text-5xl leading-tight text-paper md:text-7xl">{essay.title}</h1>
        <p className="mt-6 text-xl leading-9 text-zinc-400">{essay.excerpt}</p>
        <div className="mt-8 border-y border-white/10 py-4 text-sm text-zinc-500">
          {essay.date} / {essay.readingTime}
        </div>
        <div className="my-10 min-h-72 rounded border border-white/10 bg-[linear-gradient(135deg,rgba(59,130,246,0.18),transparent_35%),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),#101012] bg-[size:auto,32px_32px] p-5">
          <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">{essay.imageLabel}</span>
        </div>
        <div className="prose-editorial">
          <MDXRemote source={essay.content} />
        </div>
      </article>

      <section className="mx-auto mt-20 max-w-article border-t border-white/10 pt-10">
        <h2 className="font-display text-3xl text-paper">Related essays</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {related.map((item) => (
            <Link key={item.slug} href={`/essays/${item.slug}`} className="rounded border border-white/10 p-5 transition hover:border-electric/60">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">{item.readingTime}</p>
              <h3 className="mt-3 font-display text-2xl text-paper">{item.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
