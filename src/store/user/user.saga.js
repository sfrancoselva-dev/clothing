import { USER_TYPES } from "./user.types";

import { takeLatest, call, put } from "redux-saga/effects";

import { signUpFB, signOutFB, signInFB } from "../../utils/firebase.utils";

import {
  actionSignUpSuccess,
  actionSignUpFailed,
  actionSignOutSuccess,
  actionSignOutFailed,
  actionSignInSuccess,
  actionSignInFailed,
} from "./user.action";

function* signUpSaga({ payload }) {
  const { displayName, email, password } = payload;
  try {
    const user = yield call(signUpFB, displayName, email, password);
    yield put(actionSignUpSuccess(user));
  } catch (err) {
    yield put(actionSignUpFailed(err));
  }
}

function* signInSaga({ payload }) {
  const { email, password } = payload;

  try {
    const user = yield call(signInFB, email, password);
    yield put(actionSignInSuccess(user));
  } catch (err) {
    yield put(actionSignInFailed(err));
  }
}

function* signOutSaga() {
  try {
    yield call(signOutFB);
    yield put(actionSignOutSuccess());
  } catch (err) {
    yield put(actionSignOutFailed(err));
  }
}

export function* userSaga() {
  yield takeLatest(USER_TYPES.signingUp, signUpSaga);
  yield takeLatest(USER_TYPES.signingOut, signOutSaga);
  yield takeLatest(USER_TYPES.signingIn, signInSaga);
}
