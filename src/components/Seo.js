import React from 'react';

import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

export default ({ locale, homepage }) => (
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
      return homepage ? (
        <Helmet
          defaultTitle={site.globalSeo.siteName}
          titleTemplate={`${site.globalSeo.siteName} | %s `}
        >
          <html lang={locale} />
          <meta property='type' content='website' />
          <meta name='robots' content='index,follow' />
          <meta property='og:locale' content={locale} />
          <meta
            name='google-site-verification'
            content='_TIE8Lho2Yb1g91y11vZVPSzPwFc9mirkq3GGci9zy8'
          />
          <meta name='description' content={site.globalSeo.fallbackSeo.description} />
          <meta name='url' content='https://angelebrousse.com' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content={site.globalSeo.siteName} />
          <meta property='og:site_name' content={site.globalSeo.siteName} />
          <meta property='og:description' content={site.globalSeo.fallbackSeo.description} />
          <meta property='og:image' content={site.globalSeo.fallbackSeo.image.url} />
          <link rel='canonical' href='https://angelebrousse.com' />
          <link rel='alternate' href='https://angelebrousse.com/fr' hreflang='fr' />
          <link rel='alternate' href='https://angelebrousse.com/fr' hreflang='fr-FR' />
          <link rel='alternate' href='https://angelebrousse.com/fr' hreflang='fr-BE' />
          <link rel='alternate' href='https://angelebrousse.com/fr' hreflang='fr-CA' />
          <link rel='alternate' href='https://angelebrousse.com/fr' hreflang='fr-CH' />
          <link rel='alternate' href='https://angelebrousse.com/en' hreflang='en' />
          <link rel='alternate' href='https://angelebrousse.com/en' hreflang='en-GB' />
          <link rel='alternate' href='https://angelebrousse.com/en' hreflang='en-US' />
          <link rel='alternate' href='https://angelebrousse.com/en' hreflang='en-CA' />
          <link rel='alternate' href='https://angelebrousse.com/fr' hreflang='x-default' />
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
      ) : (
        <Helmet
          defaultTitle={site.globalSeo.siteName}
          titleTemplate={`${site.globalSeo.siteName} | %s `}
        >
          <html lang={locale} />
          <meta property='type' content='website' />
          <meta name='robots' content='index,follow' />
          <meta property='og:locale' content={locale} />
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content={site.globalSeo.siteName} />
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
