import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import "./index.css";
import Composite from "./Composite";

/**
 * Serves as the entry-point for the application
 */
// ReactDOM.render(<Composite />,document.getElementById('root'));

const store = configureStore();

render(
  <Provider store={store}>
    <Composite />
  </Provider>,
  document.getElementById("root")
);
