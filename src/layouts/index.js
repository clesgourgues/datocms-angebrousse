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
                sizes(maxWidth: 600, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
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
                  fixed(width: 300, height: 300) {
                    ...GatsbyImageSharpFixed
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
            logo={data.allDatoCmsSiteParameter.edges[0].node.logo.sizes}
            menu={data.allDatoCmsMenu.edges}
            bottomMenu={data.allDatoCmsBottomMenu.edges}
            encart={data.allDatoCmsEncartInfo.edges[0].node}
            instagram={data.allInstaNode.edges}
          >
            {children}
          </Layout>
        </>
      );
    }}
  />
);
