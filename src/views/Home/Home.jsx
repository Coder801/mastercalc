import React from "react";
import PropTypes from "prop-types";
import { withProps } from "recompose";
import { compose } from "lodash/fp";
import { Box, Container, makeStyles } from "@material-ui/core";

import Headline from "@/components/Headline/Headline";
import Slider from "@/components/Slider/Slider";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import Copy from "@/components/Copy/Copy";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  root: {
    backgroundColor: palette.grey[100],
    minHeight: `calc(100vh - 58px)`,
    [breakpoints.down("md")]: {
      minHeight: `calc(100vh - 48px)`
    }
  },
  headline: {
    backgroundColor: palette.grey[800]
  },
  slider: {
    position: "relative",
    [breakpoints.down("md")]: {
      padding: "0 100px"
    },
    [breakpoints.down("sm")]: {
      padding: "0 40px"
    }
  }
}));

const Home = ({ classes }) => (
  <Box className={classes.root}>
    <Box className={classes.headline}>
      <Container maxWidth="md">
        <Headline />
      </Container>
    </Box>
    <Container className={classes.slider} maxWidth="md">
      <Slider />
      <PrivacyPolicy />
      <Copy />
    </Container>
  </Box>
);

Home.propTypes = {
  classes: PropTypes.object
};

export default compose(
  withProps(() => ({
    classes: useStyles()
  }))
)(Home);
