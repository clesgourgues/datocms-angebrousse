import React, { useState, useEffect } from 'react';
import BackgroundImage from 'gatsby-background-image';
import Header from '@components/Header';

const Homepage = ({ children, images, menu, cart, user }) => {
  const [selected, setSelected] = useState(0);
  const [stop, setStop] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const element = document.querySelector('input');
    element.addEventListener('click', handleClick);
    return () => element.removeEventListener('click', handleClick);
  }, []);

  const handleClick = () => {
    setStop(true);
  };

  useEffect(() => {
    const next = selected === images.slider.length - 1 ? 0 : selected + 1;
    if (!stop) {
      const interval = setInterval(() => {
        setSelected(next);
      }, 2500);
      return () => clearInterval(interval);
    }
  });
  return (
    <BackgroundImage Tag='section' fluid={images.slider[selected].fluid} className='Container'>
      <Header
        logos={images}
        menu={menu}
        isHome={true}
        open={open}
        setOpen={setOpen}
        cart={cart}
        user={user}
      />
      <main className='Content'>{children}</main>
    </BackgroundImage>
  );
};

export default Homepage;
