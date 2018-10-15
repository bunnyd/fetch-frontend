// <Card className={classes.card}>
//   <CardActionArea>
//     <CardMedia
//       className={classes.media}
//       image={props.post.data.url}
//       title={props.post.data.title}
//     />
//
//     <CardContent>
//       <Typography gutterBottom variant="h6" component="h6">
//         {props.post.data.title}
//       </Typography>
//       <Typography component="p" />
//     </CardContent>
//   </CardActionArea>
//   <CardActions>
//     <Button
//       variant="raised"
//       fullWidth="true"
//       size="small"
//       color="info"
//       href={`https://www.reddit.com/${props.post.data.permalink}`}
//     >
//       More Details
//     </Button>
//   </CardActions>
// </Card>

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Info from "components/Typography/Info.jsx";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import Button from "components/CustomButtons/Button.jsx";
// import Typography from "@material-ui/core/Typography";

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
    <Card plain blog className={classes.card4}>
      <CardHeader image plain>
        <a href={`https://www.reddit.com/${props.post.data.permalink}`}>
          <img src={props.post.data.url} />
        </a>
        <div
          className={classes.coloredShadow}
          style={{
            backgroundImage: `url(${props.post.data.url})`,
            opacity: "1"
          }}
        />
      </CardHeader>
      <CardBody plain>
        <h3 className={classes.cardTitle}>
          <a href={`https://www.reddit.com/${props.post.data.permalink}`}>
            {props.post.data.title}
          </a>
        </h3>
        <Button
          round
          color="primary"
          href={`https://www.reddit.com/${props.post.data.permalink}`}
        >
          Read More
        </Button>
      </CardBody>
    </Card>
  );
}

PostList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostList);
