import React from "react";
import PostList from "./PostList";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function PostGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid item xs={6} sm={3}>
        <PostList post={props.post} />
      </Grid>
    </div>
  );
}

PostGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostGrid);
