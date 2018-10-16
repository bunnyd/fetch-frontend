import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "views/Components/layout/NavBar";
import indexRoutes from "routes/indexRoutes.jsx";
import loggedInRoutes from "routes/loggedInRoutes.jsx";

//redux
//redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import store from "./store/store";
import { userConstants } from "./actions/types";

//bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    console.log("jwt", localStorage.jwt);

    if (localStorage.jwt !== undefined) {
      fetch("http://localhost:3000/authenticate", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      })
        .then(data => data.json())
        .then(user => {
          console.log(user);
          store.dispatch({ type: userConstants.SET_USER, payload: user.owner });
        });
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <NavBar />
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
                  //loggedInUser={this.state.loggedInUser}
                />
              );
            })}
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
