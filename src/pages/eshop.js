import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Catalogue from '@components/Catalogue';
import SnipContext from '@context/SnipContext';

export default () => (
  <SnipContext.Consumer>
    {({ selectedCollection }) => (
      <StaticQuery
        query={graphql`
          query CatalogueQuery {
            products: allDatoCmsProduct(
              filter: { published: { eq: true } }
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
            parameters: allDatoCmsSiteParameter {
              edges {
                node {
                  titleColor {
                    hex
                  }
                  eshopImage {
                    fluid {
                      ...GatsbyDatoCmsFluid
                    }
                  }
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
              ? data.parameters.edges[0].node.eshopImage
              : selectedImageNode['node']['image'];
          return (
            <Catalogue
              products={products}
              titleColor={data.parameters.edges[0].node.titleColor.hex}
              image={image}
              selectedCollection={selectedCollection}
            />
          );
        }}
      />
    )}
  </SnipContext.Consumer>
);
