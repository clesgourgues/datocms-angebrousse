import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";

export default ({ setSelected }) => (
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
          <li className="Menu__lookbook__item" key={item.node.name} onClick={setSelected}>
            <Link to={`/${item.node.slug}`}>{item.node.name}</Link>
          </li>
        ))}
      </ul>
    )}
  />
);
