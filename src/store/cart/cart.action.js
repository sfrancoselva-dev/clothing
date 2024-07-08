import { createAction } from "../../utils/createAction";
import { CART_TYPES } from "./cart.types";

export const actionToggleCartDropdown = (status) =>
  createAction(CART_TYPES.toggleCartDropdown, status);

export const actionaddToCartStart = (itemId, belongsTo) =>
  createAction(CART_TYPES.addToCartStart, { itemId, belongsTo });

export const actionaddToCart = (cartItems) =>
  createAction(CART_TYPES.addToCart, cartItems);

export const actionTotalQuantity = (qty) =>
  createAction(CART_TYPES.totalQuantity, qty);

export const actionTotalPrice = (price) =>
  createAction(CART_TYPES.totalPrice, price);

export const actionUpdateQty = (itemId, flag) =>
  createAction(CART_TYPES.updateQuantity, { itemId, flag });

export const actionDeleteFromCart = (itemId) =>
  createAction(CART_TYPES.deleteFromCart, { itemId });
