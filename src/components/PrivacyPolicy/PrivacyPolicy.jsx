import React from "react";
import PropTypes from "prop-types";
import { withProps } from "recompose";
import { compose } from "lodash/fp";
import { Typography, Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => ({
  root: {
    color: palette.info.main,
    height: 80,
    display: "flex",
    position: "absolute",
    alignItems: "center",
    bottom: 0,
    left: spacing(3),
    [breakpoints.down("md")]: {
      position: "static",
      width: "100%",
      justifyContent: "center"
    },
    [breakpoints.down("sm")]: {
      height: "auto",
      paddingBottom: spacing(2)
    }
  }
}));

const PrivacyPolicy = ({ label, link, classes }) => (
  <Typography className={classes.root}>
    <Link href={link} color="inherit">
      {label}
    </Link>
  </Typography>
);

PrivacyPolicy.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
  classes: PropTypes.object
};

PrivacyPolicy.defaultProps = {
  label: "Политика конфиденциальности",
  link: "#"
};

export default compose(
  withProps(() => ({
    classes: useStyles()
  }))
)(PrivacyPolicy);
