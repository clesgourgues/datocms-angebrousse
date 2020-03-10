import React, { useEffect, useState } from 'react';

const defaultState = {
  user: null,
  error: null
};

const SnipContext = React.createContext(defaultState);

const SnipProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const snipcartReady = async () => {
    window.Snipcart.api.session.setLanguage('fr-FR');
    window.Snipcart.store.subscribe(async () => {
      const store = await window.Snipcart.store.getState();
      const email = store.customer.email ? store.customer.email : null;
      setUser(email);
    });
    window.Snipcart.events.on('item.adding', parsedCartItem => {
      if (parsedCartItem.customFields.length > 0) {
        if (parsedCartItem.customFields[0].value === '') {
          //e.preventDefault();
          setError(true);
        } else {
          setError(false);
        }
      }
    });
  };

  useEffect(() => {
    document.addEventListener('snipcart.ready', snipcartReady());
    return document.removeEventListener('snipcart.ready', snipcartReady());
  }, []);

  const cancelError = () => setError(false);

  return (
    <SnipContext.Provider
      value={{
        user,
        error,
        cancelError
      }}
    >
      {children}
    </SnipContext.Provider>
  );
};

export default SnipContext;
export { SnipProvider };
