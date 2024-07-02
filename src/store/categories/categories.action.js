import { createAction } from "../../utils/createAction";
import { Categories_Types } from "./categories.types";

export const actionFetchCategories = (categories) =>
  createAction(Categories_Types.fetchCategories, categories);
