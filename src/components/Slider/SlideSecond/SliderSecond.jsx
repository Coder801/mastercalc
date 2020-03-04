import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import CustomButton from "../../CustomButton/CustomButton";

import variables from "../../../assets/styles/variables.scss";

const useStyles = makeStyles({
  root: {},
  title: {
    margin: "120px 0 26px",
    color: variables.blackColor,
    fontWeight: "bold",
    fontSize: 56,
    lineHeight: "56px",
    textAlign: "center"
  },
  text: {
    color: variables.darkGrayColor,
    fontSize: 16,
    lineHeight: "22px",
    textAlign: "center"
  },
  button: {
    marginTop: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

const SliderSecond = () => {
  const classes = useStyles();

  return (
    <Grid spacing={0} container direction="row" justify="center" alignItems="center">
      <Grid item md={12}>
        <h3 className={classes.title}>
          Каталог <br /> строительных материалов
        </h3>
      </Grid>
      <Grid item md={6}>
        <p className={classes.text}>
          Удобный интерфейс выбора и покупки строительных и отделочных материалов. Групировка материалов по этапам
          строительства и ремонта. Сравнение Предложений разных магазинов
        </p>
        <div className={classes.button}>
          <CustomButton>Перейти</CustomButton>
        </div>
      </Grid>
    </Grid>
  );
};

export default SliderSecond;
