import React from 'react';
import { graphql } from 'gatsby';

import NewsLetter from '@components/NewsLetter';

export default ({ data }) => (
  <div className='Newsletter__home'>
    <NewsLetter title={data.datoCmsTextesFooter.newsletterText} isHome={true} />
  </div>
);

export const query = graphql`
  query($locale: String!) {
    datoCmsTextesFooter(locale: { eq: $locale }) {
      newsletterText
    }
  }
`;
