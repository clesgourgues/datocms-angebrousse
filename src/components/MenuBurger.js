import React from 'react';
import { useIntl, Link } from 'gatsby-plugin-intl';

import LookBookMenu from '@components/LookBookMenu';
import EshopMenu from '@components/EshopMenu';
import AppContext from '@context/AppContext';

const MenuBurger = ({ menu, open, setOpen }) => {
  const intl = useIntl();
  return (
    <AppContext.Consumer>
      {({ user }) => (
        <div className={`Menu__burger ${open ? 'Menu__burger__open' : ''}`}>
          <nav className='Menu__burger__nav'>
            <ul className='Menu__burger_items'>
              {menu.map(item =>
                item.node.slug === 'menu' ? (
                  <li
                    className='Menu__burger__item__menu'
                    key={item.node.name}
                    onClick={() => setOpen()}
                  >
                    {item.node.name}
                    <LookBookMenu />
                  </li>
                ) : item.node.slug === '/eshop' ? (
                  <li
                    className='Menu__burger__item__menu'
                    key={item.node.name}
                    onClick={() => setOpen()}
                  >
                    {item.node.name}
                    <EshopMenu />
                  </li>
                ) : (
                  <li
                    className={`Menu__burger__item`}
                    onClick={() => setOpen()}
                    key={item.node.name}
                  >
                    <Link to={item.node.slug}>{item.node.name}</Link>
                  </li>
                )
              )}
              {user ? (
                <>
                  <li className={`Menu__burger__item`}>
                    <a href='#' className='snipcart-edit-profile'>
                      {intl.formatMessage({ id: 'account' })}
                    </a>
                  </li>
                  <li className={`Menu__burger__item`}>
                    <a href='#' className='snipcart-user-profile'>
                      {intl.formatMessage({ id: 'orders' })}
                    </a>
                  </li>
                  <li className={`Menu__burger__item`}>
                    <a href='#' className='snipcart-user-logout'>
                      {intl.formatMessage({ id: 'disconnect' })}
                    </a>
                  </li>
                </>
              ) : (
                <li className={`Menu__burger__item`}>
                  <a href='#' className='snipcart-user-profile'>
                    {intl.formatMessage({ id: 'connect' })}
                  </a>
                </li>
              )}
            </ul>
          </nav>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default MenuBurger;
