// import React, { Component } from "react";

// class Signup extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     console.log("what in the world");
//     return <div>Signup</div>;
//   }
// }
//
// export default Signup;

import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import NearMe from "@material-ui/icons/NearMe";
import Photo from "@material-ui/icons/Photo";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import Close from "@material-ui/icons/Close";
import Email from "@material-ui/icons/Email";
import Password from "@material-ui/icons/Lock";

import Check from "@material-ui/icons/Check";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Slide from "@material-ui/core/Slide";

import signupPageStyle from "assets/jss/material-kit-react/views/signupPageStyle.jsx";

import image from "assets/img/signup-bg.jpg";
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";

import { connect } from "react-redux";
import { userActions } from "../../../actions/userActions";

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class SignupUser extends React.Component {
  constructor() {
    super();
    this.state = {
      signupModal: false,
      userId: ""
    };
  }

  handleRegister(e) {
    e.preventDefault();

    const data = new FormData(e.target);

    fetch(`http://localhost:3000/owners/`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        // Accept: "application/json"
      },
      body: data
    })
      .then(resp => resp.json())
      .then(
        user =>
          user.errors ? console.log(user) : this.setState({ userId: user.id })
      );
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }

  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }

  render() {
    console.log("signup - props - ", this.props);
    console.log("signup - state - ", this.state);

    const { classes, ...rest } = this.props;
    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={10} md={10}>
                <Card className={classes.cardSignup}>
                  <h2 className={classes.cardTitle}>SIGN UP NOW!</h2>
                  <h4 className={classes.cardTitle}>User Information</h4>
                  <CardBody>
                    <form
                      className={classes.form}
                      onSubmit={e => this.handleRegister(e)}
                    >
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={5} md={5}>
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Face
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "First Name (required)",
                              name: "owner[first_name]"
                            }}
                          />
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Face
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "Last Name (required)",
                              name: "owner[last_name]"
                            }}
                          />
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Face
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "Title",
                              name: "owner[title]"
                            }}
                          />
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <NearMe
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "Zip Code (required)",
                              name: "owner[zip_code]"
                            }}
                          />

                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Email
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "Email (required)",
                              name: "owner[email]"
                            }}
                          />
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              type: "password",
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Password
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "Password",
                              name: "owner[password]"
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={5} md={5}>
                          <ImageUpload
                            id="picture_url"
                            addButtonProps={{ round: true }}
                            changeButtonProps={{ round: true }}
                            removeButtonProps={{ round: true, color: "danger" }}
                            name="owner"
                          />
                        </GridItem>
                      </GridContainer>
                      <div className={classes.textCenter}>
                        <Button
                          round
                          color="primary"
                          type="submit"
                          onClick={() => this.handleClickOpen("smallModal")}
                        >
                          <Check />
                          Sign me up
                        </Button>
                        {/* SMALL MODAL START */}
                        <Dialog
                          classes={{
                            root: classes.modalRoot,
                            paper: classes.modal + " " + classes.modalSmall
                          }}
                          open={this.state.smallModal}
                          TransitionComponent={Transition}
                          keepMounted
                          onClose={() => this.handleClose("noticeModal")}
                          aria-labelledby="small-modal-slide-title"
                          aria-describedby="small-modal-slide-description"
                        >
                          <DialogTitle
                            id="small-modal-slide-title"
                            disableTypography
                            className={classes.modalHeader}
                          >
                            <Button
                              simple
                              className={classes.modalCloseButton}
                              key="close"
                              aria-label="Close"
                              onClick={() => this.handleClose("smallModal")}
                            >
                              {" "}
                              <Close className={classes.modalClose} />
                            </Button>
                          </DialogTitle>
                          <DialogContent id="small-modal-slide-description">
                            <h5>You&#39;re signed up!</h5>
                          </DialogContent>
                          <DialogActions>
                            <Button
                              href="/"
                              onClick={() => this.handleClose("smallModal")}
                              link
                              className={classes.modalSmallFooterFirstButton}
                            >
                              Home
                            </Button>
                            <Button
                              href="/login"
                              onClick={e => {
                                this.handleClose("smallModal");
                              }}
                              color="success"
                              simple
                              className={
                                classes.modalSmallFooterFirstButton +
                                " " +
                                classes.modalSmallFooterSecondButton
                              }
                            >
                              Login
                            </Button>
                          </DialogActions>
                        </Dialog>
                        {/* SMALL MODAL END */}
                      </div>
                    </form>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.authentication.user
  };
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(signupPageStyle)(SignupUser));

// WEBPACK FOOTER //
// ./src/views/SignupPage/SignupPage.jsx
