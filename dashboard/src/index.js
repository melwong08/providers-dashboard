import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "http://localhost:3001";

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);