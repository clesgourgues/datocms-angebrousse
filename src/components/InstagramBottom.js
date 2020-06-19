import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { useInstagramFeed } from '@hooks/useInstagramFeed';

const InstagramBottom = ({ title }) => {
  const publications = useInstagramFeed({
    userId: '7906146319',
    photoCount: 6
  });
  return (
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
        {publications.map(publi => {
          return (
            <a
              className='Instagram__bottom__item'
              key={publi.id}
              href='https://www.instagram.com/angelebroussejewelry/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={publi.src} alt='Instagram picture' className='Instagram__bottom__image' />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default InstagramBottom;
