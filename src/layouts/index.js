import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "@components/Layout";
import Homepage from "@components/Homepage";
import Seo from "@components/Seo";
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
      }
    `}
    render={data => {
      if (pageContext.layout === "homepage") {
        return (
          <>
            <Seo />
            <Homepage
              images={data.allDatoCmsSiteParameter.edges[0].node}
              menu={data.allDatoCmsMenu.edges}
            >
              {children}
            </Homepage>
          </>
        );
      }
      return (
        <SnipContext.Consumer>
          {({ user, cart }) => (
            <>
              <Seo />
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
