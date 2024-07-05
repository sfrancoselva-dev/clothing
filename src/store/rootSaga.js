import { all } from "redux-saga/effects";
import { userSaga } from "./user/user.saga";
import { collectionSaga } from "./collections/collection.saga";

function* rootSaga() {
  yield all([userSaga(), collectionSaga()]);
}

export default rootSaga;
