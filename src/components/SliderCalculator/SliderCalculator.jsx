import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";

import { withMastercalcService } from "../hoc-helpers";
import { changeRoomParameters } from "../../actions";

import ListboxGroup from "../ListboxGroup/ListboxGroup";
import CustomSelect from "../CustomSelect/CustomSelect";
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

const SliderCalculator = ({ roomParameters, changeRoomParameters }) => {
  const classes = useStyles();
  const { length, height, width, window, door, area, state, result } = roomParameters;

  const handleOptionsValue = (value, key) => {
    changeRoomParameters({
      value,
      key
    });
  };

  return (
    <div className={classes.form}>
      <FormLabel className={classes.label}>Параметры помещения:</FormLabel>
      <FormGroup className={classes.group} row>
        <ListboxGroup
          className={classes.listBox}
          items={[length, height, width]}
          innerComponent={CustomSlider}
          onSave={handleOptionsValue}
        />
        <Divider className={classes.divider} orientation="vertical" flexItem />
        <ListboxGroup
          className={classes.listBox}
          items={[window, door]}
          innerComponent={Counter}
          onSave={handleOptionsValue}
        />
      </FormGroup>
      <FormLabel className={classes.label}>Что нужно отремонтировать:</FormLabel>
      <FormGroup className={classes.radioGroup}>
        <CustomRadioGroup name="area" value={area.value} onChange={value => handleOptionsValue(value, "area")} />
      </FormGroup>
      <FormGroup className={classes.group} row>
        <CustomSelect
          options={state.options}
          title={state.title}
          value={state.value}
          className={classes.select}
          onChange={value => handleOptionsValue(value, "state")}
        />
        <CustomSelect
          options={result.options}
          title={result.title}
          value={result.value}
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

const mapStateToProps = ({ roomParameters }) => ({
  roomParameters
});

const mapDispatchToProps = {
  changeRoomParameters
};

export default compose(
  withMastercalcService(swapiService => ({
    getData: swapiService.getTransitionsCategory
  })),
  connect(mapStateToProps, mapDispatchToProps)
)(SliderCalculator);
