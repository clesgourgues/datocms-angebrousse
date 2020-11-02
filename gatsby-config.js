require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    siteName: 'Angèle Brousse',
    siteUrl: 'https://angelebrousse.com'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-layout`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Karla`, `Oswald`],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@layouts': 'src/layouts',
          '@pages': 'src/pages',
          '@style': 'src/style',
          '@templates': 'src/templates',
          '@helpers': 'src/helpers',
          '@context': 'src/context',
          '@assets': 'src/assets',
          '@hooks': 'src/hooks'
        },
        extensions: ['js']
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://angelebrousse.us20.list-manage.com/subscribe/post?u=750d9f039808a582df851dd73&amp;id=145b875748'
      }
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`fr`, `en`],
        defaultLanguage: `fr`,
        redirect: true
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `7906146319`
      }
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-149040088-1',
          anonymize: true
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            edges {
              node {
                path
              }
            }
          }
      }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `weekly`,
              priority: 0.7,
              links: [
                { lang: 'fr', url: `${site.siteMetadata.siteUrl}/fr${edge.node.path}` },
                { lang: 'fr-fr', url: `${site.siteMetadata.siteUrl}/fr${edge.node.path}` },
                { lang: 'fr-be', url: `${site.siteMetadata.siteUrl}fr${edge.node.path}` },
                { lang: 'fr-ca', url: `${site.siteMetadata.siteUrl}/fr${edge.node.path}` },
                { lang: 'fr-ch', url: `${site.siteMetadata.siteUrl}/fr${edge.node.path}` },
                { lang: 'en', url: `${site.siteMetadata.siteUrl}/en${edge.node.path}` },
                { lang: 'en-gb', url: `${site.siteMetadata.siteUrl}/en${edge.node.path}` },
                { lang: 'en-us', url: `${site.siteMetadata.siteUrl}/en${edge.node.path}` },
                { lang: 'en-ca', url: `${site.siteMetadata.siteUrl}/en${edge.node.path}` },
                { lang: 'x-default', url: `${site.siteMetadata.siteUrl}/fr${edge.node.path}` }
              ]
            };
          })
      }
    }
  ]
};
