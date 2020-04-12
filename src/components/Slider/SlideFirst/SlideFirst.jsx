import React from "react";
import PropTypes from "prop-types";
import { withProps } from "recompose";
import { compose } from "lodash/fp";
import { Grid, Typography, makeStyles } from "@material-ui/core";

import SliderCalculator from "@/components/SliderCalculator/SliderCalculator";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    [breakpoints.down("sm")]: {
      justifyContent: "center"
    }
  },
  title: {
    marginTop: 0,
    marginBottom: "1.8rem",
    [breakpoints.down("sm")]: {
      textAlign: "center"
    }
  },
  text: {
    [breakpoints.down("sm")]: {
      textAlign: "center"
    }
  }
}));

const SlideFirst = ({ title, text, classes }) => (
  <Grid spacing={4} container className={classes.root}>
    <Grid item xs={10} md={5} lg={6}>
      <Typography variant="h3" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="subtitle1" className={classes.text}>
        {text}
      </Typography>
    </Grid>
    <Grid item xs={10} md={7} lg={6}>
      <SliderCalculator />
    </Grid>
  </Grid>
);

SlideFirst.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  classes: PropTypes.object
};

SlideFirst.defaultProps = {
  title: "Калькулятор ремонта",
  text:
    "Планирование этапов стройки и ремонта в зависимости от параметрова помещения и требуемого вида ремонта. Подбор материалов для каждого этапа, сравнение предложений строительных магазинов. Отделочные расчеты для ремонта стен, потолка и пола."
};

export default compose(
  withProps(() => ({
    classes: useStyles()
  }))
)(SlideFirst);
