import React from "react";
import { Grid, Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    margin: "80px 0 26px",
    textAlign: "center"
  },
  text: {
    textAlign: "center",
    marginBottom: 30
  }
});

const SliderSecond = () => {
  const classes = useStyles();

  return (
    <Grid spacing={0} container direction="row" justify="center" alignItems="center">
      <Grid item xs={10} sm={10} md={12}>
        <Typography variant="h3" className={classes.title}>
          Каталог <br /> строительных материалов
        </Typography>
      </Grid>
      <Grid item xs={10} sm={10} md={6}>
        <Typography variant="subtitle1" className={classes.text}>
          Удобный интерфейс выбора и покупки строительных и отделочных материалов. Групировка материалов по этапам
          строительства и ремонта. Сравнение Предложений разных магазинов
        </Typography>
      </Grid>
      <Grid item xs={10} sm={10} container md={12} justify="center">
        <Button variant="contained" color="primary">
          Перейти
        </Button>
      </Grid>
    </Grid>
  );
};

export default SliderSecond;
