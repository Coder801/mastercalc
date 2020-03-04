import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import SliderMaterialSelection from "../../SliderMaterialSelection/SliderMaterialSelection";

import variables from "../../../assets/styles/variables.scss";

const useStyles = makeStyles({
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
    <Grid spacing={7} container direction="row" justify="space-between" alignItems="center">
      <Grid item md={7}>
        <h3 className={classes.title}>
          Подбор материалов <br /> по количеству
        </h3>
        <p className={classes.text}>
          Поиск оптивального предложения строительных и отделочных материалов на основании необходимого количества.
          Компановка заказа несколькими позициями материалов для того, чтобы общая стоимость нужного количества
          материалов получилась оптимальной
        </p>
      </Grid>
      <Grid item md={5}>
        <SliderMaterialSelection />
      </Grid>
    </Grid>
  );
};

export default SliderOne;
