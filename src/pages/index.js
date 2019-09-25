import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";

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
      <Layout>
        <div className="Intro"></div>
      </Layout>
    )}
  />
);
