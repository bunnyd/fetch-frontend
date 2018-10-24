import React, { Component } from "react";
import { connect } from "react-redux";

// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import LocalShipping from "@material-ui/icons/LocalShipping";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Accordion from "components/Accordion/Accordion.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Tooltip from "@material-ui/core/Tooltip";

import productStyle from "assets/jss/material-kit-react/views/productStyle.jsx";

// images
import cardProduct1 from "assets/img/examples/studio-3.jpg";
import cardProduct3 from "assets/img/examples/studio-3.jpg";
import cardProduct4 from "assets/img/examples/studio-3.jpg";
import cardProduct2 from "assets/img/examples/studio-3.jpg";
import gucci from "assets/img/examples/studio-3.jpg";
import dolce from "assets/img/examples/studio-3.jpg";
import tomFord from "assets/img/examples/studio-3.jpg";
import product4 from "assets/img/examples/studio-3.jpg";

class Meetup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSelect: "0",
      sizeSelect: "0"
    };
  }
  handleSelect = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, meetup } = this.props;

    console.log(this.props);
    // debugger;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <h2>Dogs Attending this Event</h2>
          <GridContainer>
            {meetup.dogs &&
              meetup.dogs[0].map(dog => {
                return (
                  <GridItem md={4} sm={4}>
                    <Card product plain key={dog.id}>
                      <CardHeader image plain>
                        <a href="#">
                          <img src={dog.picture_url} alt="..." />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${dog.picture_url})`,
                            opacity: 1
                          }}
                        />
                      </CardHeader>
                      <CardBody className={classes.textCenter} plain>
                        <h4 className={classes.cardTitle}>{dog.name}</h4>
                        <p className={classes.cardDescription}>
                          Breed: {dog.breed}
                          <br />
                          Age: {dog.age}
                          <br />
                          Sex: {dog.sex}
                          <br />
                          Size: {dog.size}
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                );
              })}
          </GridContainer>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    meetup: state.meetup
  };
}

export default connect(mapStateToProps)(withStyles(productStyle)(Meetup));
