import React from "react";
import { graphql } from "gatsby";

import Layout from "../layouts/index";
import Product from "../components/Product";

export default ({ data }) => {
  const product = data.allDatoCmsProduct.edges[0].node;
  const info = data.allDatoCmsProductInfo.edges;
  return (
    <Layout>
      <Product product={product} info={info} />
    </Layout>
  );
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
          category {
            name
          }
          outOfStock
          productCaracteristics
          linkedProducts {
            name
            price
            id
            image {
              url
              sizes(maxWidth: 600, imgixParams: { fm: "jpg" }) {
                src
                sizes
                srcSet
                base64
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
            }
          }
        }
      }
    }
    allDatoCmsProductInfo {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`;
