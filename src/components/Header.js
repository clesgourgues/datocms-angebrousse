import React, { useState } from "react";
import Img from "gatsby-image";
import Link from "gatsby-plugin-transition-link";

import SnipCart from "@components/SnipCart";
import Menu from "@components/Menu";
import BurgerButton from "@components/BurgerButton";
import MenuBurger from "@components/MenuBurger";

const Header = ({ logos, cart, menu, isHome }) => {
  const [selected, setSelected] = useState("e-shop");
  const [open, setOpen] = useState(false);
  return (
    <header className="Header">
      <div className="Wrap">
        <div className="Header__body">
          <div className={`Header__topbar ${isHome && "Header__topbar__home"}`}>
            <BurgerButton open={open} setOpen={setOpen} isHome={isHome} />
            <MenuBurger menu={menu} open={open} setOpen={setOpen} />
            <div className="Header__topbar__logo">
              <Link to="/">
                <Img sizes={logos.logoMenuBurger.sizes} />
              </Link>
            </div>
            {!isHome && (
              <div className="Snipcart__container">
                <SnipCart cart={cart} />
              </div>
            )}
          </div>
          <div className={`Header__logo ${isHome && "Header__logo__home"}`}>
            <Link to="/">
              <Img sizes={logos.logo.sizes} />
            </Link>
          </div>
          <Menu menu={menu} selected={selected} setSelected={setSelected} isHome={isHome} />
        </div>
      </div>
    </header>
  );
};

export default Header;
