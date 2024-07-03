import { combineReducers } from "redux";
import categoriesReducer from "./categories/categories.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  user: userReducer,
});

export default rootReducer;
