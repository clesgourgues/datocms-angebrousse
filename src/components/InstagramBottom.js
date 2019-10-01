import React from "react";
import Img from "gatsby-image";

const InstagramBottom = ({ publications }) => {
  return (
    <div className="Instagram__bottom">
      <a
        href="https://www.instagram.com/angelebroussejewelry/"
        className="Instagram__profile__followme"
      >
        <button className="Instagram__profile__button">Follow</button>
        <span className="Instagram__profile__followme__after">
          @angelebroussejewelry on Instagram
        </span>
      </a>
      <div className="Instagram__bottom__items">
        {publications.slice(0, 6).map(({ node: publi }) => {
          return (
            <div className="Instagram__bottom__item" key={publi.id}>
              <div className="Instagram__bottom__image">
                <Img style={{ height: "80px" }} sizes={publi.localFile.childImageSharp.fixed} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InstagramBottom;
