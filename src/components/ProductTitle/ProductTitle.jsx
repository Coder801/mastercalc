import React from "react";
import PropTypes from "prop-types";
import { withProps } from "recompose";
import { compose } from "lodash/fp";
import { Grid, Button, Typography, Divider, makeStyles } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    alignItems: "center",
    paddingTop: spacing(2)
  },
  title: {
    [breakpoints.down("md")]: {
      fontSize: 18,
      justifyContent: "flex-start",
      alignItems: "center"
    },
    [breakpoints.down("sm")]: {
      justifyContent: "flex-start",
      paddingBottom: spacing(1)
    }
  },
  filter: {
    minWidth: 120
  },
  divider: {
    marginTop: spacing(1)
  }
}));

const ProductTitle = ({ title, label, classes }) => (
  <Grid container className={classes.root}>
    <Grid item container xs={7} md={9} className={classes.title}>
      <Typography variant="h4" color="textSecondary">
        {title}
      </Typography>
    </Grid>
    <Grid item container xs={5} md={3} justify="flex-end">
      <Button startIcon={<ArrowDownwardIcon />}>{label}</Button>
    </Grid>
    <Grid item container className={classes.divider} xs={12}>
      <Divider />
    </Grid>
  </Grid>
);

ProductTitle.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  classes: PropTypes.object
};

ProductTitle.defaultProps = {
  title: "Выравнивание штукатурки",
  label: "Цена в грн"
};

export default compose(
  withProps(() => ({
    classes: useStyles()
  }))
)(ProductTitle);
