import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Password from "@material-ui/icons/Lock";
import People from "@material-ui/icons/People";
import Warning from "@material-ui/icons/Warning";
import Check from "@material-ui/icons/Check";

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
//alert
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import notificationsStyles from "assets/jss/material-kit-react/views/componentsSections/notificationsStyles.jsx";

import { connect } from "react-redux";
import { userActions } from "../../../actions/userActions";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

import image from "assets/img/login-bg.jpg";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardAnimaton: "cardHidden",
      loggedIn: false,
      email: "",
      password: "",
      submitted: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    const { dispatch } = this.props;
    if (email && password) {
      dispatch(userActions.login(email, password, this.props.history));
    }
  }

  // validateUser = event => {
  //   event.preventDefault();
  //   let email = event.target.email.value;
  //   let password = event.target.password.value;
  //
  //   console.log(email);
  //   console.log(password);
  //   fetch("http://localhost:3000/login", {
  //     method: "POST",
  //     credentials: "same-origin",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify({
  //       owner: {
  //         email: email,
  //         password: password
  //       }
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(
  //       res =>
  //         res.jwt
  //           ? (localStorage.setItem("jwt", res.jwt),
  //             this.setState({ loggedIn: true }))
  //           : console.log(res)
  //     )
  //     .then(
  //       _ => (this.state.loggedIn ? this.props.history.push("/profile") : null)
  //     );
  // };

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    // console.log("login - props", this.props);
    // console.log("login - state", this.state);

    const { loggingIn } = this.props;
    const { email, password, submitted } = this.state;
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
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form
                    className={classes.form}
                    onSubmit={e => this.handleSubmit(e)}
                  >
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login</h4>
                    </CardHeader>
                    <CardBody>
                      <CustomInput
                        labelText="Email"
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                          onChange: this.handleChange
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Password className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                          onChange: this.handleChange
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button type="submit" simple color="primary" size="lg">
                        Submit
                      </Button>
                    </CardFooter>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="sm" href="/signup">
                        Sign Up Here
                      </Button>
                    </CardFooter>
                  </form>
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
    loggingIn: state.authentication
  };
}

export default connect(mapStateToProps)(withStyles(loginPageStyle)(Login));
