import type { MetadataRoute } from "next";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { ALL_POSTS_QUERY, PORTFOLIO_QUERY } from "@/sanity/lib/queries";

const getBlogArticles = async () => {
  const articles = await client.fetch<SanityDocument[]>(ALL_POSTS_QUERY);

  return articles.map((article) => {
    return {
      url: `https://jiayizhan.dev/blog/${article.slug}`,
      lastModified: new Date(),
      priority: 0.7,
    };
  });
};

const getPortfolios = async () => {
  const portfolios = await client.fetch<SanityDocument[]>(PORTFOLIO_QUERY);

  return portfolios.map((portfolio) => {
    return {
      url: `https://jiayizhan.dev/portfolio/${portfolio.slug}`,
      lastModified: new Date(),
      priority: 0.1,
    };
  });
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getBlogArticles();
  const portfolios = await getPortfolios();

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
    ...portfolios,
  ];
}
