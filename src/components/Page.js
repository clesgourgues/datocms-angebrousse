import React from "react";
import Img from "gatsby-image";
import { Helmet } from "react-helmet";

import Accordion from "@components/Accordion";
import { createMarkup } from "@helpers/content";

const Page = ({ page }) => {
  const contentIntro = createMarkup(page.contentIntro);
  const content = createMarkup(page.content);

  return (
    <div className="Page">
      <Helmet>
        <title>{page.title}</title>
      </Helmet>
      <div className="Wrap">
        <h1 className="Title">{page.title}</h1>
        <div className="Page__intro">
          {page.illustration && page.illustration.fluid && (
            <div className="Page__illustration">
              <Img fluid={page.illustration.fluid} loading="lazy" alt={page.title} />
            </div>
          )}
          {page.contentIntro && (
            <div className="Content Content__intro" dangerouslySetInnerHTML={contentIntro} />
          )}
        </div>

        <div className="Page__content">
          {page.content && <div className="Content" dangerouslySetInnerHTML={content} />}
          {page.contentAccordion.length > 0 && (
            <div>
              {page.contentAccordion.map((item, index) => (
                <Accordion {...item} key={`item-${index}`} />
              ))}
            </div>
          )}
          {page.enclosedFile && (
            <a href={page.enclosedFile.url} className="Page__link">
              {page.enclosedFileText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
