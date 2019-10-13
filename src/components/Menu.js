import React from "react";
import Link from "gatsby-link";

const Menu = ({ menu, selected, setSelected }) => (
  <nav className="Menu">
    <ul className="Menu__items">
      {menu
        .sort((a, b) => a.node.position - b.node.position)
        .map(item => {
          return (
            <li
              className={`Menu__item ${selected === item.node.name ? "Menu__selected" : ""}`}
              onClick={() => setSelected(item.node.name)}
              key={item.node.name}
            >
              <Link to={item.node.slug}>{item.node.name}</Link>
            </li>
          );
        })}
      <li className={`Menu__item ${selected === "account" ? "Menu__selected" : ""}`}>
        <a href="#" class="snipcart-user-profile">
          mon compte
        </a>
      </li>
    </ul>
  </nav>
);

export default Menu;
