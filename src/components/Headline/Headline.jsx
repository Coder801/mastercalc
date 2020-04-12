import React from "react";
import PropTypes from "prop-types";
import { withProps } from "recompose";
import { compose } from "lodash/fp";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ spacing, breakpoints, palette }) => ({
  root: {
    padding: `${spacing(5)}px 0`,
    [breakpoints.down("sm")]: {
      padding: `0 0 ${spacing(3)}px`
    }
  },
  text: {
    color: palette.primary.main,
    [breakpoints.down("sm")]: {
      textAlign: "center"
    }
  },
  highlight: {
    fontSize: "1.2em",
    fontFamily: "Saira Stencil One"
  }
}));

const Headline = ({ caption, highlight, classes }) => (
  <Box className={classes.root}>
    <Typography variant="h2" className={classes.text}>
      {caption} <span className={classes.highlight}>{highlight}</span>
    </Typography>
  </Box>
);

Headline.propTypes = {
  caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  highlight: PropTypes.string,
  classes: PropTypes.object
};

Headline.defaultProps = {
  caption: (
    <>
      Сервис оценки ремонта <br /> и выбора материалов
    </>
  ),
  highlight: "MasterCalc"
};

export default compose(
  withProps(() => ({
    classes: useStyles()
  }))
)(Headline);
