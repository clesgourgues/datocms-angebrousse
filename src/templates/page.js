import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../layouts/index";
import Page from "../components/Page";

export default ({ data }) => {
  const page = data.allDatoCmsPage.edges[0].node;
  return (
    <Layout>
      <Page page={page} />
    </Layout>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    allDatoCmsPage(filter: { slug: { eq: $pathSlug } }) {
      edges {
        node {
          slug
          title
          content
        }
      }
    }
  }
`;
