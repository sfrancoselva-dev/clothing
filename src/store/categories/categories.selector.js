import { createSelector } from "reselect";

const categoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [categoriesReducer],
  (categories) => categories.categories
);
