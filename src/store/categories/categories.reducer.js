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
        isFetched: false,
      };

    case Categories_Types.fetchCategoriesSuccess:
      return {
        ...state,
        loading: false,
        categories: payload,
        error: null,
        isFetched: true,
      };

    case Categories_Types.fetchCategoriesFailed:
      return {
        ...state,
        loading: false,
        error: payload,
        isFetched: false,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
