import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//highest level react 'layer' takes and renders the App.
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
