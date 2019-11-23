import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Catalogue from '@components/Catalogue';

export default () => (
  <StaticQuery
    query={graphql`
      query CatalogueQuery {
        products: allDatoCmsProduct {
          edges {
            node {
              id
              name
              price
              promoPrice
              slug
              published
              category {
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
        filters: allDatoCmsCategory {
          edges {
            node {
              name
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
      }
    `}
    render={data => (
      <Catalogue
        products={data.products.edges}
        filters={data.filters.edges}
        titleColor={data.titleColor.edges[0].node.titleColor.hex}
      />
    )}
  />
);
