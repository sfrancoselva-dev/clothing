import { createSelector } from "reselect";

const cartReducer = (state) => state.cart;

export const selectCartDropdown = createSelector(
  [cartReducer],
  (cart) => cart.openCartDropdown
);

export const selectCartItems = createSelector(
  [cartReducer],
  (cart) => cart.cartItems
);

export const selectTotalPrice = createSelector(
  [cartReducer],
  (cart) => cart.totalPrice
);

export const selectTotalCartQuantity = createSelector(
  [cartReducer],
  (cart) => cart.totalCartQuantity
);
