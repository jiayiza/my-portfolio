export const PORTFOLIO_QUERY = `
  *[_type == "portfolio" && show_on_website] {
    _id,
    title,
    "slug": slug.current,
    "first_image": first_image.asset->url,
    "second_image": second_image.asset->url,
  }
`;

export const ALL_POSTS_QUERY = `
  *[_type == 'post'] {
    title,
    'slug': slug.current,
    'mainImage': mainImage.asset->url
  }
`