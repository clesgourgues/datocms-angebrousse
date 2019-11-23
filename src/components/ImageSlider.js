import React, { useState } from 'react';
import Img from 'gatsby-image';
import ReactImageMagnify from 'react-image-magnify';

const ImageSlider = ({ images, alt }) => {
  console.log(images);
  const [selected, setSelected] = useState(0);
  return images.length === 1 ? (
    <div className='Product__image'>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt,
            isFluidWidth: true,
            src: images[0].sizes.src,
            srcSet: images[0].sizes.srcSet,
            sizes: images[0].sizes.sizes
          },
          largeImage: {
            alt,
            src: images[0].sizes.src,
            height: 1600,
            width: 1600
          },
          enlargedImagePosition: 'over'
        }}
      />
    </div>
  ) : (
    <div className='Slider'>
      <div className='Slider__slides'>
        {images.map((image, index) => (
          <div className='Slider__slide fade' key={`slide-${index}`} id={`slide-${index}`}>
            {/*             <Img
              sizes={image.sizes}
              style={{
                height: '500px',
                cursor: 'pointer'
              }}
              className='Slider__image'
              alt={alt}
            /> */}
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt,
                  isFluidWidth: true,
                  src: image.sizes.src,
                  srcSet: image.sizes.srcSet,
                  sizes: image.sizes.sizes
                },
                largeImage: {
                  alt,
                  src: image.sizes.src,
                  height: 1600,
                  width: 1600
                },
                enlargedImagePosition: 'over'
              }}
            />
          </div>
        ))}
      </div>
      <div className='Slider__dots'>
        {images.map((image, index) => (
          <a
            className={`Slider__dot ${selected === index ? 'Slider__dot__selected' : ''}`}
            href={`#slide-${index}`}
            key={`dot-${index}`}
            onClick={() => (selected === images.length - 1 ? setSelected(0) : setSelected(index))}
            alt={alt}
          ></a>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
