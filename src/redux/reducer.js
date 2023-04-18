const reducer = (basket = [], action) => {
  console.log(action, basket);
  switch (action.type) {
    case "ADD_PRODUCT_BASKET":
      return [...basket, { ...action.payload, qty: 1 }];
    default:
      return basket;
  }
};

export default reducer;
