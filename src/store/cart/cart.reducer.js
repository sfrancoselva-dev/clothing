import { CART_TYPES } from "./cart.types";

const initialState = {
  cartItems: [],
  openCartDropdown: false,
  totalPrice: 0,
  totalCartQuantity: 0,
};

export const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_TYPES.toggleCartDropdown:
      return {
        ...state,
        openCartDropdown: payload,
      };

    case CART_TYPES.addToCart:
      return {
        ...state,
        cartItems: payload,
      };

    case CART_TYPES.totalQuantity:
      return {
        ...state,
        totalCartQuantity: payload,
      };

    case CART_TYPES.totalPrice:
      return {
        ...state,
        totalPrice: payload,
      };

    default:
      return state;
  }
};
