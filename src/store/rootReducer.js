import { combineReducers } from "redux";
import categoriesReducer from "./categories/categories.reducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

export default rootReducer;
