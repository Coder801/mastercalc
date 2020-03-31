import React from "react";
import clsx from "clsx";
import { makeStyles, Typography } from "@material-ui/core";

import variables from "../../assets/styles/variables.scss";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  label: {
    color: variables.darkGrayColor,
    marginRight: 10
  },
  image: {
    maxHeight: 44
  }
});

const Supplier = ({ image, label = "Поставщик:", className }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <Typography className={classes.label} variant="body1">
        {label}
      </Typography>
      <img className={classes.image} src={image} alt="" />
    </div>
  );
};

export default Supplier;
