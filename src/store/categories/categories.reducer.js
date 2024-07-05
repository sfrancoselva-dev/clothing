import { Categories_Types } from "./categories.types";

const initialState = {
  categories: [],
};

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Categories_Types.fetchingCategories:
      return {
        ...state,
        loading: true,
      };

    case Categories_Types.fetchCategoriesSuccess:
      return {
        ...state,
        loading: false,
        categories: payload,
        error: null,
      };

    case Categories_Types.fetchCategoriesFailed:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
