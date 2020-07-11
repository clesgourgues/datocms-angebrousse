import React from 'react';
import CookieConsent from 'react-cookie-consent';

const Cookies = ({ locale }) => {
  const text =
    locale === 'en'
      ? 'We are using cookies to improve your experience with us !'
      : 'Nous utilisons les cookies pour améliorer votre visite sur notre site !';
  return (
    <CookieConsent
      location='bottom'
      enableDeclineButton
      flipButtons
      buttonText={locale === 'en' ? 'Accept' : 'Accepter'}
      declineButtonText={locale === 'en' ? 'Decline' : 'Refuser'}
      cookieName='gatsby-gdpr-google-analytics'
      debug={true}
      style={{
        background: 'white',
        color: 'black'
      }}
      buttonStyle={{
        background: 'black',
        color: 'white',
        padding: '10px',
        textTransform: 'uppercase'
      }}
      declineButtonStyle={{
        background: 'black',
        color: 'white',
        padding: '10px',
        textTransform: 'uppercase'
      }}
    >
      {text}
    </CookieConsent>
  );
};

export default Cookies;
