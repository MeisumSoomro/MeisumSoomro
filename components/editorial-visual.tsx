export function EditorialVisual({ label = "Research desk" }: { label?: string }) {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded border border-white/10 bg-zinc-950 p-5 shadow-2xl shadow-black/40">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:36px_36px]" />
      <div className="absolute left-8 top-10 h-44 w-36 rotate-[-7deg] rounded-sm border border-white/10 bg-zinc-100 p-4 text-zinc-900 shadow-xl">
        <div className="h-2 w-20 bg-zinc-900" />
        <div className="mt-5 space-y-2">
          <div className="h-1.5 w-full bg-zinc-400" />
          <div className="h-1.5 w-10/12 bg-zinc-400" />
          <div className="h-1.5 w-8/12 bg-zinc-400" />
        </div>
        <div className="mt-7 h-12 rounded border border-blue-500/40 bg-blue-500/10" />
      </div>
      <div className="absolute right-8 top-16 h-32 w-52 rotate-[5deg] rounded border border-white/10 bg-zinc-900 p-4">
        <div className="mb-3 flex gap-1">
          <span className="size-2 rounded-full bg-blue-500" />
          <span className="size-2 rounded-full bg-zinc-600" />
          <span className="size-2 rounded-full bg-zinc-600" />
        </div>
        <div className="space-y-2">
          <div className="h-1.5 w-32 bg-zinc-600" />
          <div className="h-1.5 w-40 bg-blue-500/70" />
          <div className="h-1.5 w-24 bg-zinc-600" />
        </div>
      </div>
      <div className="absolute bottom-9 left-14 h-20 w-60 rounded border border-blue-500/30 bg-blue-500/10 p-4">
        <div className="h-2 w-28 bg-blue-400" />
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="h-8 rounded border border-white/10" />
          <div className="h-8 rounded border border-white/10" />
          <div className="h-8 rounded border border-white/10" />
        </div>
      </div>
      <div className="absolute bottom-10 right-14 h-28 w-28 rounded-full border border-white/10 bg-zinc-900">
        <div className="absolute inset-5 rounded-full border border-blue-500/60" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-white/10" />
      </div>
      <div className="absolute inset-x-5 bottom-5 flex items-center justify-between border-t border-white/10 pt-4 text-[11px] uppercase tracking-[0.28em] text-zinc-500">
        <span>{label}</span>
        <span>AI / Search / Systems</span>
      </div>
    </div>
  );
}
