import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const essaysDirectory = path.join(process.cwd(), "content", "essays");

export type Essay = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  categories: string[];
  collection: string;
  imageLabel: string;
  status?: string;
  content: string;
};

export function getEssays(): Essay[] {
  if (!fs.existsSync(essaysDirectory)) {
    return [];
  }

  return fs
    .readdirSync(essaysDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const source = fs.readFileSync(path.join(essaysDirectory, file), "utf8");
      const { data, content } = matter(source);

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        readingTime: data.readingTime,
        categories: data.categories ?? [],
        collection: data.collection ?? "The 2 A.M. Files",
        imageLabel: data.imageLabel ?? "Field note",
        status: data.status,
        content
      };
    })
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export function getEssay(slug: string) {
  return getEssays().find((essay) => essay.slug === slug);
}
