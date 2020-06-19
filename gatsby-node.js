const path = require('path');
const locales = require('./src/constants/locales');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  Object.keys(locales).forEach(locale => {
    createPage({
      path: `/${locales[locale].path}`,
      component: path.resolve('src/templates/index.js'),
      context: { locale, layout: 'homepage' }
    });
  });

  const productTemplate = path.resolve('src/templates/product.js');
  const pageTemplate = path.resolve('src/templates/page.js');
  const collectionTemplate = path.resolve('src/templates/lookbooks.js');
  const contactTemplate = path.resolve('src/templates/contact.js');
  const eshopTemplate = path.resolve('src/templates/eshop.js');
  const successTemplate = path.resolve('src/templates/success.js');

  await Promise.all(
    Object.keys(locales).map(async locale => {
      const datoLocale = locales[locale].dato;
      await graphql(`
            {
              allDatoCmsProduct(filter: { published: { eq: true }, locale: { eq: "${datoLocale}" } }) {
                edges {
                  node {
                    slug
                    locale
                  }
                }
              }
              allDatoCmsPage(filter: { locale: { eq: "${datoLocale}" } }) {
                edges {
                  node {
                    slug
                    locale
                  }
                }
              }
              allDatoCmsCollection {
                edges {
                  node {
                    slug
                    name
                    locale
                  }
                }
              }
              datoCmsContactText(locale: { eq: "${datoLocale}" }) {
                slug
                title
                locale
              }
              allDatoCmsMenu(filter: { locale: { eq: "${datoLocale}" }, name: { eq: "e-shop" } }) {
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
        const prefix = datoLocale === 'fr' ? '' : `/${datoLocale}`;
        result.data.allDatoCmsProduct.edges.forEach(({ node }) => {
          const path = `${prefix}/${node.slug}`;
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
          const path = `${prefix}/${node.slug}`;
          createPage({
            path,
            component: pageTemplate,
            context: {
              pathSlug: node.slug,
              locale
            }
          });
        });
        result.data.allDatoCmsCollection.edges.forEach(({ node }) => {
          const path = `${prefix}/${node.slug}`;
          createPage({
            path,
            component: collectionTemplate,
            context: {
              collection: node.name,
              locale
            }
          });
        });
        result.data.allDatoCmsMenu.edges.forEach(({ node }) => {
          const path = `${prefix}${node.slug}`;
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
          const prefix = datoLocale === 'fr' ? '' : `/${datoLocale}`;
          const path = `${prefix}/${template.slug}`;
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
