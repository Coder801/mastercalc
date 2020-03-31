import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

import SliderMaterialSelection from "../../SliderMaterialSelection/SliderMaterialSelection";

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
    margin: "50px 0 30px",
    [breakpoints.down("md")]: {
      margin: "30px 0 20px"
    },
    [breakpoints.down("sm")]: {
      margin: "10px",
      textAlign: "center"
    }
  }
}));

const SliderOne = () => {
  const classes = useStyles();

  return (
    <Grid spacing={7} container className={classes.root}>
      <Grid item xs={10} sm={8} md={6} lg={7}>
        <Typography variant="h3" className={classes.title}>
          Подбор материалов <br /> по количеству
        </Typography>
        <Typography variant="subtitle1" className={classes.title}>
          Поиск оптивального предложения строительных и отделочных материалов на основании необходимого количества.
          Компановка заказа несколькими позициями материалов для того, чтобы общая стоимость нужного количества
          материалов получилась оптимальной
        </Typography>
      </Grid>
      <Grid item xs={10} sm={8} md={6} lg={5}>
        <SliderMaterialSelection />
      </Grid>
    </Grid>
  );
};

export default SliderOne;
