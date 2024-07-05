import { COLLECTION_TYPES } from "./collection.types";

const initialState = {
  collection: null,
};

export const collectionReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case COLLECTION_TYPES.fetchingCollection:
      return {
        ...state,
        loading: true,
        isFetched: false,
      };

    case COLLECTION_TYPES.fetchCollectionSuccess:
      return {
        ...state,
        collection: payload,
        loading: false,
        error: null,
        isFetched: true,
      };

    case COLLECTION_TYPES.fetchCollectionFailed:
      return {
        ...state,
        error: payload,
        loading: false,
        isFetched: false,
      };

    default:
      return state;
  }
};
