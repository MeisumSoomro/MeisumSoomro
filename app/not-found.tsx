import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-page px-5 py-24 md:px-8">
      <p className="text-sm uppercase tracking-[0.3em] text-electric">404</p>
      <h1 className="mt-5 font-display text-5xl text-paper">This page is still becoming something.</h1>
      <p className="mt-5 max-w-xl leading-8 text-zinc-400">The idea may have moved, changed shape, or not been written yet.</p>
      <Link href="/" className="mt-8 inline-flex rounded bg-electric px-5 py-3 text-sm font-semibold text-ink">
        Return home
      </Link>
    </main>
  );
}
