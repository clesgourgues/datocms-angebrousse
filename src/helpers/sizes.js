export const allSizes = [
  '48',
  '49',
  '50',
  '51',
  '52',
  '53',
  '54',
  '55',
  '56',
  '57',
  '58',
  '59',
  '60'
];

export const getProductOptions = (sizes, size) => {
  let newSizes = sizes;
  if (typeof sizes === 'string') {
    newSizes = sizes.match(/[0-9]+/g);
  }
  const filteredSizes = newSizes.filter(s => s !== size);
  const orderedSizes = [size, ...filteredSizes];
  return orderedSizes
    .filter(s => s !== null)
    .toString()
    .split(',')
    .join('|');
};
