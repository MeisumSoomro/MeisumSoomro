import type { Metadata } from "next";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Meisum Soomro."
};

const methods = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}`, icon: Phone },
  { label: "Location", value: site.location, href: "#", icon: MapPin },
  { label: "Project note", value: "Send a focused brief", href: `mailto:${site.email}?subject=Project%20brief%20for%20Meisum`, icon: MessageSquare }
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-page px-5 py-16 md:px-8">
      <header className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.3em] text-electric">Contact</p>
        <h1 className="mt-5 font-display text-5xl leading-tight text-paper md:text-7xl">Let's Build Something Worth Remembering.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Reach out for research collaborations, AI/search strategy, software case studies, thoughtful writing, or a problem that deserves clearer thinking.
        </p>
      </header>

      <section className="mt-14 grid gap-5 md:grid-cols-2">
        {methods.map((method) => {
          const Icon = method.icon;
          return (
            <a
              key={method.label}
              href={method.href}
              className="group rounded border border-white/10 bg-zinc-950/70 p-6 transition hover:border-electric/70"
            >
              <Icon className="text-electric" size={22} />
              <p className="mt-6 text-sm uppercase tracking-[0.24em] text-zinc-500">{method.label}</p>
              <p className="mt-2 font-display text-2xl text-paper group-hover:text-electric">{method.value}</p>
            </a>
          );
        })}
      </section>
    </main>
  );
}
