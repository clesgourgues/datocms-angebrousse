import React, { useState } from 'react';
import BackgroundSlider from '@components/BackgroundSlider';
import Header from '@components/Header';

const Homepage = ({ children, images, menu, user }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className='Container'>
      <Header logos={images} menu={menu} isHome={true} open={open} setOpen={setOpen} user={user} />
      <BackgroundSlider
        images={images.slider}
        initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
        transition={2} // transition duration between images
        duration={4}
      />

      <main className='Content'>{children}</main>
    </div>
  );
};

export default Homepage;
