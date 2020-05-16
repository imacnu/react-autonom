import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./pages/Login";
import * as serviceWorker from "./serviceWorker";
import i18n from "./languages/i18next";

ReactDOM.render(
  <React.StrictMode>
    <Login></Login>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
