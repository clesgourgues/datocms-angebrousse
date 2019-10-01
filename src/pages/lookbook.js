import React from "react";
import { StaticQuery, graphql } from "gatsby";

import LookBook from "../components/LookBook";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsLookBook {
          edges {
            node {
              photos {
                fluid {
                  sizes
                  base64
                  src
                  aspectRatio
                  height
                  srcSet
                  tracedSVG
                  width
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return <LookBook photos={data.allDatoCmsLookBook.edges[0].node.photos} />;
    }}
  />
);
