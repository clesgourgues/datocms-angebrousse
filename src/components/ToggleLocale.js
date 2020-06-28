import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

const ToggleLocale = ({ isHome }) => {
  return (
    <div className='Locales'>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => {
            return (
              <span
                key={language}
                className={`Locales__Locale ${
                  language === currentLocale ? 'Locales__Locale-selected' : ''
                } ${isHome ? 'homepage' : ''}`}
                onClick={() => changeLocale(language)}
              >
                {language}
              </span>
            );
          })
        }
      </IntlContextConsumer>
    </div>
  );
};

export default ToggleLocale;
