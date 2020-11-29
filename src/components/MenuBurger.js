import React, { useContext } from 'react';
import { useIntl, Link } from 'gatsby-plugin-intl';
import { SnipcartContext } from 'gatsby-plugin-snipcart-advanced/context';

import LookBookMenu from '@components/LookBookMenu';
import EshopMenu from '@components/EshopMenu';

const MenuBurger = ({ menu, open, setOpen }) => {
  const intl = useIntl();
  const { state } = useContext(SnipcartContext);
  const { userStatus } = state;
  const disconnect = async () => {
    const { Snipcart } = window;
    if (!Snipcart) return;
    try {
      await Snipcart.api.customer.signout();
    } catch (error) {
      console.warn('error while connecting to snipcart', error);
    }
  };
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
              <li className={`Menu__burger__item`} onClick={() => setOpen()} key={item.node.name}>
                <Link to={item.node.slug}>{item.node.name}</Link>
              </li>
            )
          )}
          {userStatus !== 'SignedOut' ? (
            <>
              <li className={`Menu__burger__item`}>
                <a href='#' className='snipcart-customer-signin'>
                  {intl.formatMessage({ id: 'orders' })}
                </a>
              </li>
              <li className={`Menu__burger__item`} onClick={() => disconnect()}>
                <a href='#'>{intl.formatMessage({ id: 'disconnect' })}</a>
              </li>
            </>
          ) : (
            <li className={`Menu__burger__item`}>
              <a href='#' className='snipcart-customer-signin'>
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
