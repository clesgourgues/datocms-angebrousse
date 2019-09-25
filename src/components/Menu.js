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
      <div className="Menu">
        {menu
          .sort((a, b) => a.node.position - b.node.position)
          .map(item => {
            return (
              <span
                className={`Menu__item ${selected === item.node.name ? "Menu__selected" : ""}`}
                onClick={() => this.onMenuClick(item.node.name)}
              >
                <Link to={item.node.slug}>{item.node.name}</Link>
              </span>
            );
          })}
      </div>
    );
  }
}

export default Menu;
