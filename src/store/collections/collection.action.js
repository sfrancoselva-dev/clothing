import { createAction } from "../../utils/createAction";
import { COLLECTION_TYPES } from "./collection.types";

export const actionFetchingCollection = () =>
  createAction(COLLECTION_TYPES.fetchingCollection);

export const actionFetchCollectionSuccess = (collection) =>
  createAction(COLLECTION_TYPES.fetchCollectionSuccess, collection);

export const actionFetchCollectionFailed = (err) =>
  createAction(COLLECTION_TYPES.fetchCollectionFailed, err);
