import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PressPage from "./Press";
import * as serviceWorker from "./serviceWorker";
import { Route, HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      {/* basename={"/"} */}
      <Route exact path="/" component={App} />
      <Route path="/press" component={PressPage} />
    </HashRouter>
    {/* <Router>
      <Switch>
        <Route path="/press">
          <Press />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
