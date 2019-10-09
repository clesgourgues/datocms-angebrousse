import React from "react";
import Img from "gatsby-image";

import { createMarkup } from "@helpers/content";

const Page = ({ page }) => {
  const content = createMarkup(page.content);
  return (
    <div className="Page">
      <div className="Wrap">
        <h2 className="Title">{page.title}</h2>
        <div className="Page__content">
          {page.illustration && (
            <div className="Page__illustration">
              <Img fluid={page.illustration.fluid} loading="lazy" />
            </div>
          )}
          <div className="Content" dangerouslySetInnerHTML={content} />
        </div>
      </div>
    </div>
  );
};

export default Page;
