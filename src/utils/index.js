export const formetPrice = (price) => {
  const _p = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
  return _p;
};
