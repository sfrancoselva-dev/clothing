import { all } from "redux-saga/effects";
import { userSaga } from "./user/user.saga";
import { collectionSaga } from "./collections/collection.saga";
import { categoriesSaga } from "./categories/categories.saga";
import { cartSaga } from "./cart/cart.saga";

function* rootSaga() {
  yield all([userSaga(), collectionSaga(), categoriesSaga(), cartSaga()]);
}

export default rootSaga;
