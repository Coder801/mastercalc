import React from "react";
import PropTypes from "prop-types";
import { Grid, Container, makeStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import Navigation from "../Navigation";

import variables from "../../assets/styles/variables.scss";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: variables.darkColor
  },
  container: {
    margin: "auto",
    maxWidth: variables.containerWidth
  },
  logo: {
    display: "flex",
    color: variables.primaryColor,
    fontSize: 24,
    fontFamily: variables.primaryFont,
    lineHeight: "38px"
  }
});

const Header = ({ location }) => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Container maxWidth="md">
        <Grid container>
          <Grid item md={4} className={classes.logo}>
            {location.pathname !== "/3" ? "MasterCalc" : ""}
          </Grid>
          <Grid item md={8}>
            <Navigation />
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

Header.propTypes = {
  location: PropTypes.any
};

export default withRouter(Header);
