import type { MetadataRoute } from "next";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { ALL_POSTS_QUERY } from "@/sanity/lib/queries";

const getBlogArticles = async () => {
  const articles = await client.fetch<SanityDocument[]>(ALL_POSTS_QUERY);

  return articles.map((article) => {
    return {
      url: `https://jiayizhan.dev/blog/${article.slug.current}`,
      lastModified: new Date(),
      priority: 0.7,
    };
  });
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getBlogArticles();

  return [
    {
      url: "https://jiayizhan.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://jiayizhan.dev/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...articles,
  ];
}
