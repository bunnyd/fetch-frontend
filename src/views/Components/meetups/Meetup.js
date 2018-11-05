import React, { Component } from "react";
import { connect } from "react-redux";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import productStyle from "assets/jss/material-kit-react/views/productStyle.jsx";

import { getMeetup } from "../../../actions/meetupActions";

class Meetup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    // {this.props.}this.props.history.push("/profile");

    // this.props.getMeetup();
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    console.log(this.props);
    // debugger;
    const { classes, meetup, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgCard,
      classes.imgFluid
    );

    if (!this.props.meetup.id) {
      return (
        <div className="cd-section" {...rest}>
          <div className={classes.blog}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem
                  xs={12}
                  sm={8}
                  md={8}
                  className={`${classes.mlAuto} ${classes.mrAuto}`}
                >
                  <h2 className={classes.title}>Loading.....</h2>
                  <h4>
                    If this is taking too long, please select the meetup again
                    in your
                    <a href="/profile"> profile</a>
                  </h4>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        {!this.props.meetup.id ? (
          <div className="cd-section" {...rest}>
            <div className={classes.blog}>
              <div className={classes.container}>
                <GridContainer>
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={`${classes.mlAuto} ${classes.mrAuto}`}
                  >
                    <h2 className={classes.title}>Loading.....</h2>
                    <h4>
                      If this is taking too long, please select the meetup again
                      in your
                      <a href="/profile"> profile</a>
                    </h4>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className={classes.section}>
              <div className={classes.container}>
                <h1 className={classes.title}>
                  {meetup && meetup.location_name}
                </h1>
                <img
                  src={meetup && meetup.picture_url}
                  alt="..."
                  className={imageClasses}
                />
                <br />
                <GridContainer justify="center">
                  <h4>
                    <b>Address:</b> {meetup && meetup.address}
                    <br />
                    <b>Date:</b> {meetup && meetup.date}
                    <br />
                    <b>Time:</b> {meetup && meetup.time}
                    <br />
                  </h4>
                  <br />
                  <div className={classes.container}>
                    <GridContainer justify="center">
                      <Button href={meetup && meetup.url} color="primary" round>
                        &nbsp;&nbsp;Details about location
                      </Button>
                    </GridContainer>
                  </div>
                </GridContainer>
              </div>
            </div>
            <div className={classes.section}>
              <div className={classes.container}>
                <h2>Dogs Attending this Event</h2>
                <GridContainer>
                  {meetup.dogs &&
                    meetup.dogs.flat().map(dog => {
                      return (
                        <GridItem md={4} sm={4}>
                          <Card product plain key={dog.id}>
                            <CardHeader image plain>
                              <a href="#">
                                <img src={dog.picture_url} alt="..." />
                              </a>
                              <div
                                className={classes.coloredShadow}
                                style={{
                                  backgroundImage: `url(${dog.picture_url})`,
                                  opacity: 1
                                }}
                              />
                            </CardHeader>
                            <CardBody className={classes.textCenter} plain>
                              <h2 className={classes.cardTitle}>{dog.name}</h2>
                              <h4 className={classes.cardTitle}>
                                {dog.short_bio}
                              </h4>
                              <h6 className={classes.cardDescription}>
                                <b>Breed:</b> {dog.breed}
                                <br />
                                <b>Age:</b> {dog.age}
                                <br />
                                <b>Sex:</b> {dog.sex}
                                <br />
                                <b>Size:</b> {dog.size}
                              </h6>
                            </CardBody>
                          </Card>
                        </GridItem>
                      );
                    })}
                </GridContainer>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    meetup: state.meetup
  };
}

const mapDispatchToProps = {
  getMeetup: getMeetup
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(productStyle)(Meetup));
