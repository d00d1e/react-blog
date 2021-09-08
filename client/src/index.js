import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./context/context";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
