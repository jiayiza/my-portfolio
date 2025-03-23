import ProjectCard from "./ProjectCard";

import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { PORTFOLIO_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

export default async function Projects() {
  const portfolios = await client.fetch<SanityDocument[]>(
    PORTFOLIO_QUERY,
    {},
    options,
  );

  return (
    <>
      {portfolios.map((portfolio) => (
        <ProjectCard
          key={portfolio._id}
          title={portfolio.title}
          frontImage={portfolio.first_image}
          backImage={portfolio.second_image}
        />
      ))}
    </>
  );
}
