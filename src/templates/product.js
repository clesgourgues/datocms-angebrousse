import React from 'react';
import { graphql } from 'gatsby';

import Product from '@components/Product';

export default ({ data }) => {
  const product = data.allDatoCmsProduct.edges[0].node;
  const text = data.allDatoCmsProductText.edges[0].node;
  return (
    <Product
      product={product}
      text={text}
      titleColor={data.allDatoCmsSiteParameter.edges[0].node.titleColor.hex}
    />
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
          ref
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
              sizes(maxWidth: 500, imgixParams: { fm: "jpg" }) {
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
            sizes(maxWidth: 800, imgixParams: { fm: "jpg" }) {
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
          productInfoText
          productInfo {
            title
            content
            position
            categories {
              name
            }
          }
          sizesText
        }
      }
    }
    allDatoCmsSiteParameter {
      edges {
        node {
          titleColor {
            hex
          }
        }
      }
    }
  }
`;
