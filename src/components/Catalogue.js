import React, { Component } from "react";

import Filters from "../components/Filters";
import CatalogueProduct from "../components/CatalogueProduct";

class Catalogue extends Component {
  state = {
    selected: "tout voir"
  };

  onMenuClick = selected => {
    this.setState({ selected });
  };

  render() {
    const { products, filters } = this.props;
    const { selected } = this.state;
    const productsToShow =
      selected === "tout voir"
        ? products
        : products.filter(({ node: product }) => product.category[0].name === selected);
    return (
      <div className="Catalogue">
        <div className="Wrap">
          <Filters filters={filters} selected={selected} onClick={this.onMenuClick} />
          <div className="Catalogue__products">
            {productsToShow.map(({ node: product }) => (
              <CatalogueProduct product={product} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Catalogue;
