export const sizes = ["48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"];

export const getProductOptions = sizes =>
  sizes
    .toString()
    .split(",")
    .join("|");