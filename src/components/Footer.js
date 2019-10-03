import React from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

import InstagramBottom from "./InstagramBottom";
import MenuFooter from "./MenuFooter";
import NewsLetter from "./NewsLetter";

const Footer = ({ menu, instagram, text }) => {
  console.log(text);
  return (
    <div className="Footer">
      {/*     <div className="Footer__border"></div> */}
      <div className="Footer__title">
        <FaEnvelope size={20} />
        {text.newsletterText}
      </div>
      <NewsLetter buttonText={text.newsletterButtonText} />
      <div className="Footer__title">
        <FaInstagram size={20} /> {text.instagramText}
      </div>
      <InstagramBottom publications={instagram} buttonText={text.instagramButtonText} />
      <MenuFooter menu={menu} />
      <div className="Footer__privacy">© 2019 ANGELE BROUSSE JOAILLERIE — Terms & Privacy</div>
    </div>
  );
};

export default Footer;
