import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return <div>Real Home</div>;
  }
}

function mapStateToProps(state) {
  return {
    user: state.authentication.user
  };
}

export default connect(mapStateToProps)(Home);
