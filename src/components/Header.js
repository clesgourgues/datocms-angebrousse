import React from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";

import SnipCart from "./SnipCart";

const Header = ({ sizes, cart, menu }) => {
  console.log(menu);
  return (
    <div className="Header">
      <div className="Wrap">
        <div className="Header__body">
          <div className="Header__logo">
            <Link to="/">
              <Img sizes={sizes} />
            </Link>
          </div>

          <div className="Header__menu">
            {menu
              .sort((a, b) => a.node.position - b.node.position)
              .map(item => (
                <h5 className="Header__link">
                  <Link to={item.node.slug}>{item.node.name}</Link>
                </h5>
              ))}
          </div>
          <SnipCart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Header;
