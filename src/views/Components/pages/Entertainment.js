import React, { Component } from "react";
import PostList from "./PostList";
import PostGrid from "./PostGrid";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

import { connect } from "react-redux";
import { fetchPosts } from "../../../actions/entertainmentPostActions";

class Entertainment extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     posts: []
  //   };
  // }

  // fetchData = () => {
  //   fetch("https://www.reddit.com/r/WhatsWrongWithYourDog/.json")
  //     .then(response => response.json())
  //     .then(data => this.setState({ posts: data }));
  // };
  //
  // postSet = () => {
  //   return this.state.Articles.length === 0 ? (
  //     <h5 align="center">Loading...</h5>
  //   ) : (
  //     this.state.posts.data.children.map(post => <Post post={post} />)
  //   );
  // };

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

function mapStateToProps(state) {
  return {
    posts: state.posts,
    arePostsLoaded: state.postsLoaded
  };
}

const mapDispatchToProps = {
  fetchPosts: fetchPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entertainment);
