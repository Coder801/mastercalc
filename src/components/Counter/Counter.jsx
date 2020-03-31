import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconButton, Input, Grid, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import variables from "../../assets/styles/variables.scss";

const useStyles = makeStyles({
  root: {
    width: 50,
    border: `1px solid ${variables.borderColor}`,
    borderRadius: 4
  },
  button: {
    padding: 6,
    background: "linear-gradient(180deg, #F1F1F0 0%, #E1E1E1 100%)",
    border: "1px solid #B3B3B3",
    boxSizing: "border-box",
    boxShadow: "inset 0px 2px 0px rgba(255, 255, 255, 0.7)"
  },
  input: {
    textAlign: "center",
    height: 32,
    lineHeight: "34px",
    boxSizing: "border-box",
    paddingTop: 1,
    paddingBottom: 0
  }
});

const Counter = ({ value = 0, step = 1, onChange }) => {
  const classes = useStyles();
  const [state, setState] = useState(value);

  const updateHandle = state => {
    setState(() => {
      onChange(state);
      return state;
    });
  };

  const handleKeydown = event => {
    const { value } = event.target;

    if (/[0-9]/.test(value)) {
      updateHandle(parseInt(value));
    } else if (!value) {
      updateHandle(0);
    } else {
      updateHandle(state);
    }
  };

  const handleIncrease = () => {
    updateHandle(state + step);
  };
  const handleDecrease = () => {
    updateHandle(state ? state - step : 0);
  };

  return (
    <Grid container justify="center" spacing={1}>
      <Grid item>
        <IconButton className={classes.button} onClick={handleDecrease}>
          <RemoveIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid item>
        <Input
          classes={{ root: classes.root, input: classes.input }}
          value={state}
          onChange={handleKeydown}
          disableUnderline
        />
      </Grid>
      <Grid item>
        <IconButton className={classes.button} onClick={handleIncrease}>
          <AddIcon fontSize="small" />
        </IconButton>
      </Grid>
    </Grid>
  );
};

Counter.propTypes = {
  value: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func
};

export default Counter;
