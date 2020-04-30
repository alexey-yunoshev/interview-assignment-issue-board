import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { rootSaga } from "./rootSaga";

const saga = createSagaMiddleware();

const composeArgs = [applyMiddleware(saga)];

if (process.env.NODE_ENV !== "test" && window.__REDUX_DEVTOOLS_EXTENSION__) {
  composeArgs.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

export const store = createStore(rootReducer, compose(...composeArgs));

saga.run(rootSaga);
