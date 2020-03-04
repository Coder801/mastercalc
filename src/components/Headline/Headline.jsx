import React from "react";
import { makeStyles } from "@material-ui/core";

import variables from "../../assets/styles/variables.scss";

const useStyles = makeStyles({
  root: {
    padding: "32px 0"
  },
  text: {
    margin: 0,
    color: variables.primaryColor,
    fontSize: 36,
    fontFamily: variables.secondaryFont,
    lineHeight: "38px"
  },
  highlight: {
    fontSize: 40,
    fontFamily: variables.primaryFont,
    lineHeight: "63px"
  }
});

const Headline = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.text}>
        Сервис оценки ремонта <br /> и выбора материалов <span className={classes.highlight}>MasterCalc</span>
      </p>
    </div>
  );
};

export default Headline;
