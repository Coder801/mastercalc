import React, { useEffect } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";

import {
  changeRoomParameters,
  setCategoryValue,
  fetchCategory,
  fetchCategoryState,
  setCategoryStateValue
} from "../../actions";

import ListboxGroup from "../ListboxGroup/ListboxGroup";
import CustomSelect from "../CustomSelect/CustomSelect";
import CustomRadioGroup from "../CustomRadioGroup/CustomRadioGroup";
import CustomSlider from "../CustomSlider/CustomSlider";
import Counter from "../Counter/Counter";

import resolveCategoryPlaceholderByValue from "../../helpers/resolveCategoryPlaceholderByValue";

import { Button, FormGroup, FormControlLabel, Divider, Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => ({
  form: {
    borderRadius: 30,
    backgroundColor: palette.grey[50]
  },
  container: {
    padding: "20px 30px",
    textAlign: "center",
    [breakpoints.down("xs")]: {
      padding: "10px 20px"
    }
  },
  title: {
    marginTop: spacing(3),
    marginBottom: spacing(1.5),
    textAlign: "left",
    color: palette.grey[600],
    [breakpoints.down("xs")]: {
      marginTop: spacing(1),
      marginBottom: spacing(0.5)
    }
  },
  listBox: {
    display: "inline-block",
    margin: 0,
    marginRight: spacing(1),
    marginBottom: spacing(1),
    [breakpoints.down("xs")]: {
      marginRight: 0,
      width: "100%"
    }
  },
  select: {
    alignItems: "flex-start",
    margin: 0,
    marginBottom: spacing(1),
    [breakpoints.down("xs")]: {
      alignItems: "stretch"
    }
  },
  selectLabel: {
    display: "none",
    color: palette.error.main
  },
  divider: {
    marginRight: spacing(1),
    marginBottom: spacing(1)
  },
  radioGroup: {
    marginBottom: spacing(2),
    justifyContent: "space-between",
    [breakpoints.down("xs")]: {
      marginBottom: spacing(1)
    }
  }
}));

const SliderCalculator = ({
  roomParameters,
  category,
  categoryState,
  setCategoryValue,
  setCategoryStateValue,
  changeRoomParameters,
  fetchCategory,
  fetchCategoryState
}) => {
  const classes = useStyles();

  // TODO: Refactor this part Start
  const { length, height, width, window, door } = roomParameters;
  const { label: categoryLabel, fetched: categoryFetched, ...categoryData } = category;
  const { fetched: categoryStateFetched, ...categoryStateData } = categoryState;
  // TODO: Refactor this part End

  useEffect(() => {
    categoryFetched || fetchCategory();
    categoryStateFetched || fetchCategoryState(categoryLabel);
  }, []);

  const handleChangeCategory = value => {
    fetchCategory(value);
    fetchCategoryState(value);
  };

  const handleCalculate = () => {
    console.log(categoryData.value, categoryStateData.value);
  };

  return (
    <Box className={classes.form}>
      <Box className={classes.container}>
        <Typography variant="body1" className={classes.title}>
          Параметры помещения:
        </Typography>
        <FormGroup row>
          <ListboxGroup
            className={classes.listBox}
            items={[length, height, width]}
            innerComponent={CustomSlider}
            onSave={(value, key) => changeRoomParameters(value, key)}
          />
          <Divider className={classes.divider} orientation="vertical" flexItem />
          <ListboxGroup
            className={classes.listBox}
            items={[window, door]}
            innerComponent={Counter}
            onSave={(value, key) => changeRoomParameters(value, key)}
          />
        </FormGroup>
        <Typography variant="body1" className={classes.title}>
          Что нужно отремонтировать:
        </Typography>
        <FormGroup className={classes.radioGroup}>
          <CustomRadioGroup name="area" value={categoryLabel} onChange={value => handleChangeCategory(value)} />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            labelPlacement="bottom"
            label="Выбирите состояние потолка"
            classes={{
              root: classes.select,
              label: classes.selectLabel
            }}
            control={
              <CustomSelect
                data={categoryData}
                placeholder={resolveCategoryPlaceholderByValue(categoryLabel)}
                onChange={value => setCategoryValue(value)}
              />
            }
          />
          <FormControlLabel
            labelPlacement="bottom"
            label="Выбирите желаемый результат"
            classes={{
              root: classes.select,
              label: classes.selectLabel
            }}
            control={
              <CustomSelect
                data={categoryStateData}
                placeholder="Что нужно в результате"
                onChange={value => setCategoryStateValue(value)}
              />
            }
          />
        </FormGroup>
      </Box>
      <Divider />
      <Box className={classes.container} row>
        <Button variant="contained" color="primary" onClick={handleCalculate}>
          Расчитать
        </Button>
      </Box>
    </Box>
  );
};

const mapStateToProps = ({ category, categoryState, roomParameters }) => ({
  category,
  categoryState,
  roomParameters
});

const mapDispatchToProps = dispatch => ({
  changeRoomParameters: changeRoomParameters(dispatch),
  setCategoryValue: setCategoryValue(dispatch),
  setCategoryStateValue: setCategoryStateValue(dispatch),
  fetchCategory: fetchCategory(dispatch),
  fetchCategoryState: fetchCategoryState(dispatch)
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(SliderCalculator);
