import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core";
import { default as ReactSlider } from "react-slick";

import variables from "../../assets/styles/variables.scss";

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

const useStyles = makeStyles({
  root: {},
  slide: {
    padding: "30px 0"
  },
  arrow: {
    height: 76,
    width: 69,
    "&:before": {
      display: "none"
    }
  },
  arrowLeft: {
    left: -100
  },
  arrowRight: {
    right: -90
  },
  dots: {
    listStyle: "none",
    position: "relative",
    margin: 0,
    padding: 0,
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "flex-end",

    "&:before": {
      content: '" "',
      position: "absolute",
      top: 0,
      height: "100%",
      left: "50%",
      width: "50vw",
      zIndex: -1,
      background: variables.whiteColor
    },
    "& > li": {
      width: "auto",
      color: variables.darkGrayColor
    },
    "& > .slick-active": {
      borderBottom: `3px solid ${variables.primaryColor}`,
      color: variables.primaryColor
    }
  },
  dot: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 229,
    height: 88,
    cursor: "pointer",
    textAlign: "center",
    background: variables.whiteColor
  }
});

const SliderArrow = ({ className, classes, onClick, icon }) => {
  return <img alt="" src={icon} className={clsx(className, classes)} onClick={onClick} />;
};

const Slider = () => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: classes.dots,
    nextArrow: <SliderArrow icon={sliderArrowRightIcon} classes={clsx(classes.arrow, classes.arrowRight)} />,
    prevArrow: <SliderArrow icon={sliderArrowLeftIcon} classes={clsx(classes.arrow, classes.arrowLeft)} />,
    customPaging: i => <div className={classes.dot}>{slides[i].label}</div>
  };

  return (
    <ReactSlider {...settings}>
      <div className={classes.slide}>
        <SliderOne />
      </div>
      <div className={classes.slide}>
        <SliderThree />
      </div>
      <div className={classes.slide}>
        <SliderSecond />
      </div>
    </ReactSlider>
  );
};

SliderArrow.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string
};

export default Slider;
