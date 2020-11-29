import React, { useState } from 'react';

const defaultState = {
  selectedCollection: null,
  selectedFilters: null
};

const AppContext = React.createContext(defaultState);

const AppProvider = ({ children }) => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState(null);

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
        updateSelectedFilters
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
export { AppProvider };
