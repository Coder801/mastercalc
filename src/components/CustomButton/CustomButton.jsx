import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "6px 16px",
    border: "1px solid #b99f6d",
    borderRadius: "4px",
    background: "linear-gradient(180deg, #ffe7a9 0%, #ffb053 100%)",
    boxShadow: "inset 0 2px 0 rgba(255, 255, 255, .25)",
    textTransform: "none"
  }
});

const CustomButton = ({ children, onClick, disabled = false }) => {
  const classes = useStyles();
  return (
    <Button onClick={onClick} disabled={disabled} className={clsx(classes.root)}>
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

export default CustomButton;
