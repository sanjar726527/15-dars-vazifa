const initialState = {
  productsBasket: [],
  modal: false,
};

const reducer = (state = initialState, action) => {
  console.log(action, state);
  switch (action.type) {
    case "ADD_PRODUCT_BASKET":
      return {
        ...state,
        productsBasket: [
          ...state.productsBasket,
          { ...action.payload, qty: 1 },
        ],
      };
    case "ON_MODAL":
      return {
        ...state,
        modal: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
