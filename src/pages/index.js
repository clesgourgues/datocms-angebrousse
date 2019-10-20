import React from "react";
import { StaticQuery, graphql } from "gatsby";

import NewsLetter from "@components/NewsLetter";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsTextesFooter {
          edges {
            node {
              newsletterText
            }
          }
        }
      }
    `}
    render={data => (
      <div className="Newsletter__home">
        <NewsLetter
          title={data.allDatoCmsTextesFooter.edges[0].node.newsletterText}
          isHome={true}
        />
      </div>
    )}
  />
);
