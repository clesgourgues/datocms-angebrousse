import React from "react";
import Link from "gatsby-link";

import NewsLetter from "@components/NewsLetter";

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

const MenuFooter = ({ menu, title, buttonText, user }) => (
  <div className="Menu__footer">
    <nav className="Menu__footer__nav">
      <ul className="Menu__footer__items">{getMenu(menu.slice(0, 3))}</ul>
      {menu.length > 3 && menu.length < 7 && (
        <ul className="Menu__footer__items">{getMenu(menu.slice(3, 6))}</ul>
      )}
      {menu.length > 6 && (
        <ul className="Menu__footer__items">{getMenu(menu.slice(6, menu.length))}</ul>
      )}
    </nav>
    <NewsLetter title={title} buttonText={buttonText} user={user} />
  </div>
);

export default MenuFooter;
