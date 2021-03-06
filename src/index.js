import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "normalize.css";
import "./index.scss";

import App from "./components/App/App";

import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
