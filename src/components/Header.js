import React, { useState } from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import Menu from '@components/Menu';
import BurgerButton from '@components/BurgerButton';
import MenuBurger from '@components/MenuBurger';
import SnipCart from '@components/SnipCart';

const Header = ({ logos, cart, menu, isHome, open, setOpen, user }) => {
  const [selected, setSelected] = useState(null);
  console.log(user);
  console.log(cart);
  return (
    <header className='Header'>
      <div className='Wrap'>
        <div className='Header__body'>
          <div className={`Header__topbar ${isHome ? 'Header__topbar__home' : ''}`}>
            <BurgerButton open={open} setOpen={setOpen} isHome={isHome} />
            <MenuBurger menu={menu} open={open} setOpen={setOpen} user={user} />
            <div className='Header__topbar__logo'>
              <Link to='/'>
                <Img sizes={logos.logoMenuBurger.sizes} alt='Logo' />
              </Link>
            </div>
            {!isHome && (
              <div className='Snipcart__container'>
                <SnipCart cart={cart} />
              </div>
            )}
          </div>
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
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
