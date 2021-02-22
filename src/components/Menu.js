import React, { useState, useContext } from 'react';
import { useIntl, Link } from 'gatsby-plugin-intl';

import LookBookMenu from '@components/LookBookMenu';
import UserMenu from '@components/UserMenu';
import EshopMenu from '@components/EshopMenu';
import AppContext from '../context/AppContext';

const Menu = ({ menu, selected, setSelected, isHome }) => {
  const [visibleLookBook, setVisibleLookBook] = useState(false);
  const [visibleUser, setVisibleUser] = useState(false);
  const [visibleEshop, setVisibleEshop] = useState(false);
  const intl = useIntl();
  const { cartCount } = useContext(AppContext);
  const renderLookBook = item => (
    <li
      className={`Menu__item__menu ${selected === item.node.name ? 'Menu__selected' : ''}`}
      onMouseEnter={() => setVisibleLookBook(true)}
      onMouseLeave={() => setVisibleLookBook(false)}
      key={item.node.name}
      role='menuitem'
    >
      {item.node.name}
      {visibleLookBook && <LookBookMenu setSelected={setSelected} />}
    </li>
  );

  const renderEshop = item => (
    <li
      className={`Menu__item__menu ${selected === item.node.name ? 'Menu__selected' : ''}`}
      onMouseEnter={() => setVisibleEshop(true)}
      onMouseLeave={() => setVisibleEshop(false)}
      key={item.node.name}
      role='menuitem'
    >
      {item.node.name}
      {visibleEshop && <EshopMenu setSelected={setSelected} />}
    </li>
  );
  return (
    <nav className={`Menu ${isHome ? 'Menu__home' : ''}`}>
      <ul className='Menu__items'>
        {menu.map(item =>
          item.node.slug === 'menu' ? (
            renderLookBook(item)
          ) : item.node.slug === '/eshop' ? (
            renderEshop(item)
          ) : (
            <li
              key={item.node.name}
              className={`Menu__item ${selected === item.node.name ? 'Menu__selected' : ''}`}
            >
              <Link to={item.node.slug} onClick={() => setSelected(item.node.name)} role='menuitem'>
                {item.node.name}
              </Link>
            </li>
          )
        )}
        <li
          className={`Menu__item__menu ${selected === 'mon compte' ? 'Menu__selected' : ''}`}
          onMouseEnter={() => setVisibleUser(true)}
          onMouseLeave={() => setVisibleUser(false)}
          role='menuitem'
        >
          {intl.formatMessage({ id: 'account' })}
          {visibleUser && <UserMenu />}
        </li>
        <li
          className={`Menu__item Menu__snipcart snipcart-checkout ${
            selected === 'panier' ? 'Menu__selected' : ''
          }`}
        >
          <a href='#' className='snipcart-checkout' role='menuitem'>
            {intl.formatMessage({ id: 'cart' })}
          </a>
          <div className='Snipcart__quantity__menu'>{` (${cartCount})`}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
