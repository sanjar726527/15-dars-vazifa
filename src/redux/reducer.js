import data from "../data/products";
const initialState = {
  productsBasket: [],
  modal: false,
  allProducts: data,
};

const reducer = (state = initialState, action) => {
  console.log(action, state, state.allProducts);
  switch (action.type) {
    case "ADD_NEW_PRODUCT":
      return {
        ...state,
        allProducts: [...state.allProducts, action.payload],
      };
    case "ADD_PRODUCT_BASKET":
      return {
        ...state,
        productsBasket: [
          ...state.productsBasket,
          { ...action.payload, qty: 1 },
        ],
      };
    case "ON_REMOVE_ALL":
      return {
        ...state,
        productsBasket: [],
        modal: action.payload,
      };
    case "ON_MODAL":
      return {
        ...state,
        modal: action.payload,
      };
    case "OFF_MODAL":
      return {
        ...state,
        modal: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
