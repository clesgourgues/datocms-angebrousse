import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Animate from '@components/Animate';
import SnipContext from '@context/SnipContext';

export default ({ setSelected }) => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsCollection(
          filter: { eshopPublished: { eq: true } }
          sort: { fields: position, order: ASC }
        ) {
          edges {
            node {
              name
            }
          }
        }
      }
    `}
    render={data => (
      <SnipContext.Consumer>
        {({ updateSelectedCollection }) => (
          <Animate up={true}>
            <ul className='Menu__lookbook Menu__secondary'>
              {data.allDatoCmsCollection.edges.length > 1 && (
                <li
                  className='Menu__lookbook__item'
                  onClick={() => {
                    if (setSelected) {
                      setSelected('e-shop');
                    }
                    updateSelectedCollection(null);
                  }}
                >
                  <Link to='/eshop'>tout voir</Link>
                </li>
              )}
              {data.allDatoCmsCollection.edges.map(item => (
                <li
                  className='Menu__lookbook__item'
                  key={item.node.name}
                  onClick={() => {
                    updateSelectedCollection(item.node.name);
                  }}
                >
                  <Link to='/eshop'>{item.node.name}</Link>
                </li>
              ))}
            </ul>
          </Animate>
        )}
      </SnipContext.Consumer>
    )}
  />
);
