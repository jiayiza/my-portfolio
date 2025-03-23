export const PORTFOLIO_QUERY = `
  *[_type == "portfolio" && show_on_website] {
    _id,
    title,
    "first_image": first_image.asset->url,
    "second_image": second_image.asset->url,
  }
`;
