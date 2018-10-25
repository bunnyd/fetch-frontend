import React, { Component } from "react";

import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import productStyle from "assets/jss/material-kit-react/views/productStyle.jsx";

import { connect } from "react-redux";
import { fetchPetFinderDogs } from "../../../actions/petFinderActions";

class AdoptADog extends Component {
  componentDidMount() {
    this.props.fetchPetFinderDogs("77002");
  }

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    const { classes, user, petFinderDogs, ...rest } = this.props;

    if (!this.props.petFinderDogsLoaded) {
      return (
        <div className="cd-section" {...rest}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                xs={12}
                sm={8}
                md={8}
                className={`${classes.mlAuto} ${classes.mrAuto}`}
              >
                <h2 className={classes.title}>Loading.......</h2>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className={classes.section}>
          <div className={classes.container}>
            <h2>Find fluffy singles near you!</h2>
            <GridContainer>
              {petFinderDogs.map(dog => {
                return (
                  <GridItem md={4} sm={4}>
                    <Card product plain>
                      <CardHeader image plain key={dog.id.$t}>
                        <a href="#">
                          <img src={dog.media.photos.photo[3].$t} alt="..." />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: `url(${
                              dog.media.photos.photo[0].$t
                            })`,
                            opacity: 1
                          }}
                        />
                      </CardHeader>
                      <CardBody className={classes.textCenter} plain>
                        <h2 className={classes.cardTitle}>{dog.name.$t}</h2>

                        <h5 className={classes.cardDescription}>
                          <b>Status:</b> {dog.status.$t}
                          <br />
                          <b>Breed:</b> {dog.breeds.breed.$t}
                          <br />
                          <b>Age:</b> {dog.age.$t}
                          <br />
                          <b>Sex:</b> {dog.sex.$t}
                          <br />
                          <b>Size:</b> {dog.size.$t}
                        </h5>
                        <h4 className={classes.cardTitle}>
                          Interested? Contact: {dog.contact.email.$t}
                        </h4>
                        <h7 className={classes.cardTitle}>
                          {dog.description.$t}
                        </h7>
                      </CardBody>
                    </Card>
                  </GridItem>
                );
              })}
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    petFinderDogs: state.petfinder.petFinderDogs,
    petFinderDogsLoaded: state.petfinder.petFinderDogsLoaded,
    user: state.authentication.user
  };
}

const mapDispatchToProps = {
  fetchPetFinderDogs: fetchPetFinderDogs
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(productStyle)(AdoptADog));
