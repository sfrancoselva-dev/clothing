import { takeLatest, call, put } from "redux-saga/effects";
import { COLLECTION_TYPES } from "./collection.types";
import { getCollectionFB } from "../../utils/firebase.utils";
import {
  actionFetchCollectionSuccess,
  actionFetchCollectionFailed,
} from "./collection.action";
function* fetchCollectionSaga() {
  try {
    const collection = yield call(getCollectionFB, "CategoryCollections");

    if (collection) {
      yield put(actionFetchCollectionSuccess(collection));
    }
  } catch (err) {
    yield put(actionFetchCollectionFailed(err));
    yield console.error(err);
  }
}

export function* collectionSaga() {
  yield takeLatest(COLLECTION_TYPES.fetchingCollection, fetchCollectionSaga);
}
