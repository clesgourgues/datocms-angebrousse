import React from "react";
import Img from "gatsby-image";
import { Helmet } from "react-helmet";

const LookBook = ({ lookbooks }) => (
  <div className="Lookbook">
    <Helmet>
      <title>Look Books</title>
    </Helmet>
    <div className="Wrap">
      {lookbooks.map(collection => (
        <div className="Lookbook__collection" key={collection.node.collection.name}>
          <h1 className="Title">{collection.node.collection.name}</h1>
          {collection.node.photos.map((photo, index) => (
            <div className="Lookbook__photo" key={`lookbook-${index}`}>
              <h5 className="Lookbook__photo__legend">{photo.legende}</h5>
              <Img fluid={photo.photo.fluid} loading="lazy" alt={collection.node.collection.name}/>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default LookBook;
