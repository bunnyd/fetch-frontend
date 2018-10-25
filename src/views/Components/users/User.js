import React from "react";
import { Link } from "react-router-dom";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Paw from "@material-ui/icons/Pets";
import People from "@material-ui/icons/People";
import AddCircle from "@material-ui/icons/AddCircle";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Badge from "components/Badge/Badge.jsx";
import Muted from "components/Typography/Muted.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Button from "components/CustomButtons/Button.jsx";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePageStyle.jsx";

import { connect } from "react-redux";
import { getMeetup } from "../../../actions/meetupActions";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  handleMeetup = (event, meetup) => {
    // set global meetup to selected meetup
    this.props.getMeetup(meetup.id);
    // window.history.pushState({}, "", `/meetups/${meetup.id}`);
    // <Meetup key={meetup.id} meetup={meetup} />;
  };
  render() {
    const { classes } = this.props;

    // const { user } = this.props;
    // console.log("profile props", this.props);
    // debugger;
    let dogs = (this.props.user && this.props.user.dogs) || [];

    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
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
                      src={this.props.user && this.props.user.picture_url}
                      alt="..."
                      className={imageClasses}
                    />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>
                      {`${this.props.user && this.props.user.first_name} ${this
                        .props.user && this.props.user.last_name}`}
                    </h3>
                    <h6>{this.props.user && this.props.user.title}</h6>
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

                          {this.props.user &&
                            this.props.user.meetups.map(meetup => {
                              return (
                                <Card
                                  key={meetup.id}
                                  background
                                  style={{
                                    backgroundImage: `url(${
                                      meetup.picture_url
                                    })`
                                  }}
                                >
                                  <CardBody
                                    background
                                    className={classes.cardBody}
                                    onClick={e => this.handleMeetup(e, meetup)}
                                  >
                                    <Badge
                                      color="warning"
                                      className={classes.badge}
                                    >
                                      {`${meetup.date}, ${meetup.time}`}
                                    </Badge>
                                    <Link to={`/meetups/${meetup.id}`}>
                                      <h2 className={classes.cardTitleWhite}>
                                        {meetup.location_name}
                                      </h2>
                                    </Link>
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
                                <Card
                                  profile
                                  plain
                                  className={classes.card}
                                  key={dog.id}
                                >
                                  <GridContainer>
                                    <GridItem xs={12} sm={12} md={5}>
                                      <CardHeader image plain>
                                        <a href="#">
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
                            <GridContainer justify="center">
                              <GridItem xs={12} sm={12} md={5}>
                                <Button
                                  href="/signup-dog"
                                  color="primary"
                                  round
                                >
                                  <AddCircle /> &nbsp;&nbsp;Add a dog
                                </Button>
                              </GridItem>
                            </GridContainer>
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
  return {
    user: state.authentication.user
  };
}

const mapDispatchToProps = {
  getMeetup: getMeetup
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(profilePageStyle)(User));
