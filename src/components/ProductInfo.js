import React from "react";

const ProductInfo = ({ infos }) => (
  <div className="Product__info">
    {infos.map((i, index) => (
      <div className="Product__info__item" key={`product-${index}`}>
        <div className="Product__info__title">{i.title}</div>
        <div className="Product__info__content">{i.content}</div>
      </div>
    ))}
  </div>
);

export default ProductInfo;
