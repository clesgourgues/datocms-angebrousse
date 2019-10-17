import React, { useState } from "react";
import Link from "gatsby-link";

import ProductInfo from "@components/ProductInfo";
import ImageSlider from "@components/ImageSlider";
import Sizes from "@components/Sizes";
import CatalogueProduct from "@components/CatalogueProduct";
import Counter from "@components/Counter";
import { createMarkup } from "@helpers/content";
import { getProductOptions } from "@helpers/sizes";

const Product = ({ product, text }) => {
  const renderOutOfStockProducts = (
    <span className="Product__outofstock">{text.outOfStockText}</span>
  );

  const productCaracteristics = createMarkup(product.productCaracteristics);
  const productOptions = product.size ? getProductOptions(product.size) : "";
  const productNameOptions = product.size ? "Taille" : "";
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="Product">
      <div className="Wrap">
        <div className="Product__back">
          <Link to="/eshop">{`< ${text.backText}`}</Link>
        </div>
        <div className="Product__details">
          <ImageSlider images={product.image} />
          <div className="Product__buy">
            <div>
              <div className="Product__title">{product.name}</div>
              <div className="Product__price">{product.price}€</div>
            </div>
            {product.size && !product.outOfStock && (
              <Sizes text={text.sizesText} availableSizes={product.size} />
            )}
            <div className="Product__description">{product.description}</div>
            <div
              className="Product__characteristics"
              dangerouslySetInnerHTML={productCaracteristics}
            />
            {product.outOfStock && renderOutOfStockProducts}
            <Counter quantity={quantity} setQuantity={setQuantity} />
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
              data-item-quantity={quantity}
              // data-item-stackable={!product.category[0].name === "Bagues"}
            >
              {text.buyButtonText}
            </button>
          </div>
        </div>
        <ProductInfo
          infos={text.productInfo}
          title={text.productInfoText}
          category={product.category[0].name}
        />
        {product.linkedProducts.length > 0 && (
          <>
            <span className="Product__title">{text.linkedProductsText}</span>
            <div className="Product__linkedproducts">
              {product.linkedProducts.map(
                linkedProduct =>
                  linkedProduct.image.length > 0 && (
                    <CatalogueProduct product={linkedProduct} key={linkedProduct.id} />
                  )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
