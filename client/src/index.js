import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { comicReducer } from "./reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";

let store = createStore(comicReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
