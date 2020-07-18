import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

const Counter = ({ quantity, setQuantity }) => {
  const intl = useIntl();

  return (
    <div className='Counter'>
      <div className='Counter__title'> {intl.formatMessage({ id: 'quantity' })}</div>
      <div>
        <button className='Counter__button' onClick={() => setQuantity(quantity - 1)}>
          -
        </button>
        <span>{quantity}</span>
        <button className='Counter__button' onClick={() => setQuantity(quantity + 1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
