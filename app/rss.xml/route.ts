import { getEssays } from "@/lib/content";
import { site } from "@/lib/site";

export function GET() {
  const essays = getEssays();
  const items = essays
    .map(
      (essay) => `
        <item>
          <title>${essay.title}</title>
          <link>${site.url}/essays/${essay.slug}</link>
          <guid>${site.url}/essays/${essay.slug}</guid>
          <pubDate>${new Date(essay.date).toUTCString()}</pubDate>
          <description>${essay.excerpt}</description>
        </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
      <channel>
        <title>${site.name}</title>
        <link>${site.url}</link>
        <description>${site.description}</description>
        ${items}
      </channel>
    </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8"
    }
  });
}
