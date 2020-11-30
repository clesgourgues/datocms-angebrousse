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
        redirect: false
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
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: '3.0.15',
        publicApiKey: process.env.GATSBY_SNIPCART_API_KEY,
        defaultLang: 'fr',
        currency: 'eur',
        openCartOnAdd: false,
        locales: {
          fr: {
            actions: {
              continue_shopping: 'Poursuivre les achats',
              checkout: 'Procéder au paiement'
            },
            header: {
              title_cart_summary: 'Votre panier'
            },
            discounts: {
              title: 'Code Promo'
            },
            address_form: {
              address1: 'Adresse',
              email: 'Email'
            },
            signin_form: {
              email: 'Email'
            },
            register_form: {
              email: 'Email'
            },
            errors: {
              email: 'Veuillez spécifier une adresse mail valide',
              customer_exists: 'Cet email est déjà utilisé.',
              invalid_credentials: 'Email ou mot de passe invalide',
              payment_failed: {
                title: 'Impossible de finaliser votre paiement.',
                description:
                  'Veuillez vérifier vos informations de carte de crédit, ou réessayer plus tard.'
              },
              domain_crawling: {
                title: "Votre commande n'a pas pu être finalisée.",
                description:
                  "Vous n'avez pas été débité. Veuillez contacter Angèle Brousse pour plus de détails."
              },
              quantity_out_of_stock:
                "Il semble que ce produit n’est plus en stock. Il peut s'agir d'un problème de configuration. En continuant, cet article sera retiré de votre panier."
            },
            payment: {
              form: {
                continue_to_payment: 'Paiement',
                place_order: 'Confirmer la commande'
              }
            },
            confirmation: {
              thank_you_for_your_order:
                'Merci pour votre commande ! Votre facture vous a été envoyée par email.'
            }
          },
          en: {
            actions: {
              continue_shopping: 'Continue shopping',
              forgot_password_email_sent_message:
                'An email has been sent to you with the instructions to reset your password. Please consult it andfollow the steps.'
            },
            header: {
              title_cart_summary: 'Your cart'
            }
          }
        },
        innerHTML: `
           <billing section="bottom">
            <fieldset class="snipcart-form__set">
              <div class="snipcart-form__field">
                <snipcart-label class="snipcart__font--tiny" for="phone">
                Téléphone
                </snipcart-label>
              <snipcart-input name="phone" required maxLength="14" ></snipcart-input>
              </div>
            </fieldset>
            </billing>`
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
            const frUrl = edge.node.path.startsWith('/fr')
              ? edge.node.path
              : !edge.node.path.startsWith('/en')
              ? `/fr${edge.node.path}`
              : edge.node.path.replace('/en', '/fr');
            const enUrl = edge.node.path.startsWith('/en')
              ? edge.node.path
              : !edge.node.path.startsWith('/fr')
              ? `/en${edge.node.path}`
              : edge.node.path.replace('/fr', '/en');

            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `weekly`,
              priority: 0.7,
              links: [
                { lang: 'fr', url: site.siteMetadata.siteUrl + frUrl },
                { lang: 'fr-FR', url: site.siteMetadata.siteUrl + frUrl },
                { lang: 'fr-BE', url: site.siteMetadata.siteUrl + frUrl },
                { lang: 'fr-CA', url: site.siteMetadata.siteUrl + frUrl },
                { lang: 'fr-CH', url: site.siteMetadata.siteUrl + frUrl },
                { lang: 'en', url: site.siteMetadata.siteUrl + enUrl },
                { lang: 'en-GB', url: site.siteMetadata.siteUrl + enUrl },
                { lang: 'en-US', url: site.siteMetadata.siteUrl + enUrl },
                { lang: 'en-CA', url: site.siteMetadata.siteUrl + enUrl },
                { lang: 'x-default', url: site.siteMetadata.siteUrl + frUrl }
              ]
            };
          })
      }
    }
  ]
};
