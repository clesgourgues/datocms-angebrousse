import React from 'react';

import { getItemsQuantity } from '@helpers/cart';
import SnipContext from '@context/SnipContext';

const SnipCart = () => (
  <SnipContext.Consumer>
    {({ cart }) => {
      const quantity = cart ? getItemsQuantity(cart) : null;
      return (
        <div className='Snipcart snipcart-checkout'>
          {cart && quantity > 0 && <div className='Snipcart__quantity'>{quantity}</div>}
        </div>
      );
    }}
  </SnipContext.Consumer>
);

export default SnipCart;
