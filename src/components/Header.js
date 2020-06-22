import React, { useState } from 'react';
import Img from 'gatsby-image';

import Menu from '@components/Menu';
import BurgerButton from '@components/BurgerButton';
import MenuBurger from '@components/MenuBurger';
import SnipCart from '@components/SnipCart';
import ToggleLocale from '@components/ToggleLocale';
import LocalizedLink from '@components/LocalizedLink';

const Header = ({
  logos,
  menu,
  isHome,
  open,
  setOpen,
  user,
  collection,
  setCollection,
  locale,
  location
}) => {
  const [selected, setSelected] = useState(null);
  return (
    <header className='Header'>
      <div className='Wrap'>
        <div className='Header__body'>
          <div className={`Header__topbar ${isHome ? 'Header__topbar__home' : ''}`}>
            <BurgerButton open={open} setOpen={setOpen} isHome={isHome} />
            <MenuBurger menu={menu} open={open} setOpen={setOpen} locale={locale} />
            <div className='Header__topbar__logo'>
              <LocalizedLink to='/' locale={locale}>
                <Img sizes={logos.logoMenuBurger.sizes} alt='Logo' />
              </LocalizedLink>
            </div>
            <ToggleLocale locale={locale} location={location} />
            {!isHome && (
              <div className='Snipcart__container'>
                <SnipCart />
              </div>
            )}
          </div>
          <div className={`Header__logo ${isHome ? 'Header__logo__home' : ''}`}>
            <LocalizedLink to='/' locale={locale}>
              <Img sizes={logos.logo.sizes} alt='Logo' />
            </LocalizedLink>
          </div>
          <Menu
            menu={menu}
            selected={selected}
            setSelected={setSelected}
            isHome={isHome}
            user={user}
            collection={collection}
            setCollection={setCollection}
            locale={locale}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
