import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../layouts/index";
import Page from "../components/Page";

export default ({ data }) => {
  const page = data.allDatoCmsPage.edges[0].node;
  return <Page page={page} />;
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
