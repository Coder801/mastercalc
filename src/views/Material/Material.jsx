import React from "react";
import { Grid, Divider, Hidden } from "@material-ui/core";

import SidebarTreeView from "@/components/SidebarTreeView/SidebarTreeView";
import SidebarTreeViewMobile from "@/components/SidebarTreeView/SidebarTreeViewMobile";
import ProductList from "@/components/ProductList/ProductList";
import ProductTitle from "@/components/ProductTitle/ProductTitle";
import TotalPrice from "@/components/TotalPrice/TotalPrice";

// TODO get this list from API start
const options = [
  {
    id: "1",
    name: "Подготовка стен к покраски",
    children: [
      {
        id: "2",
        name: "Выравнивание штукатурки"
      },
      {
        id: "3",
        name: "Грунтовка"
      },
      {
        id: "4",
        name: "Финишная шпаклевкфа"
      }
    ]
  },
  {
    id: "5",
    name: "Монтаж керамической плиты",
    children: [
      {
        id: "6",
        name: "Грунтовка стен"
      },
      {
        id: "7",
        name: "Укладка плитки"
      }
    ]
  }
];
// TODO get this list from API end

const Material = () => {
  return (
    <Grid container spacing={2}>
      <Grid item container sm={2} alignItems="flex-end">
        <Divider />
      </Grid>
      <Grid item xs={12} md={10}>
        <ProductTitle />
      </Grid>
      <Grid item xs={12} md={2}>
        <Hidden only={["md", "lg", "xl"]}>
          <SidebarTreeViewMobile options={options} />
        </Hidden>
        <Hidden only={["xs", "sm"]}>
          <SidebarTreeView options={options} />
        </Hidden>
      </Grid>
      <Grid container item sm={12} md={10}>
        <ProductList />
      </Grid>
      <Grid container item sm={12} justify="flex-end">
        <TotalPrice button={false} />
      </Grid>
    </Grid>
  );
};

export default Material;
