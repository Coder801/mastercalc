import React, { useState } from "react";
import PropTypes from "prop-types";
import { withProps } from "recompose";
import { compose } from "lodash/fp";
import { Button, FormGroup, FormControlLabel, Divider, makeStyles } from "@material-ui/core";

import CustomSelect from "../CustomSelect/CustomSelect";

// TODO: Mock data start
const material = {
  name: "material",
  label: "Материал: ",
  value: "",
  placeholder: "Выбирите материал",
  options: [
    {
      value: 1,
      label: "Дерево"
    },
    {
      value: 2,
      label: "Металл"
    }
  ]
};

const count = {
  name: "count",
  label: "Количество: ",
  value: "",
  placeholder: "50 литров",
  options: [
    {
      value: 1,
      label: "10 литров"
    },
    {
      value: 2,
      label: "20 литров"
    },
    {
      value: 3,
      label: "30 литров"
    },
    {
      value: 4,
      label: "40 литров"
    },
    {
      value: 5,
      label: "50 литров"
    }
  ]
};
// TODO: Mock data end

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  form: {
    borderRadius: 30,
    paddingTop: 40,
    backgroundColor: palette.grey[50],
    [breakpoints.down("sm")]: {
      paddingTop: 20
    }
  },
  control: {
    marginBottom: 15,
    [breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
      alignItems: "flex-start",
      width: "100%",
      marginRight: 0,
      marginLeft: 0
    }
  },
  label: {
    color: palette.grey[600],
    fontSize: 14,
    display: "block",
    width: 100,
    [breakpoints.down("sm")]: {
      marginBottom: 5
    }
  },
  group: {
    padding: "0 15px 0 15px",
    marginBottom: 25,
    [breakpoints.down("sm")]: {
      marginBottom: 10
    }
  },
  footer: {
    padding: "20px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [breakpoints.down("sm")]: {
      padding: "10px 20px"
    }
  },
  select: {
    padding: 0,
    [breakpoints.down("sm")]: {
      width: "100%"
    }
  }
}));

const Label = ({ text, className }) => <span className={className}>{text}</span>;

const SliderMaterialSelection = ({ options, classes }) => {
  const [state, setState] = useState(options);

  const handleState = (value, key) =>
    setState(
      state.map(item => {
        console.log(item, value, key);

        if (item.name === key) {
          item.value = value;
        }
        return item;
      })
    );

  return (
    <div className={classes.form}>
      <FormGroup className={classes.group} row>
        {options.map(({ name, label, value, placeholder, options }, key) => (
          <FormControlLabel
            labelPlacement="start"
            className={classes.control}
            label={<Label text={label} className={classes.label} />}
            key={key}
            control={
              <CustomSelect
                className={classes.select}
                placeholder={placeholder}
                data={{
                  value: value,
                  options: options
                }}
                onChange={value => handleState(value, name)}
              />
            }
          />
        ))}
        s
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

SliderMaterialSelection.propTypes = {
  classes: PropTypes.object,
  options: PropTypes.array
};

SliderMaterialSelection.defaultProps = {
  options: [material, count]
};

export default compose(
  withProps(() => ({
    classes: useStyles()
  }))
)(SliderMaterialSelection);
