import React from 'react';
import locales from '@constants/locales';
import LocalizedLink from '@components/LocalizedLink';
import { getTo } from '@helpers/location';

const ToggleLocale = ({ location }) => {
  console.log('location', location);
  const locale = location.pathname.startsWith('/en') ? 'en' : 'fr';
  return (
    <div className='Locales'>
      {Object.keys(locales).map((loc, index) => {
        console.log('loc', loc);
        console.log('locale', locale);
        return (
          <LocalizedLink
            key={`locales-${index}`}
            to={getTo(loc, location.pathname)}
            className={`Locales__Locale ${loc === locale ? 'Locales__Locale-selected' : ''}`}
          >
            {locales[loc].name}
          </LocalizedLink>
        );
      })}
    </div>
  );
};

export default ToggleLocale;
