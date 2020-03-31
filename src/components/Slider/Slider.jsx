import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Typography, makeStyles } from "@material-ui/core";
import { default as ReactSlider } from "react-slick";

import sliderArrowLeftIcon from "../../assets/svg/slider-arrow-left-icon.svg";
import sliderArrowRightIcon from "../../assets/svg/slider-arrow-right-icon.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderOne from "./SlideOne/SliderOne";
import SliderSecond from "./SlideSecond/SliderSecond";
import SliderThree from "./SlideThree/SliderThree";

const slides = [
  {
    label: "Калькулятор ремонта"
  },
  {
    label: "Каталог строительных материалов"
  },
  {
    label: "Подбор материалов по количеству"
  }
];

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  root: {},
  slide: {
    padding: "30px 0"
  },
  arrow: {
    height: 76,
    width: 69,
    zIndex: 100,
    "&:before": {
      display: "none"
    }
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

const SliderArrow = ({ className, classes, onClick, icon }) => {
  return <img alt="" src={icon} className={clsx(className, classes)} onClick={onClick} />;
};

const Slider = () => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    swipeToSlide: false,
    draggable: false,
    dotsClass: classes.dots,
    nextArrow: <SliderArrow icon={sliderArrowRightIcon} classes={clsx(classes.arrow, classes.arrowRight)} />,
    prevArrow: <SliderArrow icon={sliderArrowLeftIcon} classes={clsx(classes.arrow, classes.arrowLeft)} />,
    customPaging: i => <Typography className={classes.dot}>{slides[i].label}</Typography>
  };

  return (
    <ReactSlider {...settings}>
      <div className={classes.slide}>
        <SliderOne />
      </div>
      <div className={classes.slide}>
        <SliderSecond />
      </div>
      <div className={classes.slide}>
        <SliderThree />
      </div>
    </ReactSlider>
  );
};

SliderArrow.propTypes = {
  className: PropTypes.any,
  classes: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string
};

export default Slider;
