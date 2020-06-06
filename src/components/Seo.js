import React from 'react';

import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        datoCmsSite(locale: { eq: "fr" }) {
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
    render={data => (
      <Helmet
        defaultTitle={data.datoCmsSite.globalSeo.siteName}
        titleTemplate={`${data.datoCmsSite.globalSeo.siteName} | %s `}
      >
        <html lang='fr-FR' />
        <meta
          name='google-site-verification'
          content='_TIE8Lho2Yb1g91y11vZVPSzPwFc9mirkq3GGci9zy8'
        />
        <meta name='description' content={data.datoCmsSite.globalSeo.fallbackSeo.description} />
        <meta property='type' content='website' />
        <meta name='robots' content='index,follow' />
        <meta name='url' content='https://angelebrousse.com' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={data.datoCmsSite.globalSeo.siteName} />
        <meta property='og:site_name' content={data.datoCmsSite.globalSeo.siteName} />
        <meta property='og:locale' content='fr-FR' />
        <meta
          property='og:description'
          content={data.datoCmsSite.globalSeo.fallbackSeo.description}
        />
        <meta property='og:image' content={data.datoCmsSite.globalSeo.fallbackSeo.image.url} />
        <link rel='canonical' href='https://angelebrousse.com' />
        {data.datoCmsSite.faviconMetaTags.tags
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
    )}
  />
);
