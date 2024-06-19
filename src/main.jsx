import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import Index from "./Memo";
import ChangeState from "./Components/ChangeState";
import { Constant } from "./Components/UseEffect";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Constant />
  </React.StrictMode>
);
