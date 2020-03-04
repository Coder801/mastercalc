import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import CustomButton from "../CustomButton/CustomButton";
import CustomSelect from "../CustomSelect/CustomSelect";
import CustomRadio from "../CustomRadio/CustomRadio";

import { FormGroup, FormLabel, RadioGroup, FormControlLabel, Divider } from "@material-ui/core";

import variables from "../../assets/styles/variables.scss";

const form = {
  room: [
    {
      name: "length",
      label: "Длина: {value} см",
      options: [2000, 3000, 4000, 5000]
    },
    {
      name: "width",
      label: "Ширина:",
      counting: "см",
      options: [2000, 3000, 4000, 5000]
    },
    {
      name: "height",
      label: "Высота:",
      counting: "см",
      options: [2000, 3000, 4000, 5000]
    }
  ],
  appliance: [
    {
      name: "window",
      label: "Окон:",
      options: [1, 2, 3]
    },
    {
      name: "door",
      label: "Двери:",
      options: [1, 2, 3]
    }
  ],
  area: [
    {
      name: "walls",
      label: "Стены"
    },
    {
      name: "ceiling",
      label: "Потолок"
    },
    {
      name: "floor",
      label: "Пол"
    }
  ],
  addition: [
    {
      name: "state",
      label: "Состояние потолка",
      options: [1, 2, 3]
    },
    {
      name: "result",
      label: "Что нужно в результате",
      options: [1, 2, 3]
    }
  ]
};

const useStyles = makeStyles(() => ({
  form: {
    borderRadius: 30,
    paddingTop: 40,
    backgroundColor: variables.middleWhiteColor
  },
  label: {
    color: variables.darkGrayColor,
    fontSize: 14,
    display: "block",
    padding: "0 40px 14px"
  },
  group: {
    padding: "0 20px 0 40px",
    marginBottom: 25
  },
  select: {
    margin: "0 10px 10px 0"
  },
  divider: {
    margin: "2px 10px 15px 0px"
  },
  radio: {
    padding: "0 40px 0",
    marginBottom: 10
  },
  footer: {
    padding: "20px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const SelectList = ({ data, state, onChange, className, showArrow }) =>
  data.map((item, key) => (
    <CustomSelect
      className={className}
      key={key}
      value={state[item.name]}
      data={item}
      showArrow={showArrow}
      onChange={value => onChange(value, item.name)}
    />
  ));

const RadioList = ({ data, state, onChange }) => (
  <RadioGroup name="area" value={state.area} onChange={event => onChange(event.target.value, "area")} row>
    {data.map(({ name, label }, key) => (
      <FormControlLabel key={key} value={name} control={<CustomRadio />} label={label} labelPlacement="end" />
    ))}
  </RadioGroup>
);

const SliderCalculator = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    length: 5000,
    width: 3000,
    height: 2700,
    window: 3,
    door: 1,
    area: " ",
    state: " ",
    result: " "
  });

  const handleState = (value, key) => setState({ ...state, [key]: value });

  return (
    <div className={classes.form}>
      <FormLabel className={classes.label}>Параметры помещения:</FormLabel>
      <FormGroup className={classes.group} row>
        <SelectList state={state} data={form.room} onChange={handleState} className={classes.select} />
        <Divider className={classes.divider} orientation="vertical" flexItem />
        <SelectList state={state} data={form.appliance} onChange={handleState} className={classes.select} />
      </FormGroup>
      <FormLabel className={classes.label}>Что нужно отремонтировать:</FormLabel>
      <FormGroup className={classes.radio}>
        <RadioList state={state} data={form.area} onChange={handleState} />
      </FormGroup>
      <FormGroup className={classes.group} row>
        <SelectList state={state} data={form.addition} onChange={handleState} className={classes.select} showArrow />
      </FormGroup>
      <Divider />
      <FormGroup className={classes.footer} row>
        <CustomButton>Расчитать</CustomButton>
      </FormGroup>
    </div>
  );
};

SelectList.propTypes = {
  data: PropTypes.array,
  state: PropTypes.object,
  onChange: PropTypes.func
};

RadioList.propTypes = {
  data: PropTypes.array,
  state: PropTypes.object,
  onChange: PropTypes.func
};

export default SliderCalculator;
