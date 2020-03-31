import React from "react";
import clsx from "clsx";

import CustomRadio from "../CustomRadio/CustomRadio";

import { RadioGroup, FormControlLabel, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column !important"
    }
  }
}));

const RadioItem = ({ value, label }) => (
  <FormControlLabel value={value} label={label} labelPlacement="end" control={<CustomRadio />} />
);

const CustomRadioGroup = ({ name, value, onChange, className }) => {
  const classes = useStyles();

  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <RadioGroup name={name} className={clsx(classes.root, className)} value={value} onChange={handleChange} row>
      <RadioItem value="walls" label="Стены" />
      <RadioItem value="ceiling" label="Потолок" />
      <RadioItem value="floor" label="Пол" />
    </RadioGroup>
  );
};

export default CustomRadioGroup;
