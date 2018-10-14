import React, { Component } from "react";
import PostList from "./PostList";
import PostGrid from "./PostGrid";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchPosts } from "../../../actions/entertainmentPostActions";

class Entertainment extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props);
    if (!this.props.arePostsLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <GridList cols={3}>
          {this.props.posts.map((post, key) => (
            <PostList post={post} />
          ))}
        </GridList>
      </div>
    );
  }
}

Entertainment.propTypes = {
  posts: PropTypes.array.isRequired,
  fetchPosts: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.reddit.posts,
    arePostsLoaded: state.reddit.postsLoaded
  };
}

const mapDispatchToProps = {
  fetchPosts: fetchPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entertainment);
