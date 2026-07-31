import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assests/font-awesome/css/all.css";

ReactDOM.render(<App />, document.getElementById("root"));

// Remove a legacy service worker controlling this application to prevent stale cached deployments.
serviceWorker.unregister();
