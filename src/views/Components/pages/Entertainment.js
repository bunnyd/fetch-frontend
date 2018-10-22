// <div>
//   <div className={classes.section}>
//     <div className={classes.container}>
//       <GridContainer className={classes.textCenter} justify="center">
//         <GridItem xs={24} sm={24} md={24}>
//           <GridList cols={3}>
//             {this.props.posts.map((post, key) => (
//               <PostList post={post} />
//             ))}
//           </GridList>
//         </GridItem>
//       </GridContainer>
//     </div>
//   </div>
// </div>

import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Success from "components/Typography/Success.jsx";
import Button from "components/CustomButtons/Button.jsx";

import blogsStyle from "assets/jss/material-kit-react/views/sectionsSections/blogsStyle.jsx";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchPosts } from "../../../actions/entertainmentPostActions";

class Entertainment extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    // console.log(this.props);
    const { classes, ...rest } = this.props;

    if (!this.props.arePostsLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div className="cd-section" {...rest}>
        {/* Blogs 4 START */}
        <div className={classes.blog}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                xs={12}
                sm={8}
                md={8}
                className={`${classes.mlAuto} ${classes.mrAuto}`}
              >
                <h2 className={classes.title}>#whatiswrongwithmydog</h2>
                <br />
                {this.props.posts.map((post, key) => (
                  <Card plain blog className={classes.card4}>
                    <CardHeader image plain>
                      <a href={`https://www.reddit.com/${post.data.permalink}`}>
                        {!post.data.is_video ? (
                          <img src={post.data.url} alt="..." />
                        ) : (
                          <iframe
                            src={post.data.secure_media.reddit_video}
                            frameBorder="0"
                          />
                        )}
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${post.data.url})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>

                    <CardBody plain>
                      <Success>
                        <h6 className={classes.cardCategory} />
                      </Success>
                      <h3 className={classes.cardTitle}>
                        <a
                          href={`https://www.reddit.com/${post.data.permalink}`}
                        >
                          {post.data.title}
                        </a>
                      </h3>
                      <h5 className={classes.description} />
                      <Button
                        round
                        color="primary"
                        href={`https://www.reddit.com/${post.data.permalink}`}
                      >
                        See More
                      </Button>
                    </CardBody>
                  </Card>
                ))}
              </GridItem>
            </GridContainer>
          </div>
        </div>
        {/* Blogs 4 END */}
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
)(withStyles(blogsStyle)(Entertainment));
