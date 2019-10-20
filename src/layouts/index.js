import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql, withPrefix } from "gatsby";

// import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "@components/Layout";
import Homepage from "@components/Homepage";
import SnipContext from "@context/SnipContext";
import "@style/index.scss";

export default ({ children, pageContext }) => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsSiteParameter(sort: { order: ASC, fields: slider___title }) {
          edges {
            node {
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
                  ...GatsbyDatoCmsFluid
                }
              }
            }
          }
        }
        allDatoCmsTextesFooter {
          edges {
            node {
              instagramButtonText
              instagramText
              newsletterButtonText
              newsletterText
            }
          }
        }
        allDatoCmsMenu {
          edges {
            node {
              name
              slug
              position
            }
          }
        }
        allDatoCmsBottomMenu {
          edges {
            node {
              slug
              name
              position
            }
          }
        }
        allDatoCmsEncartInfo {
          edges {
            node {
              info
              publi
            }
          }
        }
        allInstaNode {
          edges {
            node {
              id
              preview
              localFile {
                childImageSharp {
                  fluid(maxHeight: 250) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            siteName
          }
        }
        datoCmsSite {
          faviconMetaTags {
            ...GatsbyDatoCmsFaviconMetaTags
          }
        }
      }
    `}
    render={data => {
      if (pageContext.layout === "homepage") {
        return (
          <Homepage
            images={data.allDatoCmsSiteParameter.edges[0].node}
            menu={data.allDatoCmsMenu.edges}
          >
            {children}
          </Homepage>
        );
      }
      return (
        <SnipContext.Consumer>
          {({ user, cart }) => (
            <>
              <Helmet>
                {/*    <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} /> */}
                <title>{data.site.siteMetadata.siteName}</title>
                <meta name="description" content="Helmet application" />
                <script
                  async
                  src="https://www.googletagmanager.com/gtag/js?id=UA-149040088-1"
                ></script>
                <script src={withPrefix("gtag.js")} />
                <script src="https://cookiehub.net/cc/ed0dfc1f.js"></script>
                <script src={withPrefix("cookies.js")} />
                <html lang="fr-FR" />
              </Helmet>
              <Layout
                user={user}
                cart={cart}
                logos={data.allDatoCmsSiteParameter.edges[0].node}
                menu={data.allDatoCmsMenu.edges}
                bottomMenu={data.allDatoCmsBottomMenu.edges}
                encart={data.allDatoCmsEncartInfo.edges[0].node}
                instagram={data.allInstaNode.edges}
                text={data.allDatoCmsTextesFooter.edges[0].node}
              >
                {children}
              </Layout>
            </>
          )}
        </SnipContext.Consumer>
      );
    }}
  />
);
