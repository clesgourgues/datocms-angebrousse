import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allInstaNode {
          edges {
            node {
              id
              likes
              comments
              mediaType
              preview
              original
              timestamp
              caption
              localFile {
                childImageSharp {
                  fixed(width: 300, height: 300) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              # Only available with the public api scraper
              thumbnails {
                src
                config_width
                config_height
              }
              dimensions {
                height
                width
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
      console.log(data);
      return (
        <Layout site={data.site}>
          <div className="Instagram">
            {data.allInstaNode.edges.map(({ node: publi }) => {
              const date = new Date(publi.timestamp).toLocaleString("fr-FR");
              return (
                <div className="Instagram__item" key={publi.id}>
                  <div className="Instagram__image">
                    <Img
                      style={{ height: "300px" }}
                      sizes={publi.localFile.childImageSharp.fixed}
                    />
                  </div>{" "}
                  <div className="Instagram__details">
                    <span className="Instagram__date">{date}</span>
                    <div className="Instagram__caption">{publi.caption}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </Layout>
      );
    }}
  />
);
