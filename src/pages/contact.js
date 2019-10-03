import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Contact from "../components/Contact";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsContactText {
          edges {
            node {
              mailText
              successText
              title
              sendButtonText
              messagePlaceholderText
              emailPlaceholderText
              address {
                content
                title
              }
              mail {
                content
                title
              }
              phone {
                title
                content
              }
            }
          }
        }
      }
    `}
    render={data => <Contact text={data.allDatoCmsContactText.edges[0].node} />}
  />
);
