import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { SINGLE_ARTICLE_QUERY } from "@/sanity/lib/queries";

import { PortableText } from "next-sanity";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await client.fetch(SINGLE_ARTICLE_QUERY, { slug });

  if (!article) {
    notFound();
  }

  return (
    <div>
      <PortableText value={article.body} />
    </div>
  );
}
