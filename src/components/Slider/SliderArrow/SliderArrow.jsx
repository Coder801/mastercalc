import React from "react";
import PropTypes from "prop-types";
import { withProps } from "recompose";
import { compose } from "lodash/fp";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
  root: {
    height: 76,
    width: 69,
    zIndex: 100,
    position: "absolute",
    top: "45%",
    cursor: "pointer",
    transform: "translateY(-50%)",
    "&:before": {
      display: "none"
    }
  }
});

const SliderArrow = ({ icon, classes, positionClasses, onClick }) => (
  <img src={icon} className={clsx(classes.root, positionClasses)} onClick={onClick} alt="" />
);

SliderArrow.propTypes = {
  icon: PropTypes.string,
  classes: PropTypes.object,
  positionclasses: PropTypes.object,
  onClick: PropTypes.func
};

export default compose(
  withProps(() => ({
    classes: useStyles()
  }))
)(SliderArrow);
