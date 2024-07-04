import { USER_TYPES } from "./user.types";

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_TYPES.signingUp:
      return {
        ...state,
        loading: true,
      };
    case USER_TYPES.signUpSuccess:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case USER_TYPES.signUpFailed:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case USER_TYPES.signingOut:
      return {
        ...state,
        loading: true,
      };

    case USER_TYPES.signOutSuccess:
      return {
        ...state,
        loading: false,
        user: null,
      };

    case USER_TYPES.signOutFailed:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
