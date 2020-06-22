import { locales } from '@constants/locales';

export const getTo = (locale, path) => {
  const rootPath = path.startsWith('/en') ? path.split('/en')[1] : path;
  console.log('rootPath', rootPath);
  return locale === 'fr' ? rootPath : 'en/'.concat(rootPath);
};

export const localizedPath = locale => (locale === locales.fr ? '' : '/en');
