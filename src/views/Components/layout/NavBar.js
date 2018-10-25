import React from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Header from "components/Header/Header.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";

import logo from "assets/img/logo-white.png";

class NavBar extends React.Component {
  handleLogOut = () => {
    localStorage.clear();
  };

  render() {
    const { classes } = this.props;
    return (
      <Header
        href="/"
        brand={logo}
        color="info"
        rightLinks={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                href="/adopt-a-dog"
                className={classes.navLink}
                color="transparent"
              >
                Adopt a dog
              </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Button
                href="/dogs-are-awesome"
                className={classes.navLink}
                color="transparent"
              >
                Mood Booster
              </Button>
            </ListItem>
            {localStorage.getItem("jwt") ? (
              <ListItem className={classes.listItem}>
                <Button
                  href="/meetups"
                  className={classes.navLink}
                  color="transparent"
                >
                  Join a Meetup
                </Button>
              </ListItem>
            ) : null}
            {localStorage.getItem("jwt") ? (
              <ListItem className={classes.listItem}>
                <CustomDropdown
                  left
                  hoverColor="info"
                  buttonText="Profile"
                  buttonProps={{
                    className: classes.navLink,
                    color: "transparent"
                  }}
                  dropdownList={[
                    <Link to="/profile">My Profile</Link>,
                    { divider: true },
                    <Link to="/logout" onClick={this.handleLogOut}>
                      Logout
                    </Link>
                  ]}
                />
              </ListItem>
            ) : (
              <ListItem className={classes.listItem}>
                <Button
                  href="/login"
                  className={classes.navLink}
                  color="transparent"
                >
                  Login
                </Button>
              </ListItem>
            )}
          </List>
        }
      />
    );
  }
}

export default withStyles(navbarsStyle)(NavBar);
