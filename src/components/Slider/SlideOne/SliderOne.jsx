import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import SliderCalculator from "../../SliderCalculator";

import variables from "../../../assets/styles/variables.scss";

const useStyles = makeStyles({
  root: {},
  title: {
    margin: "26px 0",
    color: variables.blackColor,
    fontWeight: "bold",
    fontSize: 56,
    lineHeight: "56px"
  },
  text: {
    color: variables.darkGrayColor,
    fontSize: 16,
    lineHeight: "22px"
  }
});

const SliderOne = () => {
  const classes = useStyles();

  return (
    <Grid spacing={8} container direction="row" justify="space-between" alignItems="center">
      <Grid item md={6}>
        <h3 className={classes.title}>Калькулятор ремонта</h3>
        <p className={classes.text}>
          Планирование этапов стройки и ремонта в зависимости от параметрова помещения и требуемого вида ремонта. Подбор
          материалов для каждого этапа, сравнение предложений строительных магазинов. Отделочные расчеты для ремонта
          стен, потолка и пола.
        </p>
      </Grid>
      <Grid item md={6}>
        <SliderCalculator />
      </Grid>
    </Grid>
  );
};

export default SliderOne;
