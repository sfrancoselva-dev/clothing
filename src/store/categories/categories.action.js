import { createAction } from "../../utils/createAction";
import { Categories_Types } from "./categories.types";

export const actionFetchingCategories = () =>
  createAction(Categories_Types.fetchingCategories);

export const actionFetchCategoriesSuccess = (categories) =>
  createAction(Categories_Types.fetchCategoriesSuccess, categories);

export const actionFetchCategoriesFailed = (err) =>
  createAction(Categories_Types.fetchCategoriesFailed, err);
