export const getItemsQuantity = cart =>
  cart.items.map(item => item.quantity).reduce((a, b) => a + b, 0);
