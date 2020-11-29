import React, { useContext } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { SnipcartContext } from 'gatsby-plugin-snipcart-advanced/context';

import Animate from '@components/Animate';

const UserMenu = () => {
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
  const items =
    userStatus !== 'SignedOut'
      ? [
          { name: intl.formatMessage({ id: 'orders' }), className: 'snipcart-customer-signin' },
          {
            name: intl.formatMessage({ id: 'disconnect' }),
            action: true
          }
        ]
      : [{ name: intl.formatMessage({ id: 'connect' }), className: 'snipcart-customer-signin' }];

  return (
    <Animate up={true}>
      <ul className='Menu__user Menu__secondary'>
        {items.map(item => (
          <li
            className='Menu__lookbook__item'
            key={item.name}
            onClick={item.action ? () => disconnect() : () => {}}
          >
            <a href='#' className={item.className}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </Animate>
  );
};

export default UserMenu;
