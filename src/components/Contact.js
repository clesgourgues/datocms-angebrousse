import React from 'react';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';

import ContactForm from '@components/ContactForm';
import Animate from '@components/Animate';

const Contact = ({ text, user, titleColor }) => (
  <Animate>
    <div className='Contact'>
      <Helmet>
        <title>{text.title}</title>
        <link rel='canonical' href='https://angelebrousse.com/contact' />
        <meta name='description' content={text.mailText} />
        <meta property='image' content={text.image.fluid.src} />
        <meta name='url' content='https://angelebrousse.com/contact' />
        <meta property='og:title' content={text.title} />
        <meta property='og:description' content={text.mailText} />
        <meta property='og:image' content={text.image.fluid.src} />
        <meta name='og:url' content='https://angelebrousse.com/contact' />
      </Helmet>
      <div className='Wrap'>
        <h1 className='Title' style={{ backgroundColor: `${titleColor}` }}>
          {text.title}
        </h1>
        <div className='Contact__intro'>
          {text.image && (
            <div className='Contact__image'>
              <Img fluid={text.image.fluid} loading='lazy' alt={text.title} />
            </div>
          )}
          <div className='Contact__mail'>
            <div className='Subtitle'>{text.mailText}</div>
            <div className='Contact__paraph'>
              {text.mail.map((item, index) => (
                <div key={`item-${index}`}>
                  <div className='Contact__paraph__title'>{item.title}</div>
                  <div>{item.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ContactForm text={text} user={user} />
        {text.phone && text.phone[0] && (
          <>
            <div className='Subtitle'>{text.phone[0].title}</div>
            <div className='Contact__paraph'>{text.phone[0].content}</div>
          </>
        )}
        {text.address && text.address[0] && (
          <>
            <div className='Subtitle'>{text.address[0].title}</div>
            <div className='Contact__paraph'>{text.address[0].content}</div>
          </>
        )}
      </div>
    </div>
  </Animate>
);

export default Contact;
