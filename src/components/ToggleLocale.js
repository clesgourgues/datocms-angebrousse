import React from 'react';
import AppContext from '@context/AppContext';
import { locales } from '@constants/locales';

const ToggleLocale = () => (
  <AppContext.Consumer>
    {({ locale, toggleLocale }) => (
      <div className='Locales'>
        {Object.keys(locales).map((loc, index) => (
          <span
            key={`locales-${index}`}
            onClick={toggleLocale}
            className={`Locales__Locale ${
              locales[loc].short === locale.short ? 'Locales__Locale-selected' : ''
            }`}
          >
            {locales[loc].name}
          </span>
        ))}
      </div>
    )}
  </AppContext.Consumer>
);

export default ToggleLocale;
