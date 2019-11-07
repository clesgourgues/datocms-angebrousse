import React, { useState, useEffect } from "react";

const defaultState = {
  cart: null,
  user: null
};
const SnipContext = React.createContext(defaultState);

const SnipProvider = ({ children }) => {
  let [cart, setCart] = useState(null);
  let [user, setUser] = useState(null);

  useEffect(() => {
    document.addEventListener("snipcart.ready", () => {
      setUser(window.Snipcart.api.user.current());
      setCart(window.Snipcart.api.cart.get());
    });
  }, []);

  const updateCart = () => {
    setCart(window.Snipcart.api.cart.get());
  };

  return (
    <SnipContext.Provider
      value={{
        cart,
        user,
        updateCart
      }}
    >
      {children}
    </SnipContext.Provider>
  );
};

export default SnipContext;
export { SnipProvider };
