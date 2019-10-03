import React from "react";
import Img from "gatsby-image";

const InstagramBottom = ({ publications, buttonText }) => {
  return (
    <div className="Instagram__bottom">
      <div className="Instagram__bottom__items">
        {publications.slice(0, 6).map(({ node: publi }) => {
          return (
            <div className="Instagram__bottom__item" key={publi.id}>
              <div className="Instagram__bottom__image">
                <Img style={{ height: "100px" }} sizes={publi.localFile.childImageSharp.sizes} />
              </div>
            </div>
          );
        })}
      </div>
      <a
        href="https://www.instagram.com/angelebroussejewelry/"
        className="Instagram__profile__followme"
      >
        <button className="Instagram__profile__button">{buttonText}</button>
      </a>
    </div>
  );
};

export default InstagramBottom;
