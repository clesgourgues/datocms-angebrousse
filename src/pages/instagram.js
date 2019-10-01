import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Instagram from "../components/Instagram";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        instaUserNode {
          id
          username
          full_name
          biography
          profile_pic_url_hd
          edge_followed_by {
            count
          }
          edge_follow {
            count
          }
          edge_followed_by {
            count
          }
        }
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
      }
    `}
    render={data => {
      return <Instagram publications={data.allInstaNode.edges} profile={data.instaUserNode} />;
    }}
  />
);
