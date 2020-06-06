import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Contact from '../components/Contact';
import SnipContext from '../context/SnipContext';

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
      <SnipContext.Consumer>
        {({ user }) => (
          <Contact
            text={data.datoCmsContactText}
            user={user}
            titleColor={data.datoCmsSiteParameter.titleColor.hex}
          />
        )}
      </SnipContext.Consumer>
    )}
  />
);
