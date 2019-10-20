require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    siteName: "Ange Brousse"
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-background-image`,
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/layouts`)
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })]
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN }
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey: process.env.SNIPCART_API_KEY,
        autopop: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `angelebroussejewelry`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Karla`, `Oswald`],
        display: "swap"
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@layouts": "src/layouts",
          "@pages": "src/pages",
          "@style": "src/style",
          "@templates": "src/templates",
          "@helpers": "src/helpers",
          "@context": "src/context",
          "@assets": "src/assets"
        },
        extensions: ["js"]
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://angelebrousse.us20.list-manage.com/subscribe/post?u=750d9f039808a582df851dd73&amp;id=145b875748" // add your MC list endpoint here; see instructions below
      }
    }
  ]
};
