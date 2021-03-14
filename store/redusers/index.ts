import { type } from "os";
import { combineReducers } from "redux";

import { userReduser } from "./userReduser";

export const rootReduser = combineReducers({
  user: userReduser,
});

export type RootState = ReturnType<typeof rootReduser>;
