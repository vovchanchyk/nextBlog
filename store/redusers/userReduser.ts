import { typeAction, userState } from "../../types/reduserTypes";
import * as types from "../types";

const initialState: userState = {
  user: {},
  verifity: false,
};

export const userReduser = (
  state = initialState,
  action: typeAction
): userState => {
  switch (action.type) {
    case types.LOG_IN:
      return {
        ...state,
        user: action.payload,
        verifity: true,
      };

      break;
    case types.SIGN_UP:
      return {
        ...state,
        user: action.payload,
        verifity: true,
      };
    case types.LOG_OUT:
      return {
        ...state,
        user: {},
        verifity: false,
      };

    default:
      return state;
      break;
  }
};
