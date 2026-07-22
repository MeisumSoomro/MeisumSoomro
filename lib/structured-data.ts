import { site } from "@/lib/site";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    email: site.email,
    jobTitle: "Software Engineer, Researcher, Writer, Digital Strategist",
    knowsAbout: ["AI", "Search", "Software", "SEO", "Digital Strategy", "Content Systems"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "Pakistan"
    }
  };
}
