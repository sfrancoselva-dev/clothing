import { all } from "redux-saga/effects";
import { userSaga } from "./user/user.saga";
import { collectionSaga } from "./collections/collection.saga";
import { categoriesSaga } from "./categories/categories.saga";

function* rootSaga() {
  yield all([userSaga(), collectionSaga(), categoriesSaga()]);
}

export default rootSaga;
