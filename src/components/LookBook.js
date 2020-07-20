import React from 'react';
import Img from 'gatsby-image';
import { Helmet } from 'react-helmet';
import Animate from '@components/Animate';

const LookBook = ({ lookbooks, titleColor }) => (
  <Animate>
    <div className='Lookbook'>
      <div className='Wrap'>
        {lookbooks.map(collection => (
          <div key={collection}>
            <Helmet>
              <title>{collection.node.collection.name}</title>
              <link
                rel='canonical'
                href={`https://angelebrousse.com/${collection.node.collection.slug}`}
              />
              <link
                rel='alternate'
                href={`https://angelebrousse.com/fr/${collection.node.collection.slug}`}
                hreflang='fr'
              />
              <link
                rel='alternate'
                href={`https://angelebrousse.com/fr/${collection.node.collection.slug}`}
                hreflang='fr-fr'
              />
              <link
                rel='alternate'
                href={`https://angelebrousse.com/fr/${collection.node.collection.slug}`}
                hreflang='fr-be'
              />
              <link
                rel='alternate'
                href={`https://angelebrousse.com/fr/${collection.node.collection.slug}`}
                hreflang='fr-ca'
              />
              <link
                rel='alternate'
                href={`https://angelebrousse.com/fr/${collection.node.collection.slug}`}
                hreflang='fr-ch'
              />
              <link
                rel='alternate'
                href={`https://angelebrousse.com/en/${collection.node.collection.slug}`}
                hreflang='en'
              />
              <link
                rel='alternate'
                href={`https://angelebrousse.com/en/${collection.node.collection.slug}`}
                hreflang='en-gb'
              />
              <link
                rel='alternate'
                href={`https://angelebrousse.com/en/${collection.node.collection.slug}`}
                hreflang='en-us'
              />
              <link
                rel='alternate'
                href={`https://angelebrousse.com/en/${collection.node.collection.slug}`}
                hreflang='en-ca'
              />
              <meta
                name='description'
                content={`Angèle Brousse Joaillerie | LookBook Collection ${collection.node.collection.name}`}
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
                content={`Angèle Brousse Joaillerie | LookBook Collection ${collection.node.collection.name} `}
              />
              <meta property='og:image' content={collection.node.photos[0].photo.fluid.src} />
              <meta
                name='og:url'
                content={`https://angelebrousse.com/${collection.node.collection.slug}`}
              />
            </Helmet>
            <div className='Lookbook__collection'>
              <h1 className='Title' style={{ backgroundColor: `${titleColor}` }}>
                {collection.node.collection.name}
              </h1>
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
          </div>
        ))}
      </div>
    </div>
  </Animate>
);

export default LookBook;
