import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Info from "components/Typography/Info.jsx";

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

function DogList(props) {
  const { classes } = props;
  return (
    <Card plain blog className={classes.card4}>
      <CardHeader image plain>
        <a href={`https://www.reddit.com/${props.post.data.permalink}`}>
          <img src={props.picture_url} />
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

DogList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DogList);
