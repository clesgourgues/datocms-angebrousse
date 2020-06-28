import React from 'react';
import { graphql } from 'gatsby';

import SuccessForm from '@components/SuccessForm';

export default ({ data }) => <SuccessForm text={data.datoCmsContactText.successText} />;

export const query = graphql`
  query($locale: String!) {
    datoCmsContactText(locale: { eq: $locale }) {
      successText
    }
  }
`;
