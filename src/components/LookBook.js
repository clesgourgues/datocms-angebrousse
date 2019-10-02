import React from "react";
import Img from "gatsby-image";

const LookBook = ({ lookbooks }) => {
  console.log(lookbooks);
  return (
    <div className="Lookbook">
      <div className="Wrap">
        {/*         {photos.map((photo, index) => (
          <div className="Lookbook__photo" key={`lookbook-${index}`}>
            <Img fluid={photo.fluid} loading="lazy" />
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default LookBook;
