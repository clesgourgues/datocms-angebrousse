import React from 'react';
import { graphql } from 'gatsby';

import Catalogue from '@components/Catalogue';
import AppContext from '@context/AppContext';

export default ({ data, pageContext }) => (
  <AppContext.Consumer>
    {({ selectedCollection }) => {
      const products =
        selectedCollection === null
          ? data.products.edges
          : data.products.edges.filter(
              ({ node: product }) => product['collection'][0]['name'] === selectedCollection
            );
      const selectedImageNode = data.image.edges.find(
        ({ node: image }) => image['name'] === selectedCollection
      );
      const image =
        selectedCollection === null || !selectedImageNode['node']['image']
          ? data.parameters.eshopImage
          : selectedImageNode['node']['image'];
      return (
        <Catalogue
          products={products}
          titleColor={data.parameters.titleColor.hex}
          image={image}
          selectedCollection={selectedCollection}
          locale={pageContext.locale}
        />
      );
    }}
  </AppContext.Consumer>
);

export const query = graphql`
  query($locale: String!) {
    products: allDatoCmsProduct(
      filter: { published: { eq: true }, locale: { eq: $locale } }
      sort: { fields: position, order: ASC }
    ) {
      edges {
        node {
          id
          name
          price
          promoPrice
          slug
          color
          category {
            name
          }
          collection {
            name
          }
          image {
            url
            sizes(maxWidth: 800, imgixParams: { fm: "jpg" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
    parameters: datoCmsSiteParameter {
      titleColor {
        hex
      }
      eshopImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
    image: allDatoCmsCollection {
      edges {
        node {
          name
          image {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`;
