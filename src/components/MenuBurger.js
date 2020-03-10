import React from 'react';
import { Link } from 'gatsby';

import LookBookMenu from '@components/LookBookMenu';

const MenuBurger = ({ menu, open, setOpen, user }) => (
  <div className={`Menu__burger ${open ? 'Menu__burger__open' : ''}`}>
    <nav className='Menu__burger__nav'>
      <ul className='Menu__burger_items'>
        {menu.map(item =>
          item.node.slug === 'menu' ? (
            <li className='Menu__burger__item__menu' key={item.node.name} onClick={() => setOpen()}>
              {item.node.name}
              <LookBookMenu />
            </li>
          ) : (
            <li className={`Menu__burger__item`} onClick={() => setOpen()} key={item.node.name}>
              <Link to={item.node.slug}>{item.node.name}</Link>
            </li>
          )
        )}
        <li className={`Menu__burger__item`}>
          <a href='#' className='snipcart-customer-signin'>
            {user ? 'Mon compte' : 'Connexion'}
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default MenuBurger;
