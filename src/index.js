import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

//layout
import Header from "views/Components/layout/Header";

import NotFound from "views/Components/pages/NotFound";

import indexRoutes from "routes/indexRoutes.jsx";
import loggedInRoutes from "routes/loggedInRoutes.jsx";

import "assets/scss/material-kit-react.css?v=1.3.0";

//redux
import { Provider } from "react-redux";
import store from "./store";

var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Header />

        {indexRoutes.map((prop, key) => {
          return (
            <Route
              exact
              path={prop.path}
              key={key}
              component={prop.component}
            />
          );
        })}
        {loggedInRoutes.map((prop, key) => {
          return (
            <Route
              exact
              path={prop.path}
              key={key}
              component={prop.component}
              // loggedInUser={this.state.loggedInUser}
            />
          );
        })}
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
