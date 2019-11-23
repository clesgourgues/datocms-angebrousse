import React from 'react';
import { graphql } from 'gatsby';

import LookBook from '@components/LookBook';

export default ({ data }) => <LookBook lookbooks={data.allDatoCmsLookBook.edges} />;

export const query = graphql`
  query($collection: String!) {
    allDatoCmsLookBook(filter: { collection: { name: { eq: $collection } } }) {
      edges {
        node {
          collection {
            name
            slug
          }
          photos {
            legende
            photo {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    }
  }
`;
