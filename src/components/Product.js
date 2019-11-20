import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import ProductInfo from '@components/ProductInfo';
import ImageSlider from '@components/ImageSlider';
import Sizes from '@components/Sizes';
import CatalogueProduct from '@components/CatalogueProduct';
import Counter from '@components/Counter';
import { createMarkup } from '@helpers/content';
import { getProductOptions } from '@helpers/sizes';
import SnipContext from '@context/SnipContext';

const Product = ({ product, text }) => {
  const renderOutOfStockProducts = (
    <span className='Product__outofstock'>{text.outOfStockText}</span>
  );

  const productCaracteristics = createMarkup(product.productCaracteristics);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = product.size ? useState(null) : [null, null];

  return (
    <SnipContext.Consumer>
      {({ error, cancelError }) => (
        <div className='Product'>
          <Helmet>
            <title>{product.name}</title>
            <meta name='description' content={product.description} />
            <meta property='og:title' content={product.name} />
            <meta property='og:description' content={product.description} />
          </Helmet>
          <div className='Wrap'>
            <h1 className='Title'>E-shop</h1>
            <div className='Product__back'>
              <Link to='/eshop'>{`< ${text.backText}`}</Link>
            </div>
            <div className='Product__details'>
              <ImageSlider images={product.image} alt={product.name} />
              <div className='Product__buy'>
                <div>
                  <div className='Product__title'>{product.name}</div>
                  <div className='Product__price'>{product.price}€</div>
                </div>
                <div className='Product__description'>{product.description}</div>
                <div
                  className='Product__characteristics'
                  dangerouslySetInnerHTML={productCaracteristics}
                />
                {product.outOfStock && renderOutOfStockProducts}
                {product.size && !product.outOfStock && (
                  <Sizes
                    text={text.sizesText}
                    availableSizes={product.size}
                    selected={size}
                    setSize={setSize}
                    cancelError={cancelError}
                  />
                )}
                <div className='Product__sizeerror__container'>
                  {error && (
                    <span className='Product__sizeerror'>Merci de sélectionner une taille !</span>
                  )}
                </div>
                {!product.outOfStock && <Counter quantity={quantity} setQuantity={setQuantity} />}
                {product.size ? (
                  <button
                    data-item-id={product.ref}
                    data-item-price={product.price}
                    data-item-image={product.image[0].url}
                    data-item-name={product.name}
                    data-item-url={`https://www.angelebrousse.com/${product.slug}`}
                    data-item-description={product.description}
                    className={`Product__button snipcart-add-item ${
                      product.outOfStock ? 'Product__button__disabled' : ''
                    }`}
                    data-item-custom1-name='Taille'
                    data-item-custom1-options={getProductOptions(product.size, size)}
                    data-item-custom1-required='true'
                    data-item-quantity={quantity}
                    data-item-has-taxes-included='true'
                    // data-item-stackable={!product.category[0].name === "Bagues"}
                  >
                    {text.buyButtonText}
                  </button>
                ) : (
                  <button
                    data-item-id={product.ref}
                    data-item-price={product.price}
                    data-item-image={product.image[0].url}
                    data-item-name={product.name}
                    data-item-url={`https://www.angelebrousse.com/${product.slug}`}
                    data-item-description={product.description}
                    className={`Product__button snipcart-add-item ${
                      product.outOfStock ? 'Product__button__disabled' : ''
                    }`}
                    data-item-quantity={quantity}
                    data-item-has-taxes-included='true'
                    // data-item-stackable={!product.category[0].name === "Bagues"}
                  >
                    {text.buyButtonText}
                  </button>
                )}
              </div>
            </div>
            <ProductInfo
              infos={text.productInfo}
              title={text.productInfoText}
              category={product.category[0].name}
            />
            {product.linkedProducts.length > 0 && (
              <>
                <div className='Product__linkedproducts__title'>{text.linkedProductsText}</div>
                <div className='Product__linkedproducts'>
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
      )}
    </SnipContext.Consumer>
  );
};

export default Product;
