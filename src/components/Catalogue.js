import React, { Component } from "react";
import Img from "gatsby-image";
import Link from "gatsby-link";

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
          <div className="Filters">
            <span
              onClick={() => this.onMenuClick("tout voir")}
              className={`Filter ${selected === "tout voir" ? "Filter__selected" : ""}`}
            >
              tout voir
            </span>
            {filters.map(({ node: filter }) => (
              <div key={filter.name}>
                <span className="Filter__separator">/</span>
                <span
                  onClick={() => this.onMenuClick(filter.name)}
                  className={`Filter ${selected === filter.name ? "Filter__selected" : ""}`}
                >
                  {filter.name}
                </span>
              </div>
            ))}
          </div>
          <div className="Catalogue__products">
            {productsToShow.map(({ node: product }) => (
              <Link to={`/${product.slug}`} className="Catalogue__item" key={product.id}>
                <div
                  data-item-id={product.id}
                  data-item-price={product.price}
                  data-item-image={product.image.url}
                  data-item-name={product.name}
                  data-item-url={`/`}
                >
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
