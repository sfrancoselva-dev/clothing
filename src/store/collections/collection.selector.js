import { createSelector } from "reselect";

const collectionReducer = (state) => state.collection;

export const selectCollection = createSelector(
  [collectionReducer],
  (collection) => collection.collection
);

export const selectCollectionLoading = createSelector(
  [collectionReducer],
  (collection) => collection.loading
);

export const selectFetchedStatus = createSelector(
  [collectionReducer],
  (collection) => collection.isFetched
);
