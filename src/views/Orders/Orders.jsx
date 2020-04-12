import React from "react";
import { Grid } from "@material-ui/core";

import OrderTable from "../../components/OrderTable/OrderTable";
import TotalPrice from "../../components/TotalPrice/TotalPrice";

const Orders = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        &nbsp;
      </Grid>
      <Grid item xs={12}>
        <OrderTable />
      </Grid>
      <Grid container item xs={12} justify="flex-end">
        <TotalPrice />
      </Grid>
    </Grid>
  );
};

export default Orders;
