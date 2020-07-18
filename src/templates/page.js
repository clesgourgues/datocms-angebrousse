import React from 'react';
import { graphql } from 'gatsby';

import Page from '@components/Page';

export default ({ data }) => (
  <Page
    page={data.allDatoCmsPage.edges[0].node}
    titleColor={data.datoCmsSiteParameter.titleColor.hex}
  />
);

export const query = graphql`
  query($pathSlug: String!, $locale: String!) {
    allDatoCmsPage(filter: { slug: { eq: $pathSlug }, locale: { eq: $locale } }) {
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
    datoCmsSiteParameter {
      titleColor {
        hex
      }
    }
  }
`;
