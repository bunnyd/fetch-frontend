import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/componentsStyle.jsx";

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div className="cd-section" {...rest}>
        {/* Testimonials 1 START */}
        <Parallax
          image={require("assets/img/signup-bg.jpg")}
          className={classes.parallax}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brandLogout}>
                  <h1>See you later!</h1>
                  <h3 className={classes.titleLogout}>
                    Please come back to visit us.
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Logout);
