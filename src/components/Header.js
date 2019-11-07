import React, { useState } from "react";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Menu from "@components/Menu";
import BurgerButton from "@components/BurgerButton";
import MenuBurger from "@components/MenuBurger";
import SnipCart from "@components/SnipCart";

const Header = ({ logos, cart, menu, isHome, open, setOpen, user }) => {
  const [selected, setSelected] = useState(null);
  return (
    <header className="Header">
      <div className="Wrap">
        <div className="Header__body">
          <div className={`Header__topbar ${isHome && "Header__topbar__home"}`}>
            <BurgerButton open={open} setOpen={setOpen} isHome={isHome} />
            <MenuBurger menu={menu} open={open} setOpen={setOpen} user={user} />
            <div className="Header__topbar__logo">
              <AniLink to="/" fade duration={0.5}>
                <Img sizes={logos.logoMenuBurger.sizes} />
              </AniLink>
            </div>
            {!isHome && (
              <div className="Snipcart__container">
                <SnipCart cart={cart} />
              </div>
            )}
          </div>
          <div className={`Header__logo ${isHome && "Header__logo__home"}`}>
            <AniLink to="/" fade duration={0.5}>
              <Img sizes={logos.logo.sizes} />
            </AniLink>
          </div>
          <Menu menu={menu} selected={selected} setSelected={setSelected} isHome={isHome} />
        </div>
      </div>
    </header>
  );
};

export default Header;
