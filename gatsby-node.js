const path = require('path');
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const productTemplate = path.resolve(`src/templates/product.js`);

    const result = await graphql(`
        {
          allStripeSku {
            edges {
              node {
                attributes {
                  name
              }
            }
          }
        }
      }
    `);

    result.data.allStripeSku.edges.forEach(({ node: sku }) => {
      const { name } = sku.attributes;
      const slug = slugify(name, {
        lower: true
      });

      createPage({
        path: `products/${slug}`,
        component: productTemplate,
        context: {
            name
        }
      })
    })
}

exports.onCreateWebpackConfig = ({ actions }) => {
    const { setWebpackConfig } = actions;
    setWebpackConfig({
        resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@templates': path.resolve(__dirname, 'src/templates'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@config': path.resolve(__dirname, 'src/config'),
        },
      },
    });
};