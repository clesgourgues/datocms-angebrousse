import React from "react";
import { StaticQuery, graphql } from "gatsby";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
    render={data => (
      <>
        <h1>en construction</h1>
      </>
    )}
  />
);
