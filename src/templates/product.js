import React from 'react';
import { graphql } from 'gatsby';

import Product from '@components/Product';

export default ({ data }) => {
  const product = data.allDatoCmsProduct.edges[0].node;
  const text = data.datoCmsProductText;
  return (
    <Product product={product} text={text} titleColor={data.datoCmsSiteParameter.titleColor.hex} />
  );
};

export const query = graphql`
  query($pathSlug: String!, $locale: String!) {
    allDatoCmsProduct(filter: { slug: { eq: $pathSlug }, locale: { eq: $locale } }) {
      edges {
        node {
          slug
          id
          name
          price
          promoPrice
          ref
          size
          description
          category {
            name
          }
          collection {
            name
          }
          outOfStock
          productCaracteristics
          linkedProducts {
            name
            price
            promoPrice
            id
            slug
            collection {
              name
            }
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
            sizes(maxWidth: 1200, imgixParams: { fm: "jpg" }) {
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
    datoCmsProductText(locale: { eq: "fr" }) {
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
    datoCmsSiteParameter {
      titleColor {
        hex
      }
    }
  }
`;
