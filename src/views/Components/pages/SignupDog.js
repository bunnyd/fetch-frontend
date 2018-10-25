import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import ImageUpload from "components/CustomUpload/ImageUpload.jsx";

import signupPageStyle from "assets/jss/material-kit-react/views/signupPageStyle.jsx";

import image from "assets/img/signup-bg.jpg";

import { connect } from "react-redux";
import { userActions } from "../../../actions/userActions";

class SignupDog extends React.Component {
  constructor() {
    super();
    this.state = {
      signupModal: false,
      "dog[age]": "",
      "dog[sex]": "",
      "dog[size]": ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const data = new FormData(e.target);

    fetch(`http://localhost:3000/dogs/`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        // "Content-Type": "application/json",
        // Accept: "application/json"
      },
      body: data
    }) //end fetch
      .then(resp => resp.json())
      .then(user => console.log("dog", user))
      .then(message => {
        this.sendOwnerData(message);
        return this.props.history.push("/profile");
      })
      .catch(error => console.log(error));
  };

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

  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  sendOwnerData = owner => {
    this.props.setUser(owner);
  };

  render() {
    console.log("signup - props - ", this.props);
    console.log("signup - state - ", this.state);

    const { classes } = this.props;
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
                  <h2 className={classes.cardTitle}>TELL US ABOUT YOUR DOG</h2>
                  <h4 className={classes.cardTitle}>Dog Information</h4>
                  <CardBody>
                    <form
                      className={classes.form}
                      onSubmit={e => this.handleSubmit(e)}
                    >
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={5} md={5}>
                          <CustomInput
                            labelText="Name (required)"
                            id="name"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              name: "dog[name]"
                            }}
                          />
                          <FormControl
                            fullWidth
                            className={classes.selectFormControl}
                          >
                            <InputLabel
                              htmlFor="simple-select"
                              className={classes.selectLabel}
                            >
                              Age
                            </InputLabel>
                            <Select
                              MenuProps={{
                                className: classes.selectMenu
                              }}
                              classes={{
                                select: classes.select
                              }}
                              value={this.state["dog[age]"]}
                              onChange={this.handleSimple}
                              inputProps={{
                                name: "dog[age]",
                                id: "selectedAge",
                                value: this.state["dog[age]"]
                              }}
                            >
                              <MenuItem
                                disabled
                                classes={{
                                  root: classes.selectMenuItem
                                }}
                              >
                                Select Age
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected
                                }}
                                value="Not Specified"
                              >
                                Not Sure
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected
                                }}
                                value="Puppy"
                              >
                                Puppy (over 15 months)
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected
                                }}
                                value="Adult"
                              >
                                Adult (15 months - 7 years)
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected
                                }}
                                value="Senior"
                              >
                                Senior (over 7 years)
                              </MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl
                            fullWidth
                            className={classes.selectFormControl}
                          >
                            <InputLabel
                              htmlFor="simple-select"
                              className={classes.selectLabel}
                            >
                              Sex
                            </InputLabel>
                            <Select
                              MenuProps={{
                                className: classes.selectMenu
                              }}
                              classes={{
                                select: classes.select
                              }}
                              value={this.state["dog[sex]"]}
                              onChange={this.handleSimple}
                              inputProps={{
                                name: "dog[sex]",
                                id: "selectedSex",
                                value: this.state["dog[sex]"]
                              }}
                            >
                              <MenuItem
                                disabled
                                classes={{
                                  root: classes.selectMenuItem
                                }}
                              >
                                Select Sex
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected
                                }}
                                value="Female"
                              >
                                Female
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected
                                }}
                                value="Male"
                              >
                                Male
                              </MenuItem>
                            </Select>
                          </FormControl>
                          <FormControl
                            fullWidth
                            className={classes.selectFormControl}
                          >
                            <InputLabel
                              htmlFor="simple-select"
                              className={classes.selectLabel}
                            >
                              Size
                            </InputLabel>
                            <Select
                              MenuProps={{
                                className: classes.selectMenu
                              }}
                              classes={{
                                select: classes.select
                              }}
                              value={this.state["dog[size]"]}
                              onChange={this.handleSimple}
                              inputProps={{
                                name: "dog[size]",
                                id: "selectedSize",
                                value: this.state["dog[size]"]
                              }}
                            >
                              <MenuItem
                                disabled
                                classes={{
                                  root: classes.selectMenuItem
                                }}
                              >
                                Select Size
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected
                                }}
                                value="Not Specified"
                              >
                                Not Sure
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected
                                }}
                                value="XS"
                              >
                                XS (0-10 lbs)
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected
                                }}
                                value="S"
                              >
                                S (10-20 lbs)
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected
                                }}
                                value="M"
                              >
                                M (20-50 lbs)
                              </MenuItem>
                              <MenuItem
                                classes={{
                                  root: classes.selectMenuItem,
                                  selected: classes.selectMenuItemSelected
                                }}
                                value="L"
                              >
                                L (over 50 lbs)
                              </MenuItem>
                            </Select>
                          </FormControl>
                          <CustomInput
                            labelText="Breed"
                            id="breed"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              name: "dog[breed]"
                            }}
                          />
                          <CustomInput
                            labelText="Short Bio"
                            id="textarea-input"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              multiline: true,
                              rows: 1,
                              name: "dog[short_bio]"
                            }}
                          />
                          <div style={{ display: "none" }}>
                            <input
                              type="text"
                              value={this.props.user && this.props.user.id}
                              name="dog[owner_id]"
                            />
                          </div>
                        </GridItem>
                        <GridItem xs={12} sm={5} md={5}>
                          <ImageUpload
                            id="picture_url"
                            addButtonProps={{ round: true }}
                            changeButtonProps={{ round: true }}
                            removeButtonProps={{ round: true, color: "danger" }}
                            name="dog"
                          >
                            <input
                              type="file"
                              onChange={this.handleImageChange}
                              ref="fileInput"
                              name="dog"
                            />
                          </ImageUpload>
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

const mapDispatchToProps = dispatch => {
  return {
    setUser: user => userActions.setUser(user)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(signupPageStyle)(SignupDog));

// WEBPACK FOOTER //
// ./src/views/SignupPage/SignupPage.jsx
