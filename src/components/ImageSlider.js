import React, { useState } from "react";
import Img from "gatsby-image";

const ImageSlider = ({ images }) => {
  const [selected, setSelected] = useState(0);
  return images.length === 1 ? (
    <figure className="Product__image">
      <Img
        sizes={images[0].sizes}
        loading="lazy"
        style={{
          height: "500px"
        }}
        className="Product__image__selected"
      />
    </figure>
  ) : (
    <figure
      className="Product__image"
      onMouseEnter={() => setSelected(1)}
      onMouseLeave={() => setSelected(0)}
    >
      <Img
        sizes={images[selected].sizes}
        loading="lazy"
        style={{
          height: "500px",
          cursor: "pointer"
        }}
        className="Product__image__selected"
      />
    </figure>
  );
};

export default ImageSlider;
