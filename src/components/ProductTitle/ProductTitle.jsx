import React, { useState } from "react";
import { Grid, Button, ListSubheader, Typography, Divider, Hidden, makeStyles } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import CustomSelect from "../../components/CustomSelect/CustomSelect";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    alignItems: "center",
    paddingTop: spacing(2)
  },
  title: {
    [breakpoints.down("md")]: {
      fontSize: 18,
      justifyContent: "flex-start",
      alignItems: "center"
    },
    [breakpoints.down("sm")]: {
      order: -1,
      justifyContent: "center",
      paddingBottom: spacing(1)
    }
  },
  filter: {
    // margin: spacing(2),
    minWidth: 120
  },
  divider: {
    marginTop: spacing(1)
  }
}));

const ProductTitle = ({ label }) => {
  const classes = useStyles();
  const [filter, setFilter] = useState("");

  const handleFilter = ({ target }) => {
    setFilter(target.value);
  };

  return (
    <Grid container className={classes.root}>
      <Hidden only={["md", "lg"]}>
        <Grid item container xs={6} sm={6} md={3}>
          <CustomSelect
            options={[
              {
                value: null,
                label: "Подготовка стен к покраски",
                component: <ListSubheader />
              },
              {
                value: 1,
                label: "Выравнивание штукатурки"
              },
              {
                value: 2,
                label: "Грунтовка"
              },
              {
                value: 3,
                label: "Финишная шпаклевкфа"
              },
              {
                value: null,
                label: "Монтаж керамической плиты",
                component: <ListSubheader />
              },
              {
                value: 4,
                label: "Грунтовка стен"
              },
              {
                value: 5,
                label: "Укладка плитки"
              }
            ]}
            value={filter}
            onChange={handleFilter}
            displayEmpty
          />
        </Grid>
      </Hidden>
      <Grid item container xs={12} sm={12} md={9} className={classes.title}>
        <Typography variant="h4" color="textSecondary">
          Выравнивание штукатурки
        </Typography>
      </Grid>
      <Grid item container xs={6} sm={6} md={3} justify="flex-end">
        <Button startIcon={<ArrowDownwardIcon />}>Цена в грн</Button>
      </Grid>
      <Grid item container className={classes.divider} xs={12}>
        <Divider />
      </Grid>
    </Grid>
  );
};

export default ProductTitle;
