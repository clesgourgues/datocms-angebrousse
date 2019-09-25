import React from "react";
import Img from "gatsby-image";

import InstagramProfile from "./InstagramProfile";

const Instagram = ({ publications, profile }) => {
  return (
    <div className="Instagram">
      <InstagramProfile profile={profile} />
      {publications.map(({ node: publi }) => {
        const date = new Date(publi.timestamp).toLocaleString("fr-FR");
        return (
          <div className="Instagram__item" key={publi.id}>
            <div className="Instagram__image">
              <Img style={{ height: "300px" }} sizes={publi.localFile.childImageSharp.fixed} />
            </div>{" "}
            <div className="Instagram__details">
              <span className="Instagram__date">{date}</span>
              <div className="Instagram__caption">{publi.caption}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Instagram;
