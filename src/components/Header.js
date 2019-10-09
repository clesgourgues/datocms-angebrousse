import React, { useState } from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";

import SnipCart from "@components/SnipCart";
import Menu from "@components/Menu";
import BurgerButton from "@components/BurgerButton";
import MenuBurger from "@components/MenuBurger";

const Header = ({ logos, cart, menu }) => {
  const [selected, setSelected] = useState("e-shop");
  const [open, setOpen] = useState(false);
  return (
    <header className="Header">
      <div className="Wrap">
        <div className="Header__body">
          <div className="Header__topbar">
            <BurgerButton open={open} setOpen={setOpen} />
            <MenuBurger menu={menu} open={open} setOpen={setOpen} />
            <div className="Header__topbar__logo">
              <Link to="/">
                <Img sizes={logos.logoMenuBurger.sizes} />
              </Link>
            </div>
            <SnipCart cart={cart} />
          </div>
          <div className="Header__logo">
            <Link to="/">
              <Img sizes={logos.logo.sizes} />
            </Link>
          </div>
          <Menu menu={menu} selected={selected} setSelected={setSelected} />
        </div>
      </div>
    </header>
  );
};

export default Header;
