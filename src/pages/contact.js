import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Contact from "../components/Contact";
import SnipContext from "../context/SnipContext";

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
    render={data => (
      <SnipContext.Consumer>
        {({ user }) => <Contact text={data.allDatoCmsContactText.edges[0].node} user={user} />}
      </SnipContext.Consumer>
    )}
  />
);
