import React from 'react';

import { allSizes } from '@helpers/sizes';

const Sizes = ({ text, availableSizes, selected, setSize, cancelError }) => (
  <div>
    <div className='Product__size'>{text}</div>
    <div className='Product__size'>
      {allSizes.map(size => (
        <span
          className={`Product__size__item ${
            availableSizes.includes(size) ? 'Product__size__available' : ''
          } ${selected === size ? 'Product__size__selected' : ''}`}
          key={size}
          onClick={
            availableSizes.includes(size)
              ? () => {
                  setSize(size);
                  cancelError();
                }
              : null
          }
        >
          {size}
        </span>
      ))}
    </div>
  </div>
);

export default Sizes;
