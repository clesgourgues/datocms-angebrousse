import React from 'react';
import Img from 'gatsby-image';
import Animate from '@components/Animate';
import { Link } from 'gatsby-plugin-intl';

const CatalogueProduct = ({ product }) => (
  <Link to={`/${product.slug}`} className='Catalogue__item'>
    <Animate quick={true}>
      <div className='Catalogue__image'>
        <Img
          style={{ height: '300px' }}
          sizes={product.image[0].sizes}
          loading='eager'
          alt={product.name}
        />
      </div>
      <div className='Catalogue__details'>
        <div className='Catalogue__name'>{product.name} </div>
        <div className='Catalogue__name Catalogue__collection'>{product.collection[0].name}</div>
        {product.promoPrice ? (
          <div className='Catalogue__prices'>
            <del className='Catalogue__price'>{product.price} €</del>
            <div className='Catalogue__price'>{product.promoPrice} €</div>
          </div>
        ) : (
          <div className='Catalogue__price'>{product.price} €</div>
        )}
      </div>
    </Animate>
  </Link>
);

export default CatalogueProduct;
