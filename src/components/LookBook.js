import React from 'react';
import Img from 'gatsby-image';
import { Helmet } from 'react-helmet';

const LookBook = ({ lookbooks }) => {
  console.log(lookbooks);
  return (
    <div className='Lookbook'>
      <div className='Wrap'>
        {lookbooks.map(collection => (
          <>
            <Helmet>
              <title>{collection.node.collection.name}</title>
              <link
                rel='canonical'
                href={`https://angelebrousse.com/${collection.node.collection.slug}`}
              />

              <meta
                name='description'
                content={`LookBook de la collection ${collection.node.collection.name} par Angèle Brousse Joaillerie`}
              />
              <meta
                name='url'
                content={`https://angelebrousse.com/${collection.node.collection.slug}`}
              />
              <meta property='image' content={collection.node.photos[0].photo.fluid.src} />
              <meta
                property='og:title'
                content={`Angèle Brousse Joaillerie | ${collection.node.collection.name}`}
              />
              <meta
                property='og:description'
                content={`LookBook de la collection ${collection.node.collection.name} par Angèle Brousse Joaillerie`}
              />
              <meta property='og:image' content={collection.node.photos[0].photo.fluid.src} />
              <meta
                name='og:url'
                content={`https://angelebrousse.com/${collection.node.collection.slug}`}
              />
            </Helmet>
            <div className='Lookbook__collection' key={collection.node.collection.name}>
              <h1 className='Title'>{collection.node.collection.name}</h1>
              {collection.node.photos.map((photo, index) => (
                <div className='Lookbook__photo' key={`lookbook-${index}`}>
                  <h5 className='Lookbook__photo__legend'>{photo.legende}</h5>
                  <Img
                    fluid={photo.photo.fluid}
                    loading='lazy'
                    alt={collection.node.collection.name}
                  />
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default LookBook;
