import React from "react";
import Img from "gatsby-image";

const LookBook = ({ photos }) => {
  return (
    <div className="Lookbook">
      <div className="Wrap">
        {photos.map(photo => (
          <div className="Lookbook__photo">
            <Img fluid={photo.fluid} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LookBook;
