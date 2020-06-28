import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import Animate from '@components/Animate';
import AppContext from '@context/AppContext';

const UserMenu = () => {
  const intl = useIntl();
  return (
    <AppContext.Consumer>
      {({ user }) => {
        const items = user
          ? [
              { name: intl.formatMessage({ id: 'infos' }), className: 'snipcart-edit-profile' },
              { name: intl.formatMessage({ id: 'orders' }), className: 'snipcart-user-profile' },
              { name: intl.formatMessage({ id: 'disconnect' }), className: 'snipcart-user-logout' }
            ]
          : [{ name: intl.formatMessage({ id: 'connect' }), className: 'snipcart-user-profile' }];
        return (
          <Animate up={true}>
            <ul className='Menu__user Menu__secondary'>
              {items.map(item => (
                <li className='Menu__lookbook__item' key={item.name}>
                  <a href='#' className={item.className}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </Animate>
        );
      }}
    </AppContext.Consumer>
  );
};

export default UserMenu;
