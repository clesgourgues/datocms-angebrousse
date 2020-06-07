import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Catalogue from '@components/Catalogue';
import AppContext from '@context/AppContext';

export default () => (
  <AppContext.Consumer>
    {({ selectedCollection }) => (
      <StaticQuery
        query={graphql`
          query CatalogueQuery {
            products: allDatoCmsProduct(
              filter: { published: { eq: true }, locale: { eq: "fr" } }
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
        `}
        render={data => {
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
            />
          );
        }}
      />
    )}
  </AppContext.Consumer>
);