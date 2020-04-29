export const getFilters = (products, key) => {
  const filters = [];
  products.map(
    ({ node: product }) =>
      !filters.includes(product[key][0].name) && filters.push(product[key][0].name)
  );
  return filters;
};

export const getColorFilters = products => {
  const filters = [];
  products.map(
    ({ node: product }) => !filters.includes(product['color']) && filters.push(product['color'])
  );
  return filters;
};

export const isSelectedProduct = (product, selected) =>
  selected.category.includes(product.category[0].name) && selected.color.includes(product.color);

export const isSelectedFilter = (filter, selected) =>
  selected.length === 1 && selected[0] === filter;

export const getImage = (collection, selected) => {
  if (selected.length === 1) {
    const selectedCollection = collection.find(c => c['node']['name'] === selected[0]);
    if (selectedCollection) return selectedCollection['node']['image'];
    else return null;
  } else return null;
};
