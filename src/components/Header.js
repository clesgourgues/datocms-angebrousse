import React from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";

import SnipCart from "./SnipCart";
import Menu from "./Menu";

const Header = ({ sizes, cart, menu }) => {
  return (
    <div className="Header">
      <div className="Wrap">
        <div className="Header__body">
          <div className="Header__logo">
            <Link to="/">
              <Img sizes={sizes} />
            </Link>
          </div>
          <Menu menu={menu} />
          <SnipCart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Header;
