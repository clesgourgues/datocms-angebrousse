import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import LookBookMenu from "@components/LookBookMenu";

const Menu = ({ menu, open, setOpen }) => (
  <div className={`Menu__burger ${open ? "Menu__burger__open" : ""}`}>
    <nav className="Menu__burger__nav">
      <ul className="Menu__burger_items">
        {menu
          .sort((a, b) => a.node.position - b.node.position)
          .map(item =>
            item.node.slug === "menu" ? (
              <li
                className="Menu__burger__item__menu"
                key={item.node.name}
                onClick={() => setOpen()}
              >
                {item.node.name}
                <LookBookMenu />
              </li>
            ) : (
              <li className={`Menu__burger__item`} onClick={() => setOpen()} key={item.node.name}>
                <AniLink fade to={item.node.slug}>
                  {item.node.name}
                </AniLink>
              </li>
            )
          )}
        <li className={`Menu__burger__item`}>
          <a href="#" className="snipcart-user-profile">
            mon compte
          </a>
        </li>
        <li className={`Menu__burger__item`}>
          <a href="#" className="snipcart-user-logout">
            Se déconnecter
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Menu;
