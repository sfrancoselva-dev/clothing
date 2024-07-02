import { Categories_Types } from "./categories.types";

const initialState = {
  categories: [],
};

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Categories_Types.fetchCategories:
      return {
        ...state,
        categories: payload,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
