import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { Container, Grid, Typography, Box } from "@material-ui/core";

import { withMastercalcService } from "../hoc-helpers";
import { changeRoomParameters } from "../../actions";

import Counter from "../Counter/Counter";
import ListboxGroup from "../ListboxGroup/ListboxGroup";
import CustomSelect from "../CustomSelect/CustomSelect";
import CustomListbox from "../CustomListbox/CustomListbox";
import CustomRadioGroup from "../CustomRadioGroup/CustomRadioGroup";

import { FormGroup, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  options: {
    padding: `${spacing(3)}px 0`,
    backgroundColor: "#FCF8EC",
    boxShadow: "0px 1px 0px #E3E3E3",
    [breakpoints.down("sm")]: {
      padding: `${spacing(2)}px 0`
    }
  },
  title: {
    marginBottom: 10
  },
  listBox: {
    display: "inline-block",
    margin: "0 10px 10px 0"
  }
}));

const TopCalculator = ({ roomParameters, changeRoomParameters }) => {
  const classes = useStyles();
  const { length, height, width, window, door, area, state, result } = roomParameters;

  const handleOptionsValue = (value, key) => {
    changeRoomParameters({
      value,
      key
    });
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
              <FormGroup className={classes.radioGroup}>
                <CustomRadioGroup
                  name="area"
                  value={area.value}
                  onChange={value => handleOptionsValue(value, "area")}
                />
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
            </CustomListbox>
          </Grid>
        </Grid>
      </Container>
    </Box>
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
)(TopCalculator);
