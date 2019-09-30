import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../layouts/index";
import Catalogue from "../components/Catalogue";

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
              slug
              category {
                name
              }
              image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
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
      }
    `}
    render={data => <Catalogue products={data.products.edges} filters={data.filters.edges} />}
  />
);
