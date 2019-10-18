import React from "react";
import Link from "gatsby-link";

const Menu = ({ menu, open, setOpen }) => (
  <div className={`Menu__burger ${open ? "Menu__burger__open" : ""}`}>
    <nav className="Menu__burger__nav">
      <ul className="Menu__burger_items">
        {menu
          .sort((a, b) => a.node.position - b.node.position)
          .map(item => {
            return (
              <li className={`Menu__burger__item`} onClick={() => setOpen()} key={item.node.name}>
                <Link to={item.node.slug}>{item.node.name}</Link>
              </li>
            );
          })}
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
