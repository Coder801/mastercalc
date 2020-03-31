import React from "react";
import clsx from "clsx";
import { makeStyles, Divider, Button, Typography, Grid } from "@material-ui/core";

import Supplier from "../Supplier/Supplier";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  media: {
    alignItems: "center",
    justifyContent: "center",
    "& > img": {
      maxWidth: "100%"
    }
  },
  content: {
    paddingBottom: 21,
    [breakpoints.down("xs")]: {
      justifyContent: "center",
      "& > *": {
        textAlign: "center"
      }
    }
  },
  supplier: {
    margin: spacing(1)
  },
  divider: {
    marginTop: spacing(2),
    marginBottom: spacing(2)
  },
  info: {
    alignSelf: "flex-end"
  },
  price: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    [breakpoints.down("sm")]: {
      paddingBottom: 0,
      alignItems: "center",
      justifyContent: "flex-start",
      marginLeft: "25%",
      "& > *": {
        fontSize: 20
      }
    },
    [breakpoints.down("md")]: {
      marginLeft: 0
    }
  },
  order: {
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: spacing(2),
    [breakpoints.down("md")]: {
      paddingBottom: 0
    }
  },
  actions: {
    alignItems: "center",
    justifyContent: "flex-start",
    [breakpoints.down("xs")]: {
      justifyContent: "center"
    },
    "& > *": {
      marginRight: spacing(1),
      [breakpoints.down("xs")]: {
        marginBottom: spacing(0.5),
        marginTop: spacing(0.5)
      }
    }
  }
}));

const ProductItem = ({ img, title, text, price, provider }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid container item className={classes.media} xs={12} sm={3} md={2}>
        <img src={img} alt="" />
      </Grid>
      <Grid container item xs={12} sm={9} md={8}>
        <Grid container item xs={12} className={classes.content}>
          <Typography variant="subtitle2">Грунтовка глубокого проникновения Dufa Grund 10л</Typography>
          <Typography variant="body1">
            Вид грунтовки: акриловая • Назначение: для внутренних работ • Применение: по минеральным ...
          </Typography>
        </Grid>
        <Grid container item xs={12} className={classes.actions}>
          <Button variant="outlined">Побробнее</Button>
          <Button variant="outlined">Другие предложения 5</Button>
          <Supplier className={classes.supplier} image={provider} />
        </Grid>
      </Grid>
      <Grid container item xs={12} sm={12} md={2} className={classes.info}>
        <Grid container item xs={6} sm={6} md={12} className={clsx(classes.price, classes.content)}>
          <Typography variant="h5" color="error">
            12.000
          </Typography>
        </Grid>
        <Grid container item xs={6} sm={6} md={12} className={classes.order}>
          <Button variant="contained" color="primary">
            Заказать
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Divider className={classes.divider} />
      </Grid>
    </Grid>
  );
};

export default ProductItem;
