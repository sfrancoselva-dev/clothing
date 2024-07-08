import { CART_TYPES } from "./cart.types";
import { takeLatest, call, put, select } from "redux-saga/effects";
import { selectCategories } from "../categories/categories.selector";
import { selectCartItems } from "./cart.selector";
import {
  actionaddToCart,
  actionTotalQuantity,
  actionTotalPrice,
} from "./cart.action";

function* findCategory(categoryTitle) {
  const categories = yield select(selectCategories);

  const category = categories.find(
    (category) => category.title === categoryTitle
  );

  return category;
}

function findItemInCategory(category, itemId) {
  const findItemId = Number(itemId);
  const categoryItems = category.items;

  const itemInCategory = categoryItems.find((item) => item.id === findItemId);
  return itemInCategory;
}

function* buildCartItems(item) {
  const cartItems = yield select(selectCartItems);
  // if cartItems empty
  if (!cartItems.length) return [{ ...item, quantity: 1 }];
  // if cartItems not empty
  else {
    const itemInCartIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (itemInCartIndex === -1) {
      return [...cartItems, { ...item, quantity: 1 }];
    } else {
      cartItems[itemInCartIndex].quantity += 1;
      return [...cartItems];
    }
  }
}

function* calculateTotalQuantity() {
  const cartItems = yield select(selectCartItems);

  const totalQuantity = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  return totalQuantity;
}

function* calculateTotalPrice() {
  const cartItems = yield select(selectCartItems);

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return totalPrice;
}

function* updateQty(id, flag) {
  const cartItems = yield select(selectCartItems);

  const cartItemIndex = cartItems.findIndex(
    (cartItem) => Number(id) === Number(cartItem.id)
  );

  switch (flag) {
    case "+":
      cartItems[cartItemIndex].quantity += 1;
      return [...cartItems];

    case "-":
      if (cartItems[cartItemIndex].quantity === 1) {
        return yield call(deleteCartItem, id);
      }
      cartItems[cartItemIndex].quantity -= 1;
      return [...cartItems];

    default:
      return cartItems;
  }
}

function* deleteCartItem(id) {
  const cartItems = yield select(selectCartItems);

  const cartItemIndex = cartItems.findIndex(
    (cartItem) => Number(id) === Number(cartItem.id)
  );

  cartItems.splice(cartItemIndex, 1);

  return [...cartItems];
}

function* addToCartSaga({ payload }) {
  const { itemId, belongsTo } = payload;
  const category = yield call(findCategory, belongsTo);
  const categoryItem = yield call(findItemInCategory, category, itemId);

  const cartItemsUpdated = yield call(buildCartItems, categoryItem);
  yield put(actionaddToCart(cartItemsUpdated));

  const totalQuantity = yield call(calculateTotalQuantity);
  yield put(actionTotalQuantity(totalQuantity));

  const totalPrice = yield call(calculateTotalPrice);
  yield put(actionTotalPrice(totalPrice));
}

function* updateQtySaga({ payload }) {
  const { itemId, flag } = payload;
  const cartItemsUpdated = yield call(updateQty, itemId, flag);
  yield put(actionaddToCart(cartItemsUpdated));

  const totalQuantity = yield call(calculateTotalQuantity);
  yield put(actionTotalQuantity(totalQuantity));

  const totalPrice = yield call(calculateTotalPrice);
  yield put(actionTotalPrice(totalPrice));
}

function* deleteCartItemSaga({ payload }) {
  const { itemId } = payload;

  const cartItemsUpdated = yield call(deleteCartItem, itemId);
  yield put(actionaddToCart(cartItemsUpdated));

  const totalQuantity = yield call(calculateTotalQuantity);
  yield put(actionTotalQuantity(totalQuantity));

  const totalPrice = yield call(calculateTotalPrice);
  yield put(actionTotalPrice(totalPrice));
}

export function* cartSaga() {
  yield takeLatest(CART_TYPES.addToCartStart, addToCartSaga);
  yield takeLatest(CART_TYPES.updateQuantity, updateQtySaga);
  yield takeLatest(CART_TYPES.deleteFromCart, deleteCartItemSaga);
}
