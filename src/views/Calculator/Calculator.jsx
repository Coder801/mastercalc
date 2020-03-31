import React, { useContext } from "react";
import { withProps } from "recompose";
import { Container, Grid, Tabs, Tab, Box, FormGroup, Typography, makeStyles } from "@material-ui/core";

import { CalculatorContext } from "../../components/context";

import CustomListbox from "../../components/CustomListbox/CustomListbox";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import CustomRadioGroup from "../../components/CustomRadioGroup/CustomRadioGroup";
import TabPanel from "../../components/TabPanel/TabPanel";
import Counter from "../../components/Counter/Counter";

import Material from "../Material/Material";
import Orders from "../Orders/Orders";
import Estimates from "../Estimates/Estimates";

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

const Calculator = () => {
  const classes = useStyles();
  const parametrs = useContext(CalculatorContext);
  const [tab, setTab] = useState(1);
  const [options, setOptions] = useState(parametrs);
  const { length, height, width, window, door } = options;

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

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
    <>
      <Box className={classes.options}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item sm={12} md={9}>
              <Typography className={classes.title}>Параметры помещения:</Typography>
              <PremisesFormatListbox
                items={[length, height, width, window, door]}
                innerComponent={Counter}
                onSave={handleOptionsValue}
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
              </CustomListbox>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component="section" bgcolor="grey.100">
        <Container maxWidth="lg">
          <Grid container>
            <Tabs value={tab} onChange={handleChange} indicatorColor="primary" textColor="primary">
              <Tab label="Материалы" />
              <Tab label="Заказы 6" />
              <Tab label="Смета" />
            </Tabs>
          </Grid>
        </Container>
      </Box>
      <Box component="section">
        <Container maxWidth="lg">
          <TabPanel value={tab} index={0}>
            <Material />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Orders />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <Estimates />
          </TabPanel>
        </Container>
      </Box>
    </>
  );
};

export default Calculator;
