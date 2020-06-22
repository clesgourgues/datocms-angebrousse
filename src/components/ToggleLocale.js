import React from 'react';
import locales from '@constants/locales';
import LocalizedLink from '@components/LocalizedLink';
import { getTo } from '@helpers/location';

const ToggleLocale = ({ location }) => {
  const locale = location.pathname.startsWith('/en') ? 'en' : 'fr';
  return (
    <div className='Locales'>
      {Object.values(locales).map((loc, index) => (
        <LocalizedLink
          key={`locales-${index}`}
          to={getTo(loc, location.pathname)}
          className={`Locales__Locale ${loc === locale ? 'Locales__Locale-selected' : ''}`}
        >
          {loc}
        </LocalizedLink>
      ))}
    </div>
  );
};

export default ToggleLocale;
