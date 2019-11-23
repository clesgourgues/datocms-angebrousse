import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import Filters from '@components/Filters';
import CatalogueProduct from '@components/CatalogueProduct';

const Catalogue = ({ products, filters, titleColor }) => {
  let [selected, setSelected] = useState('tout voir');

  const onMenuClick = selected => {
    setSelected(selected);
  };

  const productsToShow =
    selected === 'tout voir'
      ? products.filter(({ node: product }) => product.image.length > 0 && product.published)
      : products
          .filter(({ node: product }) => product.category[0].name === selected)
          .filter(({ node: product }) => product.image.length > 0);

  return (
    <div className='Catalogue'>
      <Helmet>
        <title>E-shop</title>
        <meta property='og:title' content='Angèle Brousse Joaillerie | E-shop' />
        <link rel='canonical' href='https://angelebrousse.com/eshop' />
        <meta name='url' content='https://angelebrousse.com/eshop' />
        <meta name='og:url' content='https://angelebrousse.com/eshop' />
      </Helmet>
      <div className='Wrap'>
        <h1 className='Title' style={{ backgroundColor: `${titleColor}` }}>
          E-shop
        </h1>
        <Filters filters={filters} selected={selected} onClick={onMenuClick} />
        <div className='Catalogue__products'>
          {productsToShow.map(({ node: product }) => (
            <CatalogueProduct product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
