import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import NewsLetter from '@components/NewsLetter';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        datoCmsTextesFooter(locale: { eq: "fr" }) {
          newsletterText
        }
      }
    `}
    render={data => (
      <div className='Newsletter__home'>
        <NewsLetter title={data.allDatoCmsTextesFooter.newsletterText} isHome={true} />
      </div>
    )}
  />
);
