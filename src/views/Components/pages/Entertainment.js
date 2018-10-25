import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import CardMedia from "@material-ui/core/CardMedia";

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
      return (
        <div className="cd-section" {...rest}>
          <div className={classes.blog}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem
                  xs={12}
                  sm={8}
                  md={8}
                  className={`${classes.mlAuto} ${classes.mrAuto}`}
                >
                  <h2 className={classes.title}>Loading.......</h2>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="cd-section" {...rest}>
        <div className={classes.blog}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                xs={12}
                sm={8}
                md={8}
                className={`${classes.mlAuto} ${classes.mrAuto}`}
              >
                <h2 className={classes.title}>#whatswrongwithmydog</h2>
                <br />
                {this.props.posts.map((post, key) => (
                  <Card plain blog className={classes.card4}>
                    <CardHeader image plain>
                      <a href={`https://www.reddit.com/${post.data.permalink}`}>
                        {post.data.media === null &&
                        !post.data.crosspost_parent_list ? (
                          <Card className={classes.card4}>
                            <img src={post.data.url} alt="..." />
                          </Card>
                        ) : (
                          <div className="ui embed">
                            {post.data.preview.reddit_video_preview ? (
                              <iframe
                                src={
                                  post.data.preview.reddit_video_preview
                                    .fallback_url
                                }
                                frameBorder="0"
                                height="400"
                                width="728"
                              />
                            ) : post.data.crosspost_parent_list ? (
                              post.data.crosspost_parent_list[0].media ===
                              null ? (
                                <Card className={classes.card4}>
                                  <img src={post.data.url} alt="..." />
                                </Card>
                              ) : (
                                <div>
                                  {post.data.crosspost_parent_list ? (
                                    <iframe
                                      src={
                                        post.data.crosspost_parent_list[0]
                                          .secure_media.reddit_video
                                          .fallback_url
                                      }
                                      frameBorder="0"
                                      height="400"
                                      width="728"
                                    />
                                  ) : (
                                    <iframe
                                      src={
                                        post.data.media.reddit_video
                                          .fallback_url
                                      }
                                      frameBorder="0"
                                      height="400"
                                      width="728"
                                    />
                                  )}
                                </div>
                              )
                            ) : post.data.media.reddit_video.fallback_url ? (
                              <iframe
                                src={post.data.media.reddit_video.fallback_url}
                                frameBorder="0"
                                height="400"
                                width="728"
                              />
                            ) : null}
                          </div>
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
