import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Input, Slider, Grid } from "@material-ui/core";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    width: 50,
    border: `1px solid ${palette.grey[500]}`,
    borderRadius: 4,
    margin: "0 10px 10px"
  },
  input: {
    textAlign: "center",
    height: 34,
    lineHeight: "34px",
    boxSizing: "border-box",
    paddingTop: 1,
    paddingBottom: 0
  }
}));

const useSliderStyles = makeStyles(({ palette }) => ({
  root: {
    color: palette.grey[600],
    height: 1
  },
  thumb: {
    height: 18,
    width: 18,
    backgroundColor: palette.common.white,
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  valueLabel: {
    left: "calc(-50% - 1px)"
  },
  track: {
    height: 2,
    borderRadius: 4
  },
  rail: {
    height: 2,
    borderRadius: 4
  }
}));

const CustomSlider = ({ value, min, max, step = 1, onChange }) => {
  const classesSlider = useSliderStyles();
  const classes = useStyles();

  const [state, setState] = useState(value);

  const marks = [
    {
      value: min,
      label: min
    },
    {
      value: max,
      label: max
    }
  ];

  const updateHandle = state => {
    setState(() => {
      onChange(state);
      return state;
    });
  };

  const handleChange = (event, value) => {
    updateHandle(value);
  };

  return (
    <Grid container spacing={2}>
      <Grid container justify="center">
        <Input classes={{ root: classes.root, input: classes.input }} value={state} disableUnderline />
      </Grid>
      <Grid container>
        <Slider
          classes={classesSlider}
          defaultValue={value}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="off"
          marks={marks}
          step={step}
          min={min}
          max={max}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};

CustomSlider.propTypes = {
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onSave: PropTypes.func
};

export default CustomSlider;
