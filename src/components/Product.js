import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useIntl, Link } from 'gatsby-plugin-intl';

import ProductInfo from '@components/ProductInfo';
import ImageSlider from '@components/ImageSlider';
import Sizes from '@components/Sizes';
import CatalogueProduct from '@components/CatalogueProduct';
import Counter from '@components/Counter';
import { createMarkup } from '@helpers/content';
import { getProductOptions } from '@helpers/sizes';
import AppContext from '@context/AppContext';

const Product = ({ product, text, titleColor, locale }) => {
  const renderOutOfStockProducts = (
    <span className='Product__outofstock'>{text.outOfStockText}</span>
  );
  const intl = useIntl();

  const productCaracteristics = createMarkup(product.productCaracteristics);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);
  const title =
    locale === 'fr'
      ? `Collection ${product.collection[0].name}`
      : `${product.collection[0].name} Collection `;

  return (
    <AppContext.Consumer>
      {({ error, cancelError }) => (
        <div className='Product'>
          <Helmet>
            <title>{product.name}</title>
            <meta name='description' content={product.description} />
            <meta name='url' content={`https://angelebrousse.com/${locale}/${product.slug}`} />
            <meta property='image' content={product.image[0].url}></meta>
            <link rel='canonical' href={`https://angelebrousse.com/${product.slug}`} />
            <link
              rel='alternate'
              href={`https://angelebrousse.com/fr/${product.slug}`}
              hreflang='fr'
            />
            <link
              rel='alternate'
              href={`https://angelebrousse.com/fr/${product.slug}`}
              hreflang='fr-FR'
            />
            <link
              rel='alternate'
              href={`https://angelebrousse.com/fr/${product.slug}`}
              hreflang='fr-BE'
            />
            <link
              rel='alternate'
              href={`https://angelebrousse.com/fr/${product.slug}`}
              hreflang='fr-CA'
            />
            <link
              rel='alternate'
              href={`https://angelebrousse.com/fr/${product.slug}`}
              hreflang='fr-CH'
            />
            <link
              rel='alternate'
              href={`https://angelebrousse.com/en/${product.slug}`}
              hreflang='en'
            />
            <link
              rel='alternate'
              href={`https://angelebrousse.com/en/${product.slug}`}
              hreflang='en-GB'
            />
            <link
              rel='alternate'
              href={`https://angelebrousse.com/en/${product.slug}`}
              hreflang='en-US'
            />
            <link
              rel='alternate'
              href={`https://angelebrousse.com/en/${product.slug}`}
              hreflang='en-CA'
            />
            <link
              rel='alternate'
              href={`https://angelebrousse.com/fr/${product.slug}`}
              hreflang='x-default'
            />
            <meta property='og:title' content={product.name} />
            <meta property='og:description' content={product.description} />
            <meta property='og:image' content={`${product.image[0].sizes.src}&h=300&w=300`}></meta>
            <meta name='og:url' content={`https://angelebrousse.com/${locale}/${product.slug}`} />
          </Helmet>
          <div className='Wrap'>
            <h1 className='Title' style={{ backgroundColor: `${titleColor}` }}>
              {title}
            </h1>
            <div className='Product__back'>
              <Link to='/eshop' locale={locale}>{`< ${text.backText}`}</Link>
            </div>

            <div className='Product__details'>
              <ImageSlider images={product.image} alt={product.name} />
              <div className='Product__buy' id={product.ref}>
                <div>
                  <div className='Product__title'>{product.name}</div>
                  {product.promoPrice ? (
                    <>
                      <del className='Product__price'>{product.price}€</del>
                      <div className='Product__price'>{product.promoPrice}€</div>
                    </>
                  ) : (
                    <div className='Product__price'>{product.price}€</div>
                  )}
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
                  {!product.outOfStock && error && product.size && (
                    <span className='Product__sizeerror'>
                      {' '}
                      {intl.formatMessage({ id: 'error_message' })}
                    </span>
                  )}
                </div>
                {!product.outOfStock && <Counter quantity={quantity} setQuantity={setQuantity} />}
                {product.size ? (
                  <button
                    data-item-id={product.ref}
                    data-item-price={product.promoPrice ? product.promoPrice : product.price}
                    data-item-image={product.image[0].url}
                    data-item-name={product.name}
                    data-item-url={`https://www.angelebrousse.com/${product.slug}`}
                    data-item-description={product.description}
                    className={`Product__button snipcart-add-item ${
                      product.outOfStock || error ? 'Product__button__disabled' : ''
                    }`}
                    data-item-custom1-name='Taille'
                    data-item-custom1-options={getProductOptions(product.size, size)}
                    data-item-custom1-required='true'
                    data-item-quantity={quantity}
                    data-item-has-taxes-included='true'
                    data-item-categories={`${product.collection[0].name},${product.category[0].name}`}
                    // data-item-stackable={!product.category[0].name === "Bagues"}
                  >
                    {text.buyButtonText}
                  </button>
                ) : (
                  <button
                    data-item-id={product.ref}
                    data-item-price={product.promoPrice ? product.promoPrice : product.price}
                    data-item-image={product.image[0].url}
                    data-item-name={product.name}
                    data-item-url={`https://www.angelebrousse.com/${product.slug}`}
                    data-item-description={product.description}
                    className={`Product__button snipcart-add-item ${
                      product.outOfStock || error ? 'Product__button__disabled' : ''
                    }`}
                    data-item-quantity={quantity}
                    data-item-has-taxes-included='true'
                    data-item-categories={`${product.collection[0].name},${product.category[0].name}`}
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
    </AppContext.Consumer>
  );
};

export default Product;
