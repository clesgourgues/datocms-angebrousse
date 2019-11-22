import React, { useEffect } from 'react';
import Img from 'gatsby-image';

const BackgroundSlider = ({ images, duration, transition, initDelay, ...gatsbyImageProps }) => {
  let bgRefs = [];
  let bgWrappers = [];
  const { style, ...imageProps } = gatsbyImageProps;

  const imgs = images.map((data, index) => {
    const backgroundStyle = {
      position: 'absolute',
      zIndex: -10,
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 'none',
      left: 0,
      top: 0,
      backgroundSize: 'cover',
      opacity: index ? 0 : 1,
      transition: `opacity ${transition}s`
    };

    bgRefs[index] = React.createRef();

    return (
      <div className='Background__slide' ref={bgRefs[index]} key={index}>
        <Img fluid={data.fluid} style={{ ...backgroundStyle, ...style }} {...imageProps} />
      </div>
    );
  });

  const initEffect = () => {
    bgRefs.forEach(bgRef => {
      bgWrappers.push(bgRef.current.firstElementChild);
    });

    const callback = function(index = 0) {
      const length = bgWrappers.length;
      bgWrappers[index].style.opacity = 0;
      bgWrappers[(index + 1) % length].style.opacity = 1;
      setTimeout(callback, duration * 1000, (index + 1) % length);
    };
    setTimeout(callback, initDelay * 1000, 0);
  };

  // Runs once after DOM is loaded; effectively `componentDidMount`
  useEffect(initEffect, []);

  return <>{imgs}</>;
};

export default BackgroundSlider;
