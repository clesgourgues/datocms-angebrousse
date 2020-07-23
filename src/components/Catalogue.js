import React from 'react';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';

import Filters from '@components/Filters';
import CatalogueProduct from '@components/CatalogueProduct';
import EmptyCatalogue from '@components/EmptyCatalogue';
import { getFilters, isSelectedProduct, getColorFilters } from '@helpers/filters';
import Animate from '@components/Animate';

const Catalogue = ({
  products,
  titleColor,
  image,
  selectedCollection,
  selectedFilters,
  updateSelectedFilters,
  locale
}) => {
  const category = getFilters(products, 'category');
  const color = getColorFilters(products);

  const onClick = (item, itemKey) => {
    const newSelected = { ...selectedFilters };
    newSelected[itemKey] = item;
    updateSelectedFilters(newSelected);
  };

  const productsToShow = products.filter(({ node: product }) =>
    !selectedFilters ? product : isSelectedProduct(product, selectedFilters)
  );

  const title =
    locale === 'fr' ? `Collection ${selectedCollection}` : `${selectedCollection} Collection`;

  return (
    <Animate>
      <div className='Catalogue'>
        <Helmet>
          <title>E-shop</title>
          <meta property='og:title' content='Angèle Brousse Joaillerie | E-shop' />
          <link rel='canonical' href='https://angelebrousse.com/eshop' />
          <link rel='alternate' href='https://angelebrousse.com/fr/eshop' hreflang='fr' />
          <link rel='alternate' href='https://angelebrousse.com/fr/eshop' hreflang='fr-fr' />
          <link rel='alternate' href='https://angelebrousse.com/fr/eshop' hreflang='fr-be' />
          <link rel='alternate' href='https://angelebrousse.com/fr/eshop' hreflang='fr-ca' />
          <link rel='alternate' href='https://angelebrousse.com/fr/eshop' hreflang='fr-ch' />
          <link rel='alternate' href='https://angelebrousse.com/en/eshop' hreflang='en' />
          <link rel='alternate' href='https://angelebrousse.com/en/eshop' hreflang='en-gb' />
          <link rel='alternate' href='https://angelebrousse.com/en/eshop' hreflang='en-us' />
          <link rel='alternate' href='https://angelebrousse.com/en/eshop' hreflang='en-ca' />
          <meta name='url' content='https://angelebrousse.com/eshop' />
          <meta name='og:url' content='https://angelebrousse.com/eshop' />
        </Helmet>
        <div className='Wrap'>
          <h1 className='Title' style={{ backgroundColor: `${titleColor}` }}>
            {!selectedCollection ? 'E-shop' : title}
          </h1>
          <div>
            <Img fluid={image.fluid} loading='lazy' className='Catalogue__photo' />
          </div>
          <Filters
            categoryFilters={category}
            colorFilters={color}
            selected={selectedFilters}
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
