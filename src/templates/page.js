import React from "react";
import { graphql } from "gatsby";

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
