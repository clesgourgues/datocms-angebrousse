import React from "react";

const ProductInfo = ({ info }) => (
  <div className="Product__info">
    {info.map((i, index) => (
      <div className="Product__info__item" key={`product-${index}`}>
        <div className="Product__info__title">{i.node.title}</div>
        <div className="Product__info__content">{i.node.content}</div>
      </div>
    ))}
  </div>
);

export default ProductInfo;
