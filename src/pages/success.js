import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import SuccessForm from '@components/SuccessForm';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        datoCmsContactText(locale: { eq: "fr" }) {
          successText
        }
      }
    `}
    render={data => {
      return <SuccessForm text={data.datoCmsContactText.successText} />;
    }}
  />
);
