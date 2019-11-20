import React, { useState } from 'react';
import { Link } from 'gatsby';

import LookBookMenu from '@components/LookBookMenu';
import UserMenu from '@components/UserMenu';

const Menu = ({ menu, selected, setSelected, isHome, user, updateUser }) => {
  const [visibleLookBook, setVisibleLookBook] = useState(false);
  const [visibleUser, setVisibleUser] = useState(false);
  return (
    <nav className={`Menu ${isHome ? 'Menu__home' : ''}`}>
      <ul className='Menu__items'>
        {menu.map(item =>
          item.node.slug === 'menu' ? (
            <li
              className={`Menu__item__menu ${selected === item.node.name ? 'Menu__selected' : ''}`}
              onMouseEnter={() => setVisibleLookBook(true)}
              onMouseLeave={() => setVisibleLookBook(false)}
              key={item.node.name}
            >
              {item.node.name}
              {visibleLookBook && <LookBookMenu setSelected={setSelected} />}
            </li>
          ) : (
            <li
              className={`Menu__item ${selected === item.node.name ? 'Menu__selected' : ''}`}
              onClick={() => setSelected(item.node.name)}
              key={item.node.name}
            >
              <Link to={item.node.slug}>{item.node.name}</Link>
            </li>
          )
        )}
        <li
          className={`Menu__item__menu ${selected === 'mon compte' ? 'Menu__selected' : ''}`}
          onMouseEnter={() => setVisibleUser(true)}
          onMouseLeave={() => setVisibleUser(false)}
        >
          mon compte
          {visibleUser && <UserMenu setSelected={setSelected} user={user} />}
        </li>
        <li
          className={`Menu__item Menu__snipcart snipcart-checkout ${
            selected === 'panier' ? 'Menu__selected' : ''
          }`}
        >
          <a href='#' className='snipcart-checkout'>
            panier
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
