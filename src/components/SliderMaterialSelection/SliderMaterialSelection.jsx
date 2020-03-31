import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, FormGroup, FormControlLabel, Divider, makeStyles } from "@material-ui/core";

import CustomSelect from "../CustomSelect/CustomSelect";

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

const SliderMaterialSelection = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    material: "",
    count: ""
  });

  const handleState = (value, key) => setState({ ...state, [key]: value });

  return (
    <div className={classes.form}>
      <FormGroup className={classes.group} row>
        <FormControlLabel
          labelPlacement="start"
          className={classes.control}
          label={<Label text="Материал: " className={classes.label} />}
          control={
            <CustomSelect
              className={classes.select}
              value={state.material}
              title="Выбирите материал"
              options={[
                {
                  value: 1,
                  label: 10
                },
                {
                  value: 2,
                  label: 20
                }
              ]}
              onChange={value => handleState(value, "material")}
            />
          }
        />
        <FormControlLabel
          labelPlacement="start"
          className={classes.control}
          label={<Label text="Количество: " className={classes.label} />}
          control={
            <CustomSelect
              className={classes.select}
              value={state.count}
              title="Потолок"
              options={[
                {
                  value: 1,
                  label: 10
                },
                {
                  value: 2,
                  label: 20
                }
              ]}
              onChange={value => handleState(value, "count")}
            />
          }
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

Label.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.any
};

export default SliderMaterialSelection;
