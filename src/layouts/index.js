import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '@components/Layout';
import Homepage from '@components/Homepage';
import Seo from '@components/Seo';
import AppContext, { AppProvider } from '@context/AppContext';
import '@style/index.scss';

export default ({ children, pageContext, location }) => (
  <StaticQuery
    query={graphql`
      query {
        parameters: allDatoCmsSiteParameter(sort: { order: ASC, fields: slider___title }) {
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
        frMenu: allDatoCmsMenu(
          sort: { fields: position, order: ASC }
          filter: { locale: { eq: "fr" } }
        ) {
          edges {
            node {
              name
              slug
            }
          }
        }
        enMenu: allDatoCmsMenu(
          sort: { fields: position, order: ASC }
          filter: { locale: { eq: "en" } }
        ) {
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
        <AppProvider
          titleColor={data.parameters.edges[0].node.titleColor.hex}
          locale={pageContext.locale}
        >
          <AppContext.Consumer>
            {() =>
              pageContext.layout === 'homepage' ? (
                <>
                  <Seo locale={pageContext.locale} />
                  <Homepage
                    images={data.parameters.edges[0].node}
                    menu={pageContext.locale === 'fr' ? data.frMenu.edges : data.enMenu.edges}
                    location={location}
                  >
                    {children}
                  </Homepage>
                </>
              ) : (
                <>
                  <Seo />
                  <Layout
                    logos={data.parameters.edges[0].node}
                    menu={pageContext.locale === 'fr' ? data.frMenu.edges : data.enMenu.edges}
                    locale={pageContext.locale}
                    location={location}
                  >
                    {children}
                  </Layout>
                </>
              )
            }
          </AppContext.Consumer>
        </AppProvider>
      );
    }}
  />
);
