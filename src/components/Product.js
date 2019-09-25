import React from "react";
import Img from "gatsby-image";

const Product = ({ product, info }) => {
  console.log(product);
  return (
    <div
      data-item-id={product.id}
      data-item-price={product.price}
      data-item-image={product.image.url}
      data-item-name={product.name}
      data-item-url={`/`}
      className="Product"
    >
      <div className="Product__image">
        <Img sizes={product.image[0].sizes} loading="lazy" />
      </div>
      <div className="Product__details">
        <div className="Product__name">
          {product.name}
          <div className="Product__price">{product.price}€</div>
        </div>
        <span className="Product__buy snipcart-add-item">Buy now</span>
      </div>
    </div>
  );
};

export default Product;

//  className="Product snipcart-add-item"
