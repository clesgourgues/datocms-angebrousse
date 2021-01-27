import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

const ToggleLocale = ({ isHome }) => (
  <div className='Locales'>
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => {
        const otherLocale = currentLocale === languages[0] ? languages[1] : languages[0];
        return (
          <>
            <span
              key={languages[0]}
              className={`Locales__Locale ${
                languages[0] === currentLocale ? 'Locales__Locale-selected' : ''
              } ${isHome ? 'homepage' : ''}`}
            >
              {languages[0]}
            </span>
            <input
              checked={currentLocale === languages[1]}
              type='checkbox'
              id='toggle_checkbox'
              onChange={() => {
                changeLocale(otherLocale);
              }}
              className={`${isHome ? 'homepage' : ''}`}
            />
            <label
              htmlFor='toggle_checkbox'
              className={`Locales__Locale-label ${isHome ? 'homepage' : ''}`}
            ></label>
            <span
              key={languages[1]}
              className={`Locales__Locale ${
                languages[1] === currentLocale ? 'Locales__Locale-selected' : ''
              } ${isHome ? 'homepage' : ''}`}
            >
              {languages[1]}
            </span>
          </>
        );
      }}
    </IntlContextConsumer>
  </div>
);

export default ToggleLocale;
