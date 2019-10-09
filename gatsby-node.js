const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const productTemplate = path.resolve("src/templates/product.js");
    const pageTemplate = path.resolve("src/templates/page.js");
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
                /*
              the value passed in the context will be available for you to use in your page queries as a GraphQL variable, as per the template snippet */
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
              /*
              the value passed in the context will be available for you to use in your page queries as a GraphQL variable, as per the template snippet */
              pathSlug: path
            }
          });
          resolve();
        });
      })
    );
  });
};
