import React, { useState } from "react";

import Filters from "../components/Filters";
import CatalogueProduct from "../components/CatalogueProduct";

const Catalogue = ({ products, filters }) => {
  let [selected, setSelected] = useState("tout voir");

  const onMenuClick = selected => {
    setSelected(selected);
  };

  const productsToShow =
    selected === "tout voir"
      ? products
      : products.filter(({ node: product }) => product.category[0].name === selected);

  return (
    <div className="Catalogue">
      <div className="Wrap">
        <h2 className="Title">E-shop</h2>
        <Filters filters={filters} selected={selected} onClick={onMenuClick} />
        <div className="Catalogue__products">
          {productsToShow.map(({ node: product }) => (
            <CatalogueProduct product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
