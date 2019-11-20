import React from 'react';

const UserMenu = ({ setSelected, user }) => {
  const items = user
    ? [
        { name: 'Mes infos', className: 'snipcart-edit-profile' },
        { name: 'Mes commandes', className: 'snipcart-user-profile' },
        { name: 'Me déconnecter', className: 'snipcart-user-logout' }
      ]
    : [{ name: 'Connexion', className: 'snipcart-user-profile' }];
  return (
    <ul className='Menu__user Menu__secondary'>
      {items.map(item => (
        <li className='Menu__lookbook__item' key={item.name} onClick={setSelected}>
          <a href='#' className={item.className}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default UserMenu;
