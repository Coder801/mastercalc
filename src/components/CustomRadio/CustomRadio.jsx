import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";

import variables from "../../assets/styles/variables.scss";

const useStyles = makeStyles({
  root: {
    paddingTop: 7,
    paddingBottom: 7,
    color: variables.blackColor,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  icon: {
    borderRadius: "50%",
    width: 24,
    height: 24,
    boxShadow: "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)"
    }
  },
  checkedIcon: {
    backgroundColor: "white",
    "&:before": {
      display: "block",
      width: 24,
      height: 24,
      backgroundImage: "radial-gradient(#111,#111 36%,transparent 38%)",
      content: '""'
    }
  }
});

const CustomRadio = props => {
  const classes = useStyles();
  return (
    <Radio
      color="default"
      className={classes.root}
      icon={<span className={classes.icon} />}
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      {...props}
    />
  );
};

CustomRadio.propTypes = {
  onClick: PropTypes.func
};

export default CustomRadio;
