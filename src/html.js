import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        {props.headComponents}
        <script async src='https://www.googletagmanager.com/gtag/js?id=UA-149040088-1'></script>
        <script src={withPrefix('gtag.js')} />
        <link rel='preconnect' href='https://app.snipcart.com' />
        <link rel='preconnect' href='https://cdn.snipcart.com' />
        <link
          rel='stylesheet'
          href='https://cdn.snipcart.com/themes/v3.0.28/default/snipcart.css'
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key='noscript' id='gatsby-noscript'>
          This app works best with JavaScript enabled.
        </noscript>
        <div key={`body`} id='___gatsby' dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
        <script async src='https://cdn.snipcart.com/themes/v3.0.28/default/snipcart.js'></script>
        <div
          hidden
          id='snipcart'
          data-api-key={process.env.GATSBY_SNIPCART_API_KEY}
          data-config-add-product-behavior='none'
        >
          <billing section='bottom'>
            <div className='root'>
              <fieldset className='snipcart-form__set'>
                <div className='snipcart-form__field'>
                  <snipcart-label className='snipcart__font--tiny' for='phone'>
                    Téléphone
                  </snipcart-label>
                  <snipcart-input name='phone' required maxLength='14'></snipcart-input>
                </div>
              </fieldset>
            </div>
          </billing>
          <shipping-address section='bottom'>
            <div className='root'>
              <fieldset className='snipcart-form__set'>
                <div className='snipcart-form__field'>
                  <snipcart-label className='snipcart__font--tiny' for='phone'>
                    Téléphone
                  </snipcart-label>
                  <snipcart-input name='phone' required maxLength='14'></snipcart-input>
                </div>
              </fieldset>
            </div>
          </shipping-address>
        </div>
      </body>
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
