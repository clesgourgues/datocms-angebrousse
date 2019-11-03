import React from "react";

const Counter = ({ quantity, setQuantity }) => {
  return (
    <div className="Counter">
      <span>Quantité </span>
      <button className="Counter__button" onClick={() => setQuantity(quantity - 1)}>
        -
      </button>
      <span>{quantity}</span>
      <button className="Counter__button" onClick={() => setQuantity(quantity + 1)}>
        +
      </button>
    </div>
  );
};

export default Counter;
