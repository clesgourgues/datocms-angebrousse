import React, { useState } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby-plugin-intl';

import Menu from '@components/Menu';
import BurgerButton from '@components/BurgerButton';
import MenuBurger from '@components/MenuBurger';
import SnipCart from '@components/SnipCart';
import ToggleLocale from '@components/ToggleLocale';

const Header = ({ logos, menu, isHome, open, setOpen, user, collection, setCollection }) => {
  const [selected, setSelected] = useState(null);
  return (
    <header className='Header'>
      <div className='Wrap'>
        <div className='Header__body'>
          <div className={`Header__topbar ${isHome ? 'Header__topbar__home' : ''}`}>
            <BurgerButton open={open} setOpen={setOpen} isHome={isHome} />
            <MenuBurger menu={menu} open={open} setOpen={setOpen} />
            <div className='Header__topbar__logo'>
              <Link to='/'>
                <Img sizes={logos.logoMenuBurger.sizes} alt='Logo' />
              </Link>
            </div>
            <div className='Header__topbar__action'>
              {!isHome && (
                <div className='Snipcart__container'>
                  <SnipCart />
                </div>
              )}
              <ToggleLocale />
            </div>
          </div>
          {isHome && (
            <div className='Locales_container'>
              <ToggleLocale isHome={isHome} />
            </div>
          )}
          <div className={`Header__logo ${isHome ? 'Header__logo__home' : ''}`}>
            <Link to='/'>
              <Img sizes={logos.logo.sizes} alt='Logo' />
            </Link>
          </div>
          <Menu
            menu={menu}
            selected={selected}
            setSelected={setSelected}
            isHome={isHome}
            user={user}
            collection={collection}
            setCollection={setCollection}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
