import React from "react";

import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Schedule from "@material-ui/icons/Schedule";

//////Modal
// react plugin for creating date-time-picker
import Datetime from "react-datetime";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import { connect } from "react-redux";
import {
  fetchDogParks,
  fetchDogRestaurants
} from "../../../actions/yelpActions";
import { getMeetups } from "../../../actions/meetupActions";
import { userActions } from "../../../actions/userActions";
import store from "store/store";

import NavPills from "components/NavPills/NavPills.jsx";

import javascriptStyles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePageStyle.jsx";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

class Meetups extends React.Component {
  anchorElLeft = null;
  anchorElTop = null;
  anchorElBottom = null;
  anchorElRight = null;
  constructor() {
    super();
    this.state = {
      signupModal: false,
      joinLocationName: "",
      joinDate: "",
      joinTime: "",
      joinId: "",
      scheduleLocationName: "",
      scheduleAddress: "",
      scheduleZipCode: "",
      scheduleImageUrl: "",
      scheduleUrl: "",
      currentUserZipCode: "",
      value: 0
    };
  }
  componentDidMount() {
    this.props.getMeetups();
  }

  handleAttendEvent = e => {
    e.preventDefault();
    // debugger;
    // console.log(`${localStorage.getItem("user-id")}`);
    this.props.meetups.forEach(meetup => {
      if (this.state.joinLocationName === meetup.location_name) {
        // debugger;
        fetch(
          `https://nameless-everglades-31188.herokuapp.com/owners/${
            this.props.user.id
          }`,
          {
            method: "PATCH",
            credentials: "same-origin",
            headers: {
              Authorization: `${localStorage.getItem("jwt")}`,
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({
              meetup_ids: [
                {
                  id: `${this.state.joinId}`
                }
              ]
            })
          }
        ) //end fetch
          .then(res => res.json())
          .then(user => {
            //add user to state
            // this.props.setUser({ type: "SET_USER", payload: user });
            store.dispatch({ type: "SET_USER", payload: user });
            this.props.history.push("/profile");
          });
      } //end if
    }); //end forEach
  };

  handleCreateMeetup = e => {
    const dateFormat = require("dateformat");

    const scheduleDate = dateFormat(e.target[3].value, "yyyymmdd");

    const scheduleTime = e.target[4].value;
    debugger;
    fetch(`https://nameless-everglades-31188.herokuapp.com/meetups/`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        location_name: this.state.scheduleLocationName,
        address: this.state.scheduleAddress,
        zip_code: this.state.scheduleZipCode,
        date: scheduleDate,
        picture_url: this.state.scheduleImageUrl,
        time: scheduleTime,
        url: this.state.scheduleUrl
      })
    }) //end fetch
      .then(resp => resp.json());
  };

  handleClickOpen(modal, row = null, dogSearch = null) {
    if (row) {
      this.setState({
        joinLocationName: row.location_name,
        joinDate: row.date,
        joinTime: row.time,
        joinId: row.id
      });
    }
    if (dogSearch) {
      this.setState({
        scheduleLocationName: dogSearch.name,
        scheduleAddress: `${dogSearch.location.display_address[0]}, ${
          dogSearch.location.display_address[1]
        }`,
        scheduleZipCode: dogSearch.location.zip_code,
        scheduleImageUrl: dogSearch.image_url,
        scheduleUrl: dogSearch.url
      });
    }
    var x = [];
    x[modal] = true;
    this.setState(x);
  }

  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { yelpDogParksLoaded, yelpDogRestaurantsLoaded } = this.props;

    if (!yelpDogParksLoaded) {
      this.props.fetchDogParks(this.props.user.zip_code);
    }

    if (!yelpDogRestaurantsLoaded) {
      this.props.fetchDogRestaurants(this.props.user.zip_code);
    }

    const CustomTableCell = withStyles(theme => ({
      head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 15,
        textAlign: "center"
      },
      body: {
        textAlign: "center",
        fontSize: 13
      }
    }))(TableCell);

    return (
      <div>
        {/*Upcoming Events - START*/}
        <h2 align="center">Upcoming Events</h2>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>#</CustomTableCell>
                <CustomTableCell numeric>Where?</CustomTableCell>
                <CustomTableCell numeric>Date</CustomTableCell>
                <CustomTableCell numeric>Time</CustomTableCell>
                <CustomTableCell numeric>Address</CustomTableCell>
                <CustomTableCell numeric />
              </TableRow>
            </TableHead>
            <TableBody>
              {!this.props.meetups.length ? (
                <TableRow className={classes.row}>
                  <CustomTableCell component="th" scope="row">
                    Loading...
                  </CustomTableCell>
                </TableRow>
              ) : (
                this.props.meetups.map(row => {
                  return (
                    <TableRow className={classes.row} key={row.id}>
                      <CustomTableCell component="th" scope="row">
                        {row.id}
                      </CustomTableCell>
                      <CustomTableCell numeric>
                        {row.location_name}
                      </CustomTableCell>
                      <CustomTableCell numeric>{row.date}</CustomTableCell>
                      <CustomTableCell numeric>{row.time}</CustomTableCell>
                      <CustomTableCell numeric>{row.address}</CustomTableCell>
                      <CustomTableCell numeric>
                        {/* BUTTON SMALL MODAL */}
                        <Button
                          block
                          round
                          onClick={() =>
                            this.handleClickOpen("smallModal", row)
                          }
                        >
                          <Check /> Join this meetup
                        </Button>
                        {/* SMALL MODAL START */}
                        <Dialog
                          classes={{
                            root: classes.modalRoot,
                            paper: classes.modal + " " + classes.modalSmall
                          }}
                          open={this.state.smallModal}
                          TransitionComponent={Transition}
                          keepMounted
                          onClose={() => this.handleClose("noticeModal")}
                          aria-labelledby="small-modal-slide-title"
                          aria-describedby="small-modal-slide-description"
                        >
                          <DialogTitle
                            id="small-modal-slide-title"
                            disableTypography
                            className={classes.modalHeader}
                          >
                            <Button
                              simple
                              className={classes.modalCloseButton}
                              key="close"
                              aria-label="Close"
                              onClick={() => this.handleClose("smallModal")}
                            >
                              <Close className={classes.modalClose} />
                            </Button>
                          </DialogTitle>
                          <DialogContent
                            id="small-modal-slide-description"
                            className={
                              classes.modalBody + " " + classes.modalSmallBody
                            }
                          >
                            <h5>
                              <b>
                                Please confirm that you want to attend this
                                meetup:
                              </b>
                              <br />
                              <h6>Location Name:</h6>
                              <b>{this.state.joinLocationName}</b>
                              <h6>Date:</h6>
                              <b>{this.state.joinDate}</b>
                              <h6>Time:</h6>
                              <b>{this.state.joinTime}</b>.
                            </h5>
                          </DialogContent>
                          <DialogActions
                            className={
                              classes.modalFooter +
                              " " +
                              classes.modalFooterCenter
                            }
                          >
                            <Button
                              default
                              onClick={() => this.handleClose("smallModal")}
                              link
                              className={classes.modalSmallFooterFirstButton}
                            >
                              Nevermind
                            </Button>
                            <Button
                              onClick={e => {
                                this.handleClose("smallModal");
                                this.handleAttendEvent(e);
                              }}
                              color="success"
                              key={row.id}
                              default
                              className={
                                classes.modalSmallFooterFirstButton +
                                " " +
                                classes.modalSmallFooterSecondButton
                              }
                            >
                              I'll be there!
                            </Button>
                          </DialogActions>
                        </Dialog>
                        {/* SMALL MODAL END */}
                      </CustomTableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </Paper>
        {/*Upcoming Events - END*/}
        <br /> <br />
        <br />
        <h2 align="center">Schedule a meetup near you!</h2>
        {/*pill start*/}
        <div className={classes.container}>
          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: "Nearby Dog-Friendly Restaurants",
                  tabContent: (
                    <div>
                      <span>
                        <Paper className={classes.root}>
                          <Table className={classes.table}>
                            <TableHead>
                              <TableRow>
                                <CustomTableCell />
                                <CustomTableCell numeric>
                                  Location Name
                                </CustomTableCell>
                                <CustomTableCell numeric>
                                  Address
                                </CustomTableCell>
                                <CustomTableCell numeric>
                                  Rating
                                </CustomTableCell>
                                <CustomTableCell numeric />
                                <CustomTableCell numeric>
                                  Create a Meetup
                                </CustomTableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {!yelpDogRestaurantsLoaded ? (
                                <TableRow className={classes.dogPark}>
                                  <CustomTableCell numeric>
                                    Loading...
                                  </CustomTableCell>
                                </TableRow>
                              ) : (
                                this.props.dogRestaurants &&
                                this.props.dogRestaurants.map(dogRestaurant => {
                                  return (
                                    <TableRow
                                      className={classes.dogPark}
                                      key={dogRestaurant.id}
                                    >
                                      <CustomTableCell
                                        component="th"
                                        scope="row"
                                      >
                                        <img
                                          src={dogRestaurant.image_url}
                                          height="100"
                                          width="auto"
                                        />
                                      </CustomTableCell>
                                      <CustomTableCell numeric>
                                        {dogRestaurant.name}
                                      </CustomTableCell>
                                      <CustomTableCell numeric>
                                        {`${
                                          dogRestaurant.location
                                            .display_address[0]
                                        }, ${
                                          dogRestaurant.location
                                            .display_address[1]
                                        }`}
                                      </CustomTableCell>
                                      <CustomTableCell numeric>
                                        {dogRestaurant.rating}
                                      </CustomTableCell>
                                      <CustomTableCell
                                        component="a"
                                        href={dogRestaurant.url}
                                      >
                                        More Details
                                      </CustomTableCell>
                                      <CustomTableCell numeric>
                                        <Button
                                          block
                                          round
                                          onClick={() =>
                                            this.handleClickOpen(
                                              "signupModal",
                                              null,
                                              dogRestaurant
                                            )
                                          }
                                        >
                                          <Schedule /> Schedule
                                        </Button>
                                      </CustomTableCell>
                                    </TableRow>
                                  );
                                })
                              )}
                            </TableBody>
                          </Table>
                        </Paper>
                      </span>
                      {/* MEETUP MODAL START */}
                      <Dialog
                        classes={{
                          root: classes.modalRoot,
                          paper: classes.modal + " " + classes.modalSignup
                        }}
                        open={this.state.signupModal}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={() => this.handleClose("signupModal")}
                        aria-labelledby="signup-modal-slide-title"
                        aria-describedby="signup-modal-slide-description"
                      >
                        <Card plain className={classes.modalSignupCard}>
                          <DialogTitle
                            id="signup-modal-slide-title"
                            disableTypography
                            className={classes.modalHeader}
                          >
                            <Button
                              simple
                              className={classes.modalCloseButton}
                              key="close"
                              aria-label="Close"
                              onClick={() => this.handleClose("signupModal")}
                            >
                              <Close className={classes.modalClose} />
                            </Button>
                            <h3
                              className={`${classes.cardTitle} ${
                                classes.modalTitle
                              }`}
                            >
                              Schedule a meetup
                            </h3>
                          </DialogTitle>
                          <DialogContent
                            id="signup-modal-slide-description"
                            className={classes.modalBody}
                          >
                            <GridContainer>
                              <GridItem
                                xs={12}
                                sm={5}
                                md={5}
                                className={classes.mlAuto}
                              >
                                <br />
                                <img
                                  src={this.state.scheduleImageUrl}
                                  height="auto"
                                  width="300"
                                />
                              </GridItem>
                              <GridItem
                                xs={12}
                                sm={5}
                                md={5}
                                className={classes.mrAuto}
                              >
                                <form
                                  ref="inputForm"
                                  onSubmit={e => this.handleCreateMeetup(e)}
                                >
                                  <CustomInput
                                    type="text"
                                    labelText="Location"
                                    id="float"
                                    formControlProps={{
                                      fullWidth: true
                                    }}
                                    inputProps={{
                                      value: `${
                                        this.state.scheduleLocationName
                                      }`
                                    }}
                                  />
                                  <CustomInput
                                    type="text"
                                    labelText="Address"
                                    id="float"
                                    formControlProps={{
                                      fullWidth: true
                                    }}
                                    inputProps={{
                                      value: `${this.state.scheduleAddress}`
                                    }}
                                  />
                                  <CustomInput
                                    type="text"
                                    labelText="Zip Code"
                                    id="float"
                                    formControlProps={{
                                      fullWidth: true
                                    }}
                                    inputProps={{
                                      value: `${this.state.scheduleZipCode}`
                                    }}
                                  />
                                  <Datetime
                                    name="scheduleDate"
                                    format="YYYYMMDD"
                                    timeFormat={false}
                                    inputProps={{
                                      placeholder: "Select Date"
                                    }}
                                  />
                                  <Datetime
                                    name="scheduleTime"
                                    dateFormat={false}
                                    inputProps={{
                                      placeholder: "Select Time"
                                    }}
                                  />
                                  <div className={classes.textCenter}>
                                    <Button
                                      type="submit"
                                      label="submit"
                                      color="primary"
                                      round
                                    >
                                      Schedule Meetup
                                    </Button>
                                  </div>
                                </form>
                              </GridItem>
                            </GridContainer>
                          </DialogContent>
                        </Card>
                      </Dialog>
                      {/* MEETUP MODAL END */}
                    </div>
                  )
                },
                {
                  tabButton: "Nearby Dog Parks",
                  tabContent: (
                    <div>
                      {" "}
                      <span>
                        <Paper className={classes.root}>
                          <Table className={classes.table}>
                            <TableHead>
                              <TableRow>
                                <CustomTableCell />
                                <CustomTableCell numeric>
                                  Location Name
                                </CustomTableCell>
                                <CustomTableCell numeric>
                                  Address
                                </CustomTableCell>
                                <CustomTableCell numeric>
                                  Rating
                                </CustomTableCell>
                                <CustomTableCell numeric />
                                <CustomTableCell numeric>
                                  Create a Meetup
                                </CustomTableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {!yelpDogParksLoaded ? (
                                <TableRow className={classes.dogPark}>
                                  <CustomTableCell numeric>
                                    Loading...
                                  </CustomTableCell>
                                </TableRow>
                              ) : (
                                this.props.dogParks &&
                                this.props.dogParks.map(dogPark => {
                                  return (
                                    <TableRow
                                      className={classes.dogPark}
                                      key={dogPark.id}
                                    >
                                      <CustomTableCell
                                        component="th"
                                        scope="row"
                                      >
                                        <img
                                          src={dogPark.image_url}
                                          height="100"
                                          width="auto"
                                        />
                                      </CustomTableCell>
                                      <CustomTableCell numeric>
                                        {dogPark.name}
                                      </CustomTableCell>
                                      <CustomTableCell numeric>
                                        {`${
                                          dogPark.location.display_address[0]
                                        }, ${
                                          dogPark.location.display_address[1]
                                        }`}
                                      </CustomTableCell>
                                      <CustomTableCell numeric>
                                        {dogPark.rating}
                                      </CustomTableCell>
                                      <CustomTableCell
                                        component="a"
                                        href={dogPark.url}
                                      >
                                        More Details
                                      </CustomTableCell>
                                      <CustomTableCell numeric>
                                        <Button
                                          block
                                          round
                                          onClick={() =>
                                            this.handleClickOpen(
                                              "signupModal",
                                              null,
                                              dogPark
                                            )
                                          }
                                        >
                                          <Schedule /> Schedule
                                        </Button>
                                      </CustomTableCell>
                                    </TableRow>
                                  );
                                })
                              )}
                            </TableBody>
                          </Table>
                        </Paper>
                      </span>
                      {/* MEETUP MODAL START */}
                      <Dialog
                        classes={{
                          root: classes.modalRoot,
                          paper: classes.modal + " " + classes.modalSignup
                        }}
                        open={this.state.signupModal}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={() => this.handleClose("signupModal")}
                        aria-labelledby="signup-modal-slide-title"
                        aria-describedby="signup-modal-slide-description"
                      >
                        <Card plain className={classes.modalSignupCard}>
                          <DialogTitle
                            id="signup-modal-slide-title"
                            disableTypography
                            className={classes.modalHeader}
                          >
                            <Button
                              simple
                              className={classes.modalCloseButton}
                              key="close"
                              aria-label="Close"
                              onClick={() => this.handleClose("signupModal")}
                            >
                              <Close className={classes.modalClose} />
                            </Button>
                            <div className={classes.textCenter}>
                              <h3
                                className={`${classes.cardTitle} ${
                                  classes.modalTitle
                                }`}
                              >
                                Schedule a meetup
                              </h3>
                            </div>
                          </DialogTitle>
                          <DialogContent
                            id="signup-modal-slide-description"
                            className={classes.modalBody}
                          >
                            <GridContainer>
                              <GridItem
                                xs={12}
                                sm={5}
                                md={5}
                                className={classes.mlAuto}
                              >
                                <br />
                                <img
                                  src={this.state.scheduleImageUrl}
                                  height="auto"
                                  width="300"
                                />
                              </GridItem>
                              <GridItem
                                xs={12}
                                sm={5}
                                md={5}
                                className={classes.mrAuto}
                              >
                                <form
                                  ref="inputForm"
                                  onSubmit={e => this.handleCreateMeetup(e)}
                                >
                                  <CustomInput
                                    type="text"
                                    labelText="Location"
                                    id="float"
                                    formControlProps={{
                                      fullWidth: true
                                    }}
                                    inputProps={{
                                      value: `${
                                        this.state.scheduleLocationName
                                      }`
                                    }}
                                  />
                                  <CustomInput
                                    type="text"
                                    labelText="Address"
                                    id="float"
                                    formControlProps={{
                                      fullWidth: true
                                    }}
                                    inputProps={{
                                      value: `${this.state.scheduleAddress}`
                                    }}
                                  />
                                  <CustomInput
                                    type="text"
                                    labelText="Zip Code"
                                    id="float"
                                    formControlProps={{
                                      fullWidth: true
                                    }}
                                    inputProps={{
                                      value: `${this.state.scheduleZipCode}`
                                    }}
                                  />
                                  <Datetime
                                    name="scheduleDate"
                                    format="YYYYMMDD"
                                    timeFormat={false}
                                    inputProps={{
                                      placeholder: "Select Date"
                                    }}
                                  />
                                  <Datetime
                                    name="scheduleTime"
                                    dateFormat={false}
                                    inputProps={{
                                      placeholder: "Select Time"
                                    }}
                                  />
                                  <div className={classes.textCenter}>
                                    <Button
                                      type="submit"
                                      label="submit"
                                      color="primary"
                                      round
                                    >
                                      Schedule Meetup
                                    </Button>
                                  </div>
                                </form>
                              </GridItem>
                            </GridContainer>
                          </DialogContent>
                        </Card>
                      </Dialog>
                      {/* MEETUP MODAL END */}
                    </div>
                  )
                }
              ]}
            />
          </div>
        </div>
        {/*pill end*/}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dogParks: state.yelp.dogParks,
    yelpDogParksLoaded: state.yelp.yelpDogParksLoaded,
    dogRestaurants: state.yelp.dogRestaurants,
    yelpDogRestaurantsLoaded: state.yelp.yelpDogRestaurantsLoaded,
    meetups: state.meetups,
    user: state.authentication.user
  };
}

const mapDispatchToProps = {
  fetchDogParks: fetchDogParks,
  fetchDogRestaurants: fetchDogRestaurants,
  getMeetups: getMeetups,
  setUser: userActions.setUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(profilePageStyle)(withStyles(javascriptStyles)(Meetups)));
