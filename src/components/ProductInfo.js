import React from "react";

const ProductInfo = ({ infos, category, title }) => (
  <>
    <div className="Product__info__title">{title}</div>
    <div className="Product__info">
      {infos
        .sort((a, b) => a.position - b.position)
        .map((i, index) => {
          const categories = i.categories.map(category => category.name);
          return (
            categories.includes(category) && (
              <div className="Product__info__item" key={`info-${index}`}>
                <div className="Product__info__title">{i.title}</div>
                <div className="Product__info__content">{i.content}</div>
              </div>
            )
          );
        })}
    </div>
  </>
);

export default ProductInfo;
