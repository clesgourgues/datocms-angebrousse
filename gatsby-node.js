const path = require('path');
const locales = require('./src/constants/locales');

exports.createPages = ({ graphql, actions }) => {
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

  Promise.all(
    Object.keys(locales).map(locale => {
      const datoLocale = locales[locale].dato;
      graphql(`
            {
              allDatoCmsProduct(filter: { published: { eq: true }, locale: { eq: "${datoLocale}" } }) {
                edges {
                  node {
                    slug
                    locale
                    image {
                      url
                    }
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
        result.data.allDatoCmsProduct.edges.forEach(({ node }) => {
          const prefix = datoLocale === 'fr' ? '' : `/${datoLocale}`;
          const path = `${prefix}/${node.slug}`;
          console.log(path);
          if (node.image.length > 0) {
            createPage({
              path,
              component: productTemplate,
              context: {
                pathSlug: node.slug,
                locale
              }
            });
          }
          console.log('done products', datoLocale);
        });
        result.data.allDatoCmsPage.edges.forEach(({ node }) => {
          const prefix = datoLocale === 'fr' ? '' : `/${datoLocale}`;
          const path = `${prefix}/${node.slug}`;
          console.log(path);
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
          const prefix = datoLocale === 'fr' ? '' : `/${datoLocale}`;
          const path = `${prefix}/${node.slug}`;
          console.log(path);
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
          const prefix = datoLocale === 'fr' ? '' : `/${datoLocale}`;
          const path = `${prefix}${node.slug}`;
          console.log(path);
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
          console.log(path);
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
