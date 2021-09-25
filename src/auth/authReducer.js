import {types} from "../types/types";

export const authReducer = (state = {}, action) => {
  if (action.type === types.login) {
    return {
      ...action.payload,
      logged: true,
    };
  }

  if (action.type === types.logout) {
    return {
      logged: false,
    };
  }

  return state;
};
