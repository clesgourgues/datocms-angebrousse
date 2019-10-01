import React from "react";

import ProductInfo from "../components/ProductInfo";
import ImageSlider from "../components/ImageSlider";

const Product = ({ product, info, text }) => {
  console.log(product);
  const sizes = ["48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"];
  const renderOutOfStockProducts = (
    <span className="Product__outofstock">{text[0].node.outOfStockText}</span>
  );
  const renderSizes = product.size ? (
    <div>
      <span className="Product__size">{text[0].node.sizeText}</span>
      <div className="Product__size">
        {sizes.map(size => (
          <span
            className={`Product__size_item ${
              product.size.includes(size) ? "Product__size_available" : ""
            }`}
            key={size}
          >
            {size}
          </span>
        ))}
      </div>
    </div>
  ) : null;
  return (
    <div className="Product">
      <div className="Product__details">
        <ImageSlider images={product.image} />
        <div className="Product__buy">
          <div>
            <div className="Product__name">{product.name}</div>
            <div className="Product__price">{product.price}€</div>
          </div>
          {product.size && !product.outOfStock && renderSizes}
          {product.outOfStock && renderOutOfStockProducts}
          <button
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-image={product.image[0].url}
            data-item-name={product.name}
            data-item-url={product.slug}
            className={`Product__button snipcart-add-item ${
              product.outOfStock ? "Product__button__disabled" : null
            }`}
            disabled={product.outOfStock}
          >
            {text[0].node.buyText}
          </button>
          <div className="Product__description">{product.description}</div>
          <div className="Product__characteristics">{product.productCaracteristics}</div>
        </div>
      </div>
      <ProductInfo info={info} />
    </div>
  );
};

export default Product;
