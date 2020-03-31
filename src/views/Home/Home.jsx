import React from "react";
import { Box, Typography, Link, Container, makeStyles } from "@material-ui/core";

import Headline from "../../components/Headline/Headline";
import Slider from "../../components/Slider";

const useStyles = makeStyles(({ breakpoints, palette, spacing }) => ({
  page: {
    backgroundColor: palette.grey[100],
    minHeight: `calc(100vh - 58px)`,
    [breakpoints.down("md")]: {
      minHeight: `calc(100vh - 48px)`
    }
  },
  slider: {
    position: "relative",
    [breakpoints.down("md")]: {
      padding: "0 100px"
    },
    [breakpoints.down("sm")]: {
      padding: "0 40px"
    }
  },
  copy: {
    position: "fixed",
    transform: "rotate(-90deg)",
    transformOrigin: "0 0 0",
    bottom: 0,
    left: spacing(2),
    [breakpoints.down("sm")]: {
      position: "static",
      transform: "rotate(0)",
      textAlign: "center",
      paddingBottom: spacing(2)
    }
  },
  policy: {
    fontSize: 14,
    lineHeight: "18px",
    color: palette.info.main,
    height: 80,
    display: "flex",
    position: "absolute",
    alignItems: "center",
    bottom: 0,
    left: spacing(3),
    [breakpoints.down("md")]: {
      position: "static",
      width: "100%",
      justifyContent: "center"
    },
    [breakpoints.down("sm")]: {
      height: "auto",
      paddingBottom: spacing(2)
    }
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.page} bgcolor="grey.100">
      <Box bgcolor="grey.800">
        <Container maxWidth="md">
          <Headline />
        </Container>
      </Box>
      <Container className={classes.slider} maxWidth="md">
        <Slider />
        <Typography className={classes.policy}>
          <Link href="#" color="inherit">
            Политика конфиденциальности
          </Link>
        </Typography>
        <Typography className={classes.copy} color="textSecondary">
          MasterCalc 2020
        </Typography>
      </Container>
    </Box>
  );
};

export default Home;
