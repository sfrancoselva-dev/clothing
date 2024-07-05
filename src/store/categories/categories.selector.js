import { createSelector } from "reselect";

const categoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [categoriesReducer],
  (categories) => categories.categories
);

export const selectCategoriesLoading = createSelector(
  [categoriesReducer],
  (categories) => categories.loading
);
