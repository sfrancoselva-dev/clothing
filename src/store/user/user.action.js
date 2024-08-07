import { createAction } from "../../utils/createAction";
import { USER_TYPES } from "./user.types";

export const actionSigningUp = (displayName, email, password) => {
  const payload = { displayName, email, password };
  return createAction(USER_TYPES.signingUp, payload);
};

export const actionSignUpSuccess = (user) =>
  createAction(USER_TYPES.signUpSuccess, user);

export const actionSignUpFailed = ({ message, code }) =>
  createAction(USER_TYPES.signUpFailed, { message, code });

export const actionSigningOut = () => createAction(USER_TYPES.signingOut);

export const actionSignOutSuccess = () =>
  createAction(USER_TYPES.signOutSuccess);

export const actionSignOutFailed = (err) =>
  createAction(USER_TYPES.signOutFailed, err);

export const actionSigningIn = (email, password) =>
  createAction(USER_TYPES.signingIn, { email, password });

export const actionSignInSuccess = (user) =>
  createAction(USER_TYPES.signInSuccess, user);

export const actionSignInFailed = (err) =>
  createAction(USER_TYPES.signInFailed, err);

export const actionGoogleSigningIn = () =>
  createAction(USER_TYPES.siginingInWithGoogle);

export const actionGoogleSignInSuccess = (user) =>
  createAction(USER_TYPES.googleSignInSuccess, user);

export const actionGoogleSignInFailed = (err) =>
  createAction(USER_TYPES.googleSignInFailed, err);
