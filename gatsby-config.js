require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    author: config.author
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/components/layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [{
            family: `Montserrat`,
            variants: [`400`, `700`, `900`]
        }]
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ['Sku'],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.shortTitle,
        start_url: `/`,
        background_color: config.colors.gray200,
        theme_color: config.colors.gray100,
        display: `minimal-ui`,
        icon: 'src/assets/images/logo.png'
      },
    },
    'gatsby-plugin-offline'
  ],
}
