import React from "react";
import Img from "gatsby-image";

const LookBook = ({ lookbooks }) => (
  <div className="Lookbook">
    <div className="Wrap">
      {lookbooks.map(collection => (
        <div className="Lookbook__collection" key={collection.node.collection.name}>
          <h2 className="Lookbook__collection__name">
            Collection {collection.node.collection.name}
          </h2>
          {collection.node.photos.map((photo, index) => (
            <div className="Lookbook__photo" key={`lookbook-${index}`}>
              <h5 className="Lookbook__photo__legend">{photo.legende}</h5>
              <Img fluid={photo.photo.fluid} loading="lazy" />
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default LookBook;
