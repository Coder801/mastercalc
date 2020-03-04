import React from "react";
import { Container, makeStyles } from "@material-ui/core";

import Headline from "../../components/Headline";
import Slider from "../../components/Slider";

import variables from "../../assets/styles/variables.scss";

const useStyles = makeStyles({
  root: {},
  headline: {
    backgroundColor: variables.darkColor
  },
  slider: {
    height: 300,
    display: "block"
  }
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.headline}>
        <Container maxWidth="md">
          <Headline />
        </Container>
      </section>
      <section className={classes.slider}>
        <Container maxWidth="md">
          <Slider />
        </Container>
      </section>
    </>
  );
};

export default Home;
