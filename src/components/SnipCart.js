import React from "react";
import cartIcon from "../assets/cart.png";
import { getItemsQuantity } from "../helpers/cart";

const SnipCart = ({ cart }) => {
  const quantity = cart ? getItemsQuantity(cart) : null;
  return (
    <div className="Snipcart snipcart-checkout">
      <img src={cartIcon} className="Snipcart__icon" alt="Shopping Cart" />
      {cart && (
        <>
          <div className="Snipcart__quantity">{quantity}</div>
          <div className="Snipcart__price">{cart.total}€</div>
        </>
      )}
    </div>
  );
};

export default SnipCart;
