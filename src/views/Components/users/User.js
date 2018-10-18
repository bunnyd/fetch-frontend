import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Paw from "@material-ui/icons/Pets";
import Camera from "@material-ui/icons/Camera";
import People from "@material-ui/icons/People";
import Add from "@material-ui/icons/Add";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Badge from "components/Badge/Badge.jsx";
import Muted from "components/Typography/Muted.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import Button from "components/CustomButtons/Button.jsx";

import avatar from "assets/img/faces/avatar.jpg";
import marc from "assets/img/faces/marc.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePageStyle.jsx";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userActions } from "../../../actions/userActions";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  render() {
    const { classes, ...rest } = this.props;

    // const { user } = this.props;
    console.log("profile props", this.props);
    // debugger;
    let dogs = this.props.user.dogs || [];
    let meetups = this.props.user.meetups || [];

    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Parallax
          image={require("assets/img/profile-bg2.jpg")}
          filter="dark"
          className={classes.parallax}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img
                      src={this.props.user.picture_url}
                      alt="..."
                      className={imageClasses}
                    />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>
                      {`${this.props.user.first_name} ${
                        this.props.user.last_name
                      }`}
                    </h3>
                    <h6>{this.props.user.title}</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.profileTabs}>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: "Meetups",
                    tabIcon: People,
                    tabContentProfile: (
                      <GridContainer>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={6}
                          className={classes.gridItem}
                        >
                          <h4 className={classes.title}>My Meetups</h4>

                          {meetups.map(meetup => {
                            return (
                              <Card
                                background
                                style={{
                                  backgroundImage: `url(${meetup.picture_url})`
                                }}
                              >
                                <a href="#" />
                                <CardBody
                                  background
                                  className={classes.cardBody}
                                >
                                  <Badge
                                    color="warning"
                                    className={classes.badge}
                                  >
                                    {`${meetup.date}, ${meetup.time}`}
                                  </Badge>
                                  <a href={meetup.url}>
                                    <h2 className={classes.cardTitleWhite}>
                                      {meetup.location_name}
                                    </h2>
                                  </a>
                                </CardBody>
                              </Card>
                            );
                          })}
                        </GridItem>
                      </GridContainer>
                    )
                  },
                  {
                    tabButton: "Dogs",
                    tabIcon: Paw,
                    tabContentProfile: (
                      <div>
                        <GridContainer justify="center">
                          <GridItem
                            xs={12}
                            sm={12}
                            md={6}
                            className={classes.gridItem}
                          >
                            {dogs.map(dog => {
                              return (
                                <Card profile plain className={classes.card}>
                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={5}>
                                      <CardHeader image plain>
                                        <a href="#pablo">
                                          <img
                                            src={dog.picture_url}
                                            alt="..."
                                          />
                                        </a>
                                        <div
                                          className={classes.coloredShadow}
                                          style={{
                                            backgroundImage:
                                              "url({dog.picture_url})",
                                            opacity: "1"
                                          }}
                                        />
                                      </CardHeader>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={7}>
                                      <CardBody plain>
                                        <h4 className={classes.cardTitle}>
                                          {dog.name}
                                        </h4>
                                        <Muted>
                                          <h6>{dog.short_bio}</h6>
                                        </Muted>
                                        <p className={classes.description}>
                                          Breed: {dog.breed}
                                          <br />
                                          Age: {dog.age}
                                          <br />
                                          Sex: {dog.sex}
                                          <br />
                                          Size: {dog.size}
                                        </p>
                                      </CardBody>
                                    </GridItem>
                                  </GridContainer>
                                </Card>
                              );
                            })}
                          </GridItem>
                        </GridContainer>
                      </div>
                    )
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.authentication.user
  };
}

export default connect(mapStateToProps)(withStyles(profilePageStyle)(User));
