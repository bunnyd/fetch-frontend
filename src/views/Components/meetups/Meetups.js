import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import Button from "components/CustomButtons/Button.jsx";

// @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";
// material-ui icons
// import Check from "@material-ui/icons/CheckCircle";
import Schedule from "@material-ui/icons/Schedule";

// core components
// import Table from "components/Table/Table.jsx";
// import Button from "components/CustomButtons/Button.jsx";

import style from "assets/jss/material-kit-react/views/componentsSections/contentAreas.jsx";

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
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
import Checkbox from "@material-ui/core/Checkbox";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
import Notifications from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Assignment from "@material-ui/icons/Assignment";
import Mail from "@material-ui/icons/Mail";
import Face from "@material-ui/icons/Face";
import Timeline from "@material-ui/icons/Timeline";
import Password from "@material-ui/icons/Lock";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import AttachFile from "@material-ui/icons/AttachFile";
import Layers from "@material-ui/icons/Layers";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Instruction from "components/Instruction/Instruction.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomFileInput from "components/CustomFileInput/CustomFileInput.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Accordion from "components/Accordion/Accordion.jsx";
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";

import javascriptStyles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx";

import { connect } from "react-redux";
import {
  fetchDogParks,
  fetchDogRestaurants
} from "../../../actions/yelpActions";
import { getMeetups } from "../../../actions/meetupActions";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class Meetups extends React.Component {
  anchorElLeft = null;
  anchorElTop = null;
  anchorElBottom = null;
  anchorElRight = null;
  constructor() {
    super();
    this.state = {
      dogRestaurantsClicked: false,
      dogParksClicked: false,
      signupModal: false
    };
  }
  componentDidMount() {
    this.props.fetchDogParks();
    this.props.fetchDogRestaurants();
    this.props.getMeetups();
  }

  handleAttendEvent = (e, row) => {
    e.preventDefault();
    console.log(`I'm coming to ${row.id} ${row.location_name}`);
  };

  handleCreateMeetup = e => {
    e.preventDefault();
    console.log("Create meetup clicked");
  };

  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }

  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }

  render() {
    // debugger;
    console.log("meetup page", this.props);

    const { classes } = this.props;

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
                <CustomTableCell numeric>Zip Code</CustomTableCell>
                <CustomTableCell numeric>Click to Attend</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.meetups.map(row => {
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
                    <CustomTableCell numeric>{row.zip_code}</CustomTableCell>
                    <CustomTableCell numeric>
                      <Button
                        justIcon
                        size="sm"
                        color="primary"
                        key={row.id}
                        onClick={e => this.handleAttendEvent(e, row)}
                      >
                        <Check />
                      </Button>
                    </CustomTableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
        {/*Upcoming Events - END*/}
        <br /> <br />
        <br />
        {/*Schedule Meetup - START*/}
        <h2 align="center">Schedule a meetup near you!</h2>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell />
                <CustomTableCell numeric>Location Name</CustomTableCell>
                <CustomTableCell numeric>Address</CustomTableCell>
                <CustomTableCell numeric>Rating</CustomTableCell>
                <CustomTableCell numeric />
                <CustomTableCell numeric>Create a Meetup</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.dogParks.map(row => {
                return (
                  <TableRow className={classes.row} key={row.id}>
                    <CustomTableCell component="th" scope="row">
                      <img src={row.image_url} height="100" width="auto" />
                    </CustomTableCell>
                    <CustomTableCell numeric>{row.name}</CustomTableCell>
                    <CustomTableCell numeric>
                      {`${row.location.display_address[0]}, ${
                        row.location.display_address[1]
                      }`}
                    </CustomTableCell>
                    <CustomTableCell numeric>{row.rating}</CustomTableCell>
                    <CustomTableCell component="a" href={row.url}>
                      More Details
                    </CustomTableCell>
                    <CustomTableCell numeric>
                      <Button
                        block
                        round
                        key={row.id}
                        onClick={() => this.handleClickOpen("signupModal")}
                      >
                        <Schedule /> Schedule
                      </Button>
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
                                <InfoArea
                                  className={classes.infoArea}
                                  title="Marketing"
                                  description={
                                    <p>
                                      We've created the marketing campaign of
                                      the website. It was a very interesting
                                      collaboration.
                                    </p>
                                  }
                                  icon={Timeline}
                                  iconColor="rose"
                                />
                                <InfoArea
                                  className={classes.infoArea}
                                  title="Fully Coded in HTML5"
                                  description={
                                    <p>
                                      We've developed the website with HTML5 and
                                      CSS3. The client has access to the code
                                      using GitHub.
                                    </p>
                                  }
                                  icon={Code}
                                  iconColor="primary"
                                />
                                <InfoArea
                                  className={classes.infoArea}
                                  title="Built Audience"
                                  description={
                                    <p>
                                      There is also a Fully Customizable CMS
                                      Admin Dashboard for this product.
                                    </p>
                                  }
                                  icon={Group}
                                  iconColor="info"
                                />
                              </GridItem>
                              <GridItem
                                xs={12}
                                sm={5}
                                md={5}
                                className={classes.mrAuto}
                              >
                                <form className={classes.form}>
                                  <CustomInput
                                    formControlProps={{
                                      fullWidth: true,
                                      className:
                                        classes.customFormControlClasses
                                    }}
                                    inputProps={{
                                      startAdornment: (
                                        <InputAdornment
                                          position="start"
                                          className={classes.inputAdornment}
                                        >
                                          <Face
                                            className={
                                              classes.inputAdornmentIcon
                                            }
                                          />
                                        </InputAdornment>
                                      ),
                                      placeholder: "Location Name..."
                                    }}
                                  />
                                  <CustomInput
                                    formControlProps={{
                                      fullWidth: true,
                                      className:
                                        classes.customFormControlClasses
                                    }}
                                    inputProps={{
                                      startAdornment: (
                                        <InputAdornment
                                          position="start"
                                          className={classes.inputAdornment}
                                        >
                                          <Email
                                            className={
                                              classes.inputAdornmentIcon
                                            }
                                          />
                                        </InputAdornment>
                                      ),
                                      placeholder: "Address..."
                                    }}
                                  />
                                  <CustomInput
                                    formControlProps={{
                                      fullWidth: true,
                                      className:
                                        classes.customFormControlClasses
                                    }}
                                    inputProps={{
                                      startAdornment: (
                                        <InputAdornment
                                          position="start"
                                          className={classes.inputAdornment}
                                        >
                                          <Password
                                            className={
                                              classes.inputAdornmentIcon
                                            }
                                          />
                                        </InputAdornment>
                                      ),
                                      placeholder: "Zip Code..."
                                    }}
                                  />
                                  <CustomInput
                                    formControlProps={{
                                      fullWidth: true,
                                      className:
                                        classes.customFormControlClasses
                                    }}
                                    inputProps={{
                                      startAdornment: (
                                        <InputAdornment
                                          position="start"
                                          className={classes.inputAdornment}
                                        >
                                          <Email
                                            className={
                                              classes.inputAdornmentIcon
                                            }
                                          />
                                        </InputAdornment>
                                      ),
                                      placeholder: "Date..."
                                    }}
                                  />
                                  <CustomInput
                                    formControlProps={{
                                      fullWidth: true,
                                      className:
                                        classes.customFormControlClasses
                                    }}
                                    inputProps={{
                                      startAdornment: (
                                        <InputAdornment
                                          position="start"
                                          className={classes.inputAdornment}
                                        >
                                          <Email
                                            className={
                                              classes.inputAdornmentIcon
                                            }
                                          />
                                        </InputAdornment>
                                      ),
                                      placeholder: "Time..."
                                    }}
                                  />
                                  <FormControlLabel
                                    classes={{
                                      label: classes.label
                                    }}
                                    control={
                                      <Checkbox
                                        tabIndex={-1}
                                        onClick={() => this.handleToggle(1)}
                                        checkedIcon={
                                          <Check
                                            className={classes.checkedIcon}
                                          />
                                        }
                                        icon={
                                          <Check
                                            className={classes.uncheckedIcon}
                                          />
                                        }
                                        classes={{
                                          checked: classes.checked,
                                          root: classes.checkRoot
                                        }}
                                      />
                                    }
                                    label={
                                      <span>
                                        I agree to the{" "}
                                        <a href="#pablo">
                                          terms and conditions
                                        </a>
                                        .
                                      </span>
                                    }
                                  />
                                  <div className={classes.textCenter}>
                                    <Button round color="primary">
                                      Get started
                                    </Button>
                                  </div>
                                </form>
                              </GridItem>
                            </GridContainer>
                          </DialogContent>
                        </Card>
                      </Dialog>
                      {/* MEETUP MODAL END */}
                    </CustomTableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
        {/*Schedule Meetup - END*/}
      </div>
    );
  }
}

Meetups.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    dogParks: state.yelp.dogParks,
    yelpDogParksLoaded: state.yelp.yelpDogParksLoaded,
    dogRestaurants: state.yelp.dogRestaurants,
    yelpDogRestaurantsLoaded: state.yelp.yelpDogRestaurantsLoaded,
    meetups: state.meetup.meetups
  };
}

const mapDispatchToProps = {
  fetchDogParks: fetchDogParks,
  fetchDogRestaurants: fetchDogRestaurants,
  getMeetups: getMeetups
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(javascriptStyles)(Meetups));
