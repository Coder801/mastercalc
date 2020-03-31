import React, { useState, useContext } from "react";
import { withProps, compose } from "recompose";

import { withMastercalcService } from "../hoc-helpers";

import { CalculatorContext } from "../context";

import CustomSelect from "../CustomSelect/CustomSelect";
import CustomListbox from "../CustomListbox/CustomListbox";
import CustomRadioGroup from "../CustomRadioGroup/CustomRadioGroup";
import CustomSlider from "../CustomSlider/CustomSlider";
import Counter from "../Counter/Counter";

import { Button, FormGroup, FormLabel, Divider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  form: {
    borderRadius: 30,
    paddingTop: 40,
    backgroundColor: palette.grey[50],
    [breakpoints.down("sm")]: {
      paddingTop: 20
    }
  },
  label: {
    color: palette.grey[600],
    fontSize: 14,
    display: "block",
    padding: "0 40px 14px",
    [breakpoints.down("xs")]: {
      padding: "0 15px 15px"
    }
  },
  listBox: {
    display: "inline-block",
    margin: "0 10px 10px 0",
    [breakpoints.down("xs")]: {
      marginRight: 0,
      width: "100%"
    }
  },
  group: {
    padding: "0 20px 0 40px",
    marginBottom: 25,
    [breakpoints.down("xs")]: {
      padding: "0 15px",
      marginBottom: 10
    }
  },
  select: {
    margin: "0 10px 10px 0",
    [breakpoints.down("xs")]: {
      width: "100%",
      marginRight: 0
    }
  },
  divider: {
    margin: "2px 10px 15px 0px"
  },
  radioGroup: {
    padding: "0 40px 0",
    marginBottom: 10,
    [breakpoints.down("xs")]: {
      padding: "0 20px 0"
    }
  },
  footer: {
    padding: "20px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [breakpoints.down("xs")]: {
      padding: "10px 20px"
    }
  },
  slider: {
    width: 500
  }
}));

const SliderCalculator = () => {
  const classes = useStyles();
  const parametrs = useContext(CalculatorContext);
  const { length, height, width, window, door } = options;

  // useEffect(async () => {
  //   await getData({
  //     params: {
  //       car: "walls"
  //     }
  //   }).then(data => {
  //     console.log(data);
  //   });
  // });

  const handleOptionsValue = (value, key) => {
    setOptions({
      ...options,
      [key]: {
        ...options[key],
        value
      }
    });
  };

  const PremisesFormatListbox = ({ items, innerComponent, onSave }) =>
    items.map(({ name, placeholder, title, value, range: { min, max } }, key) => {
      const InnerComponent = withProps({ value, min, max })(innerComponent);
      let newValue = value;
      const handleChange = value => {
        newValue = value;
      };

      return (
        <CustomListbox
          key={key}
          className={classes.listBox}
          value={value}
          placeholder={placeholder}
          title={title}
          onSave={() => onSave(newValue, name)}
        >
          <InnerComponent onChange={value => handleChange(value)} />
        </CustomListbox>
      );
    });

  return (
    <div className={classes.form}>
      <FormLabel className={classes.label}>Параметры помещения:</FormLabel>
      <FormGroup className={classes.group} row>
        <PremisesFormatListbox
          items={[length, height, width]}
          innerComponent={CustomSlider}
          onSave={handleOptionsValue}
        />
        <Divider className={classes.divider} orientation="vertical" flexItem />
        <PremisesFormatListbox items={[window, door]} innerComponent={Counter} onSave={handleOptionsValue} />
      </FormGroup>
      <FormLabel className={classes.label}>Что нужно отремонтировать:</FormLabel>
      <FormGroup className={classes.radioGroup}>
        <CustomRadioGroup
          name="area"
          value={options.area.value}
          onChange={value => handleOptionsValue(value, "area")}
        />
      </FormGroup>
      <FormGroup className={classes.group} row>
        <CustomSelect
          options={options.state.options}
          title={options.state.title}
          value={options.state.value}
          className={classes.select}
          onChange={value => handleOptionsValue(value, "state")}
        />
        <CustomSelect
          options={options.result.options}
          title={options.result.title}
          value={options.result.value}
          className={classes.select}
          onChange={value => handleOptionsValue(value, "result")}
        />
      </FormGroup>
      <Divider />
      <FormGroup className={classes.footer} row>
        <Button variant="contained" color="primary">
          Расчитать
        </Button>
      </FormGroup>
    </div>
  );
};

export default compose(
  withMastercalcService(swapiService => ({
    getData: swapiService.getTransitionsCategory
  }))
)(SliderCalculator);
