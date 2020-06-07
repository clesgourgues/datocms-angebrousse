import React from 'react';

import { getItemsQuantity } from '@helpers/cart';
import AppContext from '@context/AppContext';

const SnipCart = () => (
  <AppContext.Consumer>
    {({ cart }) => {
      const quantity = cart ? getItemsQuantity(cart) : null;
      return (
        <div className='Snipcart snipcart-checkout'>
          {cart && quantity > 0 && <div className='Snipcart__quantity'>{quantity}</div>}
        </div>
      );
    }}
  </AppContext.Consumer>
);

export default SnipCart;
