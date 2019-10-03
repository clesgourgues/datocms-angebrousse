import React from "react";
import { graphql } from "gatsby";

import Product from "../components/Product";

export default ({ data }) => {
  const product = data.allDatoCmsProduct.edges[0].node;
  const text = data.allDatoCmsProductText.edges[0].node;
  return <Product product={product} text={text} />;
};

export const query = graphql`
  query($pathSlug: String!) {
    allDatoCmsProduct(filter: { slug: { eq: $pathSlug } }) {
      edges {
        node {
          slug
          id
          name
          price
          size
          description
          category {
            name
          }
          outOfStock
          productCaracteristics
          linkedProducts {
            name
            price
            id
            slug
            image {
              url
              sizes(maxWidth: 600, imgixParams: { fm: "jpg" }) {
                src
                sizes
                srcSet
                base64
                aspectRatio
              }
            }
          }
          image {
            url
            sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
              src
              sizes
              srcSet
              base64
              aspectRatio
            }
          }
        }
      }
    }
    allDatoCmsProductText {
      edges {
        node {
          backText
          buyButtonText
          linkedProductsText
          outOfStockText
          productInfo {
            title
            content
          }
          sizesText
        }
      }
    }
  }
`;
