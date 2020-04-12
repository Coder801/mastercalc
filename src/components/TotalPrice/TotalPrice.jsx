import React from "react";
import PropTypes from "prop-types";
import { Button, Box, Typography, makeStyles } from "@material-ui/core";
import currencyFormatter from "../../helpers/currencyFormatter";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  box: {
    display: "inline-flex",
    alignItems: "center",
    [breakpoints.down("sm")]: {
      marginTop: 0,
      justifyContent: "center",
      width: "100%"
    }
  },
  info: {
    display: "flex",
    alignItems: "flex-end"
  },
  button: {
    marginRight: 16
  },
  caption: {
    marginRight: spacing(1)
  }
}));

const TotalPrice = ({ caption, price, button, buttonCaption }) => {
  const classes = useStyles();
  return (
    <Box className={classes.box} bgcolor="grey.100" p={2}>
      {button && buttonCaption && (
        <Button className={classes.button} variant="contained" color="primary">
          {buttonCaption}
        </Button>
      )}
      <Box className={classes.info}>
        <Typography variant="body1" className={classes.caption}>
          {caption}
        </Typography>
        <Typography variant="h5" color="error">
          {currencyFormatter(price)}
        </Typography>
      </Box>
    </Box>
  );
};

TotalPrice.propTypes = {
  price: PropTypes.number,
  caption: PropTypes.string,
  button: PropTypes.bool,
  buttonCaption: PropTypes.string
};

TotalPrice.defaultProps = {
  price: 0,
  caption: "Итог по смете",
  button: true,
  buttonCaption: "Скачать смету"
};

export default TotalPrice;
