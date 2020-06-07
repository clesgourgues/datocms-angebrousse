import React from 'react';
import Animate from '@components/Animate';
import AppContext from '@context/AppContext';

const UserMenu = () => (
  <AppContext.Consumer>
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
  </AppContext.Consumer>
);

export default UserMenu;
