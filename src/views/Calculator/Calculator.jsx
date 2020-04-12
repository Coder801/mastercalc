import React, { useState } from "react";
import { Container, Grid, Tabs, Tab, Box } from "@material-ui/core";

import OffersModal from "@/components/Modal/OffersModal";
import DetailsModal from "@/components/Modal/DetailsModal";
import TopCalculator from "@/components/TopCalculator/TopCalculator";
import TabPanel from "@/components/TabPanel/TabPanel";
import Empty from "@/components/Empty/Empty";

import Material from "@/views/Material/Material";
import Orders from "@/views/Orders/Orders";
import Estimates from "@/views/Estimates/Estimates";

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
              <Tab label="Не выбрано" />
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
          <TabPanel value={tab} index={3}>
            <Empty />
          </TabPanel>
        </Container>
      </Box>
      <OffersModal />
      <DetailsModal />
    </>
  );
};

export default Calculator;
