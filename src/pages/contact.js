import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Contact from '../components/Contact';
import SnipContext from '../context/SnipContext';

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
              image {
                fluid(maxWidth: 500) {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
          }
        }
        allDatoCmsSiteParameter {
          edges {
            node {
              titleColor {
                hex
              }
            }
          }
        }
      }
    `}
    render={data => (
      <SnipContext.Consumer>
        {({ user }) => (
          <Contact
            text={data.allDatoCmsContactText.edges[0].node}
            user={user}
            titleColor={data.allDatoCmsSiteParameter.edges[0].node.titleColor.hex}
          />
        )}
      </SnipContext.Consumer>
    )}
  />
);
