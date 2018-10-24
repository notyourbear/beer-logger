import React from "react";
import ReactDOM from "react-dom";
import { APP_CONTAINER_SELECTOR } from "./config";

import App from "./app.jsx";

ReactDOM.render(<App />, document.querySelector(APP_CONTAINER_SELECTOR));
