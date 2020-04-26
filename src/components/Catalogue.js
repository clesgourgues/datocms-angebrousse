import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';

import Filters from '@components/Filters';
import CatalogueProduct from '@components/CatalogueProduct';
import EmptyCatalogue from '@components/EmptyCatalogue';
import { getFilters, isSelectedProduct } from '@helpers/filters';

const Catalogue = ({ products, titleColor, photo }) => {
  //const collection = getFilters(products, 'collection');
  const collection = ['Collection Saintes', 'Collection Truc'];
  const category = getFilters(products, 'category');
  //const color = getFilters(products, 'color');
  const color = ['or jaune', 'or blanc'];
  let [selected, setSelected] = useState({
    collection,
    category,
    color
  });

  const onClick = (item, itemKey) => {
    const newSelected = { ...selected };
    newSelected[itemKey] = item;
    setSelected(newSelected);
  };

  let productsToShow = products.filter(
    ({ node: product }) => product.image.length && isSelectedProduct(product, selected)
  );

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
        <div className='Lookbook__photo'>
          <Img fluid={photo.photo.fluid} loading='lazy' />
        </div>
        <Filters
          collectionsFilters={collection}
          categoryFilters={category}
          colorFilters={color}
          selected={selected}
          onClick={onClick}
        />
        <div className='Catalogue__products'>
          {productsToShow.length === 0 ? (
            <EmptyCatalogue />
          ) : (
            productsToShow.map(({ node: product }) => (
              <CatalogueProduct product={product} key={product.id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
