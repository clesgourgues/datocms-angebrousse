import React from "react";
import { StaticQuery, graphql } from "gatsby";

import SuccessForm from "@components/SuccessForm";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsContactText {
          edges {
            node {
              successText
            }
          }
        }
      }
    `}
    render={data => {
      return <SuccessForm text={data.allDatoCmsContactText.edges[0].node.successText} />;
    }}
  />
);
