import React from 'react';

import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

export default ({ locale }) => (
  <StaticQuery
    query={graphql`
      query {
        frSite: datoCmsSite(locale: { eq: "fr" }) {
          faviconMetaTags {
            tags
          }
          globalSeo {
            siteName
            titleSuffix
            fallbackSeo {
              title
              description
              image {
                url
              }
            }
          }
        }
        enSite: datoCmsSite(locale: { eq: "en" }) {
          faviconMetaTags {
            tags
          }
          globalSeo {
            siteName
            titleSuffix
            fallbackSeo {
              title
              description
              image {
                url
              }
            }
          }
        }
      }
    `}
    render={data => {
      const site = locale === 'fr' ? data.frSite : data.enSite;
      return (
        <Helmet
          defaultTitle={site.globalSeo.siteName}
          titleTemplate={`${site.globalSeo.siteName} | %s `}
        >
          <html lang={locale} />
          <meta
            name='google-site-verification'
            content='95xT3i7gkIOHKFPgFfxTWCvS8_q75YX25Nma3KhO0h0'
          />
          <meta name='description' content={site.globalSeo.fallbackSeo.description} />
          <meta property='type' content='website' />
          <meta name='robots' content='index,follow' />
          <meta name='url' content='https://angelebrousse.com' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={site.globalSeo.siteName} />
          <meta property='og:site_name' content={site.globalSeo.siteName} />
          <meta property='og:locale' content={locale} />
          <meta property='og:description' content={site.globalSeo.fallbackSeo.description} />
          <meta property='og:image' content={site.globalSeo.fallbackSeo.image.url} />
          <link rel='canonical' href='https://angelebrousse.com' />
          <link rel='alternate' href='https://angelebrousse.com/fr' hreflang='fr' />
          <link rel='alternate' href='https://angelebrousse.com/fr' hreflang='fr-fr' />
          <link rel='alternate' href='https://angelebrousse.com/fr' hreflang='fr-be' />
          <link rel='alternate' href='https://angelebrousse.com/fr' hreflang='fr-ca' />
          <link rel='alternate' href='https://angelebrousse.com/fr' hreflang='fr-ch' />
          <link rel='alternate' href='https://angelebrousse.com/en' hreflang='en' />
          <link rel='alternate' href='https://angelebrousse.com/en' hreflang='en-gb' />
          <link rel='alternate' href='https://angelebrousse.com/en' hreflang='en-us' />
          <link rel='alternate' href='https://angelebrousse.com/en' hreflang='en-ca' />
          {site.faviconMetaTags.tags
            .filter(tag => tag.tagName === 'link')
            .map((tag, index) => (
              <link
                rel={tag.attributes.rel}
                href={tag.attributes.href}
                sizes={tag.attributes.sizes}
                key={`tag-${index}`}
              />
            ))}
        </Helmet>
      );
    }}
  />
);
