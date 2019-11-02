import React from "react";
import Img from "gatsby-image";
import { Helmet } from "react-helmet";

import { createMarkup } from "@helpers/content";

const Page = ({ page }) => {
  const content = createMarkup(page.content);
  const contentIntro = createMarkup(page.contentIntro);
  return (
    <div className="Page">
      <Helmet>
        <title>{page.title}</title>
      </Helmet>
      <div className="Wrap">
        <h2 className="Title">{page.title}</h2>
        <div className="Page__intro">
          {page.illustration && page.illustration.fluid && (
            <div className="Page__illustration">
              <Img fluid={page.illustration.fluid} loading="lazy" />
            </div>
          )}
          {page.contentIntro && (
            <div className="Content Content__intro" dangerouslySetInnerHTML={contentIntro} />
          )}
        </div>
        {page.content && (
          <div className="Page__content">
            <div className="Content" dangerouslySetInnerHTML={content} />
          </div>
        )}
        {page.enclosedFile && (
          <a href={page.enclosedFile.url} className="Page__link">
            {page.enclosedFileText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Page;
