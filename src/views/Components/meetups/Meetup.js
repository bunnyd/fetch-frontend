import React, { Component } from "react";
import { connect } from "react-redux";
import { getMeetups } from "../../../actions/meetupActions";

class Meetup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getMeetups();
  }
  render() {
    console.log(this.props);
    return <div>Meetup</div>;
  }
}

function mapStateToProps(state) {
  return {
    meetups: state.meetup.meetups
  };
}

const mapDispatchToProps = {
  getMeetups: getMeetups
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Meetup);
