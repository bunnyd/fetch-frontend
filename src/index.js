import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

//layout
import NavBar from "views/Components/layout/NavBar";

import NotFound from "views/Components/pages/NotFound";

import indexRoutes from "routes/indexRoutes.jsx";
import loggedInRoutes from "routes/loggedInRoutes.jsx";

import "assets/scss/material-kit-react.css?v=1.3.0";

//redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import store from "./store/store";
import App from "./App";

// <Route path="*" component={NotFound} />

ReactDOM.render(<App />, document.getElementById("root"));
