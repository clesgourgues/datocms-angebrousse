import React from "react";
import { graphql } from "gatsby";

import Page from "@components/Page";

export default ({ data }) => <Page page={data.allDatoCmsPage.edges[0].node} />;

export const query = graphql`
  query($pathSlug: String!) {
    allDatoCmsPage(filter: { slug: { eq: $pathSlug } }) {
      edges {
        node {
          slug
          title
          content
          illustration {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          enclosedFile {
            url
          }
          enclosedFileText
        }
      }
    }
  }
`;
