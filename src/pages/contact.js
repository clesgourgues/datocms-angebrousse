import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Contact from '../components/Contact';
import AppContext from '../context/AppContext';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        datoCmsContactText(locale: { eq: "fr" }) {
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
          image {
            fluid(maxWidth: 500) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
        datoCmsSiteParameter {
          titleColor {
            hex
          }
        }
      }
    `}
    render={data => (
      <AppContext.Consumer>
        {({ user }) => (
          <Contact
            text={data.datoCmsContactText}
            user={user}
            titleColor={data.datoCmsSiteParameter.titleColor.hex}
          />
        )}
      </AppContext.Consumer>
    )}
  />
);
