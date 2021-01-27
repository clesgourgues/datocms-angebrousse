import React, { useContext } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import AppContext from '../context/AppContext';

import Animate from '@components/Animate';

const UserMenu = () => {
  const intl = useIntl();
  const { disconnect, customerStatus } = useContext(AppContext);
  const items =
    customerStatus !== 'SignedOut'
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
