import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { IntlProvider } from 'react-intl';

import Layout from '@components/Layout';
import Homepage from '@components/Homepage';
import Seo from '@components/Seo';
import { AppProvider } from '@context/AppContext';
import Cookies from '@components/Cookies';
import '@style/index.scss';

export default ({ children, pageContext }) => {
  const { locale, layout, intl } = pageContext;
  return (
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
          <AppProvider titleColor={data.parameters.edges[0].node.titleColor.hex} locale={locale}>
            <IntlProvider locale={locale} messages={intl.messages}>
              {layout === 'homepage' ? (
                <>
                  <Seo locale={locale} />
                  <Homepage
                    images={data.parameters.edges[0].node}
                    menu={locale === 'en' ? data.enMenu.edges : data.frMenu.edges}
                  >
                    {children}
                    <Cookies locale={locale} />
                  </Homepage>
                </>
              ) : (
                <>
                  <Seo locale={locale} />
                  <Layout
                    logos={data.parameters.edges[0].node}
                    menu={locale === 'en' ? data.enMenu.edges : data.frMenu.edges}
                    locale={locale}
                  >
                    {children}
                    <Cookies locale={locale} />
                  </Layout>
                </>
              )}
            </IntlProvider>
          </AppProvider>
        );
      }}
    />
  );
};
