import React from "react";
import { StaticQuery, graphql } from "gatsby";

import SuccessForm from "../components/SuccessForm";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsSiteParameter {
          edges {
            node {
              formText
            }
          }
        }
      }
    `}
    render={data => {
      return <SuccessForm text={data.allDatoCmsSiteParameter.edges[0].node.formText} />;
    }}
  />
);
