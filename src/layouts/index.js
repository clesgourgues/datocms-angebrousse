import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
// import PageTransition from "gatsby-plugin-page-transitions";
// import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import "../style/index.scss";

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
              localFile {
                childImageSharp {
                  sizes {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                    originalImg
                    originalName
                    presentationWidth
                    presentationHeight
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
      }
    `}
    render={data => {
      return (
        <>
          <Helmet
            title={data.site.siteMetadata.siteName}
            meta={[
              { name: "description", content: "Sample" },
              { name: "keywords", content: "sample, something" }
            ]}
          >
            <html lang="fr-FR" />
          </Helmet>
          <Layout
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
      );
    }}
  />
);
