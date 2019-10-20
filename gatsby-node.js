const path = require("path");

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path === "/") {
    page.context.layout = "homepage";
    createPage(page);
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const productTemplate = path.resolve("src/templates/product.js");
    const pageTemplate = path.resolve("src/templates/page.js");
    const collectionTemplate = path.resolve("src/templates/lookbooks.js");
    resolve(
      graphql(
        `
          {
            allDatoCmsProduct {
              edges {
                node {
                  slug
                  image {
                    url
                  }
                }
              }
            }
            allDatoCmsPage {
              edges {
                node {
                  slug
                  title
                  content
                }
              }
            }
            allDatoCmsCollection {
              edges {
                node {
                  slug
                  name
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allDatoCmsProduct.edges.forEach(({ node }) => {
          const path = node.slug;
          if (node.image.length > 0) {
            createPage({
              path,
              component: productTemplate,
              context: {
                pathSlug: path
              }
            });
          }
          resolve();
        });
        result.data.allDatoCmsPage.edges.forEach(({ node }) => {
          const path = node.slug;
          createPage({
            path,
            component: pageTemplate,
            context: {
              pathSlug: path
            }
          });
          resolve();
        });
        result.data.allDatoCmsCollection.edges.forEach(({ node }) => {
          const path = node.slug;
          createPage({
            path,
            component: collectionTemplate,
            context: {
              collection: node.name
            }
          });
          resolve();
        });
      })
    );
  });
};
