import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { connect } from "react-redux";
import { Container, Grid, Typography, Box, FormGroup, FormControlLabel, makeStyles } from "@material-ui/core";

import Counter from "../Counter/Counter";
import CustomSlider from "../CustomSlider/CustomSlider";
import ListboxGroup from "../ListboxGroup/ListboxGroup";
import CustomSelect from "../CustomSelect/CustomSelect";
import CustomListbox from "../CustomListbox/CustomListbox";
import CustomRadioGroup from "../CustomRadioGroup/CustomRadioGroup";

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
    marginBottom: spacing(2),
    [breakpoints.down("sm")]: {
      marginBottom: spacing(1)
    }
  },
  listBoxContainer: {
    width: 320,
    [breakpoints.down("sm")]: {
      width: "100%"
    }
  },
  listBox: {
    display: "inline-block",
    marginRight: spacing(1),
    marginBottom: spacing(1),
    [breakpoints.down("xs")]: {
      display: "block",
      marginRight: 0
    }
  },
  radio: {
    justifyContent: "space-between"
  },
  select: {
    margin: `${spacing(2)}px 0 0`,
    maxWidth: "100%",
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
  const { label: categoryLabel, fetched: categoryFetched, ...categoryData } = category;
  const { fetched: categoryStateFetched, ...categoryStateData } = categoryState;
  const [localCategoryValue, setLocalCategoryValue] = useState(categoryLabel);

  useEffect(() => {
    categoryFetched || fetchCategory();
    categoryStateFetched || fetchCategoryState(categoryLabel);
  }, [categoryFetched, categoryStateFetched, categoryLabel, fetchCategory, fetchCategoryState]);

  const handleLocalCategory = () => {
    setLocalCategoryValue(categoryLabel);
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

  const resolveCategoryByValue = key => {
    const dictionary = {
      walls: "Стены",
      ceiling: "Потолок",
      floor: "Пол"
    };

    return dictionary[key];
  };

  return (
    <Box className={classes.options}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sm={9}>
            <Typography className={classes.title}>Параметры помещения:</Typography>
            <ListboxGroup
              innerComponent={CustomSlider}
              className={classes.listBox}
              items={[length, height, width]}
              onSave={(value, key) => changeRoomParameters(value, key)}
            />
            <ListboxGroup
              innerComponent={Counter}
              className={classes.listBox}
              items={[window, door]}
              onSave={(value, key) => changeRoomParameters(value, key)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography className={classes.title}>Что нужно отремонтировать:</Typography>
            <CustomListbox
              className={classes.listBox}
              title="Что нужно отремонтировать:"
              placeholder={resolveCategoryByValue(localCategoryValue)}
              value={resolveCategoryByValue(localCategoryValue)}
              onSave={handleLocalCategory}
              isClickAway={false}
            >
              <Box className={classes.listBoxContainer}>
                <FormGroup>
                  <CustomRadioGroup
                    name="area"
                    value={categoryLabel}
                    className={classes.radio}
                    onChange={value => handleChangeCategory(value)}
                  />
                </FormGroup>
                <FormGroup>
                  <FormControlLabel
                    labelPlacement="top"
                    label={resolveCategoryPlaceholderByValue(categoryLabel)}
                    classes={{ root: classes.select, label: classes.label }}
                    control={
                      <CustomSelect
                        data={categoryData}
                        placeholder={resolveCategoryPlaceholderByValue(categoryLabel)}
                        onChange={value => handleSelectCategory(value)}
                      />
                    }
                  />
                  <FormControlLabel
                    labelPlacement="top"
                    label="Что нужно в результате"
                    classes={{ root: classes.select, label: classes.label }}
                    control={
                      <CustomSelect
                        data={categoryStateData}
                        placeholder="Что нужно в результате"
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

TopCalculator.propTypes = {
  roomParameters: PropTypes.object,
  category: PropTypes.object,
  categoryState: PropTypes.object,
  setCategoryValue: PropTypes.func,
  setCategoryStateValue: PropTypes.func,
  changeRoomParameters: PropTypes.func,
  fetchCategory: PropTypes.func,
  fetchCategoryState: PropTypes.func
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

export default compose(connect(mapStateToProps, mapDispatchToProps))(TopCalculator);
