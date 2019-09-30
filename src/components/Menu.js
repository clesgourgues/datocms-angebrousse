import React, { Component } from "react";
import Link from "gatsby-link";

class Menu extends Component {
  state = {
    selected: null
  };

  onMenuClick = selected => {
    this.setState({ selected });
  };

  render() {
    const { menu } = this.props;
    const { selected } = this.state;
    console.log(this.props);
    return (
      <ul className="Menu">
        {menu
          .sort((a, b) => a.node.position - b.node.position)
          .map(item => {
            return (
              <li
                className={`Menu__item ${selected === item.node.name ? "Menu__selected" : ""}`}
                onClick={() => this.onMenuClick(item.node.name)}
                key={item.node.name}
              >
                <Link to={item.node.slug}>{item.node.name}</Link>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default Menu;
