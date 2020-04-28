import React from 'react';
import Animate from '@components/Animate';
import SnipContext from '@context/SnipContext';

const UserMenu = () => (
  <SnipContext.Consumer>
    {({ user }) => {
      const items = user
        ? [
            { name: 'Mes infos', className: 'snipcart-edit-profile' },
            { name: 'Mes commandes', className: 'snipcart-user-profile' },
            { name: 'Me déconnecter', className: 'snipcart-user-logout' }
          ]
        : [{ name: 'Connexion', className: 'snipcart-user-profile' }];
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
  </SnipContext.Consumer>
);

export default UserMenu;
