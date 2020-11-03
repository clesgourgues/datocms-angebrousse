import React from 'react';
import Img from 'gatsby-image';
import { Helmet } from 'react-helmet';

import Accordion from '@components/Accordion';
import { createMarkup } from '@helpers/content';
import Animate from '@components/Animate';

const Page = ({ page, titleColor }) => {
  const contentIntro = createMarkup(page.contentIntro);
  const content = createMarkup(page.content);

  return (
    <Animate>
      <div className='Page'>
        <Helmet>
          <title>{page.title}</title>
          <link rel='canonical' href={`https://angelebrousse.com/${page.slug}`} />
          <link rel='alternate' href={`https://angelebrousse.com/fr/${page.slug}`} hreflang='fr' />
          <link
            rel='alternate'
            href={`https://angelebrousse.com/fr/${page.slug}`}
            hreflang='fr-FR'
          />
          <link
            rel='alternate'
            href={`https://angelebrousse.com/fr/${page.slug}`}
            hreflang='fr-BE'
          />
          <link
            rel='alternate'
            href={`https://angelebrousse.com/fr/${page.slug}`}
            hreflang='fr-CA'
          />
          <link
            rel='alternate'
            href={`https://angelebrousse.com/fr/${page.slug}`}
            hreflang='fr-CH'
          />
          <link rel='alternate' href={`https://angelebrousse.com/en/${page.slug}`} hreflang='en' />
          <link
            rel='alternate'
            href={`https://angelebrousse.com/en/${page.slug}`}
            hreflang='en-GB'
          />
          <link
            rel='alternate'
            href={`https://angelebrousse.com/en/${page.slug}`}
            hreflang='en-US'
          />
          <link
            rel='alternate'
            href={`https://angelebrousse.com/en/${page.slug}`}
            hreflang='en-CA'
          />
          <link
            rel='alternate'
            href={`https://angelebrousse.com/fr/${page.slug}`}
            hreflang='x-default'
          />
          <meta name='url' content={`https://angelebrousse.com/${page.slug}`} />
          {page.illustration && <meta property='image' content={page.illustration.fluid.src} />}
          <meta property='og:title' content={`Angèle Brousse Joaillerie | ${page.title}`} />
          {page.illustration && <meta property='og:image' content={page.illustration.fluid.src} />}
          <meta name='og:url' content={`https://angelebrousse.com/${page.slug}`} />
        </Helmet>
        <div className='Wrap'>
          <h1 className='Title' style={{ backgroundColor: `${titleColor}` }}>
            {page.title}
          </h1>
          <div className='Page__intro'>
            {page.illustration && page.illustration.fluid && (
              <div className='Page__illustration'>
                <Img fluid={page.illustration.fluid} loading='lazy' alt={page.title} />
              </div>
            )}
            {page.contentIntro && (
              <div className='Content Content__intro' dangerouslySetInnerHTML={contentIntro} />
            )}
          </div>

          <div className='Page__content'>
            {page.content && <div className='Content' dangerouslySetInnerHTML={content} />}
            {page.contentAccordion.length > 0 && (
              <div>
                {page.contentAccordion.map((item, index) => (
                  <Accordion {...item} key={`item-${index}`} />
                ))}
              </div>
            )}
            {page.enclosedFile && (
              <a href={page.enclosedFile.url} className='Page__link'>
                {page.enclosedFileText}
              </a>
            )}
          </div>
        </div>
      </div>
    </Animate>
  );
};

export default Page;
