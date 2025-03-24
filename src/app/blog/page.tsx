import Link from "next/link";
import Image from "next/image";

import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { ALL_POSTS_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

export default async function Blog() {
  const posts = await client.fetch<SanityDocument>(
    ALL_POSTS_QUERY,
    {},
    options,
  );

  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold italic">Ultimi post</h1>

      <div className="grid grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} className="block" key={post._id}>
            <div className="image relative mb-2 aspect-video w-full overflow-hidden rounded-2xl">
              <Image
                src={post.mainImage}
                alt=""
                fill
                objectFit="cover"
                objectPosition="center"
                className="h-full w-full"
              />
            </div>

            <h3 className="text-md text-center font-medium">{post.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
