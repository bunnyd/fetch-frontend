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
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Info from "components/Typography/Info.jsx";
import Danger from "components/Typography/Danger.jsx";
import Success from "components/Typography/Success.jsx";
import Button from "components/CustomButtons/Button.jsx";

import blogsStyle from "assets/jss/material-kit-react/views/sectionsSections/blogsStyle.jsx";

import cardBlog4 from "assets/img/examples/studio-1.jpg";
import office2 from "assets/img/landing.jpg";
import blog5 from "assets/img/examples/studio-2.jpg";
import blog6 from "assets/img/examples/studio-3.jpg";
import blog7 from "assets/img/examples/studio-4.jpg";
import blog8 from "assets/img/examples/studio-5.jpg";
import bg5 from "assets/img/bg7.jpg";

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
                        <img src={post.data.url} alt="..." />
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
