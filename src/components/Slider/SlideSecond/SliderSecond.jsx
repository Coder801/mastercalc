import React from "react";
import PropTypes from "prop-types";
import { withProps } from "recompose";
import { compose } from "lodash/fp";
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

const SliderSecond = ({ title, text, buttonText, classes }) => (
  <Grid spacing={0} container direction="row" justify="center" alignItems="center">
    <Grid item xs={10} md={12}>
      <Typography variant="h3" className={classes.title}>
        {title}
      </Typography>
    </Grid>
    <Grid item xs={10} md={6}>
      <Typography variant="subtitle1" className={classes.text}>
        {text}
      </Typography>
    </Grid>
    <Grid item xs={10} container md={12} justify="center">
      <Button variant="contained" color="primary">
        {buttonText}
      </Button>
    </Grid>
  </Grid>
);

SliderSecond.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  text: PropTypes.string,
  buttonText: PropTypes.string,
  classes: PropTypes.object
};

SliderSecond.defaultProps = {
  title: (
    <>
      Каталог <br /> строительных материалов
    </>
  ),
  text:
    "Удобный интерфейс выбора и покупки строительных и отделочных материалов. Групировка материалов по этапам строительства и ремонта. Сравнение Предложений разных магазинов",
  buttonText: "Перейти"
};

export default compose(
  withProps(() => ({
    classes: useStyles()
  }))
)(SliderSecond);
