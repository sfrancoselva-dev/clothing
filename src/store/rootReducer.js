import { combineReducers } from "redux";
import categoriesReducer from "./categories/categories.reducer";
import userReducer from "./user/user.reducer";
import { collectionReducer } from "./collections/collection.reducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  user: userReducer,
  collection: collectionReducer,
});

export default rootReducer;
