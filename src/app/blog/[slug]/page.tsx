import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { SINGLE_ARTICLE_QUERY } from "@/sanity/lib/queries";

import Link from "next/link";
import { PortableText } from "next-sanity";
import Image from "next/image";

import styles from "./styles.module.scss";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const article = await client.fetch(SINGLE_ARTICLE_QUERY, { slug });

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: article.title,
    openGraph: {
      images: [article.mainImage, ...previousImages],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = await client.fetch(SINGLE_ARTICLE_QUERY, { slug });

  if (!article) {
    notFound();
  }

  return (
    <article>
      <header>
        <h1 className="mb-6 text-4xl font-bold">{article.title}</h1>

        <p className="mb-6 flex items-center justify-between">
          <Link href={"/"} className="">
            <Image
              src={article.authorImage}
              height={50}
              width={50}
              objectFit="cover"
              alt=""
              objectPosition="center"
              className="inline-block h-10 w-10 rounded-full"
            />
            <span className="pl-2">{article.name}</span>
          </Link>

          <time
            dateTime={article.publishedAt}
            className="text-sm text-neutral-600"
          >
            {new Date(article.publishedAt).toLocaleDateString("it-IT", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </p>
      </header>

      <figure className="relative mb-6 aspect-video w-full">
        <Image
          src={article.mainImage}
          alt=""
          fill
          className="h-full w-full"
          objectFit="cover"
          objectPosition="center"
        />
      </figure>

      <section className={`${styles.mainSection}`}>
        <PortableText value={article.body} />
      </section>
    </article>
  );
}
