import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

const ToggleLocale = () => {
  return (
    <div className='Locales'>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => {
            return (
              <a
                key={language}
                className={`Locales__Locale ${
                  language === currentLocale ? 'Locales__Locale-selected' : ''
                }`}
                onClick={() => changeLocale(language)}
              >
                {language}
              </a>
            );
          })
        }
      </IntlContextConsumer>
    </div>
  );
};

export default ToggleLocale;
