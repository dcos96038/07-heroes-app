import { types } from "../types/types";

// const state = {
//   name: 'Diego',
//   logged: true,
// }

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
