import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import ReactPlayer from "react-player";

const styles = {
  card: {
    width: "auto"
  },
  media: {
    height: 500
  }
};

// {props.post.data.secure_media.reddit_video.length !== 0 ? (video={props.post.data.secure_media.reddit_video.fallback_url}) :
//           (image={props.post.data.url)}}

// {props.post.data.secure_media.reddit_video.length !== 0 ? (
//   <ReactPlayer
//     className="react-player"
//     url={props.post.data.secure_media.reddit_video.fallback_url}
//     width="100%"
//     height="100%"
//   />
// ) : null}
function PostList(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.post.data.url}
          title={props.post.data.title}
        />

        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {props.post.data.title}
          </Typography>
          <Typography component="p" />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="raised"
          fullWidth="true"
          size="small"
          color="info"
          href={`https://www.reddit.com/${props.post.data.permalink}`}
        >
          Link to Post
        </Button>
      </CardActions>
    </Card>
  );
}

PostList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostList);
