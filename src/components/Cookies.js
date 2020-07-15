import React from 'react';
import CookieConsent from 'react-cookie-consent';

const Cookies = ({ locale }) => {
  const text =
    locale === 'en'
      ? 'By pursuing your navigation, you are accepting the use of cookies.'
      : "En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de cookies.";
  const subText =
    locale === 'en'
      ? ' Those informations allow us to insure you the best experience'
      : ' Ces informations nous permettent de vous assurer la meilleure expérience.';
  return (
    <CookieConsent
      location='bottom'
      enableDeclineButton
      debug={true}
      flipButtons
      buttonText={locale === 'en' ? 'Accept' : 'Accepter'}
      declineButtonText={locale === 'en' ? 'Decline' : 'Refuser'}
      cookieName='gatsby-gdpr-google-analytics'
      style={{
        background: 'black',
        color: 'white'
      }}
      buttonStyle={{
        background: 'black',
        color: 'white',
        padding: '10px',
        border: '1px solid white',
        textTransform: 'uppercase'
      }}
      declineButtonStyle={{
        background: 'black',
        color: 'white',
        padding: '10px',
        border: '1px solid white',
        textTransform: 'uppercase'
      }}
    >
      {text}
      <span style={{ fontSize: '12px' }}>{subText}</span>
    </CookieConsent>
  );
};

export default Cookies;
