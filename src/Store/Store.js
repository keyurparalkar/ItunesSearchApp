import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import reducer from "./Reducers.js";
import appState from "./GlobalState.js";

const middlewares = applyMiddleware(thunk, logger);
const store = createStore(reducer, appState, middlewares);

export default store;