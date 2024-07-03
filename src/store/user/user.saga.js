import { USER_TYPES } from "./user.types";

import { takeLatest, call, put } from "redux-saga/effects";

import { signUpFB } from "../../utils/firebase.utils";

import { actionSignUpSuccess, actionSignUpFailed } from "./user.action";

function* signUpSaga({ payload }) {
  const { displayName, email, password } = payload;
  try {
    const user = yield call(signUpFB, displayName, email, password);
    yield put(actionSignUpSuccess(user));
  } catch (err) {
    yield put(actionSignUpFailed(err));
  }
}

export function* userSaga() {
  yield takeLatest(USER_TYPES.signingUp, signUpSaga);
}
