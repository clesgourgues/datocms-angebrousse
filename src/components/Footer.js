import React from "react";

import InstagramBottom from "./InstagramBottom";
import MenuFooter from "./MenuFooter";

const Footer = ({ menu, instagram }) => (
  <div className="Footer">
    <div className="Footer__border"></div>
    <InstagramBottom publications={instagram} />
    <MenuFooter menu={menu} />
    <div className="Footer__privacy">© 2019 ANGELE BROUSSE JOAILLERIE — Terms & Privacy</div>
  </div>
);

export default Footer;
