import * as ReactDOM from "react-dom/client";
import "./index.css";
import Clock from "src/app";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>,
);
