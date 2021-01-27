import React from 'react';
import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

import NewsLetter from '@components/NewsLetter';

const getMenu = menu =>
  menu.map(item => {
    return (
      <li className='Menu__footer__item' key={item.node.name}>
        <Link to={item.node.slug}>{item.node.name}</Link>
      </li>
    );
  });

const MenuFooter = ({ menu, title, buttonText }) => {
  const intl = useIntl();
  const newMenu = [
    ...getMenu(menu),
    <li className='Menu__footer__item' key='baguier'>
      <a
        href='https://www.datocms-assets.com/16072/1568378285-baguier-ab-a59832.pdf'
        target='_blank'
        rel='noopener noreferrer'
      >
        {intl.formatMessage({ id: 'ring' })}
      </a>
    </li>
  ];
  return (
    <div className='Menu__footer'>
      <nav className='Menu__footer__nav'>
        <ul className='Menu__footer__items'>{newMenu.slice(0, 3)}</ul>
        {menu.length > 3 && menu.length < 7 && (
          <ul className='Menu__footer__items'>{newMenu.slice(3, 6)}</ul>
        )}
        {menu.length > 6 && (
          <ul className='Menu__footer__items'>{newMenu.slice(6, menu.length)}</ul>
        )}
      </nav>
      <NewsLetter title={title} buttonText={buttonText} />
    </div>
  );
};

export default MenuFooter;
