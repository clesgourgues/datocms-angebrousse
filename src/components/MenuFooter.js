import React from "react";
import Link from "gatsby-link";

const getMenu = menu =>
  menu
    .sort((a, b) => a.node.position - b.node.position)
    .map(item => {
      return (
        <li className="Menu__footer__item" key={item.node.name}>
          <Link to={item.node.slug}>{item.node.name}</Link>
        </li>
      );
    });

const MenuFooter = ({ menu }) => (
  <nav className="Menu__footer">
    <ul className="Menu__footer__items">{getMenu(menu.slice(0, 3))}</ul>
    {menu.length > 3 && <ul className="Menu__footer__items">{getMenu(menu.slice(2, 5))}</ul>}
    {menu.length > 6 && (
      <ul className="Menu__footer__items">{getMenu(menu.slice(5, menu.length))}</ul>
    )}
  </nav>
);

export default MenuFooter;
