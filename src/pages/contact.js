import React from "react";
import { StaticQuery, graphql } from "gatsby";
import ContactForm from "../components/ContactForm";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
    render={data => <ContactForm />}
  />
);
