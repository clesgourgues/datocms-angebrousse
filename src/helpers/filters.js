export const getFilters = (products, key) => {
  const filters = [];
  products.map(
    ({ node: product }) =>
      !filters.includes(product[key][0].name) && filters.push(product[key][0].name)
  );
  return filters;
};

export const isSelectedProduct = (product, selected) =>
  selected.collection.includes(product.collection[0].name) &&
  selected.category.includes(product.category[0].name) &&
  selected.color.includes(product.color);

export const isSelectedFilter = (filter, selected) =>
  selected.length === 1 && selected[0] === filter;
