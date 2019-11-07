import React from "react";
import PropTypes from "prop-types";
import { withPrefix } from "gatsby";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149040088-1"></script>
        <script src={withPrefix("gtag.js")} />
        <script src="https://cookiehub.net/cc/ed0dfc1f.js"></script>
        <script src={withPrefix("cookies.js")} />
        <script
          src="https://code.jquery.com/jquery-3.4.1.min.js"
          integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
          data-api-key={process.env.GATSBY_SNIPCART_API_KEY}
          id="snipcart"
        ></script>

        <link
          href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
      <script type="text/javascript" src={withPrefix("fr-FR.js")}></script>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};
