import React, { useEffect } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { Container, Grid, Typography, Box, FormControlLabel } from "@material-ui/core";

import Counter from "../Counter/Counter";
import ListboxGroup from "../ListboxGroup/ListboxGroup";
import CustomSelect from "../CustomSelect/CustomSelect";
import CustomListbox from "../CustomListbox/CustomListbox";
import CustomRadioGroup from "../CustomRadioGroup/CustomRadioGroup";

import { FormGroup, makeStyles } from "@material-ui/core";

import resolveCategoryPlaceholderByValue from "../../helpers/resolveCategoryPlaceholderByValue";

import {
  changeRoomParameters,
  setCategoryValue,
  fetchCategory,
  fetchCategoryState,
  setCategoryStateValue
} from "../../actions";

const useStyles = makeStyles(({ spacing, breakpoints, palette }) => ({
  options: {
    padding: `${spacing(3)}px 0`,
    backgroundColor: "#FCF8EC",
    boxShadow: "0px 1px 0px #E3E3E3",
    [breakpoints.down("sm")]: {
      padding: `${spacing(2)}px 0`
    }
  },
  title: {
    color: palette.grey[600],
    marginBottom: spacing(2)
  },
  listBoxContainer: {
    width: 320
  },
  listBox: {
    display: "inline-block",
    marginRight: spacing(1)
  },
  radio: {
    justifyContent: "space-between"
  },
  select: {
    margin: `${spacing(2)}px 0 0`,
    alignItems: "stretch"
  },
  label: {
    color: palette.grey[600],
    marginBottom: spacing(1)
  }
}));

const TopCalculator = ({
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
  const { length, height, width, window, door } = roomParameters;

  const { label, options, value, fetched } = category;
  const { options: categoryStateOptions, value: categoryStateSelected, categoryStateFetched } = categoryState;

  useEffect(() => {
    fetched && fetchCategory();
    categoryStateFetched && fetchCategoryState(label);
  }, []);

  const handleOptionsValue = (value, key) => {
    changeRoomParameters({
      value,
      key
    });
  };

  const handleSelectCategory = value => {
    setCategoryValue(value);
  };

  const handleSelectCategoryState = value => {
    setCategoryStateValue(value);
  };

  const handleChangeCategory = value => {
    fetchCategory(value);
    fetchCategoryState(value);
  };

  return (
    <Box className={classes.options}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item sm={12} md={9}>
            <Typography className={classes.title}>Параметры помещения:</Typography>
            <ListboxGroup
              innerComponent={Counter}
              className={classes.listBox}
              onSave={handleOptionsValue}
              items={[length, height, width, window, door]}
            />
          </Grid>
          <Grid item sm={12} md={3}>
            <Typography className={classes.title}>Что нужно отремонтировать:</Typography>
            <CustomListbox
              className={classes.listBox}
              title="Что нужно отремонтировать:"
              placeholder={"Потолок"}
              value={"Потолок"}
            >
              <Box className={classes.listBoxContainer}>
                <FormGroup>
                  <CustomRadioGroup
                    name="area"
                    value={label}
                    className={classes.radio}
                    onChange={value => handleOptionsValue(value, "area")}
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    labelPlacement="top"
                    label={resolveCategoryPlaceholderByValue(label)}
                    classes={{ root: classes.select, label: classes.label }}
                    control={
                      <CustomSelect options={options} value={value} onChange={value => handleSelectCategory(value)} />
                    }
                  />
                  <FormControlLabel
                    labelPlacement="top"
                    label="Что нужно в результате"
                    classes={{ root: classes.select, label: classes.label }}
                    control={
                      <CustomSelect
                        options={categoryStateOptions}
                        value={categoryStateSelected}
                        onChange={value => handleSelectCategoryState(value)}
                      />
                    }
                  />
                </FormGroup>
              </Box>
            </CustomListbox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const mapStateToProps = ({ category, categoryState, roomParameters }) => ({
  category,
  categoryState,
  roomParameters
});

const mapDispatchToProps = dispatch => ({
  changeRoomParameters,
  setCategoryValue: setCategoryValue(dispatch),
  setCategoryStateValue: setCategoryStateValue(dispatch),
  fetchCategory: fetchCategory(dispatch),
  fetchCategoryState: fetchCategoryState(dispatch)
});

export default compose(connect(mapStateToProps, mapDispatchToProps))(TopCalculator);
