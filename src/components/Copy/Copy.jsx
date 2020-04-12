import React from "react";
import PropTypes from "prop-types";
import { withProps } from "recompose";
import { compose } from "lodash/fp";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    position: "fixed",
    transform: "rotate(-90deg)",
    transformOrigin: "0 0 0",
    bottom: 0,
    left: spacing(2),
    [breakpoints.down("sm")]: {
      position: "static",
      transform: "rotate(0)",
      textAlign: "center",
      paddingBottom: spacing(2)
    }
  }
}));

const Copy = ({ label, classes }) => (
  <Typography className={classes.root} color="textSecondary">
    {label}
  </Typography>
);

Copy.propTypes = {
  label: PropTypes.string,
  classes: PropTypes.object
};

Copy.defaultProps = {
  label: "MasterCalc 2020"
};

export default compose(
  withProps(() => ({
    classes: useStyles()
  }))
)(Copy);
