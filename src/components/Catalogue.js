import React, { Component } from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";

import Filters from "../components/Filters";

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
              <Link to={`/${product.slug}`} className="Catalogue__item" key={product.id}>
                <div>
                  <div className="Catalogue__image">
                    <Img
                      style={{ opacity: 0.8, height: "300px" }}
                      sizes={product.image[0].sizes}
                      loading="lazy"
                    />
                  </div>
                  <div className="Catalogue__details">
                    <div className="Catalogue__name">{product.name} </div>
                    <div className="Catalogue__price">{product.price}€</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Catalogue;
