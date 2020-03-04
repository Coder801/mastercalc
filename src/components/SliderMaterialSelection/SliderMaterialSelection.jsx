import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import CustomButton from "../CustomButton/CustomButton";
import CustomSelect from "../CustomSelect/CustomSelect";

import { FormGroup, FormControlLabel, Divider } from "@material-ui/core";

import variables from "../../assets/styles/variables.scss";

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
    padding: "0 20px 0 20px",
    marginBottom: 25
  },
  footer: {
    padding: "20px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const Label = ({ text }) => <span>{text}</span>;

const SliderMaterialSelection = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    material: " ",
    count: 50
  });

  const handleState = (value, key) => setState({ ...state, [key]: value });

  return (
    <div className={classes.form}>
      <FormGroup className={classes.group} row>
        <FormControlLabel
          labelPlacement="start"
          label={<Label text="Материал: " />}
          control={
            <CustomSelect
              className={clsx(classes)}
              value={state.material}
              data={{
                name: "material",
                label: "Выбирите материал",
                options: ["Дерево", "Металл"]
              }}
              arrow
              onChange={value => handleState(value, "material")}
            />
          }
        />
        <FormControlLabel
          labelPlacement="start"
          label={<Label text="Количество: " />}
          control={
            <CustomSelect
              className={clsx(classes)}
              value={state.count}
              data={{
                name: "count",
                label: "Литров",
                options: [10, 20, 30, 40, 50]
              }}
              arrow
              onChange={value => handleState(value, "count")}
            />
          }
        />
      </FormGroup>
      <Divider />
      <FormGroup className={classes.footer} row>
        <CustomButton>Расчитать</CustomButton>
      </FormGroup>
    </div>
  );
};

export default SliderMaterialSelection;
