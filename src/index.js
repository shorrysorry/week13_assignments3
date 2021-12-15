import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import bucket from "./modules/store";

const store = createStore(bucket);
console.log(store.getState());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
