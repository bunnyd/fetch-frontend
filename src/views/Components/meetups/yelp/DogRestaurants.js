import React from "react";
import { connect } from "react-redux";
import {
  fetchDogParks,
  fetchDogRestaurants
} from "../../../actions/yelpActions";

function dogRestaurants(props) {
  return (
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
                <CustomTableCell numeric>{row.location_name}</CustomTableCell>
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
  );
}

function mapStateToProps(state) {
  return {
    dogParks: state.yelp.dogParks,
    yelpDogParksLoaded: state.yelp.yelpDogParksLoaded,
    dogRestaurants: state.yelp.dogRestaurants,
    yelpDogRestaurantsLoaded: state.yelp.yelpDogRestaurantsLoaded
  };
}

const mapDispatchToProps = {
  fetchDogParks: fetchDogParks,
  fetchDogRestaurants: fetchDogRestaurants
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(dogRestaurants));
