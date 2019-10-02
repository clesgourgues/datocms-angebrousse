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
                legende
                photo {
                  fluid {
                    width
                    tracedSVG
                    srcSet
                    src
                    sizes
                    height
                    base64
                    aspectRatio
                  }
                }
              }
              collection {
                name
              }
            }
          }
        }
      }
    `}
    render={data => {
      return <LookBook lookbooks={data.allDatoCmsLookBook.edges} />;
    }}
  />
);
