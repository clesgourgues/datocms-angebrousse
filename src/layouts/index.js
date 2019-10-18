import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql, withPrefix } from "gatsby";
// import { HelmetDatoCms } from "gatsby-source-datocms";
import PageTransition from "gatsby-plugin-page-transitions";
import Layout from "@components/Layout";
import SnipContext from "@context/SnipContext";
import "@style/index.scss";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsSiteParameter {
          edges {
            node {
              logo {
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
              logoMenuBurger {
                sizes(maxWidth: 180, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
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
    render={data => (
      <SnipContext.Consumer>
        {({ user, cart }) => (
          <>
            <Helmet
              title={data.site.siteMetadata.siteName}
              meta={[
                { name: "description", content: "Sample" },
                { name: "keywords", content: "sample, something" }
              ]}
            >
              {/*    <HelmetDatoCms favicon={data.datoCmsSite.faviconMetaTags} /> */}
              <html lang="fr-FR" />
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-149040088-1"
              ></script>
              <script
                src={withPrefix("gtag.js")}
                // dangerouslySetInnerHTML={{ __html: gtagScript }}
              />
              <script src="https://cookiehub.net/cc/ed0dfc1f.js"></script>
              <script
                src={withPrefix("cookies.js")}
                // dangerouslySetInnerHTML={{ __html: cookiesScript }}
              />
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
              <PageTransition>{children}</PageTransition>
            </Layout>
          </>
        )}
      </SnipContext.Consumer>
    )}
  />
);
