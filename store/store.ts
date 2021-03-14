import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {} from "react-redux";

import { rootReduser } from "./redusers";

const middleware = [thunk];

const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
