import React from "react";
import { StaticQuery, graphql } from "gatsby";
import ContactForm from "../components/ContactForm";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsSiteParameter {
          edges {
            node {
              contactText
              messageText
            }
          }
        }
      }
    `}
    render={data => <ContactForm text={data.allDatoCmsSiteParameter.edges[0].node} />}
  />
);
