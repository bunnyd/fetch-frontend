import React from "react";
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Header from "components/Header/Header.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.jsx";

import image from "assets/img/bg.jpg";
import profileImage from "assets/img/faces/avatar.jpg";

class NavBar extends React.Component {
  handleLogOut = () => {
    localStorage.clear();
  };

  render() {
    const { classes } = this.props;
    return (
      <Header
        href="/"
        brand="BarkBuddy"
        color="info"
        rightLinks={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Button
                href="/adoptadog"
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
                    <Link to="/profile">Account</Link>,
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
