import groq from "groq";

export const PORTFOLIO_QUERY = groq`
  *[_type == "portfolio" && show_on_website] {
    _id,
    title,
    "slug": slug.current,
    "first_image": first_image.asset->url,
    "second_image": second_image.asset->url,
  }
`;

export const ALL_ARTICLES_QUERY = groq`
  *[_type == 'post' && publishedAt < now()] {
    title,
    'slug': slug.current,
    'mainImage': mainImage.asset->url
  } | order(publishedAt desc)
`;

export const SINGLE_ARTICLE_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    "name": author->name,
    "categories": categories[]->title,
    "authorImage": author->image.asset->url,
    "mainImage": mainImage.asset->url,
    publishedAt,
    body
  }
`;
