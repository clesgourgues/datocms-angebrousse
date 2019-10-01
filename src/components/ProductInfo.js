import React from "react";

const ProductInfo = ({ info }) => (
  <div className="Product__info">
    {info.map(i => (
      <div className="Product__info__item">
        <div className="Product__info__title">{i.node.title}</div>
        <div className="Product__info__content">{i.node.content}</div>
      </div>
    ))}
  </div>
);

export default ProductInfo;
