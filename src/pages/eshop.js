import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Catalogue from '@components/Catalogue';

export default () => (
  <StaticQuery
    query={graphql`
      query CatalogueQuery {
        products: allDatoCmsProduct(filter: { published: { eq: true } }) {
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
        titleColor: allDatoCmsSiteParameter {
          edges {
            node {
              titleColor {
                hex
              }
            }
          }
        }
        photos: allDatoCmsLookBook {
          edges {
            node {
              photos {
                photo {
                  fluid {
                    ...GatsbyDatoCmsFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Catalogue
        products={data.products.edges}
        titleColor={data.titleColor.edges[0].node.titleColor.hex}
        photo={data.photos.edges[0].node.photos[0]}
      />
    )}
  />
);
