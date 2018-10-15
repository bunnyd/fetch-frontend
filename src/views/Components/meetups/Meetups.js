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
import withStyles from "@material-ui/core/styles/withStyles";
// material-ui icons
import Check from "@material-ui/icons/CheckCircle";
import Schedule from "@material-ui/icons/Schedule";

import Accordion from "components/Accordion/Accordion.jsx";

// core components
// import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";

import style from "assets/jss/material-kit-react/views/componentsSections/contentAreas.jsx";

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

class Meetups extends React.Component {
  constructor() {
    super();
    this.state = {
      dogRestaurantsClicked: false,
      dogParksClicked: false
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
                        justIcon
                        size="sm"
                        color="primary"
                        key={row.id}
                        onClick={e => this.handleCreateMeetup(e)}
                      >
                        <Schedule />
                      </Button>
                      
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
)(withStyles(styles)(Meetups));
