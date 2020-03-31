import React, { useState } from "react";
import { Container, Grid, Tabs, Tab, Box, Typography, makeStyles } from "@material-ui/core";

import CustomListbox from "../../components/CustomListbox/CustomListbox";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import TabPanel from "../../components/TabPanel/TabPanel";

import Material from "../Material/Material";
import Orders from "../Orders/Orders";

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  options: {
    padding: `${spacing(3)}px 0`,
    backgroundColor: "#FCF8EC",
    boxShadow: "0px 1px 0px #E3E3E3",
    [breakpoints.down("sm")]: {
      padding: spacing(2)
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

const Catalog = () => {
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const [state, setState] = useState({
    length: 5000,
    width: 3000,
    height: 2700,
    door: 1,
    window: 3,
    area: "",
    state: "",
    result: ""
  });

  const handleState = (value, key) => {
    setState({ ...state, [key]: value });
  };

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <>
      <Box className={classes.options}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item sm={12} sm={12} md={9}>
              <Typography className={classes.title}>Параметры помещения:</Typography>
              <CustomListbox
                className={classes.listBox}
                placeholder={"Длинна: {value} см"}
                title="Длинна:"
                data={[state.length, 0, 5000]}
                onChange={event => handleState(event, "length")}
              />
              <CustomListbox
                className={classes.listBox}
                placeholder={"Высота: {value} см"}
                title="Высота:"
                data={[state.width, 0, 5000]}
                onChange={event => handleState(event, "width")}
              />
              <CustomListbox
                className={classes.listBox}
                placeholder={"Ширина: {value} см"}
                title="Ширина:"
                data={[state.height, 0, 5000]}
                onChange={event => handleState(event, "height")}
              />
              <CustomListbox
                className={classes.listBox}
                placeholder={"Окна: {value}"}
                title="Колличество окон:"
                data={[state.window, 0, 20]}
                onChange={event => handleState(event, "window")}
                inputType="counter"
              />
              <CustomListbox
                className={classes.listBox}
                placeholder={"Двери: {value}"}
                title="Колличество дверей:"
                value={state.door}
                data={[state.door, 0, 20]}
                onChange={event => handleState(event, "door")}
                inputType="counter"
              />
            </Grid>
            <Grid item sm={12} md={3}>
              <Typography className={classes.title}>Что нужно отремонтировать:</Typography>
              {/* <CustomSelect
                title="Потолок"
                options={[
                  {
                    value: 1,
                    label: "Хорошее"
                  },
                  {
                    value: 1,
                    label: "Плохое"
                  }
                ]}
                value={state.result}
                className={classes.select}
                onChange={value => handleState(value, "result")}
              /> */}
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
        </Container>
      </Box>
    </>
  );
};

export default Catalog;
