import { Link } from 'gatsby';
import React from 'react';
import locales from '@constants/locales';

const DEFAULT_LOCALE = locales.fr;

const LocalizedLink = ({ locale, children, to, className }) => {
  const localePrefix = !locale || locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return (
    <Link className={className} to={`${localePrefix}${to}`}>
      {children}
    </Link>
  );
};

export default LocalizedLink;
