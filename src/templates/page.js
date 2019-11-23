import React from 'react';
import { graphql } from 'gatsby';

import Page from '@components/Page';

export default ({ data }) => (
  <Page
    page={data.allDatoCmsPage.edges[0].node}
    titleColor={data.allDatoCmsSiteParameter.edges[0].node.titleColor.hex}
  />
);

export const query = graphql`
  query($pathSlug: String!) {
    allDatoCmsPage(filter: { slug: { eq: $pathSlug } }) {
      edges {
        node {
          slug
          title
          contentAccordion {
            title
            content
          }
          content
          contentIntro
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
    allDatoCmsSiteParameter {
      edges {
        node {
          titleColor {
            hex
          }
        }
      }
    }
  }
`;
