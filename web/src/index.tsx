import ReactDOM from "react-dom/client";
import * as React from "react";
import App from "./App";
import { Provider } from "react-redux";
import myReducer from "./reducers";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={myReducer}>
    <App />
  </Provider>
);
