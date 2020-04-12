import React from "react";
import { Grid } from "@material-ui/core";

import EstimateTable from "@/components/EstimateTable/EstimateTable";
import TotalPrice from "@/components/TotalPrice/TotalPrice";

const Orders = () => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      &nbsp;
    </Grid>
    <Grid item xs={12}>
      <EstimateTable />
    </Grid>
    <Grid container item xs={12} justify="flex-end">
      <TotalPrice />
    </Grid>
  </Grid>
);

export default Orders;
