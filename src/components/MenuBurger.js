import React, { useContext } from 'react';
import { useIntl, Link } from 'gatsby-plugin-intl';

import LookBookMenu from '@components/LookBookMenu';
import EshopMenu from '@components/EshopMenu';
import AppContext from '../context/AppContext';

const MenuBurger = ({ menu, open, setOpen }) => {
  const intl = useIntl();
  const { disconnect, customerStatus } = useContext(AppContext);

  return (
    <div className={`Menu__burger ${open ? 'Menu__burger__open' : ''}`}>
      <nav className='Menu__burger__nav'>
        <ul className='Menu__burger_items'>
          {menu.map(item =>
            item.node.slug === 'menu' ? (
              <li
                className='Menu__burger__item__menu'
                key={item.node.name}
                onClick={() => setOpen()}
                role='menuitem'
              >
                {item.node.name}
                <LookBookMenu />
              </li>
            ) : item.node.slug === '/eshop' ? (
              <li
                className='Menu__burger__item__menu'
                key={item.node.name}
                onClick={() => setOpen()}
                role='menuitem'
              >
                {item.node.name}
                <EshopMenu />
              </li>
            ) : (
              <li
                className={`Menu__burger__item`}
                onClick={() => setOpen()}
                key={item.node.name}
                role='menuitem'
              >
                <Link to={item.node.slug}>{item.node.name}</Link>
              </li>
            )
          )}
          {customerStatus !== 'SignedOut' ? (
            <>
              <li className={`Menu__burger__item`}>
                <a href='#' className='snipcart-customer-signin' role='menuitem'>
                  {intl.formatMessage({ id: 'orders' })}
                </a>
              </li>
              <li className={`Menu__burger__item`} onClick={() => disconnect()}>
                <a href='#' role='menuitem'>
                  {intl.formatMessage({ id: 'disconnect' })}
                </a>
              </li>
            </>
          ) : (
            <li className={`Menu__burger__item`}>
              <a href='#' className='snipcart-customer-signin' role='menuitem'>
                {intl.formatMessage({ id: 'connect' })}
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default MenuBurger;
