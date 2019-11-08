import React, { useState } from "react";
import { Link } from "gatsby";

import LookBookMenu from "@components/LookBookMenu";

const Menu = ({ menu, selected, setSelected, isHome }) => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className={`Menu ${isHome && "Menu__home"}`}>
      <ul className="Menu__items">
        {menu.map(item =>
          item.node.slug === "menu" ? (
            <li
              className={`Menu__item__menu ${selected === item.node.name ? "Menu__selected" : ""}`}
              onMouseEnter={() => setVisible(true)}
              onMouseLeave={() => setVisible(false)}
              key={item.node.name}
            >
              {item.node.name}
              {visible && <LookBookMenu setSelected={setSelected} />}
            </li>
          ) : (
            <li
              className={`Menu__item ${selected === item.node.name ? "Menu__selected" : ""}`}
              onClick={() => setSelected(item.node.name)}
              key={item.node.name}
            >
              <Link to={item.node.slug}>{item.node.name}</Link>
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
          <a href="#" className="snipcart-checkout">
            panier
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
