import React, { useState } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import LookBookMenu from "@components/LookBookMenu";

const Menu = ({ menu, selected, setSelected, isHome }) => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className={`Menu ${isHome && "Menu__home"}`}>
      <ul className="Menu__items">
        {menu
          .sort((a, b) => a.node.position - b.node.position)
          .map(item =>
            item.node.slug === "menu" ? (
              <li
                className="Menu__item__menu"
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                key={item.node.name}
              >
                {item.node.name}
                {visible && <LookBookMenu />}
              </li>
            ) : (
              <li
                className={`Menu__item ${selected === item.node.name ? "Menu__selected" : ""}`}
                onClick={() => setSelected(item.node.name)}
                key={item.node.name}
              >
                <AniLink fade to={item.node.slug} duration={0.5}>
                  {item.node.name}
                </AniLink>
              </li>
            )
          )}
        <li className={`Menu__item ${selected === "account" ? "Menu__selected" : ""}`}>
          <a href="#" className="snipcart-user-profile">
            mon compte
          </a>
        </li>
        <li
          className={`Menu__item Menu__snipcart snipcart-checkout ${
            selected === "account" ? "Menu__selected" : ""
          }`}
        >
          <a href="#" className="snipcart-user-profile">
            panier
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
