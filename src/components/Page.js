import React from "react";
import Img from "gatsby-image";

import { createMarkup } from "@helpers/content";

const Page = ({ page }) => {
  const content = createMarkup(page.content);
  console.log(page);
  return (
    <div className="Page">
      <div className="Wrap">
        <h2 className="Title">{page.title}</h2>
        <div className="Page__content">
          {page.illustration && page.illustration.fluid && (
            <div className="Page__illustration">
              <Img fluid={page.illustration.fluid} loading="lazy" />
            </div>
          )}
          {page.content && <div className="Content" dangerouslySetInnerHTML={content} />}
        </div>
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
