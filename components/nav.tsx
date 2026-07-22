"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition duration-300 ${
        scrolled ? "border-white/10 bg-ink/88 backdrop-blur-xl" : "border-transparent bg-ink/70"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between px-5 md:px-8" aria-label="Main navigation">
        <Link href="/" className="group flex items-center gap-3 font-display text-sm font-semibold tracking-wide text-paper">
          <span className="grid size-8 place-items-center rounded border border-electric/50 bg-electric/10 text-xs text-electric transition group-hover:bg-electric group-hover:text-ink">
            MS
          </span>
          <span>Meisum Soomro</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded px-3 py-2 text-sm text-zinc-400 transition hover:text-paper focus:outline-none focus:ring-2 focus:ring-electric/70"
              >
                <span className={active ? "text-paper" : ""}>{item.label}</span>
                {active ? (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-x-3 bottom-1 h-px bg-electric"
                    transition={{ duration: 0.25 }}
                  />
                ) : null}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded border border-white/10 text-paper lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-ink px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-page gap-2">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded border border-white/10 px-4 py-3 text-sm text-zinc-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
