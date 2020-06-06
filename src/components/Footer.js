import React from 'react';

import InstagramBottom from '@components/InstagramBottom';
import MenuFooter from '@components/MenuFooter';

const Footer = ({ menu, text }) => (
  <footer className='Footer'>
    <InstagramBottom title={text.instagramText} />
    <MenuFooter menu={menu} title={text.newsletterText} buttonText={text.newsletterButtonText} />
    <div className='Footer__privacy'>© Tous droits réservés @Angèle Brousse Joaillerie – 2019</div>
  </footer>
);

export default Footer;
