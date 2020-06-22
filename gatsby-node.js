const path = require('path');
const locales = require('./src/constants/locales');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const productTemplate = path.resolve('src/templates/product.js');
  const pageTemplate = path.resolve('src/templates/page.js');
  const collectionTemplate = path.resolve('src/templates/lookbooks.js');
  const contactTemplate = path.resolve('src/templates/contact.js');
  const eshopTemplate = path.resolve('src/templates/eshop.js');
  const successTemplate = path.resolve('src/templates/success.js');
  const indexTemplate = path.resolve('src/templates/index.js');

  Object.values(locales).forEach(locale => {
    createPage({
      path: locale === locales.fr ? '/' : `/${locale}`,
      component: indexTemplate,
      context: { locale, layout: 'homepage' }
    });
  });

  Object.values(locales).forEach(locale => {
    createPage({
      path: locale === locales.fr ? '/success' : `/${locale}/success`,
      component: successTemplate,
      context: { locale }
    });
  });

  await Promise.all(
    Object.values(locales).map(async locale => {
      const localeToFetch = locale;
      await graphql(`
            {
              allDatoCmsProduct(filter: { published: { eq: true }, locale: { eq: "${localeToFetch}" } }) {
                edges {
                  node {
                    slug
                    locale
                  }
                }
              }
              allDatoCmsPage(filter: { locale: { eq: "${localeToFetch}" } }) {
                edges {
                  node {
                    slug
                    locale
                  }
                }
              }
              datoCmsCollection(published: { eq: true }) {
                slug
                name
              }
              datoCmsContactText(locale: { eq: "${localeToFetch}" }) {
                slug
                title
                locale
              }
              allDatoCmsMenu(filter: { locale: { eq: "${localeToFetch}" }, name: { eq: "e-shop" } }) {
                edges {
                  node {
                    slug
                    locale
                  }
                }
              }
            }
          `).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allDatoCmsProduct.edges.forEach(({ node }) => {
          const path = locale === locales.fr ? `/${node.slug}` : `/${locale}/${node.slug}`;
          createPage({
            path,
            component: productTemplate,
            context: {
              pathSlug: node.slug,
              locale
            }
          });
        });
        result.data.allDatoCmsPage.edges.forEach(({ node }) => {
          const path = locale === locales.fr ? `/${node.slug}` : `/${locale}/${node.slug}`;
          createPage({
            path,
            component: pageTemplate,
            context: {
              pathSlug: node.slug,
              locale
            }
          });
        });
        [result.data.datoCmsCollection].forEach(template => {
          console.log('node from collection', template);
          const path = locale === locales.fr ? `/${template.slug}` : `/${locale}/${template.slug}`;
          createPage({
            path,
            component: collectionTemplate,
            context: {
              collection: template.name,
              locale
            }
          });
        });
        result.data.allDatoCmsMenu.edges.forEach(({ node }) => {
          const path = locale === locales.fr ? `${node.slug}` : `/${locale}${node.slug}`;
          createPage({
            path,
            component: eshopTemplate,
            context: {
              pathSlug: node.slug,
              locale
            }
          });
        });

        [result.data.datoCmsContactText].forEach(template => {
          const path = locale === locales.fr ? `/${template.slug}` : `/${locale}/${template.slug}`;
          console.log('path', path);
          createPage({
            path,
            component: contactTemplate,
            context: {
              pathSlug: template.slug,
              locale
            }
          });
        });
      });
    })
  );
};
