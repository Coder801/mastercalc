import React, { useState } from "react";
import { Container, Grid, Tabs, Tab, Box } from "@material-ui/core";

import TopCalculator from "../../components/TopCalculator/TopCalculator";
import TabPanel from "../../components/TabPanel/TabPanel";

import Material from "../Material/Material";
import Orders from "../Orders/Orders";
import Estimates from "../Estimates/Estimates";

const Calculator = () => {
  const [tab, setTab] = useState(1);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <>
      <TopCalculator />
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
