import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { useIntl, Link } from 'gatsby-plugin-intl';
import Animate from '@components/Animate';
import AppContext from '@context/AppContext';

export default ({ setSelected }) => (
  <StaticQuery
    query={graphql`
      query {
        frCollection: allDatoCmsCollection(
          filter: { eshopPublished: { eq: true }, locale: { eq: "fr" } }
          sort: { fields: position, order: ASC }
        ) {
          edges {
            node {
              name
            }
          }
        }
        enCollection: allDatoCmsCollection(
          filter: { eshopPublished: { eq: true }, locale: { eq: "en" } }
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
    render={data => {
      const intl = useIntl();
      const collection = intl.locale === 'fr' ? data.frCollection.edges : data.enCollection.edges;
      return (
        <AppContext.Consumer>
          {({ updateSelectedCollection, updateSelectedFilters }) => (
            <Animate up={true}>
              <ul className='Menu__lookbook Menu__secondary'>
                {collection.length > 1 && (
                  <li
                    className='Menu__lookbook__item'
                    onClick={() => {
                      if (setSelected) {
                        setSelected('e-shop');
                      }
                      updateSelectedCollection(null);
                      updateSelectedFilters(null);
                    }}
                  >
                    <Link to='/eshop'>{intl.formatMessage({ id: 'eshop_all' })}</Link>
                  </li>
                )}
                {collection.map(item => (
                  <li
                    className='Menu__lookbook__item'
                    key={item.node.name}
                    onClick={() => {
                      updateSelectedCollection(item.node.name);
                      updateSelectedFilters(null);
                    }}
                  >
                    <Link to='/eshop'>{item.node.name}</Link>
                  </li>
                ))}
              </ul>
            </Animate>
          )}
        </AppContext.Consumer>
      );
    }}
  />
);
