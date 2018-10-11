import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//layout
import Header from "./components/layout/Header";
//meetups
import AddMeetup from "./components/meetups/AddMeetup";
import Meetups from "./components/meetups/Meetups";

//users
import EditUser from "./components/users/EditUser";
import User from "./components/users/User";

//pages
import Home from "./components/pages/Home";
import Entertainment from "./components/pages/Entertainment";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Logout from "./components/pages/Logout";
import NotFound from "./components/pages/NotFound";

//redux
import { Provider } from "react-redux";
import store from "./store";

//bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/dogsareawesome" component={Entertainment} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/logout" component={Logout} />
                <Route
                  exact
                  path="/login"
                  component={Login}
                  // loggedInUser={this.state.loggedInUser}
                />
                <Route
                  exact
                  path="/profile"
                  // loggedInUser={this.state.loggedInUser}
                  component={User}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
