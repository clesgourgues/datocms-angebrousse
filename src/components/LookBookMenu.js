import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Animate from '@components/Animate';

export default ({ setSelected }) => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsCollection(filter: { published: { eq: true } }) {
          edges {
            node {
              slug
              name
              year
            }
          }
        }
      }
    `}
    render={data => (
      <Animate up={true}>
        <ul className='Menu__lookbook Menu__secondary'>
          {data.allDatoCmsCollection.edges.map(item => (
            <li
              className='Menu__lookbook__item'
              key={item.node.name}
              onClick={() => (setSelected ? setSelected('look book') : {})}
            >
              <Link to={`/${item.node.slug}`}>
                {item.node.name} {item.node.year}
              </Link>
            </li>
          ))}
        </ul>
      </Animate>
    )}
  />
);
