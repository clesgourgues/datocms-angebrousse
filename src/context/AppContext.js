import React, { useState, useEffect } from 'react';
import { locales } from '../intl/locales';

const defaultState = {
  selectedCollection: null,
  selectedFilters: null,
  customerStatus: 'SignedOut',
  customerEmail: null,
  cartCount: 0,
  disconnect: null,
  ready: false
};

const AppContext = React.createContext(defaultState);

const AppProvider = ({ children, locale }) => {
  const [selectedCollection, setSelectedCollection] = useState(defaultState.selectedCollection);
  const [selectedFilters, setSelectedFilters] = useState(defaultState.selectedFilters);
  const [customerStatus, setCustomerStatus] = useState(defaultState.customerStatus);
  const [cartCount, setCartCount] = useState(defaultState.cartCount);
  const [customerEmail, setCustomerEmail] = useState(defaultState.customerEmail);

  const initSnipcart = async () => {
    const { Snipcart } = window;
    await Snipcart.ready;
    const {
      customer: { status, email },
      cart: {
        items: { count }
      }
    } = Snipcart.store.getState();
    setCustomerStatus(status);
    setCustomerEmail(email);
    setCartCount(count);
  };

  const addSnipcartEvents = () => {
    const { Snipcart } = window;
    Snipcart.events.on('item.added', () => {
      setCartCount(cartCount + 1);
    });
    Snipcart.events.on('item.removed', () => {
      setCartCount(cartCount - 1);
    });
    Snipcart.events.on('customer.signedin', customer => {
      setCustomerEmail(customer.email);
      setCustomerStatus('SignedIn');
    });
    Snipcart.events.on('customer.signedout', customer => {
      setCustomerEmail();
      setCustomerStatus('SignedOut');
    });
  };

  useEffect(() => {
    initSnipcart();
    addSnipcartEvents();
  }, [initSnipcart, addSnipcartEvents]);

  const setLanguage = async () => {
    const { Snipcart } = window;
    if (!Snipcart) return;
    try {
      await Snipcart.api.session.setLanguage(locale, locales[locale]);
    } catch (error) {
      console.warn('error while connecting to snipcart', error);
    }
  };

  useEffect(() => {
    setLanguage();
  }, [locale]);

  const disconnect = async () => {
    const { Snipcart } = window;
    if (!Snipcart) return;
    try {
      await Snipcart.api.customer.signout();
    } catch (error) {
      console.warn('error while connecting to snipcart', error);
    }
  };

  const updateSelectedCollection = selectedCollection => {
    setSelectedCollection(selectedCollection);
  };

  const updateSelectedFilters = selectedFilters => {
    setSelectedFilters(selectedFilters);
  };

  return (
    <AppContext.Provider
      value={{
        selectedCollection,
        selectedFilters,
        updateSelectedCollection,
        updateSelectedFilters,
        customerStatus,
        cartCount,
        disconnect,
        customerEmail,
        setLanguage
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
export { AppProvider };
