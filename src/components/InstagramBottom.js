import React from 'react';
import Img from 'gatsby-image';
import { FaInstagram } from 'react-icons/fa';

const InstagramBottom = ({ publications, buttonText, title }) => (
  <div className='Instagram__bottom'>
    <a
      className='Footer__title Instagram__title'
      href='https://www.instagram.com/angelebroussejewelry/'
      target='_blank'
      rel='noopener noreferrer'
    >
      <FaInstagram size={20} /> <span>{title}</span>
    </a>
    <div className='Instagram__bottom__items'>
      {publications.map((publi, index) => (
        <a
          className='Instagram__bottom__item'
          key={`instagram-${index}`}
          href='https://www.instagram.com/angelebroussejewelry/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='Instagram__bottom__image'>
            <Img sizes={{ ...publi.fluid, aspectRatio: 1 }} alt='Instagram picture' />
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default InstagramBottom;
