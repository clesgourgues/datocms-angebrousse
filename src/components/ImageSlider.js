import React, { useState } from "react";
import Img from "gatsby-image";

const ImageSlider = ({ images }) => {
  const [selected, setSelected] = useState(0);
  return images.length === 1 ? (
    <div className="Product__image">
      <Img
        sizes={images[0].sizes}
        loading="lazy"
        style={{
          height: "500px"
        }}
        className="Product__image__selected"
      />
    </div>
  ) : (
    <div className="Slider">
      <div className="Slider__slides">
        {images.map((image, index) => (
          <div
            className={`Slider__slide fade ${selected !== index ? "Slider__slide__hidden" : ""}`}
            key={`slide-${index}`}
            id={`slide-${index}`}
          >
            <Img
              sizes={image.sizes}
              style={{
                height: "500px",
                cursor: "pointer"
              }}
              className="Product__image  Slider__image"
            />
          </div>
        ))}
      </div>
      <div className="Slider__dots">
        {images.map((image, index) => (
          <a
            className={`Slider__dot ${selected !== index ? "Slider__dot__selected" : ""}`}
            href={`#slide-${index}`}
            key={`dot-${index}`}
            onClick={() =>
              selected === images.length - 1 ? setSelected(0) : setSelected(index + 1)
            }
          ></a>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
