import React from "react";

import { Helmet } from "react-helmet";
import { StaticQuery, graphql, withPrefix } from "gatsby";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        datoCmsSite {
          locales
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
        <html lang={data.datoCmsSite.locales[0]} amp />
        <meta name="description" content={data.datoCmsSite.globalSeo.fallbackSeo.description} />
        <meta property="og:type" content="website" />
        {data.datoCmsSite.faviconMetaTags.tags
          .filter(tag => tag.tagName === "link")
          .map((tag, index) => (
            <link
              rel={tag.attributes.rel}
              type={tag.attributes.type}
              href={tag.attributes.href}
              sizes={tag.attributes.sizes}
              key={`tag-${index}`}
            />
          ))}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149040088-1"></script>
        <script src={withPrefix("gtag.js")} />
        <script src="https://cookiehub.net/cc/ed0dfc1f.js"></script>
        <script src={withPrefix("cookies.js")} />
      </Helmet>
    )}
  />
);
