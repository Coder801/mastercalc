import React from "react";
import { Grid, Divider, Hidden } from "@material-ui/core";

import SidebarTreeView from "../../components/SidebarTreeView/SidebarTreeView";
import ProductList from "../../components/ProductList/ProductList";
import ProductTitle from "../../components/ProductTitle/ProductTitle";
import TotalPrice from "../../components/TotalPrice/TotalPrice";

const Material = () => {
  return (
    <Grid container spacing={2}>
      <Grid item container sm={2} md={2} lg={2} alignItems="flex-end">
        <Divider />
      </Grid>
      <Grid item xs={12} md={10} lg={10}>
        <ProductTitle />
      </Grid>
      <Grid item sm={false} md={2} lg={2}>
        <Hidden only={["xs", "sm"]}>
          <SidebarTreeView />
        </Hidden>
      </Grid>
      <Grid container item sm={12} md={10} lg={10}>
        <ProductList />
        <TotalPrice />
      </Grid>
    </Grid>
  );
};

export default Material;
