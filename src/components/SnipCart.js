import React from "react";

import { getItemsQuantity } from "@helpers/cart";

const SnipCart = ({ cart }) => {
  const quantity = cart ? getItemsQuantity(cart) : null;
  return (
    <div className="Snipcart snipcart-checkout">
      {cart && quantity > 0 && <div className="Snipcart__quantity">{quantity}</div>}
    </div>
  );
};

export default SnipCart;
