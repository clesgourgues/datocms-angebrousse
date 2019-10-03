import React from "react";
import Link from "gatsby-link";

import ProductInfo from "../components/ProductInfo";
import ImageSlider from "../components/ImageSlider";
import Sizes from "../components/Sizes";
import CatalogueProduct from "../components/CatalogueProduct";
import { createMarkup } from "../helpers/content";
import { getProductOptions } from "../helpers/sizes";

const Product = ({ product, info, text }) => {
  console.log(product);

  const renderOutOfStockProducts = (
    <span className="Product__outofstock">{text[0].node.outOfStockText}</span>
  );

  const productCaracteristics = createMarkup(product.productCaracteristics);
  const productOptions = product.size ? getProductOptions(product.size) : "";
  const productNameOptions = product.size ? "Taille" : "";

  return (
    <div className="Product">
      <div className="Product__back">
        <Link to="/">{`< ${text[0].node.backText}`}</Link>
      </div>
      <div className="Product__details">
        <ImageSlider images={product.image} />
        <div className="Product__buy">
          <div>
            <div className="Product__title">{product.name}</div>
            <div className="Product__price">{product.price}€</div>
          </div>
          {product.size && !product.outOfStock && (
            <Sizes text={text[0].node.sizeText} availableSizes={product.size} />
          )}
          {product.outOfStock && renderOutOfStockProducts}
          <button
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-image={product.image[0].url}
            data-item-name={product.name}
            data-item-url={product.slug}
            className={`Product__button snipcart-add-item ${
              product.outOfStock ? "Product__button__disabled" : ""
            }`}
            disabled={product.outOfStock}
            data-item-custom1-name={productNameOptions}
            data-item-custom1-options={productOptions}
          >
            {text[0].node.buyText}
          </button>
          <div className="Product__description">{product.description}</div>
          <div
            className="Product__characteristics"
            dangerouslySetInnerHTML={productCaracteristics}
          />
        </div>
      </div>
      <ProductInfo info={info} />
      {product.linkedProducts.length > 0 && (
        <>
          <span className="Product__title">{text[0].node.linkedProductsText}</span>
          <div className="Product__linkedproducts">
            {product.linkedProducts.map(linkedProduct => (
              <CatalogueProduct product={linkedProduct} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
