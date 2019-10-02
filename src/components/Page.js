import React from "react";

import { createMarkup } from "../helpers/content";

const Page = ({ page }) => {
  const content = createMarkup(page.content);
  return (
    <div className="Page">
      <div className="Wrap">
        <h2 className="Page__title">{page.title}</h2>
        <div className="Page__content" dangerouslySetInnerHTML={content} />
      </div>
    </div>
  );
};

export default Page;
