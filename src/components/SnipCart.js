import React from "react";
import { FiShoppingBag } from "react-icons/fi";

// import cartIcon from "../assets/cart.png";
import { getItemsQuantity } from "../helpers/cart";

const SnipCart = ({ cart }) => {
  const quantity = cart ? getItemsQuantity(cart) : null;
  return (
    <div className="Snipcart snipcart-checkout">
      {/*       <img src={cartIcon} className="Snipcart__icon" alt="Shopping Cart" /> */}
      <FiShoppingBag size={24} />
      {cart && quantity > 0 && <div className="Snipcart__quantity">{quantity}</div>}
    </div>
  );
};

export default SnipCart;
