import React from "react";

import { sizes } from "../helpers/sizes";

const Sizes = ({ text, availableSizes }) => (
  <div>
    <span className="Product__size">{text}</span>
    <div className="Product__size">
      {sizes.map(size => (
        <span
          className={`Product__size__item ${
            availableSizes.includes(size) ? "Product__size__available" : ""
          }`}
          key={size}
        >
          {size}
        </span>
      ))}
    </div>
  </div>
);

export default Sizes;
