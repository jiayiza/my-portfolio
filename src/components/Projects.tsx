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
    <div
      className="grid grid-cols-1 grid-rows-1 gap-8 px-6 md:grid-cols-2 md:px-12 lg:gap-10 max-w-[1290px] mx-auto"
      id="portfolio"
    >
      {portfolios.map((portfolio) => (
        <ProjectCard
          key={portfolio._id}
          title={portfolio.title}
          frontImage={portfolio.first_image}
          backImage={portfolio.second_image}
        />
      ))}
    </div>
  );
}
