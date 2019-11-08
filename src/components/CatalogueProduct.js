import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

const CatalogueProduct = ({ product }) => {
  return (
    <Link to={`/${product.slug}`} className="Catalogue__item">
      <div>
        <div className="Catalogue__image">
          <Img
            style={{ opacity: 0.8, height: "300px" }}
            sizes={product.image[0].sizes}
            loading="eager"
          />
        </div>
        <div className="Catalogue__details">
          <div className="Catalogue__name">{product.name} </div>
          {product.promoPrice ? (
            <div className="Catalogue__prices">
              <del className="Catalogue__price">{product.price} €</del>
              <div className="Catalogue__price">{product.promoPrice} €</div>
            </div>
          ) : (
            <div className="Catalogue__price">{product.price} €</div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CatalogueProduct;
