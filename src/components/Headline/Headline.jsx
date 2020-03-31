import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ spacing, breakpoints, palette }) => ({
  root: {
    padding: `${spacing(5)}px 0`,
    [breakpoints.down("sm")]: {
      padding: `0 0 ${spacing(3)}px`
    }
  },
  text: {
    color: palette.primary.main,
    [breakpoints.down("sm")]: {
      textAlign: "center"
    }
  },
  highlight: {
    fontSize: "1.2em",
    fontFamily: "Saira Stencil One"
  }
}));

const Headline = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h2" className={classes.text}>
        Сервис оценки ремонта <br /> и выбора материалов <span className={classes.highlight}>MasterCalc</span>
      </Typography>
    </Box>
  );
};

export default Headline;
