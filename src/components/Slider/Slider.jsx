import React from "react";
import PropTypes from "prop-types";
import { withProps } from "recompose";
import { compose } from "lodash/fp";
import { Typography, makeStyles } from "@material-ui/core";
import { default as ReactSlider } from "react-slick";

import sliderArrowLeftIcon from "@/assets/svg/slider-arrow-left-icon.svg";
import sliderArrowRightIcon from "@/assets/svg/slider-arrow-right-icon.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SlideFirst from "./SlideFirst/SlideFirst";
import SlideSecond from "./SlideSecond/SliderSecond";
import SlideThird from "./SlideThird/SlideThird";
import SliderArrow from "./SliderArrow/SliderArrow";

const slides = [
  {
    slider: <SlideFirst />,
    label: "Калькулятор ремонта"
  },
  {
    slider: <SlideSecond />,
    label: "Каталог строительных материалов"
  },
  {
    slider: <SlideThird />,
    label: "Подбор материалов по количеству"
  }
];

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  root: {
    "& *:focus": {
      outline: "none"
    }
  },
  slide: {
    padding: "30px 0"
  },
  arrowLeft: {
    left: -100,
    [breakpoints.down("sm")]: {
      left: -20
    }
  },
  arrowRight: {
    right: -90,
    [breakpoints.down("sm")]: {
      right: -20
    }
  },
  dots: {
    listStyle: "none",
    position: "relative",
    margin: 0,
    padding: 0,
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "flex-end",
    [breakpoints.down("md")]: {
      justifyContent: "center"
    },
    [breakpoints.down("sm")]: {
      display: "none !important"
    },

    "&:before": {
      content: '" "',
      position: "absolute",
      top: 0,
      height: "100%",
      left: "50%",
      width: "50vw",
      zIndex: 0,
      background: palette.common.white,
      [breakpoints.down("md")]: {
        display: "none"
      }
    },
    "& > li": {
      zIndex: 1,
      width: "auto",
      color: palette.grey[600]
    },
    "& > .slick-active": {
      borderBottom: `3px solid ${palette.primary.main}`,
      color: palette.primary.main
    }
  },
  dot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 210,
    height: 80,
    cursor: "pointer",
    textAlign: "center",
    background: palette.common.white,
    transition: ".3s ease",
    "&:hover": {
      backgroundColor: "#fefbf5"
    }
  }
}));

const Slider = ({ classes }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    swipeToSlide: false,
    draggable: false,
    className: classes.root,
    dotsClass: classes.dots,
    nextArrow: <SliderArrow icon={sliderArrowRightIcon} positionClasses={classes.arrowRight} />,
    prevArrow: <SliderArrow icon={sliderArrowLeftIcon} positionClasses={classes.arrowLeft} />,
    customPaging: i => <Typography className={classes.dot}>{slides[i].label}</Typography>
  };

  return (
    <ReactSlider {...settings}>
      {slides.map((item, key) => (
        <div className={classes.slide} key={key}>
          {item.slider}
        </div>
      ))}
    </ReactSlider>
  );
};

Slider.propTypes = {
  classes: PropTypes.object
};

export default compose(
  withProps(() => ({
    classes: useStyles()
  }))
)(Slider);
