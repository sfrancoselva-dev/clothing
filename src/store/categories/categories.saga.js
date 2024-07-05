import { takeLatest, put, call } from "redux-saga/effects";
import { Categories_Types } from "./categories.types";
import { getCollectionFB } from "../../utils/firebase.utils";
import {
  actionFetchCategoriesSuccess,
  actionFetchCategoriesFailed,
} from "./categories.action";
function* fetchCategoriesSaga() {
  try {
    const categories = yield call(getCollectionFB, "categories");
    if (categories) {
      yield put(actionFetchCategoriesSuccess(categories));
    }
  } catch (err) {
    yield put(actionFetchCategoriesFailed(err));
    yield console.error(err);
  }
}

export function* categoriesSaga() {
  yield takeLatest(Categories_Types.fetchingCategories, fetchCategoriesSaga);
}
