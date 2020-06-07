import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Animate from '@components/Animate';
import AppContext from '@context/AppContext';

export default ({ setSelected }) => (
  <StaticQuery
    query={graphql`
      query {
        allDatoCmsCollection(
          filter: { eshopPublished: { eq: true }, locale: { eq: "fr" } }
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
      <AppContext.Consumer>
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
      </AppContext.Consumer>
    )}
  />
);
