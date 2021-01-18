import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const SnipCart = () => {
  const { cartCount } = useContext(AppContext);
  return (
    <div className='Snipcart snipcart-checkout'>
      <div className='Snipcart__quantity'>{cartCount}</div>
    </div>
  );
};

export default SnipCart;
