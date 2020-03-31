import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Grid, Container, Hidden, makeStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";

import Navigation from "../Navigation/Navigation";
import MobileNavigation from "../MobileNavigation/MobileNavigation";

// import catalogIcon from "../../assets/svg/catalog-icon.svg";
import calculatorIcon from "../../assets/svg/calculator-icon.svg";
// import chooseIcon from "../../assets/svg/choose-icon.svg";

const routes = [
  // {
  //   link: "/catalog",
  //   label: "Каталог",
  //   icon: catalogIcon
  // },
  {
    link: "/calculator",
    label: "Калькулятор",
    icon: calculatorIcon
  }
  // {
  //   link: "/choose",
  //   label: "Подбор",
  //   icon: chooseIcon
  // }
];

const useStyles = makeStyles(({ palette, mixins }) => ({
  root: {
    ...mixins.toolbar,
    ...{ boxShadow: "none", justifyContent: "center" }
  },
  logo: {
    fontSize: 24,
    lineHeight: "38px",
    color: palette.primary.main,
    fontFamily: "Saira Stencil One",
    textDecoration: "none"
  }
}));

const Header = ({ location }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} color="secondary" position="static">
      <Container maxWidth="lg">
        <Grid container>
          <Grid container item xs={8} sm={6} md={4} alignItems="center">
            {location.pathname !== "/" ? (
              <NavLink to="/" className={classes.logo}>
                MasterCalc
              </NavLink>
            ) : null}
          </Grid>
          <Grid container item xs={4} sm={6} md={8} justify="flex-end" alignItems="flex-end">
            <Hidden only={["xs", "sm"]}>
              <Navigation routes={routes} location={location} />
            </Hidden>
            <Hidden only={["md", "lg", "xl"]}>
              <MobileNavigation routes={routes} location={location} />
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

Header.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(Header);
