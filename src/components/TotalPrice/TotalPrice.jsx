import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints }) => ({
  box: {
    display: "flex",
    alignItems: "center",
    [breakpoints.down("sm")]: {
      marginTop: 0,
      justifyContent: "center",
      width: "100%"
    }
  },
  button: {
    marginRight: 16
  }
}));

const TotalPrice = () => {
  const classes = useStyles();
  return (
    <Grid container justify="flex-end">
      <Box className={classes.box} bgcolor="grey.100" p={2} mt={2}>
        <Button className={classes.button} variant="contained" color="primary">
          Скачать смету
        </Button>
        <Typography variant="body1">Итого по смете:&nbsp;</Typography>
        <Typography variant="h5" color="error">
          12.000
        </Typography>
      </Box>
    </Grid>
  );
};

TotalPrice.propTypes = {
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onSave: PropTypes.func
};

export default TotalPrice;
