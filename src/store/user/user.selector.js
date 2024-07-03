import { createSelector } from "reselect";

const userReducer = (state) => state.user;

export const selectUser = createSelector([userReducer], (user) => user.user);

export const selectLoading = createSelector(
  [userReducer],
  (user) => user.loading
);

export const selectError = createSelector([userReducer], (user) => user.error);
