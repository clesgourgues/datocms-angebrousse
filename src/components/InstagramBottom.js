import React from "react";
import Img from "gatsby-image";
import { FaInstagram } from "react-icons/fa";

const InstagramBottom = ({ publications, buttonText, title }) => {
  return (
    <div className="Instagram__bottom">
      <a
        className="Footer__title Instagram__title"
        href="https://www.instagram.com/angelebroussejewelry/"
      >
        <FaInstagram size={20} /> <span>{title}</span>
      </a>
      <div className="Instagram__bottom__items">
        {publications.map(({ node: publi }) => {
          return (
            <a
              className="Instagram__bottom__item"
              key={publi.id}
              href="https://www.instagram.com/angelebroussejewelry/"
            >
              <div className="Instagram__bottom__image">
                <Img sizes={{ ...publi.localFile.childImageSharp.fluid, aspectRatio: 1 }} />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default InstagramBottom;
