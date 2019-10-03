import React from "react";

import { createMarkup } from "../helpers/content";

const Page = ({ page }) => {
  const content = createMarkup(page.content);
  return (
    <div className="Page">
      <div className="Wrap">
        <h2 className="Title">{page.title}</h2>
        <div className="Content" dangerouslySetInnerHTML={content} />
      </div>
    </div>
  );
};

export default Page;
