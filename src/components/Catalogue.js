import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';

import Filters from '@components/Filters';
import CatalogueProduct from '@components/CatalogueProduct';
import EmptyCatalogue from '@components/EmptyCatalogue';
import { getFilters, isSelectedProduct, getColorFilters } from '@helpers/filters';
import Animate from '@components/Animate';

const Catalogue = ({ products, titleColor, image, selectedCollection }) => {
  const category = getFilters(products, 'category');
  const color = getColorFilters(products);

  let [selected, setSelected] = useState({
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
    <Animate>
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
            {!selectedCollection ? 'E-shop' : `Collection ${selectedCollection}`}
          </h1>
          <div>
            <Img fluid={image.fluid} loading='lazy' className='Catalogue__photo' />
          </div>
          <Filters
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
    </Animate>
  );
};

export default Catalogue;
