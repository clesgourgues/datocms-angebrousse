import React from "react";
import { StaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsCollection {
          edges {
            node {
              slug
              name
            }
          }
        }
      }
    `}
    render={data => (
      <ul className="Menu__lookbook">
        {data.allDatoCmsCollection.edges.map(item => (
          <li className="Menu__lookbook__item" key={item.node.name}>
            <AniLink fade to={item.node.slug} duration={0.5}>
              {item.node.name}
            </AniLink>
          </li>
        ))}
      </ul>
    )}
  />
);
