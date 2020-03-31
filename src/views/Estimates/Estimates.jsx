import React from "react";
import { Grid } from "@material-ui/core";

import EstimateTable from "../../components/EstimateTable/EstimateTable";
import TotalPrice from "../../components/TotalPrice/TotalPrice";

const Orders = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        &nbsp;
      </Grid>
      <Grid item xs={12}>
        <EstimateTable />
        <TotalPrice />
      </Grid>
    </Grid>
  );
};

export default Orders;
