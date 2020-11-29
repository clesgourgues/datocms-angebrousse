import React, { useContext } from 'react';
import { SnipcartContext } from 'gatsby-plugin-snipcart-advanced/context';

const SnipCart = () => {
  const {
    state: { cartQuantity }
  } = useContext(SnipcartContext);

  return (
    <div className='Snipcart snipcart-checkout'>
      {<div className='Snipcart__quantity'>{cartQuantity}</div>}
    </div>
  );
};

export default SnipCart;
