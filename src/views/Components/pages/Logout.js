import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Logout</div>;
  }
}

export default Logout;
