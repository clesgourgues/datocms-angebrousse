import React from "react";

import InstagramBottom from "@components/InstagramBottom";
import MenuFooter from "@components/MenuFooter";

const Footer = ({ menu, instagram, text, user }) => (
  <footer className="Footer">
    <InstagramBottom
      title={text.instagramText}
      publications={instagram}
      buttonText={text.instagramButtonText}
    />
    <MenuFooter
      menu={menu}
      title={text.newsletterText}
      buttonText={text.newsletterButtonText}
      user={user}
    />
    <div className="Footer__privacy">© 2019 ANGELE BROUSSE JOAILLERIE — Terms & Privacy</div>
  </footer>
);

export default Footer;
