import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '@components/Layout';
import Homepage from '@components/Homepage';
import Seo from '@components/Seo';
import SnipContext, { SnipProvider } from '@context/SnipContext';
import '@style/index.scss';

export default ({ children, pageContext }) => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsSiteParameter(sort: { order: ASC, fields: slider___title }) {
          edges {
            node {
              titleColor {
                hex
              }
              logo {
                sizes(maxWidth: 300) {
                  ...GatsbyDatoCmsSizes
                }
              }
              logoMenuBurger {
                sizes(maxWidth: 180, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
              slider {
                fluid(maxWidth: 2500) {
                  ...GatsbyDatoCmsFluid_noBase64
                }
              }
            }
          }
        }
        allDatoCmsMenu(sort: { fields: position, order: ASC }) {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <SnipProvider titleColor={data.allDatoCmsSiteParameter.edges[0].node.titleColor.hex}>
          <SnipContext.Consumer>
            {() =>
              pageContext.layout === 'homepage' ? (
                <>
                  <Seo />
                  <Homepage
                    images={data.allDatoCmsSiteParameter.edges[0].node}
                    menu={data.allDatoCmsMenu.edges}
                  >
                    {children}
                  </Homepage>
                </>
              ) : (
                <>
                  <Seo />
                  <Layout
                    logos={data.allDatoCmsSiteParameter.edges[0].node}
                    menu={data.allDatoCmsMenu.edges}
                  >
                    {children}
                  </Layout>
                </>
              )
            }
          </SnipContext.Consumer>
        </SnipProvider>
      );
    }}
  />
);
