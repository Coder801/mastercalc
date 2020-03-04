import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import catalogIcon from "../../assets/svg/catalog-icon.svg";
import calculatorIcon from "../../assets/svg/calculator-icon.svg";
import chooseIcon from "../../assets/svg/choose-icon.svg";

import variables from "../../assets/styles/variables.scss";

const routes = [
  {
    link: "/catalog",
    label: "Каталог",
    icon: catalogIcon
  },
  {
    link: "/calculator",
    label: "Калькулятор",
    icon: calculatorIcon
  },
  {
    link: "/choose",
    label: "Подбор",
    icon: chooseIcon
  }
];

const useStyles = makeStyles({
  root: {
    paddingLeft: 22,
    display: "flex"
  },
  icon: {
    position: "relative",
    top: 1,
    marginRight: 10
  },
  link: {
    padding: "17px 20px",
    color: variables.whiteColor,
    textDecoration: "none",
    fontSize: 14,
    lineHeight: "19px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center;",
    "&:hover": {
      backgroundColor: variables.blackColor,
      color: variables.primaryColor
    }
  }
});

const Navigation = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      {routes.map(({ link, label, icon }, key) => (
        <Link className={classes.link} key={key} to={link}>
          <img className={classes.icon} src={icon} alt="" />
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
